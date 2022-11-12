import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { storage } from "./FirebaseConfig"
import "./OnBoard3.css"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { IoMdAddCircle } from "react-icons/io"
import { async } from "@firebase/util"
import { useNavigate } from "react-router-dom"
import Checklogin from "../components/Checklogin"
function OnBoard3() {
  const token = localStorage.getItem("token")
  const fname2 = useRef()
  const lname2 = useRef()
  const setname2 = useRef()
  const bio2 = useRef()

  // useEffect(() => {
  //   axios
  //     .put(
  //       `/api/user/edit_profile`,
  //       {
  //         user_name: username,
  //         user_firstname: fname,
  //         user_lastname: lname,
  //         user_bio: bio,
  //         profile_pic_url: pic,
  //       },
  //       {
  //         headers: {
  //           Authorization: token,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  const onBoard3Click = async () => {
    axios
      .put(
        "//localhost:4000/api/user/edit_profile",
        {
          user_name: setname2.current.value,
          user_firstname: fname2.current.value,
          user_lastname: lname2.current.value,
          user_bio: bio2.current.value,
          // profile_pic_url: pic2,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const [username, setusername] = useState("")
  const newusername = (e) => {
    setusername(e.target.value)
    //console.log(reqTopic);
  }
  const [fname, setfname] = useState("")
  const newfname = (e) => {
    setfname(e.target.value)
    //console.log(reqTopic);
  }
  const [lname, setlname] = useState("")
  const newlname = (e) => {
    setlname(e.target.value)
    //console.log(reqTopic);
  }
  const [bio, setbio] = useState("")
  const newbio = (e) => {
    setbio(e.target.value)
    //console.log(reqTopic);
  }
  const [pic, setpic] = useState("")
  const newpic = (e) => {
    setpic(e.target.value)
    // console.log(reqTopic);
  }

  //edit-profile-pic
  const [file, setFile] = useState("")
  const [urlProfile, setUrlProfile] = useState("")

  // progress
  const [percent, setPercent] = useState(0)

  // Handle file upload event and update state
  function handleChange(event) {
    // event.preventDefault()
    setFile(event.target.files[0])
    setStatephoto(false)
    // console.log('file', event.target.files[0])
  }

  const handleUpload = () => {
    if (!file) {
      setStatephoto(false)
      alert("Please upload an image first!")
    } else {
      setStatephoto(true)
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
          console.log("file", file)
          setUrlProfile(url)
        })
      }
    )
  }

  const [done, setDone] = useState(false)

  useEffect(() => {
    if (statephoto) {
      setDone(true)
    }
  }, [urlProfile])

  const [statephoto, setStatephoto] = useState(false)

  const navigate = useNavigate()
  return (
    <form>
      <div className="line"> </div>
      <div className="big_container">
        <div className="left_container">
          <form>
            <div className="pic_button">
              <div className="pic_inner">
                <img
                  src={
                    done ? urlProfile : require("../picture/tempprofile.png")
                  }
                  alt="dog"
                  className={done ? "profile-changed" : "picture-profile"}
                />
                <label for="input-image">
                  <img
                    src={require("../picture/editbtn.png")}
                    alt="edit"
                    className="picture-edit"
                  />
                </label>

                {/* <div className="edit_icon">
                  <MdEdit className="edit-icon" size={33} />
                </div> */}
              </div>
              <div className="setup_display" onClick={handleUpload}>
                Set up Display
              </div>
              <div classname="input-box-upload">
                <input
                  type="file"
                  onChange={handleChange}
                  accept="/image/*"
                  id="input-image"
                  className="input_image"
                  required
                />
                {/* <p className="choose-image">{percent} "% done"</p> */}
              </div>
            </div>
            <div className="textleft">Set username</div>
            <input type="text" className="username" ref={setname2} required />
          </form>
        </div>
        <div className="right_container">
          <form>
            <label>
              <div className="firstname">First name</div>
              <input type="text" className="fname" ref={fname2} required />
              <div className="textright">Last name</div>
              <input type="text" className="lname" ref={lname2} required />
              <div className="textright">Add bio</div>
              <textarea className="bio" ref={bio2} />
            </label>
          </form>
        </div>
      </div>
      <div className="small_container">
        <div className="back_position">
          <button
            className="back_button"
            onClick={() => {
              navigate("/onboard2")
            }}
          >
            BACK
          </button>
        </div>
        <div className="lookgood_position">
          <button
            className="lookgood_button"
            onClick={() => {
              onBoard3Click()
              navigate("/onboard4")
            }}
          >
            LOOKS GOOD
          </button>
        </div>
      </div>
      <Checklogin />
    </form>
  )
}
//<button className='back_button'>BACK<Link className='linktoback' to /></button>
export default OnBoard3
