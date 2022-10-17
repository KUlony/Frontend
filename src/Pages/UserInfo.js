import React, { useState } from 'react'
import AddEducation from './AddEducation'
import './UserInfo.css'

const UserInfo = () => {
  const [isAddEducation, setIsAddEducation] = useState(null)
  //Education
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
  //check if local not defined
  if (localStorage.getItem('allEducation') === null) {
    localStorage.setItem('allEducation', JSON.stringify([]))
  }

  const allEduForm = JSON.parse(localStorage.getItem('allEducation'))
  const eduElements = allEduForm.map((theEdu) => {
    return (
      <div className="education-main">
        <div>{theEdu.school}</div>
        <div>{theEdu.degree}</div>
        <div>{theEdu.field}</div>
      </div>
    )
  })
  return (
    <main className="user-info">
      <section className="profile-pic">
        <img
          src={require('../picture/temp-profile.png')}
          alt="profileExample"
          width="150"
          height="150"
        />
      </section>
      <section className="username">
        Username
        <textarea
          class="input-username"
          type="text"
          placeholder="User"
          rows="1"
          cols="20"
          disabled={true}
        ></textarea>
      </section>
      <section className="bio">
        Bio
        <br />
        <textarea
          class="input-bio"
          type="text"
          placeholder="Bio"
          rows="1"
          cols="20"
        ></textarea>
      </section>
      <section className="firstname">
        <div>First name</div>

        <input
          className="input-firstname"
          type="text"
          placeholder="Firstname"
          rows="1"
          cols="20"
        />
      </section>
      <section className="lastname">
        Last name
        <br />
        <textarea
          class="input-lastname"
          type="text"
          placeholder="Lastname"
          rows="1"
          cols="20"
        ></textarea>
      </section>

      <section
        className="education"
        style={{ display: 'inline', whiteSpace: 'nowrap' }}
      >
        Education
        <button onClick={onAddEducationClick}>add more</button>
        {eduElements}
      </section>
      <section className="contact">
        contact
        <article className="instagram">
          <div
            className="ig-box"
            style={{ display: 'inline', whiteSpace: 'nowrap' }}
          >
            <img
              className="ig-img"
              src={require('../picture/ig-icon.png')}
              alt="instagram"
              width="20"
              height="20"
              style={{ 'vertical-align': 'middle' }}
            />
            <input
              type="text"
              name="ig-input"
              id="ig-input"
              placeholder="ig here.."
            />
          </div>
        </article>
        <article className="facebook">
          <div
            className="fb-box"
            style={{ display: 'inline', whiteSpace: 'nowrap' }}
          >
            <img
              className="fb-img"
              src={require('../picture/fb-icon.png')}
              alt="facebook"
              width="20"
              height="20"
              style={{ 'vertical-align': 'middle' }}
            />
            <input
              type="text"
              name="fb-input"
              id="fb-input"
              placeholder="facebook here.."
            />
          </div>
        </article>
      </section>
      <section className="profile-bottom">
        <article className="back-to-home">
          <button className="home-button"> BACK TO HOME </button>
        </article>
        <article className="save">
          <button className="save-button">SAVE</button>
        </article>
      </section>
      {addEducation}
    </main>
  )
}

export default UserInfo
