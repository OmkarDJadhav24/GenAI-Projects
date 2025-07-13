from fastapi import APIRouter, Body
from app.services.question_generator import generate_questions

question_route = APIRouter()

@question_route.post("/generate-questions/")
async def get_questions(skills:list[str]=Body(...), job_title: str = Body(default="")):
    return await generate_questions(skills, job_title)