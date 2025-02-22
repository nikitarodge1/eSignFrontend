// src/components/UpdateRole3Email.js
import React, { useState } from "react";
import axios from "axios";

const UpdateRole3Email = ({ filePath }) => {
  const [role3Email, setRole3Email] = useState("");

  const handleUpdate = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/esign/update-role3",
        { filePath, role3Email }
      );
      alert("Role 3 email updated successfully!");
    } catch (error) {
      console.error("Error updating Role 3 email:", error);
    }
  };

  return (
    <div>
      <h2>Update Role 3 Email</h2>
      <div>
        <label>Role 3 Email:</label>
        <input
          type="email"
          value={role3Email}
          onChange={(e) => setRole3Email(e.target.value)}
        />
      </div>
      <button onClick={handleUpdate}>Update Email</button>
    </div>
  );
};

export default UpdateRole3Email;
