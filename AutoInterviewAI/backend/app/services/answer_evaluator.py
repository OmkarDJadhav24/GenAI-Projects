from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

async def evaluate_answer(question: str, answer: str) -> str:
    prompt = f"""You are an AI interview evaluator. Evaluate the candidate's answer to the technical question. Question: {question} Candidate's Answer: {answer}
        Please give constructive feedback on:
        - Accuracy
        - Completeness
        - Clarity
        - Depth of understanding

        Respond with 3-4 sentences.
        """
    client = OpenAI()
    response = client.chat.completions.create(
        model="gpt-4-turbo",messages=[
            {"role": "system", "content": "You're a professional interview evaluator."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.3,
        max_tokens=500
    )

    return response.choices[0].message.content
