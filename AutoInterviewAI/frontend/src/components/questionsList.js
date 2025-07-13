// QuestionList.js
import React from "react";

const QuestionList = ({ questions }) => {
  if (!questions || questions.length === 0) return null;

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "25px",
        marginTop: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        fontFamily: "Segoe UI, sans-serif",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2 style={{ marginBottom: "15px", color: "#333" }}>💬 Interview Questions</h2>
      <ol style={{ paddingLeft: "20px" }}>
        {questions.map((question, index) => (
          <li key={index} style={{ marginBottom: "12px", lineHeight: "1.5" }}>
            {question}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default QuestionList;
