import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <header>
        <h1>DEV@Deakin</h1>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="button-container">
          <button className="post-button">Post</button>
          <button className="login-button" onClick={() => navigate('/login')}>Login</button>
        </div>
      </header>
    </div>
  );
};

export default Homepage;
