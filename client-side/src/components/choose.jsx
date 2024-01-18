import React from 'react';
import './styles/choose.css';
import { useNavigate } from 'react-router-dom';

export default function Choose() {
  const navg = useNavigate();
  const handleSend = async (event) => {
    navg('/send');
  }
  const handleRecieve = async (event) => {
    navg('/accept');
  }
  return (
    <div>
      <button className="send-button" onClick={handleSend}>Send File</button>
      <button className="receive-button"onClick={handleRecieve}>Receive File</button>
    </div>
  );
};

