import React from 'react';
import './App.css';

function BottomNav() {
  return (
    <div className="navbar">
      <div className="innerNavBar">
        <a href="/">
          <span class="dot"></span>
          <p>Home</p>
        </a>
      </div>
      <div className="innerNavBar2">
        <a href="/calendar">
          <span class="dot"></span>
          <p>Calendar</p>
        </a>
      </div>
      <div className="innerNavBar">
        <a href="/profile">
          <span class="dot"></span>
          <p>Profile</p>
        </a>
      </div>
    </div>
  );
}

export default BottomNav;