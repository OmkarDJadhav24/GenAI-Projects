# Resume & Cover Letter Generator (GPT-3.5, FastAPI)

This GenAI-powered app helps users automatically generate a professional **resume** and **cover letter** tailored to any job description using OpenAI’s GPT-3.5 model.

### Features

- Upload job description and personal details
- Generate Resume with experience, skills, and summary
- Generate Cover Letter customized to the company
- Powered by GPT-3.5 via OpenAI API
- Built with FastAPI (backend) and HTML + JavaScript (frontend)
- Download resume and cover letter as PDF files

---

### Project Structure

Resume-Coverletter-GenAI/

├── backend/

     ├── main.py # FastAPI app

     ├── utils.py # Template + GPT helper functions

     └── templates/

        ├── resume_template.txt

        ├── cover_letter_template.txt

        ├── index.html

├── .env # OpenAI API Key

├── requirements.txt

└── README.md