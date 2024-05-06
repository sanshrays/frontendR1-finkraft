import React from 'react';
import './LandingPage.css';
import backgroundImage from './download.jpeg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <nav>
          <div className="logo">
            <a href="/">finkraft.ai</a>
          </div>
          <ul>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="hero-section">
          <div className="hero-content">
            <h1>$25m in annual savings extracted from unstructured data.</h1>
            <p>Imagine how much money are you losing ?</p>
            <p>Learn how Finkraft solved travel linked GST Input challenges for the world's 6th largest IT services firm.</p>
          </div>
          <div className="hero-image">
            <img src={backgroundImage} alt="Background" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;