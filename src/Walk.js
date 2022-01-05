import React from 'react';
import './App.css';

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
      <div>
        <div className="walkinfo2">
          <p>Streaks</p>
          <p>Details</p>
          <p>Your Stats</p>
        </div>
        <hr />
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          <p style={{ fontWeight: '700', fontSize: '14px'}}>Great work! Keep going!</p>
          <p style={{ fontWeight: '400', fontSize: '12px', marginLeft: '50px', marginTop: '15px' }}>2/5 this week</p>
        </div>
      </div>
      <div className="markascompleted">
        <p style={{ marginTop: '21px' }}>Mark as Completed</p>
      </div>
    </div>
  );
}

export default Walk;