import React from 'react';
import { useRef, useState, useEffect} from 'react';
import './userauth.css'; // Import the CSS file

function UserAuth() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    console.log('Submitted:', { username, password });
  };

  return (
    <div className="container-wrapper">
      <div className="login-container">
        <h2 className="title">User Authentication</h2>
        <form onSubmit={handleSubmit}>
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

export default UserAuth;
