import React from 'react';
import './App.css';
import BottomNav from './BottomNav';

function Home() {
  return (
    <div className="home">
      <div className="welcome">
        <p style={{ fontWeight: '400', fontSize: '14px' }}>Welcome</p>
        <h3 style={{ marginTop: '-5px', fontSize: '25px' }}>John</h3>
      </div>
      <div className="bookyourcoach">
        <button className="coachButton"> 
          <p className="onboarding">Onboarding</p>
          <p className="coachtext"> Book your <br/> coach </p>
        </button>
      </div>
      <div className="todaysActivities">
        <p style={{ fontWeight: '700', fontSize: '18px' }}>Today's Activities</p>
        <div>
          <button className="actButton">
            <p className="actButtonText">
              Walk for 10 minutes
            </p>
            <p className="actButtonText2">
              Cardio
              <div style={{ float: 'right', display: 'flex' }}>
                <span class="dot"></span>
                <p style={{ marginLeft: '5px', marginTop: '-0.5px' }}>10 mins</p>
              </div>
            </p>
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