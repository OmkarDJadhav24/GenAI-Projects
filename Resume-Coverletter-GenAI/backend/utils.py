import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
# openai.api_key = os.getenv("OPENAI_API_KEY")

client = OpenAI()

def load_template(path: str) -> str:
    with open(path, "r", encoding="utf-8") as file:
        return file.read()

def format_prompt(template: str, data: dict) -> str:
    return template.format(**data)

def generate_response(prompt: str) -> str:
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print("OpenAI API Error:", e)
        return "Error: Failed to generate response"
