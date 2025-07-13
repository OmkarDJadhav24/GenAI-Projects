// QuestionList.js
import React from "react";

const QuestionList = ({ questions }) => {
  if (!questions || questions.length === 0) return null;

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "30px",
        marginTop: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        fontFamily: "Segoe UI, sans-serif",
        width: "85%",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#2c3e50",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        💬 Interview Questions
      </h2>

      <ol style={{ paddingLeft: "20px", fontSize: "15px", lineHeight: "1.7", color: "#444" }}>
        {questions.map((question, index) => (
          <li key={index} style={{ marginBottom: "14px" }}>
            {question}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default QuestionList;
