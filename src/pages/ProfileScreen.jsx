import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import { selectUser } from '../slices/userSlice';
import './ProfileScreen.css';
import { auth } from '../../firebase';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>

        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>

              <PlansScreen />
              
              <button
                onClick={() => auth.signOut()}
                className='profileScreen__signOut'
              >
                Sign Out
              </button>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default ProfileScreen;