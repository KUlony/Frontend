import React, { useState } from 'react'
import AddEducation from './AddEducation'
import './UserInfo.css'

const UserInfo = () => {
  const [isAddEducation, setIsAddEducation] = useState(null)
  //AddEducation Page
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
  function checkIsConnect(a, b) {
    if (a != null && b != null) {
      return true
    }
  }
  const allEduForm = JSON.parse(localStorage.getItem('allEducation'))
  const eduElements = allEduForm.map((theEdu) => {
    return (
      <section className="education-content">
        <article className="education-school">
          <div>{theEdu.school}</div>
        </article>

        <article className="education-degree-field">
          {theEdu.degree}
          {checkIsConnect(theEdu.degree, theEdu.field) ? ', ' : ''}
          {theEdu.field}
          {checkIsConnect(theEdu.field, theEdu.startMonth) ? ', ' : ''}
          <span className="education-all-date">
            {theEdu.startMonth}
            {checkIsConnect(theEdu.startMonth, theEdu.startYear) ? ' ' : ''}
            {theEdu.startYear}
            {checkIsConnect(theEdu.startYear, theEdu.endMonth) ? ' - ' : ''}
            {theEdu.endMonth}
            {checkIsConnect(theEdu.endMonth, theEdu.endYear) ? ' ' : ''}
            {theEdu.endYear}
          </span>
        </article>
      </section>
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
        <div className="profile-pic-setup">Set up display</div>
      </section>
      <section className="username">
        Username
        <br />
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
        <div>{eduElements}</div>
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
