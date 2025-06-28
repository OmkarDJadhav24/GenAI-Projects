# Resume & Cover Letter Generator (GPT-4, FastAPI)

This GenAI-powered app helps users automatically generate a professional **resume** and **cover letter** tailored to any job description using OpenAI’s GPT-4 model.

### Features

- Upload job description and personal details
- Generate Resume with experience, skills, and summary
- Generate Cover Letter customized to the company
- Powered by GPT-4 via OpenAI API
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


# 1. Clone this repo
git clone https://github.com/OmkarDJadhav24/GenAI-Projects.git
cd GenAI-Projects/Resume-Coverletter-GenAI

# 2. Setup virtual environment
python -m venv env
venv\Scripts\activate


# 3. Install dependencies
pip install -r requirements.txt

# 4. Add your OpenAI API key in .env
OPENAI_API_KEY=your-api-key-here


# 5. Start the server
uvicorn backend.main:app --reload

# 6. Open the UI
http://localhost:8000


### Technologies Used
* FastAPI – Modern Python API framework
* OpenAI GPT-4 – For generating text
* HTML + JS – Frontend with form handling
* jsPDF – For downloading PDF files on frontend

### How it works

1. Open the UI
http://localhost:8000

2. Fill the Details

3. Click on Generate

4. Download Resume and Cover Letter