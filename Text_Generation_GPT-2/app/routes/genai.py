from fastapi import APIRouter
from app.models.request import GenerateRequest
from app.utils.inference import generate_text

router = APIRouter()

@router.post("/")
def generate(request:GenerateRequest):
    result = generate_text(request.prompt, request.max_length)
    return {"generated_text":result}