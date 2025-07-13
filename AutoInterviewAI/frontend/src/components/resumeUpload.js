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

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload-resume/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Received summary from API:", response.data.summary);
      setSummary(response.data.summary);

      // 🔍 Extract skills line
      const skillLine = response.data.summary.match(/\*\*Skills:\*\*\s(.+)/);
      if (skillLine) {
        const skills = skillLine[1].split(",").map((s) => s.trim());
        console.log("Extracted Resume Skills:", skills);
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
      <h2 style={{ marginBottom: "10px", color: "#2c3e50" }}>📄 Upload Resume</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: "10px", padding: "6px 12px", background: "#007bff", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
        {loading ? "Uploading..." : "Upload"}
      </button>

      {summary && (
        <div style={{ background: "#f9f9f9", padding: "15px", marginTop: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
          <h3>Resume Summary</h3>
          <ReactMarkdown>{summary}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;
