# AI-Powered Resume vs JD Matcher & Interview Evaluator

This project is a GenAI-based tool to streamline the hiring process by:
- Matching skills from a **resume** with those in a **job description**
- Generating **interview questions** based on matched skills
- Allowing users to **write and evaluate answers** using LLMs
- Exporting evaluations to **PDF** for sharing or review

---

## Features

- Upload resume and job description (PDF)
- Extract and compare skills with AI
- Generate personalized interview questions
- Answer and evaluate responses with LLM-backed feedback


---

## Tech Stack

| Frontend | Backend | AI & LLM | Others |
|---------|---------|----------|--------|
| React   | FastAPI | OpenAI GPT | jsPDF, Axios |
| HTML/CSS | Pydantic | Langchain (optional) | ReactMarkdown |
| JavaScript | Uvicorn | | |

---

## Setup Instructions

### Backend (FastAPI)

```bash
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate (Windows)
cd backend/
pip install -r requirements.txt
uvicorn app.main:app --reload

Create .env and set OPENAI_API_KEY=your_key_here
```

### Frontend (React)
```bash
cd frontend/
npm install
npm start
```

### How It Works
1. Upload resume & JD → Extract skills using LLM
2. Match skills → Show missing vs matched
3. Generate interview questions → Based on matched skills
4. Evaluate answers → Uses GPT via FastAPI

