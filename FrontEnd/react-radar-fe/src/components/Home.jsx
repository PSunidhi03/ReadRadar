import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to BookBreeze</h1>
        <p className="home-description">Your personalized book recommendation platform.</p>
        <div className="image-grid">
          <div className="grid-item">
            <img src="src/assets/lastOlympian.jpg" alt="Books 1" className="grid-image"/>
          </div>
          <div className="grid-item">
            <img src="src/assets/percy.jpg" alt="Books 2" className="grid-image"/>
          </div>
          <div className="grid-item">
            <img src="src/assets/harry.jpg" alt="Books 3" className="grid-image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;




