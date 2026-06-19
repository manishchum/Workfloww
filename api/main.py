import html
import logging
import os
from pathlib import Path
from datetime import datetime, timezone
from typing import Any, Optional
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
import resend
import hashlib
import hmac
import json
import requests
import time

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


# ============= AI METAMIND RAZORPAY INTEGRATION =============

RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID")
RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET")
PAYMENT_SHEET_WEBHOOK_URL = os.getenv("PAYMENT_SHEET_WEBHOOK_URL")
PAYMENT_SHEET_WEBHOOK_SECRET = os.getenv("PAYMENT_SHEET_WEBHOOK_SECRET")
WORKSHOP_AMOUNT_PAISE = 49900
WORKSHOP_CURRENCY = "INR"
PAYMENT_RECORDS_FILE = Path(
    os.getenv(
        "PAYMENT_RECORDS_FILE",
        str(Path(__file__).parent / "ai_metamind_payments.jsonl"),
    )
)

if not all([RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET]):
    logger.warning("Razorpay credentials not configured")


class CreateOrderRequest(BaseModel):
    name: Optional[str] = Field(None, max_length=100)
    email: Optional[EmailStr] = None
    phone: Optional[str] = Field(None, max_length=30)
    designation: Optional[str] = Field(None, max_length=100)
    company_name: Optional[str] = Field(None, max_length=100)
    source: Optional[str] = Field(None, max_length=100)


class VerifyPaymentRequest(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str
    name: Optional[str] = Field(None, max_length=100)
    email: Optional[EmailStr] = None
    phone: Optional[str] = Field(None, max_length=30)
    designation: Optional[str] = Field(None, max_length=100)
    company_name: Optional[str] = Field(None, max_length=100)
    source: Optional[str] = Field(None, max_length=100)


class PaymentFailedRequest(BaseModel):
    razorpay_order_id: Optional[str] = Field(None, max_length=100)
    razorpay_payment_id: Optional[str] = Field(None, max_length=100)
    code: Optional[str] = Field(None, max_length=100)
    description: Optional[str] = Field(None, max_length=500)
    source: Optional[str] = Field(None, max_length=100)
    step: Optional[str] = Field(None, max_length=100)
    reason: Optional[str] = Field(None, max_length=100)


def save_payment_record(event_type: str, payload: dict[str, Any]) -> None:
    record = {
        "event_type": event_type,
        "created_at": datetime.now(timezone.utc).isoformat(),
        **payload,
    }

    if PAYMENT_SHEET_WEBHOOK_URL:
        try:
            response = requests.post(
                PAYMENT_SHEET_WEBHOOK_URL,
                json={
                    "secret": PAYMENT_SHEET_WEBHOOK_SECRET,
                    "record": record,
                },
                timeout=10,
            )
            response_data = response.json()
            if response.status_code < 400 and response_data.get("ok") is True:
                return

            logger.error(
                f"Payment sheet webhook rejected record with status {response.status_code}"
            )
        except (requests.RequestException, ValueError) as e:
            logger.error(f"Payment sheet webhook failed: {str(e)}", exc_info=True)

    if os.getenv("VERCEL") == "1":
        logger.warning(
            "Payment record was not stored in production; configure or fix PAYMENT_SHEET_WEBHOOK_URL"
        )
        return

    try:
        PAYMENT_RECORDS_FILE.parent.mkdir(parents=True, exist_ok=True)
        with PAYMENT_RECORDS_FILE.open("a", encoding="utf-8") as file:
            file.write(json.dumps(record, default=str) + "\n")
    except OSError as e:
        logger.error(f"Failed to store payment record: {str(e)}", exc_info=True)


def fetch_razorpay_payment(payment_id: str) -> dict[str, Any]:
    if not RAZORPAY_KEY_ID or not RAZORPAY_KEY_SECRET:
        return {}

    try:
        response = requests.get(
            f"https://api.razorpay.com/v1/payments/{payment_id}",
            auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET),
            timeout=10,
        )
        if response.status_code != 200:
            logger.warning(f"Unable to fetch Razorpay payment {payment_id}: {response.text}")
            return {}
        return response.json()
    except requests.RequestException as e:
        logger.warning(f"Razorpay payment fetch failed for {payment_id}: {str(e)}")
        return {}


