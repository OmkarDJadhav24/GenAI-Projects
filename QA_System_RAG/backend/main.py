import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from langchain_huggingface import HuggingFaceEndpoint
from langchain.prompts import PromptTemplate
from langchain.chains import RetrievalQA
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.document_loaders import PyPDFLoader

UPLOAD_FOLDER = "data"

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load LLM
llm = HuggingFaceEndpoint(
    repo_id="HuggingFaceH4/zephyr-7b-beta",
    temperature=0.7,
    max_new_tokens=256
)

# Embeddings model
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

def process_pdf(file_path):
    loader = PyPDFLoader(file_path)
    pages = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    texts = text_splitter.split_documents(pages)
    vectorstore = FAISS.from_documents(texts, embeddings)
    return vectorstore

# Global FAISS index
db = None

@app.route("/upload", methods=["POST"])
def upload_pdf():
    global db
    file = request.files['file']
    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        db = process_pdf(file_path)
        return jsonify({"message": "PDF uploaded and indexed successfully."})
    return jsonify({"error": "No file uploaded."}), 400

@app.route("/query", methods=["POST"])
def query_pdf():
    global db
    if db is None:
        return jsonify({"error": "No PDF indexed yet."}), 400
    question = request.get_json(force=True).get("question")
    qa = RetrievalQA.from_chain_type(llm=llm, retriever=db.as_retriever(), return_source_documents=False)
    result = qa.invoke(question)
    print("result: ", result)
    return jsonify({"response": result})

@app.route("/", methods=["GET"])
def serve_frontend():
    return send_from_directory("../frontend", "index.html")

@app.route("/<path:path>", methods=["GET"])
def serve_static(path):
    return send_from_directory("../frontend", path)

if __name__ == '__main__':
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    app.run(debug=True, port=5000)
