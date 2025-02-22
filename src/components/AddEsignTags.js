// src/components/AddEsignTags.js
import React, { useState } from "react";
import axios from "axios";

const AddEsignTags = ({ filePath }) => {
  const [role1Email, setRole1Email] = useState("role1@example.com");
  const [role2Email, setRole2Email] = useState("dummy@example.com");
  const [role3Email, setRole3Email] = useState("");

  const handleAddTags = async () => {
    const payload = {
      filePath,
      tags: [
        { role: "Role 1", email: role1Email },
        { role: "Role 2", email: role2Email },
        { role: "Role 3", email: role3Email },
      ],
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/esign/add-tags",
        payload
      );
      alert("eSign tags added successfully!");
    } catch (error) {
      console.error("Error adding eSign tags:", error);
    }
  };

  return (
    <div>
      <h2>Add eSign Tags</h2>
      <div>
        <label>Role 1 Email:</label>
        <input
          type="email"
          value={role1Email}
          onChange={(e) => setRole1Email(e.target.value)}
        />
      </div>
      <div>
        <label>Role 2 Email:</label>
        <input
          type="email"
          value={role2Email}
          onChange={(e) => setRole2Email(e.target.value)}
        />
      </div>
      <div>
        <label>Role 3 Email:</label>
        <input
          type="email"
          value={role3Email}
          onChange={(e) => setRole3Email(e.target.value)}
        />
      </div>
      <button onClick={handleAddTags}>Add Tags</button>
    </div>
  );
};

export default AddEsignTags;
