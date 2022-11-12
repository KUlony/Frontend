import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import AddEducation from "./AddEducation"
import EditEducation from "./EditEducation"
import "./UserInfo.css"
import { storage } from "./FirebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { IoMdAddCircle } from "react-icons/io"

const UserInfo = () => {
  //----------------------api_get-------------------------
  const token = localStorage.getItem("token")
  const user_id = localStorage.getItem("user_id")
  // const token =
  //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpdHRpcG9uZy50YW1Aa3UudGgiLCJpZCI6IjYzNmNhMjEyNjE3M2Q4MTNlOWUzOGNhYiIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2NjgxOTgxOTgsImV4cCI6MTY2ODI4NDU5OH0.jw2oLJwwXXlSad2TvkR7s67CWWrxDU1ByleI8S67Hos'
  const [userData, setUserData] = useState("")
  useEffect(() => {
    axios
      .get(`//localhost:4000/api/user/${user_id}/profile`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setUserData(res.data)
        setAllEduForm(res.data.education)
        setEducationUpdated(res.data.education)
        setUrlProfile(res.data.profile_pic_url)
        // console.log(res.data.user_name)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  //----------------------edit-------------------------
  const username = useRef()
  const bio = useRef()
  const firstname = useRef()
  const lastname = useRef()
  const instagram = useRef()
  const facebook = useRef()
  const [urlProfile, setUrlProfile] = useState("")

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
  //----------------------send_api-------------------------

  const onClickSave = async () => {
    try {
      // console.log('hello try')
      axios
        .put(
          "//localhost:4000/api/user/edit_profile",
          {
            user_name: username.current.value,
            user_firstname: firstname.current.value,
            user_lastname: lastname.current.value,
            user_bio: bio.current.value,
            education: educationUpdated,
            contact: {
              facebook: facebook.current.value,
              ig: instagram.current.value,
            },
            profile_pic_url: urlProfile,
            gender: "male",
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          console.log(res)
          window.location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  //-------------AddEducation_Page-------------
  const [educationInfo, setEducationInfo] = useState("")

  const [isAddEducation, setIsAddEducation] = useState("")

  const [educationUpdated, setEducationUpdated] = useState([])

  function onAddEducationClick() {
    setIsAddEducation(true)
  }
  function onBgClick() {
    setIsAddEducation("")
  }
  let addEducation = null
  if (!!isAddEducation) {
    addEducation = (
      <AddEducation onBgClick={onBgClick} educationUpdated={educationUpdated} />
    )
  }

  //-------------Update_Education(edit or delete)-------------
  function checkIsConnect(a, b) {
    if (a === "") {
      return false
    }
    if (b === "") {
      return false
    }
    if (a === null) {
      return false
    }
    if (b === null) {
      return false
    }
    return true
  }

  const [isEditEducation, setIsEditEducation] = useState(null)
  const [indexEdit, setIndexEdit] = useState()
  const updateEducation = (data, index) => {
    console.log("data", data)
    console.log(5)

    if (data === null) {
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
      console.log("educationupdated 154", educationUpdated)
    }
  }
  console.log("educationUpdate", educationUpdated)
  //-------------Edit_Education-------------

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

  //-------------Edit_Picture_Profile-------------
  const [file, setFile] = useState("")

  // progress
  const [percent, setPercent] = useState(0)

  // Handle file upload event and update state
  function handleChange(event) {
    // event.preventDefault()
    setFile(event.target.files[0])
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!")
    }

    const storageRef = ref(storage, `/files/${file.name}`)

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )

        // update progress
        setPercent(percent)
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log("url is", url)
          console.log(file)
          setUrlProfile(url)
          if (file !== "") {
            alert("Upload Done!!")
          }
        })
      }
    )
  }

  //-------------Edit_Education_Template-------------

  const [allEduForm, setAllEduForm] = useState([])
  // console.log('allEdu 197', allEduForm)
  const eduElements = educationUpdated.map((theEdu, index) => {
    return (
      <div className="user-data">
        {educationUpdated[0].school ? (
          <section className="education-content">
            <article
              className="education-school"
              // style={{ display: 'inline', whiteSpace: 'nowrap' }}
            >
              <span>{theEdu.school ? theEdu.school : ""}</span>
              <img
                src={require("../picture/editButton.png")}
                alt="edit-button"
                width="20px"
                className="edit-education-button"
                onClick={() => {
                  onEditEducationClick(theEdu, index)
                }}
              />
            </article>

            <article>
              {theEdu.degree ? theEdu.degree : ""}
              {checkIsConnect(theEdu.degree, theEdu.field_of_study)
                ? ", " + theEdu.end_date.split("-")[0]
                : ""}
              {checkIsConnect(theEdu.field_of_study, theEdu.start_date)
                ? ", "
                : ""}
              <span className="education-all-date">
                {theEdu.start_date != null
                  ? theEdu.start_date.replace("-", " ")
                  : ""}
                {theEdu.start_date != null && theEdu.end_date != null
                  ? checkIsConnect(
                      theEdu.start_date.split("-")[1],
                      theEdu.end_date.split("-")[0]
                    )
                    ? " - "
                    : ""
                  : ""}
                {theEdu.end_date != null
                  ? theEdu.end_date.replace("-", " ")
                  : ""}
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
      <div className="user-info-main">
        <section className="profile-pic">
          <div className="user-info-profile-box">
            <img
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
              className={
                !userData
                  ? "user-info-profile-temp"
                  : "user-info-profile"
                  ? "user-info-profile"
                  : ""
              }
            />
          </div>
          <label for="input-image">
            <img
              src={require("../picture/editButton.png")}
              alt="edit-button"
              width="30px"
              className="edit-profile-button"
            />
          </label>
          <label for="upload-image">
            <div className="profile-pic-setup">Set up display</div>
          </label>

          {/* <label for="input-image">
            <img src="../picture/editButton.png" />{' '}
          </label> */}
          <div classname="input-box-upload">
            <input
              type="file"
              onChange={handleChange}
              accept="/image/*"
              id="input-image"
              className="choose-image"
            />
            <button
              onClick={handleUpload}
              id="upload-image"
              className="choose-image"
            >
              Upload to Firebase
            </button>
            <p className="choose-image">{percent} "% done"</p>
          </div>
        </section>
        <section className="user-info-username">
          <p className="user-info-username-titile">Username</p>
          <img
            src={require("../picture/editButton.png")}
            alt="edit-button"
            width="20px"
            className="edit-username-button"
            onClick={() => editInputArray(0)}
          />
          <br />
          {inputArray[0] ? (
            <input
              class="input-username1"
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
              class="input-username2"
              type="text"
              placeholder="User"
              rows="1"
              cols="20"
              ref={username}
              style={editstyles}
            />
          )}
        </section>
        <section className="user-info-bio">
          <p className="user-info-bio-titile">Bio</p>
          <img
            src={require("../picture/editButton.png")}
            alt="edit-button"
            width="20px"
            className="edit-bio-button"
            onClick={() => editInputArray(1)}
          />
          <br />
          {inputArray[1] ? (
            <textarea
              class="input-bio1"
              type="text"
              placeholder="Bio"
              rows="1"
              cols="20"
              disabled={true}
              ref={bio}
              // value={userData.user_bio}
              value={
                !userData ? "" : userData.user_bio ? userData.user_bio : ""
              }
            />
          ) : (
            <textarea
              class="input-bio2"
              type="text"
              placeholder="Bio"
              rows="1"
              cols="20"
              ref={bio}
              style={editstyles}
            />
          )}
        </section>
        <section className="user-info-firstname">
          <div>
            <p className="user-info-firstname-titile">First name</p>
            <img
              src={require("../picture/editButton.png")}
              alt="edit-button"
              width="20px"
              className="edit-firstname-button"
              onClick={() => editInputArray(2)}
            />
          </div>
          {inputArray[2] ? (
            <input
              className="input-firstname1"
              type="text"
              placeholder="Firstname"
              rows="1"
              cols="20"
              disabled={true}
              ref={firstname}
              // value={userData.user_firstname}
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
              className="input-firstname2"
              type="text"
              placeholder="Firstname"
              rows="1"
              cols="20"
              ref={firstname}
              style={editstyles}
            />
          )}
        </section>
        <section className="user-info-lastname">
          <p className="user-info-lastname-titile">Last name</p>
          <img
            src={require("../picture/editButton.png")}
            alt="edit-button"
            width="20px"
            className="edit-lastname-button"
            onClick={() => editInputArray(3)}
          />
          <br />
          {inputArray[3] ? (
            <input
              class="input-lastname1"
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
              class="input-lastname2"
              type="text"
              placeholder="Lastname"
              rows="1"
              cols="20"
              ref={lastname}
              style={editstyles}
            ></input>
          )}
        </section>
        {/* education css */}
        <div className="user-info-onboard4-edu-container">
          <span className="user-info-onboard4-edu-header">
            Education
            <span
              className="user-info-add-more-button"
              onClick={onAddEducationClick}
            >
              ADD MORE
              <IoMdAddCircle size={20} className="user-info-add-button-icon" />
            </span>
          </span>
          <div className="user-info-edu-added">
            <div className="user-info-degree-faculty">
              <div>{eduElements}</div>
              {/* <div className="university-name">Kasetsart University</div>
                <span className="degree">Bachelor's degree, </span>
                <span className="faculty">Computer engineering</span> */}
            </div>
          </div>
        </div>
        {/* <section
          className="education"
          style={{ display: "inline", whiteSpace: "nowrap" }}
        >
          Education
          <button onClick={onAddEducationClick}>add more</button>
          <div>{eduElements}</div>
        </section> */}

        <section className="user-info-contact">
          <p className="user-info-contact-title">Contact</p>
          <article className="instagram">
            <div
              className="ig-box"
              style={{ display: "inline", whiteSpace: "nowrap" }}
            >
              <img
                className="ig-img"
                src={require("../picture/ig-icon.png")}
                alt="instagram"
                width="23"
                height="23"
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
                  className="ig-img-input1"
                  value={
                    !userData.contact
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
                  className="ig-img-input1"
                />
              )}
              <img
                src={require("../picture/editButton.png")}
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
                src={require("../picture/fb-icon.png")}
                alt="facebook"
                width="23"
                height="23"
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
                  className="ig-img-input1"
                  value={
                    !userData.contact
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
                  className="ig-img-input1"
                />
              )}
              <img
                src={require("../picture/editButton.png")}
                alt="edit-button"
                width="20px"
                className="edit-i-button"
                onClick={() => editInputArray(5)}
              />
            </div>
          </article>
        </section>
      </div>

      <section className="profile-bottom">
        <b className="home-button"> BACK TO HOME </b>
        <div className="save">
          <img
            src={require("../picture/savebtn.png")}
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
