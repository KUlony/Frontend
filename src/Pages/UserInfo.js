import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import AddEducation from './AddEducation'
import './UserInfo.css'

const UserInfo = () => {
  //api
  const [userData, setUserData] = useState('')
  useEffect(() => {
    axios
      .get('/api/user/634cef6d0bbdc2089aee9a9b/profile', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbGQuNDExMkBnbWFpbC5jb20iLCJpZCI6IjYzNDU3Njg4ZjdjM2Q1MzRmMjYwZmRhMCIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2Njc5NzEzNzIsImV4cCI6MTY2ODA1Nzc3Mn0.gly9ATCPhhspCN2vrM74iaUZtK0OjMXdgRRhcUiPJlw',
        },
      })
      .then((res) => {
        setUserData(res.data)
        // console.log(res.data.user_name)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  //edit
  const username = useRef()
  const bio = useRef()
  const firstname = useRef()
  const lastname = useRef()
  const instagram = useRef()
  const facebook = useRef()

  const [inputArray, setInputArray] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ])

  const editInputArray = (index) => {
    setInputArray((oldarray) =>
      oldarray.map((data, idx) => (idx === index ? !data : data))
    )
  }

  const onClickSave = async () => {
    try {
      // console.log('hello try')
      axios
        .put(
          '/api/user/edit_profile',
          {
            user_name: username.current.value,
            user_firtname: 'kanpech',
            user_lastname: 'tacha',
            user_bio: 'ไม้แก่นเองฮับผม',
            education: [
              {
                school: 'kaset',
                degree: 'best bachelor',
                field_of_study: null,
                start_date: null,
                end_date: null,
                _id: '634adc85e5a0f50a0041c393',
              },
              {
                school: 'deb',
                degree: null,
                field_of_study: null,
                start_date: null,
                end_date: null,
                _id: '634adc85e5a0f50a0041c394',
              },
            ],
            contact: {
              facebook: 'MaikanEIEI',
              ig: 'maikankungza',
              _id: '634adc85e5a0f50a0041c392',
            },
            profile_pic_url:
              'https://cdn.myanimelist.net/images/characters/12/451497.jpg',
            gender: 'male',
          },
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthbnBlY2gudEBrdS50aCIsImlkIjoiNjM0Y2VmNmQwYmJkYzIwODlhZWU5YTliIiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTY2Nzk3NzE3OSwiZXhwIjoxNjY4MDYzNTc5fQ.5SZm06jDG4ey-aryW8gJ8Z-unhuxGrB2xbXN0cEr3Nc',
            },
          }
        )
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  //AddEducation Page
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
          // src={require('../picture/temp-profile.png')}
          src={userData.profile_pic_url}
          alt="profileExample"
          width="150"
          height="150"
        />
        <div className="profile-pic-setup">Set up display</div>
      </section>
      <section className="username">
        Username
        <button onClick={() => editInputArray(0)}> edit </button>
        <br />
        {inputArray[0] ? (
          <input
            class="input-username"
            type="text"
            placeholder="User"
            rows="1"
            cols="20"
            disabled={true}
            ref={username}
            value={userData.user_name}
          />
        ) : (
          <input
            class="input-username"
            type="text"
            placeholder="User"
            rows="1"
            cols="20"
            ref={username}
          />
        )}
      </section>
      <section className="bio">
        Bio
        <button onClick={() => editInputArray(1)}> edit </button>
        <br />
        <input
          class="input-bio"
          type="text"
          placeholder="Bio"
          rows="1"
          cols="20"
          disabled={true}
          value={userData.user_bio}
        />
      </section>
      <section className="firstname">
        <div>
          First name
          <button onClick={editInputArray}> edit </button>
        </div>

        <input
          className="input-firstname"
          type="text"
          placeholder="Firstname"
          rows="1"
          cols="20"
          disabled={true}
          value={userData.user_firtname}
        />
      </section>
      <section className="lastname">
        Last name
        <button onClick={editInputArray}> edit </button>
        <br />
        <input
          class="input-lastname"
          type="text"
          placeholder="Lastname"
          rows="1"
          cols="20"
          disabled={true}
          value={userData.user_lastname}
        ></input>
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
              disabled={true}
              // value={userData.contact.ig}
            />
            <button onClick={editInputArray}> edit </button>
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
              width="25"
              style={{ 'vertical-align': 'middle' }}
            />
            <input
              type="text"
              name="fb-input"
              id="fb-input"
              placeholder="facebook here.."
              disabled={true}
              // value={fb}
            />
            <button onClick={editInputArray}> edit </button>
          </div>
        </article>
      </section>
      <section className="profile-bottom">
        <article className="back-to-home">
          <button className="home-button"> BACK TO HOME </button>
        </article>
        <article className="save">
          <button className="save-button" onClick={onClickSave}>
            SAVE
          </button>
        </article>
      </section>
      {addEducation}
    </main>
  )
}

export default UserInfo
