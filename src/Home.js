import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="home">
      <div className="welcome">
        <h5>Welcome</h5>
        <h3 style={{ marginTop: '-15px' }}>John</h3>
      </div>
      <div className="bookyourcoach">
        <button className="coachButton"> 
          <p className="onboarding">Onboarding</p>
          <p className="coachtext"> Book your <br/> coach </p>
        </button>
      </div>
      <div className="todaysActivities">
        <h5>Today's Activities</h5>
        <div>
          <button>Walk for 30 minutes</button>
          <button>Only eat between 12pm and 8pm</button>
          <button>Track meals in MyFitnessPal</button>
        </div>
      </div>
      <div className="navbar">
        <a href="/">
          <p>Home</p>
        </a>
        <a href="/calendar">
          <p>Calendar</p>
        </a>
        <a href="/profile">
          <p>Profile</p>
        </a>
        {/* navbar */}
      </div>
    </div>
  );
}

export default Home;