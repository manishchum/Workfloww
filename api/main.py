import html
import logging
import os
from pathlib import Path
from typing import Optional

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
import resend

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("workfloww-backend")

# Load environment variables
# Check local api/.env or root .env
api_env = Path(__file__).parent / ".env"
root_env = Path(__file__).parent.parent / ".env"
if api_env.exists():
    load_dotenv(dotenv_path=api_env)
elif root_env.exists():
    load_dotenv(dotenv_path=root_env)

app = FastAPI(
    title="Workfloww API",
    description="Enterprise-grade backend for Workfloww website",
    version="1.0.0",
)

# Allowed CORS origins
origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:3000",
    "http://0.0.0.0:3000",
    "https://workfloww-delta.vercel.app",
    "https://www.workfloww.ai",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Resend
resend_key = os.getenv("RESEND_API_KEY")
if resend_key:
    resend.api_key = resend_key
else:
    logger.warning("RESEND_API_KEY environment variable is not set!")

Email_From = os.getenv("Email_From")
Email_To = os.getenv("Email_To")

# Enterprise Request Schema with Pydantic validations & constraints
class LeadRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, description="Full name of the contact")
    email: EmailStr = Field(..., description="Valid work email address")
    company: str = Field("", max_length=100, description="Organization name")
    message: str = Field("", max_length=3000, description="Detailed message")
    phone: str = Field("", max_length=30, description="Phone number")
    source: str = Field("", max_length=50, description="Form submission source identifier")
    # Anti-spam Honeypot field (hidden from real users in frontend)
    website_trap: str = Field("", max_length=50, description="Anti-spam honeypot trap")

@app.post("/send-email")
@app.post("/api/send-email")
async def send_email(data: LeadRequest):
    # 1. Anti-spam honeypot validation
    if data.website_trap:
        logger.warning(f"Spam detected: Honeypot field filled. Source: {data.source}, Name: {data.name}")
        # Silently discard the request by returning success to the bot
        return {"success": True, "message": "Submission received successfully."}

    # 2. Key configuration check
    if not resend.api_key:
        logger.error("Resend API key is not configured on the server.")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Server configuration error. Contact administrator."
        )

    try:
        # Determine subject based on source
        if data.source == "builder-labs-signup":
            subject = "New Builder Labs Signup"
        elif data.source == "linkedin-post-popup":
            subject = "New LinkedIn Post Lead"
        elif data.source == "contact-form":
            subject = "New Contact Form Submission"
        else:
            subject = "New Website Lead"

        # 3. HTML Sanitization to prevent HTML Injection
        safe_name = html.escape(data.name)
        safe_email = html.escape(data.email)
        safe_phone = html.escape(data.phone)
        safe_company = html.escape(data.company)
        safe_message = html.escape(data.message).replace("\n", "<br>")

        # Construct safe HTML body
        html_content = f"""
        <h2>{subject}</h2>
        <p><strong>Name:</strong> {safe_name}</p>
        <p><strong>Email:</strong> {safe_email}</p>
        """
        if safe_phone:
            html_content += f"<p><strong>Phone:</strong> {safe_phone}</p>"
        if safe_company:
            html_content += f"<p><strong>Company:</strong> {safe_company}</p>"
        if safe_message:
            html_content += f"<p><strong>Message:</strong></p><p style='white-space: pre-wrap; padding: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px;'>{safe_message}</p>"

        # Send email
        params = {
            "from": Email_From,
            "to": Email_To,
            "subject": subject,
            "html": html_content,
        }
        
        response = resend.Emails.send(params)
        logger.info(f"Email sent successfully for {safe_name} ({safe_email}).")

        return {"success": True, "response": response}

    except Exception as e:
        # Log the full exception securely on the server side
        logger.error(f"Error sending email for {data.email}: {str(e)}", exc_info=True)
        # Return a safe, generic error message to the client
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to send the lead email due to a backend system error. Please try again later."
        )


# ------------------ Snapshot API (versioned) ------------------
from fastapi import Request, Response
from fastapi.responses import JSONResponse, HTMLResponse
import time

