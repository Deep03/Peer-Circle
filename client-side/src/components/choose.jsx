import React from 'react';
import './styles/choose.css';

const Choose = ({ onSendClick, onReceiveClick }) => {
  return (
    <div>
      <button className="send-button" onClick={onSendClick}>Send File</button>
      <button className="receive-button"onClick={onReceiveClick}>Receive File</button>
    </div>
  );
};

export default Choose;
