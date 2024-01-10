import React, { useState, useEffect, useRef } from 'react';
import './styles/accept.css'; // Import your CSS file for styling
import Peer from 'peerjs';
let fileAccepted = false;

function Recieve() {
    const [peerId, setPeerId] = useState('');
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
    const peerInstance = useRef(null);

    useEffect(() => {
      const peer = new Peer();
      peer.on('open', (id) => {
        setPeerId(id);
        peer.on('connection', function(conn) {
          conn.on('data', function(data) {
            console.log('Received', data);
          });
      });
      });
      }, [])
  const acceptFile = () => {
    console.log(peerId);
  }
  const declineFile = () => {
  };

  const downloadFile = () => {
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
