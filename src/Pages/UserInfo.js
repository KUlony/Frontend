import React, { useState } from 'react'
import AddEducation from './AddEducation'

const UserInfo = () => {
  const [isAddEducation, setIsAddEducation] = useState(null)
  function onAddEducationClick() {
    setIsAddEducation(true)
  }
  function onBgClick() {
    setIsAddEducation(null)
  }
  let addEducation = null
  if (!!isAddEducation) {
    addEducation = <AddEducation onBgClick={onBgClick} />
  }
  return (
    <div className="user-info">
      <div className="profile-pic">
        <img
          src={require('../picture/profileexample.jpeg')}
          alt="profileExample"
          width="150"
          height="150"
        />
      </div>
      <div className="username">
        Username
        <textarea
          class="inputUser"
          type="text"
          placeholder="User"
          rows="1"
          cols="20"
        ></textarea>
      </div>
      <div className="bio">
        Bio
        <br />
        <textarea
          class="inputBio"
          type="text"
          placeholder="Bio"
          rows="1"
          cols="20"
        ></textarea>
      </div>
      <div className="firstname">
        First name
        <br />
        <textarea
          class="inputFirstname"
          type="text"
          placeholder="Firstname"
          rows="1"
          cols="20"
        ></textarea>
      </div>
      <div className="lastname">
        Last name
        <br />
        <textarea
          class="inputLastname"
          type="text"
          placeholder="Lastname"
          rows="1"
          cols="20"
        ></textarea>
      </div>
      <div className="detail">
        <div className="education">
          Education
          <button onClick={onAddEducationClick}>add more</button>
        </div>
      </div>
      {addEducation}
    </div>
  )
}

export default UserInfo
