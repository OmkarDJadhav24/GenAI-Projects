from fastapi import APIRouter, UploadFile, File
from app.agents.resume_analyzer import analyze_resume
from app.agents.jd_analyzer import extract_text_from_pdf

upload_router = APIRouter()
jd_router = APIRouter()

@upload_router.post("/upload-resume/")
async def upload_resume(file: UploadFile=File(...)):
    result = await analyze_resume(file)
    return result


@jd_router.post("/upload-jd/")
async def upload_jd(file: UploadFile=File(...)):
    content = await file.read()
    result = extract_text_from_pdf(content)
    return result
