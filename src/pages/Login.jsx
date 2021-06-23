import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='loginScreen'>
      <div className="loginScreen__background">
        <img
          className='loginScreen__logo'
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <button
          className='loginScreen__button'
        >
          Sign in
        </button>

        <div className="loginScreen__shadow" />
      </div>

      <div className="loginScreen__body">
        <>
          <h1>Unlimited films, TV programms and more.</h1>
          <h2>Watch anywhere. Cancel at anytime!</h2>
          <h3>Ready to watch? Enter your email to create an account and start your experience!</h3>

          <div className="loginScreen__input">
            <form>
              <input
                type="email"
                name=""
                id=""
                placeholder="Email Address"
              />
              <button className="loginScreen__getStarted">GET STARTED</button>
            </form>
          </div>
        </>
      </div>
    </div>
  )
}

export default Login
