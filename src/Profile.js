import React from 'react';
import BottomNav from './BottomNav';

function Profile() {
  return (
    <div className="profile">
      <div>
        <span id="profilepic" class="dot"></span>
        <div style={{ float: 'right', marginTop: '-55px' }}>Setting logo</div>
        <p className="profilename">John Doe</p>
        
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '-30px' }}>
        <div>
          <p className="profilegoals">200lbs</p>
          <p className="profilegoals2">Target Weight</p>
        </div>
        <div>
          <p className="profilegoals">5 days</p>
          <p className="profilegoals2">Streak</p>
        </div>
        <div>
          <p className="profilegoals">?</p>
          <p className="profilegoals2">Activity/d</p>
        </div>
      </div>
      <div className="viewplaybook">
        <p style={{ marginTop: '21px' }}>View Playbook</p>
      </div>
      <div>
        <p style={{ fontSize: '20px', fontWeight: '700', textAlign: 'center' }}>Integrations</p>
      </div>
      <BottomNav />
    </div>
  );
}

export default Profile;