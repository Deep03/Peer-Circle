import React from 'react';
import { useRef, useState, useEffect} from 'react';
import './styles/userauth.css'; // Import the CSS file
import axios from "axios";

export default  function UserAuth() {
  const [form, setForm] = useState({});
  const handleSubmit = async (event) => {

    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    setForm({
      ...form,
      username: username,
      password: password
    })
    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })

    const data = await response.json();
    event.preventDefault();

  };
  

  return (
    <div className="container-wrapper">
      <div className="login-container">
        <h2 className="title">User Authentication</h2>
        <form action="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}