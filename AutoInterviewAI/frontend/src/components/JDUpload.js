import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const JDUpload = ({ onSkillsExtracted }) => {
  const [file, setFile] = useState(null);
  const [jdData, setJdData] = useState(null);
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
      const response = await axios.post("http://127.0.0.1:8000/upload-jd/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setJdData(response.data);
      if (onSkillsExtracted && response.data.skills) {
        onSkillsExtracted(response.data.skills);
      }
    } catch (err) {
      console.error("JD Upload failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: "12px", color: "#2c3e50" }}>📝 Upload Job Description</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        style={{
          marginLeft: "10px",
          padding: "6px 14px",
          background: "#388e3c",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {jdData && (
        <div
          style={{
            background: "#f9f9f9",
            padding: "18px",
            marginTop: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            whiteSpace: "pre-wrap",
          }}
        >
          <h3 style={{ color: "#333", marginBottom: "10px" }}>Job Description Summary</h3>
          <ReactMarkdown>
            {`- **Job Title:** ${jdData.job_title}
- **Skills:** ${jdData.skills?.join(", ")}
- **Experience Required:** ${jdData.experience_required}
- **Education:** ${jdData.education}
- **Tools:** ${jdData.tools?.join(", ")}

**Summary:**  
${jdData.summary}`}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default JDUpload;
