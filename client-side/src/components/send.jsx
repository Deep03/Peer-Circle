import React, { useState, useEffect, useRef } from 'react';
import './styles/home.css';
import Peer from 'peerjs';

function HomePage() {
  const [form, setForm] = useState({});
  const usernameRef = useRef(null);
  const [peerId, setPeerId] = useState('');
  let [remotepeerId] = useState('');
  const peerInstance = useRef(null);
  useEffect(() => {
    const peer = new Peer();
    peer.on('open', (id) => {
      setPeerId(id)
    });
    peerInstance.current = peer;
  }, [])

  const call = (remoteid) => {
    var conn = peerInstance.current.connect(remoteid);
    conn.on('open', function(){
      console.log(remoteid);
      console.log("SEND HI TO PEER");
      conn.send('hi!');
    });
  }

  // submit button handler
  const handleSubmit = async (event) => {
    const userid = usernameRef.current.value;
    remotepeerId = userid;
    call(remotepeerId);
    event.preventDefault();

    // code to used when upgrading to a different version
    // event.preventDefault();
    // setForm({
    //   ...form,
    //   userid: userid
    // });
    // event.preventDefault();

    // const response = await fetch('http://localhost:8080/home', {
    //   method: 'POST',
    //   body: JSON.stringify(form),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
      
    // });
    // const data = await response.json();
    // if (data == true) {

    // }

  };

  return (
    <div className="container">
      <div className="top-bar">
        <h1>Connect Peer</h1>
        <form onSubmit={handleSubmit}>
          <input 
            id="username" 
            type="text" 
            placeholder="Type the Peer ID" 
            required 
            ref={usernameRef} // Reference to the username input
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
  
      <div className="card">
        <h3>Upload Files</h3>
        <div className="drop_box">
          <header>
            <h4>Select File here</h4>
          </header>
          <p>Files Supported: PDF, TEXT, DOC, DOCX</p>
          <input type="file" hidden accept=".doc,.docx,.pdf" id="fileID" style={{ display: 'none' }} />
          <button className="btn">Choose File</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
