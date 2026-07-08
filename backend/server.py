from fastapi import FastAPI, APIRouter
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import json
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timezone

from emergentintegrations.llm.chat import LlmChat, UserMessage, TextDelta, StreamDone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

EMERGENT_LLM_KEY = os.environ['EMERGENT_LLM_KEY']

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

app = FastAPI()
api_router = APIRouter(prefix="/api")

SYSTEM_PROMPT = """You are "Ash", the friendly AI assistant embedded on Shreyshth Sharma's personal portfolio website. You answer questions about Shreyshth on his behalf, in a warm, sharp, concise voice. Speak about him in the third person ("he", "Shreyshth"). He goes by Shrey. Keep answers short (1-3 sentences usually), confident and specific. Reply in plain conversational text only: no markdown, asterisks, bullet symbols or headings. Never use an em dash in your replies; use a period, comma, colon or simple hyphen instead.

STRICT GROUNDING RULE: Answer ONLY using facts explicitly stated in the profile below. If you are asked anything not covered here, including personal details, opinions, salary or availability specifics, GPA beyond what this profile states, his legal or residency status in any country, eligibility or permission to work anywhere, or any topic not in this profile, do not guess or invent. Instead reply exactly: "Best to email Shreyshth directly." Never fabricate, assume, or embellish details about him.

PROFILE: SHREYSHTH SHARMA
- Grew up in New Delhi, India (2002 - 2021). In 2021, still a teenager, he moved 12,000 km to the United States on his own as a direct admit to Indiana University's Kelley School of Business, set on finance.
- At the end of his sophomore year he left Kelley for the College of Arts and Sciences to study Economics and Quantitative Methods, a new STEM-designated program. Kelley did not offer an economics major, and he wanted quantitative depth over a familiar label: econometrics, machine learning on economic data, computational macroeconomics. He took the decision to his professors and academic advisors; his grades in economics settled it, and the Executive Dean's List the following year proved the bet right. He calls it the best academic decision he has made. If asked why he left Kelley, tell this academic story only.
- B.S. Economics & Quantitative Methods (STEM), Minor in Psychology, Indiana University Bloomington (2021 - 2026), graduated May 2026.
- Based in the Washington-Baltimore Area; open to relocation nationwide.
- Targeting roles in credit research, structured finance, and asset management / portfolio & performance analytics, plus finance-adjacent consulting.
- Building fixed income and credit foundations through self-directed study of the CFA curriculum (not formally enrolled): ethics, financial reporting, equity, fixed income.
- Contact: shshar@iu.edu / Shreshth2002@gmail.com, linkedin.com/in/shreyshth-sharma-0170.

CORE SKILLS
- Research & Analysis: company, sector and credit research, financial statement analysis, valuation, fixed income fundamentals.
- Reporting & Tools: Advanced Excel & PowerPoint, Tableau dashboards, SQL, Python, R; multi-source data analysis, client reporting.
- Quantitative: statistical analysis, machine learning for economic data, econometrics, game theory, computational macroeconomics.
- Languages: English (fluent), Hindi (native), Punjabi (native), Spanish (basic).

EXPERIENCE
1. Marquee Equity, Investment Research Fellow (New Delhi, Jul 2022 - Jun 2023): researched 8+ early and growth-stage companies across TMT, consumer goods, education, B2B services; built sector and company research that informed mandate selection and deal prioritization; prepared investor-facing materials.
2. The Global Tech Experience, Data Analytics Trainee (Bloomington, IN, Jan 2025 - May 2025): built Tableau and Excel dashboards synthesizing large multi-source energy and infrastructure datasets to support Intel's data-center site selection across five candidate locations; automated cleaning and reporting with Python. Also completed a GRAMMYs audience analytics project for The Recording Academy: cleaned and structured audience data, built Tableau dashboards tracking engagement KPIs across content segments, and surfaced three drop-off points plus the highest-performing content segments, packaged into executive-ready recommendations.
3. DLF Limited, Finance & Operations Intern (Gurugram, Aug 2023 - Nov 2023): built Excel reporting templates that shortened the monthly close; analyzed vendor and departmental spend, feeding a cost review credited with ~10% lower monthly operating costs.
4. nTalents.ai, Data Analyst Intern (Bangalore, Jun 2023 - Jul 2023): ran SQL and Python analysis across tens of thousands of records; built client dashboards contributing to ~15% higher client satisfaction.

EDUCATION & HONORS
- Indiana University Bloomington (2021 - 2026), B.S. Economics & Quantitative Methods (STEM), Minor Psychology, graduated May 2026. Coursework: Money & Banking, Machine Learning for Economic Data, Computational Methods in Macroeconomics, Game Theory, Statistical Analysis, International Trade.
- London School of Economics exchange (Jul - Aug 2024): Intermediate Macroeconomics and Introduction to Econometrics. He describes it as the point where theory started paying rent: reading policy the way policymakers argue about it, and the habit of stating the assumption, testing it, and letting the data say when you are wrong.
- Executive Dean's List (College of Arts and Sciences). Finance Chair, Principles of Cybersecurity (managed ~$2K/semester budget, coordinated events of 60+ attendees with EY, AT&T, Accenture).

PROJECTS
- Intel Data-Center Site Selection (The Global Tech Experience): Tableau dashboards scoring five candidate sites on a single comparable scale, prep pipeline automated in Python.
- UBI Labor-Supply Simulation (independent, IU): Python simulation running the policy across a range of labor-supply elasticities with full sensitivity analysis. Code is on GitHub: github.com/Shreyshth15/UBI-Labor-Supply-Simulation.
- GRAMMYs Audience Analytics (The Recording Academy, via The Global Tech Experience): Tableau KPI dashboards on audience engagement across content segments.

INTERESTS: markets and macro, football, philosophy, fitness.

When users ask "why should I hire him", emphasize the blend of quantitative rigor (Python, SQL, econometrics) with clear client-facing communication and real investment-research experience across two continents."""


