import React from 'react';
import './styles/home.css';
function HomePage() {

  return (
<div className="container">
  <div className="top-bar">
    <h1>Find Peers</h1>
    <input type="text" 
    placeholder="Search by User ID" 
    required/>
    <button type="submit" className="submit-button">Submit</button>
  </div>
  
  <div className="card">
    <h3>Upload Files</h3>
    <div className="drop_box">
      <header>
        <h4>Select File here</h4>
      </header>
      <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
      <input type="file" hidden accept=".doc,.docx,.pdf" id="fileID" style={{ display: 'none' }} />
      <button className="btn">Choose File</button>
    </div>
  </div>
</div>

  );
}

export default HomePage;