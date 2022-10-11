import React, { useState } from 'react'
import './Profile.css'
import UserInfo from './UserInfo'
import Favourite from './Favourite'
import FollowTopic from './FollowTopic'
import Setting from './Setting'
import Navbar from '../components/NavBar'

function Profile() {
  const componentsUserProfile = [
    <UserInfo />,
    <Favourite />,
    <FollowTopic />,
    <Setting />,
  ]
  const [isShowProfile, setIsProfile] = useState(componentsUserProfile[0])
  function onClickProfile(theProfile) {
    setIsProfile(theProfile)
  }

  return (
    <div className="profile">
      <Navbar />
      <div className="profile-top">
        <div className="profile-sidebar">
          <button> User Profile </button> <br />
          <button
            onClick={() => {
              onClickProfile(componentsUserProfile[0])
            }}
          >
            {' '}
            User Info{' '}
          </button>{' '}
          <br />
          <button
            onClick={() => {
              onClickProfile(componentsUserProfile[1])
            }}
          >
            {' '}
            Favourites{' '}
          </button>
          <br />
          <button
            onClick={() => {
              onClickProfile(componentsUserProfile[2])
            }}
          >
            {' '}
            Following topics{' '}
          </button>
          <br />
          <button
            onClick={() => {
              onClickProfile(componentsUserProfile[3])
            }}
          >
            {' '}
            setting{' '}
          </button>
          <br />
        </div>
        <div className="profile-content">{isShowProfile}</div>
      </div>
    </div>
  )
}

export default Profile
