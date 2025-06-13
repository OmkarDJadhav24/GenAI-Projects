# Sentiment Classification Web App using Hugging Face Transformers

This project is a simple web application built with **Flask** and **Hugging Face Transformers** that classifies user-submitted movie reviews as either **Positive** or **Negative** using a fine-tuned BERT model.

---

## Features

- Simple web interface for text input
- Real-time sentiment prediction using a pre-trained BERT model
- Displays prediction label with confidence score
- Clean, minimal frontend UI

---

## Model Used

This app uses a **fine-tuned BERT model (distilbert-base-uncased)** from the Hugging Face `transformers` library for sequence classification.

You can replace the model with your own fine-tuned transformer model for better or domain-specific performance.

---

## Project Structure

├── app.py # Flask app logic
├── model/ # Fine-tuned BERT model (saved using save_model() function)
├── templates/
│ └── index.html # Frontend form and result display
└── README.md # Project documentation



## Setup Instructions (Using Anaconda)

1. **Clone the repository**