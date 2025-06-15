# GPT-2 Fine-Tuned Text Generation API

This project showcases a complete **GenAI pipeline** where we:

- Fine-tuned OpenAI’s GPT-2 on the [Tiny Shakespeare dataset](https://huggingface.co/datasets/tiny_shakespeare)
- Exposed it via a robust, production-style **FastAPI** backend
- Enabled text generation through a REST API

---

## Model

- **Base Model**: `gpt2` from Hugging Face Transformers
- **Training Dataset**: Tiny Shakespeare
- **Fine-Tuning Framework**: Hugging Face `Trainer` API
- **Tokenization**: GPT-2 tokenizer with `eos_token` as padding token

---

## 📂 Project Structure

Text_Generation_GPT-2

├── app/

│ ├── main.py # FastAPI app entrypoint

│ ├── routes/

│ │ └── genai.py # API routes

│ ├── models/

│ │ └── request.py # Request schema

│ └── utils/

│ └── inference.py # GPT-2 inference logic

├── gpt2-finetuned/ # Saved fine-tuned model

├── text_generation_gpt2.ipynb # Script for fine-tuning GPT-2

└── README.md




## Setup Instructions

### 1. Clone the repo

git clone https://github.com/OmkarDJadhav24/GenAI-Projects.git

cd GenAI-Projects/Text_Generation_GPT-2


### 2. Download fine-tuned model files from Google Drive

https://drive.google.com/drive/folders/1CJUH2of76C5LJ6eb9VglAxsxT_b4r9B8?usp=drive_link

### 3. Create and activate a conda environment 

conda create -n text_generation_env python=3.9 

conda activate text_generation_env


### 4. Install dependencies 

pip install -r requirements.txt


### 5. Start the FastAPI server
uvicorn app.main:app --reload


### 6. Open your browser 

at: http://127.0.0.1:8000/docs  to test the API via Swagger UI.


### 7. Example

POST /generate/
Body:
{
  "prompt": "Once upon a time",
  "max_length": 50
}


Response:
{
  "generated_text": "Once upon a time, in a faraway land..."
}