# File: backend/main.py

import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from .utils import load_template, format_prompt, generate_response
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

templates = Jinja2Templates(directory="backend/templates")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True, 
    allow_methods=["*"],
    allow_headers=["*"],
)

class InputData(BaseModel):
    name: str
    job_title: str
    company_name: str
    experience: str
    skills: str
    job_description: str

@app.post("/generate")
async def generate(data: InputData):
    try:
        resume_template = load_template("backend/templates/resume_template.txt")
        cover_template = load_template("backend/templates/cover_letter_template.txt")

        resume_prompt = format_prompt(resume_template, data.dict())
        cover_prompt = format_prompt(cover_template, data.dict())

        resume = generate_response(resume_prompt)
        cover_letter = generate_response(cover_prompt)

        return JSONResponse(content={
            "resume": resume,
            "cover_letter": cover_letter
        })
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
