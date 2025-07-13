import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const ResumeUpload = ({ onSkillsExtracted }) => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload-resume/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setSummary(response.data.summary);

      const skillLine = response.data.summary.match(/\*\*Skills:\*\*\s(.+)/);
      if (skillLine) {
        const skills = skillLine[1].split(",").map((s) => s.trim());
        if (onSkillsExtracted) onSkillsExtracted(skills);
      }
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: "12px", color: "#2c3e50" }}>📄 Upload Resume</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        style={{
          marginLeft: "10px",
          padding: "6px 14px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {summary && (
        <div
          style={{
            background: "#f9f9f9",
            padding: "18px",
            marginTop: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ color: "#333", marginBottom: "10px" }}>Resume Summary</h3>
          <ReactMarkdown>{summary}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;