# Simple in-memory rate limiter: {ip: (count, window_start)}
_RATE_LIMIT_STATE: dict = {}
RATE_LIMIT_MAX = int(os.getenv("SNAPSHOT_RATE_LIMIT", "60"))  # requests
RATE_LIMIT_WINDOW = int(os.getenv("SNAPSHOT_RATE_WINDOW", "60"))  # seconds


def _get_client_ip(request: Request) -> str:
    xff = request.headers.get("x-forwarded-for")
    if xff:
        # x-forwarded-for may contain a list of IPs
        return xff.split(",")[0].strip()
    if request.client:
        return request.client.host
    return "unknown"


def _check_rate_limit(request: Request):
    ip = _get_client_ip(request)
    now = int(time.time())
    state = _RATE_LIMIT_STATE.get(ip)
    if state:
        count, window_start = state
        if now - window_start < RATE_LIMIT_WINDOW:
            if count >= RATE_LIMIT_MAX:
                return False, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW - (now - window_start)
            _RATE_LIMIT_STATE[ip] = (count + 1, window_start)
        else:
            _RATE_LIMIT_STATE[ip] = (1, now)
    else:
        _RATE_LIMIT_STATE[ip] = (1, now)
    return True, RATE_LIMIT_MAX, 0


# Centralized snapshot content (single source of truth for API + frontend syncing later)
SNAPSHOTS = {
    "home": {
        "title": "Lucid — Operating layer for frontline execution",
        "description": "The operating layer between what your organization decides and what actually happens — at the counter, on the floor, in the field, on the line.",
        "og": {
            "title": "Lucid — Execution OS for your frontline",
            "description": "Fast. AI-powered. Deployed everywhere your frontline is.",
            "image": "https://www.workfloww.ai/images/og-home.png",
            "url": "https://www.workfloww.ai/",
        },
        "content": {
            "hero": {
                "subtitle": "WHAT IS LUCID?",
                "description": "The operating layer between what your organization decides and what actually happens — at the counter, on the floor, in the field, on the line.",
            },
            "capabilities": {
                "title": "Six Things That Move Your Numbers.",
                "items": [
                    {"title": "Convert & Deploy", "desc": "Convert SOPs and deploy via WhatsApp, video, and audio."},
                    {"title": "Execution Visibility", "desc": "Know what your frontline knows — by role, by location, by shift."},
                    {"title": "Compliance at Scale", "desc": "SOP audits, photo capture, corrective actions."},
                ],
            },
        },
    },
    "about": {
        "title": "About Lucid",
        "description": "Lucid helps organizations close the gap between strategy and frontline execution.",
        "og": {
            "title": "About Lucid — Workfloww",
            "description": "Learn about our mission to improve frontline execution.",
            "image": "https://www.workfloww.ai/images/og-about.png",
            "url": "https://www.workfloww.ai/about",
        },
        "content": {"summary": "Lucid is built to make your organisation's strategy reach the frontline."},
    },
    "contact": {
        "title": "Contact Us",
        "description": "Get in touch with the Lucid team for demos and trials.",
        "og": {
            "title": "Contact — Lucid",
            "description": "Contact the Lucid sales and support team.",
            "image": "https://www.workfloww.ai/images/og-contact.png",
            "url": "https://www.workfloww.ai/contact",
        },
        "content": {"summary": "Reach out for demos, partnerships, or support."},
    },
}


def _build_jsonld(page_key: str):
    base = SNAPSHOTS.get(page_key)
    if not base:
        return None
    org = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": base.get("title"),
        "url": base.get("og", {}).get("url"),
    }
    webpage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": base.get("title"),
        "description": base.get("description"),
        "url": base.get("og", {}).get("url"),
    }
    return {"organization": org, "webpage": webpage}


