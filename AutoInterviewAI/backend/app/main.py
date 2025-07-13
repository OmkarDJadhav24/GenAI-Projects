from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.upload_routes import upload_router, jd_router
from app.routes.match_routes import match_router
from app.routes.generate_routes import question_route
from app.routes.evaluate_routes import evaluate_router

app = FastAPI(title="AutoInterviewAI")

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_router)
app.include_router(jd_router)
app.include_router(match_router)
app.include_router(question_route)
app.include_router(evaluate_router)