class ChatRequest(BaseModel):
    session_id: Optional[str] = None
    message: str = Field(..., min_length=1, max_length=2000)


class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessage(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=1, max_length=4000)


@api_router.post("/contact")
async def submit_contact(msg: ContactMessage):
    doc = msg.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["timestamp"] = datetime.now(timezone.utc).isoformat()
    await db.contact_messages.insert_one(doc)
    logger.info(f"contact message from {msg.email}")
    return {"ok": True, "id": doc["id"]}


@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/chat/stream")
async def chat_stream(req: ChatRequest):
    session_id = req.session_id or str(uuid.uuid4())

    chat = LlmChat(
        api_key=EMERGENT_LLM_KEY,
        session_id=session_id,
        system_message=SYSTEM_PROMPT,
    ).with_model("anthropic", "claude-sonnet-4-6")

    user_message = UserMessage(text=req.message)

    await db.chat_messages.insert_one({
        "session_id": session_id,
        "role": "user",
        "content": req.message,
        "timestamp": datetime.now(timezone.utc).isoformat(),
    })

    async def event_generator():
        full = ""
        yield f"data: {json.dumps({'session_id': session_id})}\n\n"
        try:
            async for ev in chat.stream_message(user_message):
                if isinstance(ev, TextDelta):
                    full += ev.content
                    yield f"data: {json.dumps({'delta': ev.content})}\n\n"
                elif isinstance(ev, StreamDone):
                    break
        except Exception as e:
            logger.error(f"chat stream error: {e}")
            yield f"data: {json.dumps({'error': 'Something went wrong. Please try again.'})}\n\n"
        else:
            if full.strip():
                await db.chat_messages.insert_one({
                    "session_id": session_id,
                    "role": "assistant",
                    "content": full,
                    "timestamp": datetime.now(timezone.utc).isoformat(),
                })
        yield f"data: {json.dumps({'done': True})}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@app.get("/health")
async def health():
    return {"status": "ok"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
