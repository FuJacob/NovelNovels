import React, { useState } from 'react';

const PdfUploader = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      // Check if the file is a PDF
      if (file.type === 'application/pdf') {
        setPdfFile(file);
        setErrorMessage(''); // Clear any previous errors
      } else {
        setErrorMessage('Please upload a valid PDF file.');
        setPdfFile(null); // Clear file if not valid
      }
    }
  };

  return (
    <div className="pdf-uploader">
      <h1>Upload PDF File</h1>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
      />

      {/* Display error message if any */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* Display uploaded file name if PDF is selected */}
      {pdfFile && (
        <div>
          <p>Selected file: {pdfFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default PdfUploader;
