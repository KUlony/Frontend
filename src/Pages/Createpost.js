import React, { useEffect, useState } from "react"
import "./Createpost.css"
import storage from "../components/FirebaseConfig"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import Topicselect from "../components/Topicselect"
import Sheetpost from "../picture/Sheetpost.png"
import uploadicon from "../picture/uploadicon.png"
import { IoIosArrowBack } from "react-icons/io"
import Navbar from "../components/NavBar"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"

function Createpost() {
  const [edittopicheck, seteditTopicCheck] = useState(true)
  const [discomferm, setdiscomferm] = useState(false)
  const [reqtitle, setreqtitle] = useState(true)
  const [reqcontent, setreqcontent] = useState(true)
  const [reqtopic, setreqtopic] = useState(true)
  const [items, setItems] = useState([])
  const [iditem, setIditem] = useState([])
  const [urlcover, setUrl] = useState("")

  const topicselect = () => {
    seteditTopicCheck(!edittopicheck)
    console.log(edittopicheck)
  }
  const topicselectsend = () => {
    seteditTopicCheck(!edittopicheck)
    const items = JSON.parse(localStorage.getItem("itemed"))
    const iditem = JSON.parse(localStorage.getItem("iditemed"))
    if (items) {
      console.log(items)
      console.log(iditem)
      setItems(items)
      setIditem(iditem)
    }
  }

  const token = localStorage.getItem("token")

  // const checkedItems = items.length
  //   ? items.reduce((total, item) => {
  //       return total + ", " + item
  //     })
  //   : ""

  useEffect(() => {
    if (items.length) {
      setreqtopic(false)
    } else {
      setreqtopic(true)
    }
  })

  useEffect(() => {
    let textArea = document.getElementById("inputT")
    let characterCounter = document.getElementById("char_count_title")

    const countCharacters = () => {
      let numOfEnteredChars = textArea.value.length
      characterCounter.textContent = numOfEnteredChars + "/200"

      if (numOfEnteredChars >= 195) {
        characterCounter.style.color = "red"
      } else if (numOfEnteredChars >= 180) {
        characterCounter.style.color = "orange"
      } else {
        characterCounter.style.color = "#339C64"
      }
    }

    textArea.addEventListener("input", countCharacters)
  })

  useEffect(() => {
    let textArea = document.getElementById("inputC")
    let characterCounter = document.getElementById("char_count_content")

    const countCharacters = () => {
      let numOfEnteredChars = textArea.value.length
      characterCounter.textContent = numOfEnteredChars + "/25000"

      if (numOfEnteredChars >= 24995) {
        characterCounter.style.color = "red"
      } else if (numOfEnteredChars >= 24950) {
        characterCounter.style.color = "orange"
      } else {
        characterCounter.style.color = "#339C64"
      }
    }

    textArea.addEventListener("input", countCharacters)
  })

  const handlereqT = (e) => {
    if (e.target.value.trim().length) {
      setreqtitle(false)
    } else {
      setreqtitle(true)
    }
  }
  // console.log("title", reqtitle)

  const handlereqC = (e) => {
    if (e.target.value.trim().length) {
      setreqcontent(false)
    } else {
      setreqcontent(true)
    }
  }
  // console.log("content", reqcontent)

  // State to store uploaded file
  const [file, setFile] = useState("")
  const [filemult, setFileMult] = useState([])

  // progress
  const [percent, setPercent] = useState(0)
  const [percentmult, setPercentMult] = useState(0)

  const [urls, setUrls] = useState([])

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function handleChangemult(event) {
    setFileMult([])
    if (event.target.files.length > 10) {
      alert("Can upload up to 10 pics!!")
      setFileMult([])
      return
    }
    for (let i = 0; i < event.target.files.length; i++) {
      const newImage = event.target.files[i]
      // newImage["id"] = Math.random()
      setFileMult((prevState) => [...prevState, newImage])
    }
  }

  const [statec, setStateC] = useState(false)

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!")
      return
    } else if (statec) {
      alert("Already Upload!!")
      return
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
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            setUrl(url)
            console.log(url)
          })
          .then(() => alert("Images uploaded"))
      }
    )
    setStateC(true)
  }

  const [statem, setStateM] = useState(false)

  const handleUploadmult = () => {
    // console.log(filemult)
    if (filemult.length === 0) {
      alert("Please upload an image first!")
      return
    } else if (filemult != null && statem) {
      alert("Already Upload!!")
      return
    }

    const promises = []
    filemult.map((file) => {
      const storageRef = ref(storage, `/files/${file.name}`)

      // progress can be paused and resumed. It also exposes progress updates.
      // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file)

      promises.push(uploadTask)
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percentmult = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )

          // update progress
          setPercentMult(percentmult)
        },
        (err) => console.log(err),
        async () => {
          // download url
          await getDownloadURL(uploadTask.snapshot.ref).then((urls) => {
            setUrls((prevState) => [...prevState, urls])
            // console.log(urls)
          })
        }
      )
    })
    Promise.all(promises)
      .then(() => alert("ALL images uploaded"))
      .catch((err) => console.log(err))
    setStateM(true)
    console.log("image:", filemult)
    console.log("url", urls)
  }

  console.log("image:", filemult)
  // console.log("url", urls)

  function btncondis(e) {
    setdiscomferm(e)
  }

  // console.log()
  let navigate = useNavigate()

  const senddata = () => {
    let title = document.getElementById("inputT")
    let content = document.getElementById("inputC")

    axios
      .post(
        "https://kulony-backend.herokuapp.com/api/post/create",
        {
          topic_id: iditem,
          post_title: title.value,
          post_content: content.value,
          cover_photo_url: urlcover,
          post_photo_url: urls,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MTAyMTM0LCJleHAiOjE2NjgxODg1MzR9.oIbRkgrR4b7tSaEySHYyVig26NBFTdSYdsLBteNdfKg`,
          },
        }
      )
      .then((res) => {
        console.log(res.data)
        navigate("/mypost")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <Navbar />
      <div className="all">
        <div className="bth">
          <Link to="/home" className="backtohome">
            <IoIosArrowBack className="picback" />
            Back to home
          </Link>
        </div>
        <div className="createTitle">
          <h1 className="create">Create a post </h1>
          <img src={Sheetpost} alt="picsheet" className="picsheet"></img>
        </div>
        <div className="allcontent">
          <div className="titlecreate">
            <div className="titlespan">
              <p className={`namet ${reqtitle ? "nametreq" : ""}`}>
                Title
                {/* <span className={`${!reqtitle ? "noting" : ""}`}>*</span> */}
              </p>
              <p className="name">
                <span id="char_count_title" className="char_count_title">
                  0/200
                </span>
              </p>
            </div>
            <textarea
              className="inputTitle"
              id="inputT"
              type="text"
              placeholder="Maximum 200 characters"
              rows="1"
              cols="50"
              maxLength="200"
              onChange={handlereqT}
            ></textarea>
          </div>
          <br></br>
          <div className="conbody">
            <div className="contentspan">
              <p className={`contentcreate ${reqcontent ? "contentreq" : ""}`}>
                Content
                {/* <span className={`${!reqcontent ? "noting" : ""}`}>*</span> */}
              </p>
              <div className="namecontent">
                <span id="char_count_content" className="char_count_content">
                  0/25000
                </span>
              </div>
            </div>
            <textarea
              className="inputContent"
              id="inputC"
              type="text"
              placeholder="Maximum 25000 characters"
              rows="20"
              cols="100"
              maxLength="25000"
              onChange={handlereqC}
            ></textarea>
            <br></br>
          </div>
          <br></br>
          <div className="conbottom">
            <div className="bottomphototopic">
              <div className="covercontent">
                <p className="namecontentp">Add Content image</p>
                <p className="op">(Optional)</p>
              </div>
              <br></br>
              <div className="mb3content">
                <input
                  className="form-control"
                  id="uploadfilemult"
                  type="file"
                  multiple
                  onChange={handleChangemult}
                  accept=".png,.jpg,.jpeg"
                />
                <div className="displyfile">
                  <label for="uploadfilemult" className="foruploadfile">
                    Browse Files <i class="bi bi-file-earmark-plus-fill"></i>
                  </label>
                  <div
                    className={`filename ${
                      filemult.length !== 0 ? "" : "noting"
                    }`}
                  >
                    {filemult.map((item, index) => (
                      <div key={index}>
                        {filemult.length !== 0 ? item.name : ""}
                      </div>
                    ))}
                  </div>
                  <div
                    className={`filename ${
                      filemult.length !== 0 ? "noting" : ""
                    }`}
                  >
                    no file chosen
                  </div>
                </div>
              </div>
              <p className="uptoten">(Up to 10 Pics)</p>
              <div className="btnuploadimgmult">
                <button
                  type="button"
                  className="btcontent"
                  id="imagecontent"
                  onClick={handleUploadmult}
                >
                  UPLOAD <img src={uploadicon} alt=""></img>
                </button>
                <p className="permult">{percentmult}% Done</p>
              </div>
            </div>
            <div className="allcover">
              <div className="covertitle">
                <p className="namec">Add Cover image</p>
                <p className="op">(Optional)</p>
              </div>
              <div className="choosefile">
                <input
                  className="form-control"
                  id="uploadfile"
                  type="file"
                  onChange={handleChange}
                  accept=".png,.jpg,.jpeg"
                />
                <div className="displyfile">
                  <label for="uploadfile" className="foruploadfile">
                    Browse File <i class="bi bi-file-earmark-plus-fill"></i>
                  </label>
                  <div className="filename">
                    {file.name != null ? file.name : "no file chosen"}
                  </div>
                </div>
              </div>
              <div className="btnuploadimg">
                <button
                  type="button"
                  className="btcover"
                  id="imagecover"
                  onClick={handleUpload}
                >
                  UPLOAD <img src={uploadicon} alt=""></img>
                </button>
                <p className="percentimgtitle">{percent}% Done</p>
              </div>
            </div>
            <div className="bottom">
              <p className={`topicname ${reqtopic ? "topicnamereq" : ""}`}>
                Add Topic
                {/* <span className={`${!reqtopic ? "noting" : ""}`}>*</span> */}
              </p>
              <div className="nametopic">
                <ul>
                  {items.map((item, index) => (
                    <div key={index} className="topicmap">
                      <li>{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
              <button className="edittopic" onClick={topicselect}>
                EDIT TOPIC <i class="bi bi-plus-circle-fill"></i>
              </button>
              {/* <div className="topicinpage">{`${checkedItems}`}</div> */}
            </div>
          </div>
          <div className="btnbottom">
            <button
              type="button"
              className={`${
                reqtitle || reqcontent || reqtopic ? "dispost" : "postbtn"
              }`}
              id="buttonpost"
              onClick={senddata}
              disabled={reqtitle || reqcontent || reqtopic}
            >
              POST
            </button>
          </div>
        </div>
      </div>
      <div className={`topicselectcss ${edittopicheck ? "noting" : null}`}>
        <h1 className="close" onClick={topicselect}>
          <i class="bi bi-x"></i>
        </h1>
        <Topicselect sendbtn={btncondis} />
        <div className="btnconfirm">
          <button
            type="button"
            className={`${discomferm ? "discon" : "confirm"}`}
            id="buttonconfirm"
            onClick={topicselectsend}
            disabled={discomferm}
          >
            CONFIRM
          </button>
        </div>
      </div>
      {!edittopicheck && <div className="displayback"></div>}
    </div>
  )
}

export default Createpost