@app.get("/api/v1/snapshot", tags=["snapshot"])
async def snapshot_index(request: Request):
    ok, limit, _ = _check_rate_limit(request)
    if not ok:
        raise HTTPException(status_code=429, detail="Rate limit exceeded")
    # Return a list of available pages and brief metadata
    pages = {k: {"title": v["title"], "description": v["description"], "url": v["og"]["url"]} for k, v in SNAPSHOTS.items()}
    resp = JSONResponse({"version": "1", "pages": pages})
    resp.headers["Cache-Control"] = "public, max-age=300"
    return resp


@app.get("/api/v1/snapshot/{page}", tags=["snapshot"])
async def snapshot_page(request: Request, page: str, response: Response):
    ok, limit, retry_after = _check_rate_limit(request)
    if not ok:
        raise HTTPException(status_code=429, detail=f"Rate limit exceeded. Try again in {retry_after} seconds")
    page_key = page.lower()
    data = SNAPSHOTS.get(page_key)
    if not data:
        raise HTTPException(status_code=404, detail="Snapshot not found")
    payload = {
        "version": "1",
        "page": page_key,
        "title": data.get("title"),
        "description": data.get("description"),
        "og": data.get("og"),
        "content": data.get("content"),
        "jsonld": _build_jsonld(page_key),
    }
    resp = JSONResponse(payload)
    resp.headers["Cache-Control"] = "public, max-age=300"
    return resp


@app.get("/api/v1/snapshot/{page}.html", tags=["snapshot"])
async def snapshot_page_html(request: Request, page: str):
    ok, limit, retry_after = _check_rate_limit(request)
    if not ok:
        raise HTTPException(status_code=429, detail=f"Rate limit exceeded. Try again in {retry_after} seconds")
    page_key = page.lower()
    data = SNAPSHOTS.get(page_key)
    if not data:
        raise HTTPException(status_code=404, detail="Snapshot not found")

    # Build a minimal HTML document with OG/meta tags and preformatted content
    og = data.get("og", {})
    jsonld = _build_jsonld(page_key)
    html_parts = [
        "<!doctype html>",
        "<html lang=\"en\">",
        "<head>",
        f"<title>{html.escape(data.get('title',''))}</title>",
        f"<meta name=\"description\" content=\"{html.escape(data.get('description',''))}\">",
    ]
    if og.get("image"):
        html_parts.append(f"<meta property=\"og:image\" content=\"{html.escape(og.get('image'))}\">")
    if og.get("title"):
        html_parts.append(f"<meta property=\"og:title\" content=\"{html.escape(og.get('title'))}\">")
    if og.get("description"):
        html_parts.append(f"<meta property=\"og:description\" content=\"{html.escape(og.get('description'))}\">")
    if og.get("url"):
        html_parts.append(f"<meta property=\"og:url\" content=\"{html.escape(og.get('url'))}\">")
    if jsonld:
        html_parts.append("<script type=\"application/ld+json\">")
        import json as _json

        html_parts.append(_json.dumps(jsonld))
        html_parts.append("</script>")
    html_parts.append("</head>")
    html_parts.append("<body>")
    html_parts.append(f"<h1>{html.escape(data.get('title',''))}</h1>")
    html_parts.append(f"<p>{html.escape(data.get('description',''))}</p>")
    # include content sections in preformatted blocks
    content = data.get("content", {})
    for section, secdata in content.items():
        html_parts.append(f"<section><h2>{html.escape(section)}</h2>")
        if isinstance(secdata, dict):
            for k, v in secdata.items():
                if isinstance(v, list):
                    html_parts.append("<ul>")
                    for item in v:
                        title = item.get('title') or item.get('heading') or ''
                        desc = item.get('desc') or item.get('description') or ''
                        html_parts.append(f"<li><strong>{html.escape(title)}</strong>: {html.escape(desc)}</li>")
                    html_parts.append("</ul>")
                else:
                    html_parts.append(f"<p>{html.escape(str(v))}</p>")
        else:
            html_parts.append(f"<p>{html.escape(str(secdata))}</p>")
        html_parts.append("</section>")
    html_parts.append("</body>")
    html_parts.append("</html>")
    body = "\n".join(html_parts)
    resp = HTMLResponse(content=body)
    resp.headers["Cache-Control"] = "public, max-age=300"
    return resp

