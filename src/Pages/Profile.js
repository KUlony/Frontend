import React, { useState } from 'react'
import './Profile.css'
import UserInfo from './UserInfo'
import Favourite from './Favourite'
import FollowTopic from './FollowTopic'
import Setting from './Setting'
import Navbar from '../components/NavBar'
import logoutpic from '../picture/logout.png'
import g1020 from '../picture/g1020.png'

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

  const [userinfo, setuserinfo] = useState(true) //set true
  const [favourites, setfavourites] = useState(false)
  const [following, setfollowing] = useState(false)
  const [setting, setsetting] = useState(false)

  const toggleuserinfo = () => {
    setuserinfo(true)
    setfavourites(false)
    setfollowing(false)
    setsetting(false)
  }

  const togglefavourites = () => {
    setuserinfo(false)
    setfavourites(true)
    setfollowing(false)
    setsetting(false)
  }

  const togglefollowing = () => {
    setuserinfo(false)
    setfavourites(false)
    setfollowing(true)
    setsetting(false)
  }

  const togglesetting = () => {
    setuserinfo(false)
    setfavourites(false)
    setfollowing(false)
    setsetting(true)
  }

  return (
    <div className="profile">
      <Navbar />
      <div className="profile-top">
        <div className="profile-sidebar">
          <p className="user_profile"> User Profile </p>
          <br></br>
          <br></br>
          <div className="button_sidebar">
            <div className="buttonstyle">
              <button
                className={`btn_click ${userinfo ? 'setgreen' : ''}`}
                onClick={() => {
                  onClickProfile(componentsUserProfile[0])
                  toggleuserinfo()
                }}
              >
                User info
              </button>
              <div className={`${userinfo ? 'setdeepgreen' : 'noting'}`}></div>
            </div>
            <br></br>
            <br></br>
            <div className="buttonstyle">
              <button
                className={`btn_click ${favourites ? 'setgreen' : ''}`}
                onClick={() => {
                  onClickProfile(componentsUserProfile[1])
                  togglefavourites()
                }}
              >
                Favorites
              </button>
              <div
                className={`${favourites ? 'setdeepgreen' : 'noting'}`}
              ></div>
            </div>
            <br></br>
            <br></br>
            <div className="buttonstyle">
              <button
                className={`btn_click ${following ? 'setgreen' : ''}`}
                onClick={() => {
                  onClickProfile(componentsUserProfile[2])
                  togglefollowing()
                }}
              >
                Following topics
              </button>
              <div className={`${following ? 'setdeepgreen' : 'noting'}`}></div>
            </div>
            <br></br>
            <br></br>
            <div className="buttonstyle">
              <button
                className={`btn_click ${setting ? 'setgreen' : ''}`}
                onClick={() => {
                  onClickProfile(componentsUserProfile[3])
                  togglesetting()
                }}
              >
                Setting
              </button>
              <div className={`${setting ? 'setdeepgreen' : 'noting'}`}></div>
            </div>
          </div>
          <br></br>
          <br></br>
          <button className="logout-button">
            <img src={logoutpic} alt="logout" className="logout-img" />
            <span className="logout-text">Log Out</span>
          </button>
          <br></br>
          <img src={g1020} alt="" className="g1020" />
        </div>
        <div className="profile-content">{isShowProfile}</div>
      </div>
    </div>
  )
}

export default Profile
