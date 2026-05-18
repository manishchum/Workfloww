from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import resend
import os

load_dotenv()

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load API key from .env
resend.api_key = os.getenv("RESEND_API_KEY")


class LeadRequest(BaseModel):
    name: str
    email: str
    company: str = ""
    message: str = ""
    phone: str = ""
    source: str = ""


@app.post("/send-email")
async def send_email(data: LeadRequest):
    try:
        # Determine the subject based on source
        if data.source == "builder-labs-signup":
            subject = "New Builder Labs Signup"
        elif data.source == "contact-form":
            subject = "New Contact Form Submission"
        else:
            subject = "New Website Lead"

        # Build HTML content dynamically
        html_content = f"""
        <h2>{subject}</h2>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        """
        
        if data.phone:
            html_content += f"<p><strong>Phone:</strong> {data.phone}</p>"
        
        if data.company:
            html_content += f"<p><strong>Company/Organization:</strong> {data.company}</p>"
        
        if data.message:
            html_content += f"<p><strong>Message:</strong> {data.message}</p>"

        # Create params object for Resend
        from resend.emails._emails import Emails
        
        email_params = Emails.SendParams(
            **{
                "from": "no-reply@workfloww.ai",
                "to": "monalika.goel@workfloww.ai",
                "subject": subject,
                "html": html_content
            }
        )
        
        response = resend.Emails.send(email_params)

        return {
            "success": True,
            "response": response
        }

    except Exception as e:
        print("ERROR:", e)

        return {
            "success": False,
            "error": str(e)
        }