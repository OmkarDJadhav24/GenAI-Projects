# GenAI PDF Q&A System using HuggingFace (RAG)

A simple yet powerful web application that lets users **upload a PDF** and **ask questions** about its contents using **Retrieval-Augmented Generation (RAG)**.

Built with:
- LangChain
- HuggingFace (Zephyr 7B)
- FAISS vector search
- HuggingFace Embeddings
- PyPDFLoader
- Flask backend + HTML frontend

---

## Folder Structure

GenAI-PDF-Q&A-System-using-HuggingFace-(RAG)/

├── backend/

    └── main.py # Flask backend logic


    └── data/ # Uploaded PDFs go here

├── frontend/

    └── index.html # Simple UI for upload and Q&A


├── requirements.txt

└── README.md




---

## How It Works

1. **Upload PDF** using the frontend
2. PDF is:
   - Loaded with `PyPDFLoader`
   - Split into chunks
   - Converted into embeddings
   - Stored in FAISS vector DB
3. Ask natural language questions about the PDF
4. Answer is generated using **HuggingFace Zephyr-7B model**

---

## Setup Instructions

```bash
# 1. Clone this repo
git clone https://github.com/yourusername/genai-pdf-rag-app.git
cd genai-pdf-rag-app

# 2. Setup virtual environment
python -m venv llm_env
source llm_env/bin/activate  # On Windows: llm_env\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Set your HuggingFace API key
echo "HUGGINGFACEHUB_API_TOKEN=your_token_here" > .env

# 5. Run the backend
cd backend
python main.py
```


# Model Used
LLM: https://huggingface.co/HuggingFaceH4/zephyr-7b-beta

Embeddings: Sentence-transformer-based HuggingFace Embeddings


# Example Use Case
Upload a company policy PDF and ask:

1. What is the leave policy?

2. Who should be contacted in case of a security breach?


# Features

1. Fully dynamic document Q&A

2. Accurate answers using modern LLMs

3. Works with any PDF

4. Easy to extend or customize