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
│ 
    └── index.html # Frontend form and result display

└── README.md # Project documentation



## Setup Instructions (Using Anaconda)

1. **Clone the repository**

git clone https://github.com/OmkarDJadhav24/GenAI-Projects.git

cd GenAI-Projects/Sentiment_Classification_IMDb_Review


2. **Download fine-tuned model files from Google Drive**
https://drive.google.com/drive/folders/195Qml9SFmECpCk1VSWIDl3eOQewdmO4Q?usp=drive_link


3. **Rename directory**

Sentiment_Classification_IMDb_Review_model -> model


4. **Create and activate a conda environment**

conda create -n sentiment-env python=3.9

conda activate sentiment-env



5. **Install dependencies**

pip install -r requirements.txt



6. **Run the Flask app**

python app.py


7. **Access the app**

Open your browser and go to: http://127.0.0.1:5000


# Example

**Input**:
"The movie had a gripping story and fantastic acting!"

**Output:**:
Prediction: Positive (0.96 confidence)