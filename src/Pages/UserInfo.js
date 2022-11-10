import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import AddEducation from "./AddEducation"
import "./UserInfo.css"

const UserInfo = () => {
  //api
  const [userData, setUserData] = useState("")
  useEffect(() => {
    axios
      .get("/api/user/6345767f2b95ee9f9c0a663d/profile", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MDU4NzY3LCJleHAiOjE2NjgxNDUxNjd9.NJQU4HZ6PGXYigF-G3P5B0-zieqjl4y4jWq4qUMovG8",
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

  // console.log(userData.contact.ig)
  const editstyles = {
    border: "1px solid rgba(0, 0, 0, 1)",
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
          "/api/user/edit_profile",
          {
            user_name: username.current.value,
            user_firstname: firstname.current.value,
            user_lastname: lastname.current.value,
            user_bio: bio.current.value,
            education: [
              {
                school: "kaset",
                degree: "best bachelor",
                field_of_study: null,
                start_date: null,
                end_date: null,
                _id: "634adc85e5a0f50a0041c393",
              },
              {
                school: "deb",
                degree: null,
                field_of_study: null,
                start_date: null,
                end_date: null,
                _id: "634adc85e5a0f50a0041c394",
              },
            ],
            contact: {
              facebook: facebook.current.value,
              ig: instagram.current.value,
              _id: "634adc85e5a0f50a0041c392",
            },
            profile_pic_url:
              "https://cdn.myanimelist.net/images/characters/12/451497.jpg",
            gender: "male",
          },
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MDU4NzY3LCJleHAiOjE2NjgxNDUxNjd9.NJQU4HZ6PGXYigF-G3P5B0-zieqjl4y4jWq4qUMovG8",
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
  if (localStorage.getItem("allEducation") === null) {
    localStorage.setItem("allEducation", JSON.stringify([]))
  }
  function checkIsConnect(a, b) {
    if (a != null && b != null) {
      return true
    }
  }
  const allEduForm = JSON.parse(localStorage.getItem("allEducation"))
  const eduElements = allEduForm.map((theEdu) => {
    return (
      <section className="education-content">
        <article className="education-school">
          <div>{theEdu.school}</div>
        </article>

        <article className="education-degree-field">
          {theEdu.degree}
          {checkIsConnect(theEdu.degree, theEdu.field) ? ", " : ""}
          {theEdu.field}
          {checkIsConnect(theEdu.field, theEdu.startMonth) ? ", " : ""}
          <span className="education-all-date">
            {theEdu.startMonth}
            {checkIsConnect(theEdu.startMonth, theEdu.startYear) ? " " : ""}
            {theEdu.startYear}
            {checkIsConnect(theEdu.startYear, theEdu.endMonth) ? " - " : ""}
            {theEdu.endMonth}
            {checkIsConnect(theEdu.endMonth, theEdu.endYear) ? " " : ""}
            {theEdu.endYear}
          </span>
        </article>
        <br />
      </section>
    )
  })

  return (
    <main className="user-info">
      <section className="profile-pic">
        <img
          // src={require('../picture/temp-profile.png')}
          src={
            !userData
              ? require("../picture/temp-profile.png")
              : userData.profile_pic_url
              ? userData.profile_pic_url
              : ""
          }
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
            placeholder="Username"
            rows="1"
            cols="20"
            disabled={true}
            ref={username}
            // value={userData.user_name}
            value={
              !userData ? "" : userData.user_name ? userData.user_name : ""
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
        <button onClick={() => editInputArray(1)}> edit </button>
        <br />
        {inputArray[1] ? (
          <input
            class="input-bio"
            type="text"
            placeholder="Bio"
            rows="1"
            cols="20"
            disabled={true}
            ref={bio}
            // value={userData.user_bio}
            value={!userData ? "" : userData.user_bio ? userData.user_bio : ""}
          />
        ) : (
          <input
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
          <button onClick={() => editInputArray(2)}> edit </button>
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
            // value={userData.user_firtname}
            value={
              !userData
                ? ""
                : userData.user_firstname
                ? userData.user_firstname
                : ""
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
        <button onClick={() => editInputArray(3)}> edit </button>
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
                ? ""
                : userData.user_lastname
                ? userData.user_lastname
                : ""
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
        style={{ display: "inline", whiteSpace: "nowrap" }}
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
            style={{ display: "inline", whiteSpace: "nowrap" }}
          >
            <img
              className="ig-img"
              src={require("../picture/ig-icon.png")}
              alt="instagram"
              width="20"
              height="20"
              style={{ "vertical-align": "middle" }}
            />{" "}
            {inputArray[4] ? (
              <input
                type="text"
                classname="input-ig"
                id="ig-input"
                placeholder="add instagram"
                disabled={true}
                ref={instagram}
                value={
                  !userData
                    ? ""
                    : userData.contact.ig
                    ? userData.contact.ig
                    : ""
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
            <button onClick={() => editInputArray(4)}> edit </button>
          </div>
        </article>
        <article className="facebook">
          <div
            className="fb-box"
            // style={{ display: 'inline', whiteSpace: 'nowrap' }}
          >
            <img
              className="fb-img"
              src={require("../picture/fb-icon.png")}
              alt="facebook"
              width="20"
              style={{ "vertical-align": "middle" }}
            />{" "}
            {inputArray[5] ? (
              <input
                type="text"
                name="fb-input"
                id="fb-input"
                placeholder="add facebook"
                disabled={true}
                ref={facebook}
                value={
                  !userData
                    ? ""
                    : userData.contact.facebook
                    ? userData.contact.facebook
                    : ""
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
            <button onClick={() => editInputArray(5)}> edit </button>
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
