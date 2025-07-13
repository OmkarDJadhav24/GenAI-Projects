# backend/app/agents/resume_analyzer.py

import pdfplumber
from fastapi import UploadFile
from app.services.openai_client import summarize_resume_text

async def analyze_resume(file: UploadFile):
    contents = ""
    
    with pdfplumber.open(file.file) as pdf_file:
        for page in pdf_file.pages:
            contents += page.extract_text() or ""

    # Send to OpenAI for summarization
    summary = summarize_resume_text(contents)
    return {"summary": summary}
