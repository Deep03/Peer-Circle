import React, { useState, useEffect, useRef } from 'react';
import './styles/accept.css';
import Peer from 'peerjs';

function Recieve() {
    const [peerId, setPeerId] = useState('');
    const peerInstance = useRef(null);
    const [file, setFile] = useState('');
    const [fileAccepted, setfileAccepted] = useState(false);
    useEffect(() => {
      const peer = new Peer();
      peer.on('open', (id) => {
        setPeerId(id);
        peer.on('connection', function(conn) {
          conn.on('data', function(data) {
            console.log('Received', (typeof data));
            setFile(data);
          });
      });
      });
      }, [])
  const acceptFile = () => {
    console.log('Accepting file');
    setfileAccepted(true);
  }
  const declineFile = () => {
  };

  const downloadFile = () => {
    let fileName = 'file.pdf';
    console.log(file);
    const blob = new Blob([file], { type: 'application/octet-stream' });

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = fileName;
  
    // Append the link to the document body and trigger a click event to download the file
    document.body.appendChild(downloadLink);
    downloadLink.click();
  
    // Clean up: remove the download link and revoke the object URL
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadLink.href);
  };

  return (
    <div className="file-receiving-container">
      <div className="file-details">
      <h2>Your ID: {peerId}</h2>
        <h2>Do you wish to accept  the file?</h2>
        {!fileAccepted ? (
          <div className="action-buttons">
            <button onClick={acceptFile} className="accept-button">Accept</button>
            <button onClick={declineFile} className="decline-button">Decline</button>
          </div>
        ) : (
          <div className="download-section">
            <p>File ready to download!</p>
            <button onClick={downloadFile} className="download-button">Download File</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recieve;