import os
import time
from pathlib import Path
from dotenv import load_dotenv
import requests
import json
from datetime import datetime, timezone

# Load environment variables
api_env = Path(__file__).parent / ".env"
root_env = Path(__file__).parent.parent / ".env"
if api_env.exists():
    load_dotenv(dotenv_path=api_env)
elif root_env.exists():
    load_dotenv(dotenv_path=root_env)

PAYMENT_SHEET_WEBHOOK_URL = os.getenv("PAYMENT_SHEET_WEBHOOK_URL")
PAYMENT_SHEET_WEBHOOK_SECRET = os.getenv("PAYMENT_SHEET_WEBHOOK_SECRET")

print(f"Loaded Webhook URL: {PAYMENT_SHEET_WEBHOOK_URL}")

def trigger_webhook(event_type, payload):
    record = {
        "event_type": event_type,
        "created_at": datetime.now(timezone.utc).isoformat(),
        **payload,
    }
    
    if not PAYMENT_SHEET_WEBHOOK_URL:
        print("Webhook URL not found in .env")
        return

    try:
        response = requests.post(
            PAYMENT_SHEET_WEBHOOK_URL,
            json={
                "secret": PAYMENT_SHEET_WEBHOOK_SECRET,
                "record": record,
            },
            timeout=10,
        )
        print(f"Event: {event_type} | Target Order: {payload.get('razorpay_order_id')}")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}\n")
    except Exception as e:
        print(f"Error: {e}\n")

# --- SCENARIO 1: SUCCESSFUL HR PAYMENT ---
print("\n=== SCENARIO 1: SUCCESSFUL HR PAYMENT ===")
hr_order_id = f"order_hr_success_{int(time.time())}"

# 1. User submits modal form (Order Created)
trigger_webhook(
    "order_created",
    {
        "razorpay_order_id": hr_order_id,
        "amount": 49900,
        "currency": "INR",
        "status": "created",
        "receipt": f"receipt_{hr_order_id}",
        "source": "hr_ai_workshop", # Uses "hr_" prefix
        "customer": {
            "name": "Jane HR",
            "email": "jane@hrcompany.com",
            "phone": "9876543210",
            "designation": "CHRO",
            "company_name": "Tech HR Corp",
        },
    }
)

time.sleep(2) # Give Apps Script a moment

# 2. User successfully pays
trigger_webhook(
    "payment_verified",
    {
        "razorpay_order_id": hr_order_id,
        "razorpay_payment_id": f"pay_{hr_order_id}",
        "verified": True,
        "source": "hr_ai_workshop",
        "customer": {
            "name": "Jane HR",
            "email": "jane@hrcompany.com",
            "phone": "9876543210",
            "designation": "CHRO",
            "company_name": "Tech HR Corp",
        },
        "payment": {
            "amount": 49900,
            "currency": "INR",
            "status": "captured",
            "method": "upi",
            "email": "jane@hrcompany.com",
            "contact": "9876543210",
            "fee": 1000,
            "tax": 180,
            "created_at": int(time.time()),
            "captured": True,
            "description": "AI MetaMind HR Workshop",
        },
    }
)


# --- SCENARIO 2: FAILED BEGINNER PAYMENT ---
print("\n=== SCENARIO 2: FAILED BEGINNER PAYMENT ===")
beg_order_id = f"order_beg_fail_{int(time.time())}"

# 1. User submits modal form (Order Created)
trigger_webhook(
    "order_created",
    {
        "razorpay_order_id": beg_order_id,
        "amount": 49900,
        "currency": "INR",
        "status": "created",
        "receipt": f"receipt_{beg_order_id}",
        "source": "beg_ai_workshop", # Uses "beg_" prefix
        "customer": {
            "name": "John Beginner",
            "email": "john@beginner.com",
            "phone": "1234567890",
            "designation": "Junior Dev",
            "company_name": "Startup Inc",
        },
    }
)

time.sleep(2)

# 2. User payment fails
trigger_webhook(
    "payment_failed",
    {
        "razorpay_order_id": beg_order_id,
        "razorpay_payment_id": f"pay_{beg_order_id}",
        "code": "BAD_REQUEST_ERROR",
        "description": "Payment failed due to invalid card",
        "source": "beg_ai_workshop",
        "step": "payment_authentication",
        "reason": "invalid_card",
        "payment": {
            "amount": 49900,
            "currency": "INR",
            "status": "failed",
            "method": "card",
        },
    }
)