@app.post("/api/ai-metamind/create-order")
async def create_razorpay_order(request: CreateOrderRequest):
    """
    Create a Razorpay order for AI MetaMind workshop
    """
    if not RAZORPAY_KEY_ID or not RAZORPAY_KEY_SECRET:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Razorpay not configured"
        )

    try:
        # Call Razorpay API to create order
        auth = (RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET)
        response = requests.post(
            "https://api.razorpay.com/v1/orders",
            auth=auth,
            json={
                "amount": WORKSHOP_AMOUNT_PAISE,
                "currency": WORKSHOP_CURRENCY,
                "receipt": f"ai-metamind-{int(time.time())}",
            },
            timeout=10
        )

        if response.status_code != 200:
            logger.error(f"Razorpay API error: {response.text}")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Failed to create order"
            )

        data = response.json()
        logger.info(f"Order created: {data.get('id')}")
        save_payment_record(
            "order_created",
            {
                "razorpay_order_id": data.get("id"),
                "amount": data.get("amount"),
                "currency": data.get("currency"),
                "status": data.get("status"),
                "receipt": data.get("receipt"),
                "source": request.source,
                "customer": {
                    "name": request.name,
                    "email": request.email,
                    "phone": request.phone,
                    "designation": request.designation,
                    "company_name": request.company_name,
                },
            },
        )

        return {
            "order_id": data.get("id"),
            "amount": data.get("amount"),
            "currency": data.get("currency"),
        }

    except requests.RequestException as e:
        logger.error(f"Razorpay request failed: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Payment service unavailable"
        )


@app.post("/api/ai-metamind/verify-payment")
async def verify_razorpay_payment(request: VerifyPaymentRequest):
    """
    Verify Razorpay payment signature
    """
    if not RAZORPAY_KEY_SECRET:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Razorpay not configured"
        )

    try:
        payment = fetch_razorpay_payment(request.razorpay_payment_id)
        server_order_id = payment.get("order_id")

        if not server_order_id or server_order_id != request.razorpay_order_id:
            logger.warning(f"Order mismatch for payment {request.razorpay_payment_id}")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Payment order mismatch"
            )

        # Verify using the order ID retrieved from Razorpay, not the browser payload.
        message = f"{server_order_id}|{request.razorpay_payment_id}"
        signature = hmac.new(
            RAZORPAY_KEY_SECRET.encode(),
            message.encode(),
            hashlib.sha256
        ).hexdigest()

        if not hmac.compare_digest(signature, request.razorpay_signature):
            logger.warning(f"Invalid signature for payment {request.razorpay_payment_id}")
            save_payment_record(
                "payment_signature_invalid",
                {
                    "razorpay_order_id": request.razorpay_order_id,
                    "razorpay_payment_id": request.razorpay_payment_id,
                    "verified": False,
                },
            )
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid payment signature"
            )

        if (
            payment.get("amount") != WORKSHOP_AMOUNT_PAISE
            or payment.get("currency") != WORKSHOP_CURRENCY
            or payment.get("status") != "captured"
            or payment.get("captured") is not True
        ):
            logger.warning(f"Payment not captured or amount mismatch: {request.razorpay_payment_id}")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Payment is not captured or has an invalid amount"
            )

        logger.info(f"Payment verified: {request.razorpay_payment_id}")
        save_payment_record(
            "payment_verified",
            {
                "razorpay_order_id": request.razorpay_order_id,
                "razorpay_payment_id": request.razorpay_payment_id,
                "verified": True,
                "source": request.source,
                "customer": {
                    "name": request.name,
                    "email": request.email,
                    "phone": request.phone,
                    "designation": request.designation,
                    "company_name": request.company_name,
                },
                "payment": {
                    "amount": payment.get("amount"),
                    "currency": payment.get("currency"),
                    "status": payment.get("status"),
                    "method": payment.get("method"),
                    "email": payment.get("email"),
                    "contact": payment.get("contact"),
                    "fee": payment.get("fee"),
                    "tax": payment.get("tax"),
                    "created_at": payment.get("created_at"),
                    "captured": payment.get("captured"),
                    "description": payment.get("description"),
                },
            },
        )

        return {"verified": True, "payment_id": request.razorpay_payment_id}

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Payment verification failed: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Payment verification failed"
        )


@app.post("/api/ai-metamind/payment-failed")
async def record_razorpay_payment_failure(request: PaymentFailedRequest):
    """
    Store a failed payment only after confirming it with Razorpay.
    """
    if not request.razorpay_order_id or not request.razorpay_payment_id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Missing Razorpay order or payment ID"
        )

    payment = fetch_razorpay_payment(request.razorpay_payment_id)
    if payment.get("order_id") != request.razorpay_order_id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Payment order mismatch"
        )

    save_payment_record(
        "payment_failed",
        {
            "razorpay_order_id": request.razorpay_order_id,
            "razorpay_payment_id": request.razorpay_payment_id,
            "code": payment.get("error_code") or request.code,
            "description": payment.get("error_description") or request.description,
            "source": payment.get("error_source") or request.source,
            "step": payment.get("error_step") or request.step,
            "reason": payment.get("error_reason") or request.reason,
            "payment": {
                "amount": payment.get("amount"),
                "currency": payment.get("currency"),
                "status": payment.get("status"),
                "method": payment.get("method"),
            },
        },
    )
    return {"stored": True}
