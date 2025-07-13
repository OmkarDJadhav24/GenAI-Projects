// HomePage.js
import React, { useState, useEffect } from "react";
import ResumeUpload from "../components/resumeUpload";
import JDUpload from "../components/JDUpload";
import SkillMatchDisplay from "../components/SkillMatchDisplay";
import QuestionList from "../components/questionsList";
import axios from "axios";

const HomePage = () => {
  const [resumeSkills, setResumeSkills] = useState([]);
  const [jdSkills, setJdSkills] = useState([]);
  const [matchResult, setMatchResult] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchMatchAndQuestions = async () => {
      if (resumeSkills.length && jdSkills.length) {
        try {
          // 🔁 Match skills
          const matchRes = await axios.post("http://127.0.0.1:8000/match-skills/", {
            resume_skills: resumeSkills,
            jd_skills: jdSkills,
          });
          setMatchResult(matchRes.data);

          // 💬 Generate questions
          const questionRes = await axios.post("http://127.0.0.1:8000/generate-questions/", {
            skills: matchRes.data.matched_skills,
            job_title: "LLM Engineer", // optional — dynamic if you want
          });
          setQuestions(questionRes.data.questions);
        } catch (err) {
          console.error("Skill match or question generation failed:", err);
        }
      }
    };

    fetchMatchAndQuestions();
  }, [resumeSkills, jdSkills]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px", padding: "40px", fontFamily: "Segoe UI, sans-serif", background: "#f5f7fa" }}>
      <h1 style={{ textAlign: "center", marginBottom: "10px", fontSize: "2rem", color: "#333" }}>📄 Resume vs JD Skill Matcher</h1>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        <div style={{ flex: 1, background: "#ffffff", border: "1px solid #e0e0e0", borderRadius: "12px", padding: "25px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)" }}>
          <ResumeUpload onSkillsExtracted={setResumeSkills} />
        </div>
        <div style={{ flex: 1, background: "#ffffff", border: "1px solid #e0e0e0", borderRadius: "12px", padding: "25px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)" }}>
          <JDUpload onSkillsExtracted={setJdSkills} />
        </div>
      </div>

      {matchResult && (
        <div style={{ marginTop: "30px" }}>
          <SkillMatchDisplay matchResult={matchResult} />
        </div>
      )}

      {questions.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <QuestionList questions={questions} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
