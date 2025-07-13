from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from app.agents.skill_matcher import match_skills

match_router = APIRouter()

class SkillMatchRequest(BaseModel):
    resume_skills: List[str]
    jd_skills: List[str]

@match_router.post("/match-skills/")
async def skill_matcher(request: SkillMatchRequest):
    return match_skills(request.resume_skills, request.jd_skills)