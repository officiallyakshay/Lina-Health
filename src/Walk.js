import React from 'react';
import './App.css';
import BottomNav from './BottomNav';

function Walk() {
  return (
    <div className="walk">
      <div className="welcome">
        <div style={{ display: 'flex' }}>
          <a href='/'>Back arrow</a>
          <p style={{ marginTop: '0px', marginLeft: 'auto', color: '#b2b2b2' }}>Cardio</p>
        </div>
      </div>
      <h3 style={{ marginTop: '-5px', fontSize: '25px' }}>Walk for 10 minutes</h3>
      <div className="youtubediv">
        <button className="youtubebutton"> 
          <p className="youtubeplay"> ▶ </p>
        </button>
      </div>
      <div className="bookyourcoach">
        <button className="coachmessagebutton"> 
          <p className="coachmessage1"> Coach Message </p>
          <p className="coachmessage2"> Lorem ipsum dolor sit amet consectetur. Get your heart <br /> rate up to burn energy </p>
        </button>
      </div>
      <div className="todaysActivities">
        <p style={{ fontWeight: '700', fontSize: '18px' }}>Today's Activities</p>
        <div>
          <a href="/walk">
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
          </a>
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
      <div className="markascompleted">
        <p style={{ marginTop: '21px' }}>Mark as Completed</p>
      </div>
    </div>
  );
}

export default Walk;