# app/routes/evaluate_routes.py
from fastapi import APIRouter
from pydantic import BaseModel
from app.services.answer_evaluator import evaluate_answer

evaluate_router = APIRouter()

class EvaluationRequest(BaseModel):
    question: str
    answer: str

@evaluate_router.post("/evaluate-answer/")
async def evaluate(evaluation: EvaluationRequest):
    feedback = await evaluate_answer(evaluation.question, evaluation.answer)
    return {"feedback": feedback}
