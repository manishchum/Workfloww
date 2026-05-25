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
