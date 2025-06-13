from flask import Flask, render_template, request
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import torch.nn.functional as F

app = Flask(__name__)

model_path = "./model"
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModelForSequenceClassification.from_pretrained(model_path)
model.eval()   # Set the module in evaluation mode.


def predict_sentiment(review):
    """Explaination of each below step is in Mini-Project-transformer.ipynb file"""

    inputs = tokenizer(review, return_tensors="pt", padding='max_length', truncation=True, max_length=256)
    with torch.no_grad():
        output = model(**inputs)
        probs = F.softmax(output.logits, dim=1)
        predicted_class = torch.argmax(probs, dim=1).item()
        confidence = probs[0][predicted_class].item()
    label = "Positive" if predicted_class == 1 else "Negative"
    return label, confidence

@app.route("/", methods=["GET", "POST"])
def index():
    result = None
    if request.method == "POST":
        user_input = request.form["review"]
        label, confidence = predict_sentiment(user_input)
        result = f"Prediction: {label} ({confidence:.2f} confidence)"
        return render_template("index.html", result=result)
    return render_template("index.html", result=result)


if __name__ == "__main__":
    app.run(debug=True)