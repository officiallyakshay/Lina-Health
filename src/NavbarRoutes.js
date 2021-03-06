import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Calendar from './Calendar';
import Profile from './Profile';
import Walk from './Walk';

class NavbarRoutes extends Component {
  render() {
    return ( 
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/walk' element={<Walk />} />
        <Route exact path='/calendar' element={<Calendar />} />
        <Route exact path='/profile' element={<Profile />} />
      </Routes>
    );
  }
}

export default NavbarRoutes;