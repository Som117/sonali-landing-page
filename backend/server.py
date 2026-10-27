from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import time
import logging
from html import escape
from pathlib import Path
from urllib.parse import quote
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from email_service import send_email, EMAIL_FROM_NAME  # noqa: E402

client = AsyncIOMotorClient(os.environ['MONGO_URL'])
db = client[os.environ['DB_NAME']]
OWNER_EMAIL = os.environ['OWNER_EMAIL']

app = FastAPI()
api_router = APIRouter(prefix="/api")
logger = logging.getLogger(__name__)

COLLAB_TYPES = [
    "Brand Campaign", "UGC Campaign", "Influencer Collaboration", "Product Launch",
    "Event Promotion", "Brand Awareness Campaign", "Long-Term Partnership", "Other",
]
_recent: dict = {}


class EnquiryIn(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    company: str = Field(min_length=1, max_length=120)
    email: EmailStr
    collab_type: str
    budget: Optional[str] = Field(default=None, max_length=60)
    message: str = Field(min_length=5, max_length=3000)


def _rate_limited(ip: str) -> bool:
    now = time.time()
    hits = [t for t in _recent.get(ip, []) if now - t < 600]
    _recent[ip] = hits + [now]
    return len(hits) >= 5


def _row(label: str, value: str) -> str:
    return (f'<tr><td style="padding:8px 0;color:#8a6a60;font-size:11px;letter-spacing:2px;'
            f'text-transform:uppercase;width:140px;vertical-align:top">{label}</td>'
            f'<td style="padding:8px 0;color:#3b2220;font-size:15px">{value}</td></tr>')


def _enquiry_html(e: EnquiryIn) -> str:
    msg = escape(e.message).replace("\n", "<br>")
    reply = f"mailto:{quote(str(e.email))}?subject={quote('Re: Collaboration with Sonalii')}"
    rows = "".join([
        _row("Name", escape(e.name)), _row("Brand", escape(e.company)),
        _row("Email", escape(str(e.email))), _row("Collaboration", escape(e.collab_type)),
        _row("Budget", escape(e.budget or "Not specified")),
    ])
    return (
        '<table role="presentation" width="100%" style="background:#f6e3e1;padding:32px 0">'
        '<tr><td align="center"><table role="presentation" width="560" style="background:#fffaf9;'
        'padding:36px;font-family:Georgia,serif;border:1px solid #e3b5b3">'
        '<tr><td style="font-size:11px;letter-spacing:4px;color:#b4373f;font-family:Arial,sans-serif">NEW ENQUIRY</td></tr>'
        f'<tr><td style="font-size:28px;color:#3b2220;padding:10px 0 20px">{escape(e.company)} wants to collaborate</td></tr>'
        f'<tr><td><table role="presentation" width="100%" style="font-family:Arial,sans-serif">{rows}</table></td></tr>'
        f'<tr><td style="padding:24px 0;font-size:16px;line-height:1.6;color:#3b2220;border-top:1px solid #e3b5b3">{msg}</td></tr>'
        f'<tr><td><a href="{reply}" style="display:inline-block;background:#b4373f;color:#fff;padding:12px 26px;'
        'border-radius:999px;text-decoration:none;font-family:Arial,sans-serif;font-size:13px;letter-spacing:2px">REPLY TO BRAND</a></td></tr>'
        f'<tr><td style="padding-top:28px;font-size:11px;color:#8a6a60;font-family:Arial,sans-serif">Sent by {escape(EMAIL_FROM_NAME)} via the enquiry form on your portfolio.</td></tr>'
        '</table></td></tr></table>'
    )


@api_router.get("/")
async def root():
    return {"message": "Sonalii portfolio API"}


@api_router.post("/enquiries")
async def create_enquiry(payload: EnquiryIn, request: Request):
    if payload.collab_type not in COLLAB_TYPES:
        raise HTTPException(status_code=422, detail="Invalid collaboration type")
    ip = request.headers.get("x-forwarded-for", request.client.host if request.client else "x").split(",")[0]
    if _rate_limited(ip):
        raise HTTPException(status_code=429, detail="Too many enquiries, please try again later")
    doc = payload.model_dump()
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    await db.enquiries.insert_one(doc)
    subject = f"New collaboration enquiry from {payload.company}"[:150]
    email_id = await send_email(to=OWNER_EMAIL, subject=subject, html=_enquiry_html(payload))
    return {"status": "sent", "email_id": email_id}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
