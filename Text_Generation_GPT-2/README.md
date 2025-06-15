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