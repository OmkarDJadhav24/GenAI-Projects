from fastapi import FastAPI
from app.routes import genai

app = FastAPI(title="GPT-2 GenAI API")

# Include routes
app.include_router(genai.router, prefix="/generate", tags=["Text Generation"])