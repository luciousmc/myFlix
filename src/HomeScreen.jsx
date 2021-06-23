import React from 'react';
import './HomeScreen.css';
import Nav from './components/Nav';
import Banner from './components/Banner';

function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/* Navbar */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
    </div>
  )
}

export default HomeScreen
