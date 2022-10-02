import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'
import profileEx from '../picture/profileexample.jpeg'
import logout from '../picture/logout.png'

// import { Navigate } from 'react-router-dom'
import './Profile.css'
import UserInfo from './UserInfo'

function Profile() {
  const componentsUserProfile = [<UserInfo />]
  const [isShowUserInfo, setIsShowUserInfo] = useState(false)
  function onClickUserInfo() {
    setIsShowUserInfo(!isShowUserInfo)
  }
  return (
    <div>
      <div className="profile-side-bar">
        <div className="user-profile">
          <button> User Profile </button> <br />
          <button onClick={onClickUserInfo}> User Info </button> <br />
          {isShowUserInfo && componentsUserProfile[0]}
          <button> Favourites </button>
          <br />
          <button> Following topics </button>
          <br />
          <button> setting </button>
          <br />
        </div>

        {/* <ul className="user-bot">
          <li>
            <Link to="/" className="logout">
              <div className="borderLogout">
                <img
                  src={logout}
                  alt="logout"
                  width="15"
                  height="15"
                  className="logout_img"
                />{' '}
                Log Out
              </div>
            </Link>
          </li>
          <li>
            <Link to="./home" className="backToHome">
              <div className="borderBackToHome"> BACK TO HOME</div>
            </Link>
          </li>
          <li>
            <Link to="./" className="save">
              <div className="borderSave"> SAVE</div>
            </Link>
          </li>
        </ul> */}
      </div>
    </div>
  )
}

export default Profile
