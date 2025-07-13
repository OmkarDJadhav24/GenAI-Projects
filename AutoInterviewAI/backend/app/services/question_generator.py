from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

async def generate_questions(skills:list[str], job_title:str=""):
    skills_str = ", ".join(skills)
    prompt = (
        f"Generate 5 technical interview questions for the role of {job_title or 'a software developer'} "
        f"based on the following skills: {skills_str}. Provide only the questions in numbered list format."
    )
    
    client = OpenAI()

    response = client.chat.completions.create(
        model="gpt-4-turbo",
        messages=[
            {"role": "system", "content": "You're a professional resume analyst."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.3,
        max_tokens=500)
    
    questions = [q.lstrip("1234567890. ").strip() for q in response.choices[0].message.content.strip().split("\n") if q.strip()]

    return {"questions": questions}
    