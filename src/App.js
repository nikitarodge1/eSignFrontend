// src/App.js
import React, { useState } from "react";
import FileUpload from "./components/FileUplaod";
import AddEsignTags from "./components/AddEsignTags";
import PreviewPdf from "./components/PreviewPdf";
import SubmitForEsign from "./components/SubmitForEsign";
import UpdateRole3Email from "./components/UpdateRole3Email";
import "./styles.css";

function App() {
  const [filePath, setFilePath] = useState("");

  return (
    <div>
      <h1>eSign Workflow Application</h1>
      <FileUpload setFilePath={setFilePath} />
      {filePath && (
        <>
          <AddEsignTags filePath={filePath} />
          <PreviewPdf filePath={filePath} />
          <SubmitForEsign filePath={filePath} />
          <UpdateRole3Email filePath={filePath} />
        </>
      )}
    </div>
  );
}

export default App;
