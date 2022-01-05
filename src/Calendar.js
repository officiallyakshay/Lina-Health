import React from 'react';
import BottomNav from './BottomNav';

function Calendar() {
  return (
    <div className="calendar">
      <div className="appointments">
        <h3 style={{ marginTop: '-5px', fontSize: '25px' }}>Appointments</h3>
      </div>
      <div className="apptbuttonholder">
        <div className="apptbuttons">
          <p>All</p>
        </div>
        <div className="apptbuttonsmedical">
          <p>Medical</p>
        </div>
        <div className="apptbuttons">
          <p>Coaching</p>
        </div>
      </div>
      <div className="date">
        September 2022
      </div>
      <div className="todaysActivities">
        <div className="appointmentCards">
          <button className="actButton">
            <div style={{ display: 'flex' }}>
              <p className="appointmentDate">
                18 <br /> TUE
              </p>
              <p className="appointmentDr">
                Assessment with Dr. Esho
                <div style={{ fontWeight: '400', fontSize: '16px' }}>
                  10:00 AM - 11:00 AM
                </div>
              </p>
            </div>
            <div style={{ float: 'right', display: 'flex', fontWeight: '300' }}>
              <p style={{ marginLeft: '5px', marginTop: '-0.5px' }}>Medical</p>
            </div>
          </button>

          <button className="actButton">
            <div style={{ display: 'flex' }}>
              <p className="appointmentDate">
                18 <br /> TUE
              </p>
              <p className="appointmentDr">
                Assessment with Dr. Esho
                <div style={{ fontWeight: '400', fontSize: '16px' }}>
                  10:00 AM - 11:00 AM
                </div>
              </p>
            </div>
            <div style={{ float: 'right', display: 'flex', fontWeight: '300' }}>
              <p style={{ marginLeft: '5px', marginTop: '-0.5px' }}>Medical</p>
            </div>
          </button>
        </div>
        <div className="date">
          December 2022
        </div>
        <div className="appointmentCards">
        <button className="actButton">
            <div style={{ display: 'flex' }}>
              <p className="appointmentDate">
                18 <br /> TUE
              </p>
              <p className="appointmentDr">
                Assessment with Dr. Esho
                <div style={{ fontWeight: '400', fontSize: '16px' }}>
                  10:00 AM - 11:00 AM
                </div>
              </p>
            </div>
            <div style={{ float: 'right', display: 'flex', fontWeight: '300' }}>
              <p style={{ marginLeft: '5px', marginTop: '-0.5px' }}>Medical</p>
            </div>
          </button>
          <button className="actButton">
            <div style={{ display: 'flex' }}>
              <p className="appointmentDate">
                18 <br /> TUE
              </p>
              <p className="appointmentDr">
                Assessment with Dr. Esho
                <div style={{ fontWeight: '400', fontSize: '16px' }}>
                  10:00 AM - 11:00 AM
                </div>
              </p>
            </div>
            <div style={{ float: 'right', display: 'flex', fontWeight: '300' }}>
              <p style={{ marginLeft: '5px', marginTop: '-0.5px' }}>Medical</p>
            </div>
          </button>
        </div>
      </div>
    <BottomNav />
    </div>
  );
}

export default Calendar;