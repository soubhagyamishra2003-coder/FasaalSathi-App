import os
from typing import Optional
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="FasalSathi API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount frontend static assets (supports both /static/... and /css, /js paths)
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/css", StaticFiles(directory="static/css"), name="css")
app.mount("/js", StaticFiles(directory="static/js"), name="js")


@app.get("/")
def serve_app():
    return FileResponse("static/index.html")


@app.get("/.well-known/appspecific/com.chrome.devtools.json")
def chrome_devtools_probe():
    return Response(status_code=204)


# 1. Agro-Weather & Cyclone Radar
@app.get("/api/weather")
def get_weather(district: str = "Khordha"):
    return {
        "district": district,
        "temperature": 29,
        "humidity": 68,
        "wind_speed": 14,
        "rain_prob": 20,
        "condition": "Partly Cloudy",
        "alert": "Normal",
        "advisory": f"Favorable weather in {district} for fertilizer application and field inspection.",
    }


# 2. Personalized Crop Guidance
class GuidanceReq(BaseModel):
    crop: str
    stage: str
    district: str
    language: str = "en"


@app.post("/api/guidance")
def get_guidance(req: GuidanceReq):
    return {
        "advisory": f"For {req.crop.capitalize()} in {req.stage} stage ({req.district}): Apply balanced NPK + Zinc; monitor soil moisture and spray Neem Oil (3 ml/L) preventively."
    }


# 3. Smart Crop & ROI Advisor
class RoiReq(BaseModel):
    district: str
    season: str
    soil_type: str
    irrigation: str
    acres: float = 1.0


@app.post("/api/recommend-crops")
def recommend_crops(req: RoiReq):
    return {
        "recommendations": [
            {
                "crop": "Paddy (Swarna Sub-1)",
                "yield_q": round(22 * req.acres, 1),
                "net_profit": int(34500 * req.acres),
                "roi": "78%",
            },
            {
                "crop": "Ragi (Shree Anna)",
                "yield_q": round(11 * req.acres, 1),
                "net_profit": int(29800 * req.acres),
                "roi": "92%",
            },
            {
                "crop": "Green Gram (Moong)",
                "yield_q": round(5.5 * req.acres, 1),
                "net_profit": int(26400 * req.acres),
                "roi": "85%",
            },
        ]
    }


# 4. Multimodal AI Plant Doctor
class DiseaseReq(BaseModel):
    image_base64: str
    crop: Optional[str] = "Paddy"
    stage: Optional[str] = "Vegetative"
    language: str = "en"


@app.post("/api/diagnose-disease")
def diagnose_disease(req: DiseaseReq):
    crop_label = req.crop or "Crop"
    stage_label = req.stage or "Vegetative"
    return {
        "disease_name": f"Rice Leaf Blast / {crop_label} Stress ({stage_label})",
        "confidence": 94,
        "organic_treatment": "Spray Neem Oil (10,000 ppm) @ 3 ml/L or Pseudomonas fluorescens @ 5 g/L.",
        "chemical_dosage": "Tricyclazole 75% WP @ 0.6 g/L of water.",
    }


# 5. Live Mandi vs MSP
@app.get("/api/mandi-rates")
def get_mandi_rates(district: str = "Khordha"):
    return {
        "rates": [
            {"commodity": "Paddy (Common)", "mandi": district, "modal": 2340, "msp": 2300},
            {"commodity": "Maize", "mandi": district, "modal": 2260, "msp": 2225},
            {"commodity": "Green Gram (Moong)", "mandi": district, "modal": 8720, "msp": 8682},
        ]
    }


# 6. Trilingual Krushi Sahayak Chatbot
class ChatReq(BaseModel):
    session_id: str
    message: str
    district: str = "Khordha"
    language: str = "en"


@app.post("/api/chat")
def chat_reply(req: ChatReq):
    return {
        "reply": f"[{req.district}] Based on your query '{req.message}': Use soil-tested fertilizers, avoid spraying before rain, and check live MSP rates before selling."
    }