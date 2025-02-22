// src/components/SubmitForEsign.js
import React from "react";
import axios from "axios";

const SubmitForEsign = ({ filePath }) => {
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/esign/submit", {
        filePath,
      });
      alert("PDF submitted for eSigning!");
    } catch (error) {
      console.error("Error submitting PDF:", error);
    }
  };

  return (
    <div>
      <h2>Submit for eSign</h2>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitForEsign;
