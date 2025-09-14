import React, { useState } from "react";

// Replace this with your deployed backend URL
const BACKEND_URL = "http://127.0.0.1:8000"; // localhost for local testing

export default function LegalAI() {
  const [file, setFile] = useState(null);
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");

  // --- File Upload ---
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first!");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${BACKEND_URL}/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setUploadMessage(`Uploaded ${data.chunks} chunks successfully!`);
    } catch (err) {
      console.error(err);
      setUploadMessage("File upload failed.");
    }
  };

  // --- Ask Question ---
  const handleAsk = async () => {
    if (!query) return alert("Please enter a question!");

    const formData = new FormData();
    formData.append("query", query);

    try {
      const response = await fetch(`${BACKEND_URL}/ask`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setAnswer(data.answer);
    } catch (err) {
      console.error(err);
      setAnswer("Failed to get answer.");
    }
  };

  return (
    <div className="legal-ai-container">
      <h1>Legal AI Assistant</h1>

      {/* File Upload Section */}
      <div className="upload-section">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Document</button>
        <p>{uploadMessage}</p>
      </div>

      {/* Question Section */}
      <div className="question-section">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question about the document"
        />
        <button onClick={handleAsk}>Get Answer</button>
        <div className="answer-box">{answer}</div>
      </div>
    </div>
  );
}
