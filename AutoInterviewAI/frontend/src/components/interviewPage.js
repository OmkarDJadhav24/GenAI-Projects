// InterviewPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import AnswerForm from "../components/answerform";

const InterviewPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/generate-questions/", {
          skills: ["python", "openai", "langchain"], // static or dynamic
          job_title: "LLM Engineer",
        });
        setQuestions(response.data.questions || []);
      } catch (err) {
        console.error("Failed to fetch questions:", err);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Segoe UI, sans-serif",
        background: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "#2c3e50",
          marginBottom: "30px",
        }}
      >
        🧠 Interview Practice
      </h1>

      {questions.length > 0 ? (
        <AnswerForm questions={questions} />
      ) : (
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#888",
            marginTop: "60px",
          }}
        >
          Loading questions...
        </p>
      )}
    </div>
  );
};

export default InterviewPage;
