import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import AddEducation from './AddEducation'
import EditEducation from './EditEducation'
import './UserInfo.css'

const UserInfo = () => {
  //api
  const [userData, setUserData] = useState('')
  useEffect(() => {
    axios
      .get('/api/user/636ca2126173d813e9e38cab/profile', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpdHRpcG9uZy50YW1Aa3UudGgiLCJpZCI6IjYzNmNhMjEyNjE3M2Q4MTNlOWUzOGNhYiIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2NjgxMTM3MTcsImV4cCI6MTY2ODIwMDExN30.M4jObJez_IQTDeThmN1lvf0pmvZkLg69PX6O-0BoSp4',
        },
      })
      .then((res) => {
        setUserData(res.data)
        setAllEduForm(res.data.education)
        setEducationUpdated(res.data.education)
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

  const editstyles = {
    border: '1px solid rgba(0, 0, 0, 1)',
  }

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
            user_firstname: firstname.current.value,
            user_lastname: lastname.current.value,
            user_bio: bio.current.value,
            education: educationUpdated,
            contact: {
              facebook: facebook.current.value,
              ig: instagram.current.value,
              _id: '634adc85e5a0f50a0041c392',
            },
            profile_pic_url:
              'https://cdn.myanimelist.net/images/characters/12/451497.jpg',
            gender: 'male',
          },
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpdHRpcG9uZy50YW1Aa3UudGgiLCJpZCI6IjYzNmNhMjEyNjE3M2Q4MTNlOWUzOGNhYiIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2NjgxMTM3MTcsImV4cCI6MTY2ODIwMDExN30.M4jObJez_IQTDeThmN1lvf0pmvZkLg69PX6O-0BoSp4',
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
  const [educationInfo, setEducationInfo] = useState(null)

  const [isAddEducation, setIsAddEducation] = useState(null)

  const [educationUpdated, setEducationUpdated] = useState([])

  function onAddEducationClick() {
    setIsAddEducation(true)
  }
  function onBgClick() {
    setIsAddEducation(null)
  }
  // const addingEducation =()=>{
  //   setEducationUpdated()
  // }
  let addEducation = null
  if (!!isAddEducation) {
    addEducation = (
      <AddEducation onBgClick={onBgClick} educationUpdated={educationUpdated} />
    )
  }

  //edit Education
  function checkIsConnect(a, b) {
    if (a !== '') {
      if (b !== '') {
        return true
      }
    }
  }

  const [isEditEducation, setIsEditEducation] = useState(null)
  const [indexEdit, setIndexEdit] = useState()
  const updateEducation = (data, index) => {
    console.log('data', data)
    console.log(5)

    if (data === null) {
      //delete
      // console.log(
      //   'education20',
      //   educationUpdated
      //     .splice(0, index)
      //     .concat(educationUpdated.splice(index + 1, educationUpdated.length))
      // )
      const st = educationUpdated.splice(0, index)
      const ed = educationUpdated.splice(index + 1, educationUpdated.length)
      const stShowAllEdu = allEduForm.splice(0, index)
      const edShowAllEdu = allEduForm.splice(index + 1, educationUpdated.length)
      // console.log('allEdu 164', allEduForm)
      setEducationUpdated(st.concat(ed))
      setAllEduForm(stShowAllEdu.concat(edShowAllEdu))
    } else {
      //edit
      // educationUpdated
      setEducationUpdated((olddata) =>
        olddata.map((tmp, idx) => (idx === index ? data : tmp))
      )
      console.log('educationupdated 154', educationUpdated)
    }
  }
  // console.log('educationUpdate', educationUpdated)
  function onEditEducationClick(theEdu, index) {
    setIsEditEducation(true)
    setEducationInfo(theEdu)
    setIndexEdit(index)
  }
  const onBgEditClick = () => {
    setIsEditEducation(null)
    setEducationInfo(null)
  }
  let editEducation = null
  if (!!isEditEducation) {
    editEducation = (
      <EditEducation
        onBgEditClick={onBgEditClick}
        educationInfo={educationInfo}
        index={indexEdit}
        updateEducation={updateEducation}
      />
    )
  }

  const [allEduForm, setAllEduForm] = useState([])
  console.log('allEdu 197', allEduForm)

  const eduElements = educationUpdated.map((theEdu, index) => {
    // console.log('theEdu', theEdu)

    return (
      <div>
        {allEduForm[0].school ? (
          <section className="education-content">
            <article
              className="education-school"
              // style={{ display: 'inline', whiteSpace: 'nowrap' }}
            >
              <span>{theEdu.school ? theEdu.school : ''}</span>
              <img
                src={require('../picture/editButton.png')}
                alt="edit-button"
                width="20px"
                className="edit-education-button"
                onClick={() => {
                  onEditEducationClick(theEdu, index)
                }}
              />
            </article>

            <article className="education-degree-field">
              {theEdu.degree ? theEdu.degree : ''}
              {checkIsConnect(theEdu.degree, theEdu.field_of_study) ? ', ' : ''}
              {theEdu.field_of_study ? theEdu.field_of_study : ''}
              {checkIsConnect(theEdu.field_of_study, theEdu.start_date)
                ? ', '
                : ''}
              <span className="education-all-date">
                {theEdu.start_date.split('-')[0]
                  ? theEdu.start_date.split('-')[0]
                  : ''}
                {checkIsConnect(
                  theEdu.start_date.split('-')[0],
                  theEdu.start_date.split('-')[1]
                )
                  ? ' '
                  : ''}
                {theEdu.start_date.split('-')[1]
                  ? theEdu.start_date.split('-')[1]
                  : ''}
                {checkIsConnect(
                  theEdu.start_date.split('-')[1],
                  theEdu.end_date.split('-')[0]
                )
                  ? ' - '
                  : ''}
                {theEdu.end_date.split('-')[0]
                  ? theEdu.end_date.split('-')[0]
                  : ''}
                {checkIsConnect(
                  theEdu.end_date.split('-')[0],
                  theEdu.end_date.split('-')[1]
                )
                  ? ' '
                  : ''}
                {theEdu.end_date.split('-')[1]
                  ? theEdu.end_date.split('-')[1]
                  : ''}
              </span>
            </article>
          </section>
        ) : (
          <div></div>
        )}
      </div>
    )
  })

  return (
    <main className="user-info">
      <section className="profile-pic">
        <img
          // src={require('../picture/temp-profile.png')}
          src={
            !userData
              ? require('../picture/temp-profile.png')
              : userData.profile_pic_url
              ? userData.profile_pic_url
              : ''
          }
          alt="profileExample"
          width="150"
          height="150"
        />
        <div className="profile-pic-setup">Set up display</div>
      </section>
      <section className="username">
        Username
        <img
          src={require('../picture/editButton.png')}
          alt="edit-button"
          width="20px"
          className="edit-username-button"
          onClick={() => editInputArray(0)}
        />
        <br />
        {inputArray[0] ? (
          <input
            class="input-username"
            type="text"
            placeholder="Username"
            rows="1"
            cols="20"
            disabled={true}
            ref={username}
            // value={userData.user_name}
            value={
              !userData ? '' : userData.user_name ? userData.user_name : ''
            }
          />
        ) : (
          <input
            class="input-username"
            type="text"
            placeholder="User"
            rows="1"
            cols="20"
            ref={username}
            style={editstyles}
          />
        )}
      </section>
      <section className="bio">
        Bio
        <img
          src={require('../picture/editButton.png')}
          alt="edit-button"
          width="20px"
          className="edit-bio-button"
          onClick={() => editInputArray(1)}
        />
        <br />
        {inputArray[1] ? (
          <textarea
            class="input-bio"
            type="text"
            placeholder="Bio"
            rows="1"
            cols="20"
            disabled={true}
            ref={bio}
            // value={userData.user_bio}
            value={!userData ? '' : userData.user_bio ? userData.user_bio : ''}
          />
        ) : (
          <textarea
            class="input-bio"
            type="text"
            placeholder="Bio"
            rows="1"
            cols="20"
            ref={bio}
            style={editstyles}
          />
        )}
      </section>
      <section className="firstname">
        <div>
          First name
          <img
            src={require('../picture/editButton.png')}
            alt="edit-button"
            width="20px"
            className="edit-firstname-button"
            onClick={() => editInputArray(2)}
          />
        </div>
        {inputArray[2] ? (
          <input
            className="input-firstname"
            type="text"
            placeholder="Firstname"
            rows="1"
            cols="20"
            disabled={true}
            ref={firstname}
            // value={userData.user_firstname}
            value={
              !userData
                ? ''
                : userData.user_firstname
                ? userData.user_firstname
                : ''
            }
          />
        ) : (
          <input
            className="input-firstname"
            type="text"
            placeholder="Firstname"
            rows="1"
            cols="20"
            ref={firstname}
            style={editstyles}
          />
        )}
      </section>
      <section className="lastname">
        Last name
        <img
          src={require('../picture/editButton.png')}
          alt="edit-button"
          width="20px"
          className="edit-lastname-button"
          onClick={() => editInputArray(3)}
        />
        <br />
        {inputArray[3] ? (
          <input
            class="input-lastname"
            type="text"
            placeholder="Lastname"
            rows="1"
            cols="20"
            disabled={true}
            ref={lastname}
            // value={userData.user_lastname}
            value={
              !userData
                ? ''
                : userData.user_lastname
                ? userData.user_lastname
                : ''
            }
          ></input>
        ) : (
          <input
            class="input-lastname"
            type="text"
            placeholder="Lastname"
            rows="1"
            cols="20"
            ref={lastname}
            style={editstyles}
          ></input>
        )}
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
            />{' '}
            {inputArray[4] ? (
              <input
                type="text"
                classname="input-ig"
                id="ig-input"
                placeholder="add instagram"
                disabled={true}
                ref={instagram}
                value={
                  !userData.contact
                    ? ''
                    : userData.contact.ig
                    ? userData.contact.ig
                    : ''
                }
              />
            ) : (
              <input
                type="text"
                classname="input-ig"
                id="ig-input"
                placeholder="add instagram"
                ref={instagram}
                style={editstyles}
              />
            )}
            <img
              src={require('../picture/editButton.png')}
              alt="edit-button"
              width="20px"
              className="edit-i-button"
              onClick={() => editInputArray(4)}
            />
          </div>
        </article>
        <article className="facebook">
          <div
            className="fb-box"
            // style={{ display: 'inline', whiteSpace: 'nowrap' }}
          >
            <img
              className="fb-img"
              src={require('../picture/fb-icon.png')}
              alt="facebook"
              width="20"
              style={{ 'vertical-align': 'middle' }}
            />{' '}
            {inputArray[5] ? (
              <input
                type="text"
                name="fb-input"
                id="fb-input"
                placeholder="add facebook"
                disabled={true}
                ref={facebook}
                value={
                  !userData.contact
                    ? ''
                    : userData.contact.facebook
                    ? userData.contact.facebook
                    : ''
                }
              />
            ) : (
              <input
                type="text"
                name="fb-input"
                id="fb-input"
                placeholder="add facebook"
                ref={facebook}
                style={editstyles}
              />
            )}
            <img
              src={require('../picture/editButton.png')}
              alt="edit-button"
              width="20px"
              className="edit-fb-button"
              onClick={() => editInputArray(5)}
            />
          </div>
        </article>
      </section>
      <section className="profile-bottom">
        <b className="home-button"> BACK TO HOME </b>
        <div className="save">
          <img
            src={require('../picture/savebtn.png')}
            alt="savebtn"
            onClick={onClickSave}
            className="save-button"
          />
        </div>
      </section>
      {addEducation}
      {editEducation}
    </main>
  )
}

export default UserInfo
