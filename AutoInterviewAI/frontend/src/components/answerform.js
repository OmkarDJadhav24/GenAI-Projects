// AnswerForm.js
import React, { useState } from "react";
import axios from "axios";

const AnswerForm = ({ questions }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [evaluations, setEvaluations] = useState(Array(questions.length).fill(""));
  const [loading, setLoading] = useState(false);

  const handleAnswerChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleEvaluate = async () => {
    setLoading(true);
    const newEvaluations = [...evaluations];

    for (let i = 0; i < questions.length; i++) {
      try {
        const res = await axios.post("http://127.0.0.1:8000/evaluate-answer/", {
          question: questions[i],
          answer: answers[i],
        });
        newEvaluations[i] = res.data.feedback;
      } catch (err) {
        console.error(`Evaluation for question ${i + 1} failed:`, err);
        newEvaluations[i] = "❌ Evaluation failed. Please try again.";
      }
    }

    setEvaluations(newEvaluations);
    setLoading(false);
  };

  return (
    <div style={{ padding: "30px", background: "#f5f7fa", fontFamily: "Segoe UI, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🧠 Answer Evaluation</h2>

      {questions.map((question, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: "25px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            background: "#fff",
          }}
        >
          <p><strong>Q{idx + 1}:</strong> {question}</p>
          <textarea
            rows={4}
            placeholder="Write your answer here..."
            value={answers[idx]}
            onChange={(e) => handleAnswerChange(idx, e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", marginTop: "10px" }}
          />

          {evaluations[idx] && (
            <div style={{ marginTop: "10px", color: "#333" }}>
              <strong>📝 Evaluation:</strong>
              <div style={{ marginTop: "5px", background: "#eef3f8", padding: "10px", borderRadius: "6px" }}>
                {evaluations[idx]}
              </div>
            </div>
          )}
        </div>
      ))}

      <button
        onClick={handleEvaluate}
        disabled={loading}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          background: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {loading ? "Evaluating..." : "Submit Answers for Evaluation"}
      </button>
    </div>
  );
};

export default AnswerForm;
