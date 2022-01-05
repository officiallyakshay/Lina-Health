import React from 'react';
import './App.css';
import BottomNav from './BottomNav';

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
          <button className="actButton">
            <p className="actButtonText">
              Walk for 10 minutes
            </p>
            <p className="actButtonText2">Cardio</p>
          </button>
          <button className="actButtonGreen">
            <p className="actButtonText">
              Only eat between 12pm and 8pm
            </p>
            <p className="actButtonText2">Nutrition</p>
          </button>
          <button className="actButton">
            <p className="actButtonText">
              Track meals in MyFitnessPal
            </p>
            <p className="actButtonText2">Calorie's Counting</p>
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default Home;