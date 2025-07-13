# from app.utils.openai_client import get_openai_client
from openai import OpenAI
import os
from dotenv import load_dotenv

def extract_jd_info(jd_text: str):
    prompt = f"""
    Extract the following details from the job description below:
    - Job Title
    - Required Skills
    - Required Experience
    - Education Requirement
    - Tools/Technologies
    - A brief summary (3-4 lines)

    Job Description:
    {jd_text}

    Return the result as JSON with keys: job_title, skills, experience_required, education, tools, summary.
    """
    
    client = OpenAI()
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3
    )
    
    try:
        return eval(response.choices[0].message.content.strip())
    except Exception:
        return {"error": "Failed to parse response"}
