import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <hr />
      <div className="welcome">
        <h5>Welcome</h5>
        <h3 style={{ marginTop: '-15px' }}>John</h3>
      </div>
      <div>
        <button> Book your coach </button>
      </div>
      <div>
        <h5>Today's Activities</h5>
        <div>
          <button>Walk for 30 minutes</button>
          <button>Only eat between 12pm and 8pm</button>
          <button>Track meals in MyFitnessPal</button>
        </div>
      </div>
      <div>
        <p>Home</p>
        <p>Calendar</p>
        <p>Profile</p>
        {/* navbar */}
      </div>
    </div>
  );
}

export default App;
