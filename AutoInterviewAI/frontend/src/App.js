// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InterviewPage from "./components/interviewPage";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: "#1976d2",
          padding: "15px 30px",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Segoe UI, sans-serif",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>💼 SkillMatch App</div>
        <div style={{ display: "flex", gap: "25px" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>🏠 Home</Link>
          <Link to="/interview" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>🧠 Interview Practice</Link>
        </div>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interview" element={<InterviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
