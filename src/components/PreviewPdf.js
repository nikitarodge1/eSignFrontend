// src/components/PreviewPdf.js
import React from "react";
import { Document, Page } from "react-pdf";

const PreviewPdf = ({ filePath }) => {
  return (
    <div>
      <h2>Preview PDF</h2>
      <Document file={`http://localhost:3000/uploads/${filePath}`}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PreviewPdf;
