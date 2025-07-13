from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

def summarize_resume_text(text):
    prompt = f"""
    Given the following resume text, extract:
    - Candidate's Name (if present)
    - Total Years of Experience
    - Skills (in comma-separated list)
    - Current/Last Job Title
    - Education Summary

    Resume:
    {text}
    """
    client = OpenAI()
    response = client.chat.completions.create(
        model="gpt-4-turbo",
        messages=[
            {"role": "system", "content": "You're a professional resume analyst."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.3,
        max_tokens=500
    )

    return response.choices[0].message.content