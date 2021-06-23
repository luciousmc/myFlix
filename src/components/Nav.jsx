import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);

    return () => window.removeEventListener('scroll', transitionNavBars);
  }, [])

  return (
    <header className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          src="./images/logo.png"
          className='nav__logo'
          alt=""
        />
        <img
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
          className='nav__avatar'
        />
      </div>
    </header>
  )
}

export default Nav
