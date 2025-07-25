import React from "react";

const SkillMatchDisplay = ({ matchResult }) => {
  const { matched_skills, missing_skills, match_percentage } = matchResult;

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "30px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
        fontFamily: "Segoe UI, sans-serif",
        width: "90%",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>🔍 Skill Match Result</h2>
      <p>
        <strong>✅ Matched Skills:</strong>{" "}
        {matched_skills.length ? matched_skills.join(", ") : "None"}
      </p>
      <p>
        <strong>❌ Missing Skills:</strong>{" "}
        {missing_skills.length ? missing_skills.join(", ") : "None"}
      </p>
      <p>
        <strong>📊 Match Percentage:</strong> {match_percentage}%
      </p>
    </div>
  );
};

export default SkillMatchDisplay;
