import React from 'react';
import './App.css';

function BottomNav() {
  return (
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
    </div>
  );
}

export default BottomNav;