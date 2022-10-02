import React, { useEffect, useState } from "react"
import "./Createpost.css"
import storage from "../components/FirebaseConfig"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import Topicselect from "../components/Topicselect"
import Sheetpost from "../picture/Sheetpost.png"
import uploadicon from "../picture/uploadicon.png"
// import "bootstrap/dist/css/bootstrap.min.css"

function Createpost() {
  const [edittopicheck, seteditTopicCheck] = useState(true)
  const [items, setItems] = useState([])

  const topicselect = () => {
    seteditTopicCheck(!edittopicheck)
    console.log(edittopicheck)
  }
  const topicselectsend = () => {
    seteditTopicCheck(!edittopicheck)
    const items = JSON.parse(localStorage.getItem("itemed"))
    if (items) {
      console.log(items)
      setItems(items)
    }
    console.log(edittopicheck)
  }

  const checkedItems = items.length
    ? items.reduce((total, item) => {
        return total + ", " + item
      })
    : ""

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
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url)
        })
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

  console.log("url", urls)

  return (
    <div>
      <div className="all">
        <div className="createTitle">
          <h1 className="create">Create a post </h1>
          <img src={Sheetpost} alt="picsheet" className="picsheet"></img>
        </div>
        <br></br>
        <div className="allcontent">
          <div className="head">
            <div className="title">
              <div className="titlespan">
                <p className="namet">Title</p>
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
              ></textarea>
            </div>
            <div className="allcover">
              <div className="covertitle">
                <p className="namec">Cover image</p>
                <p className="op">(Optional)</p>
              </div>
              <div className="choosefile">
                <div class="mb-3" className="mb3cover">
                  <input
                    class="form-control"
                    type="file"
                    onChange={handleChange}
                    accept=".png,.jpg,.jpeg"
                  />
                </div>
                <button
                  type="button"
                  className="btcover"
                  id="imagecover"
                  onClick={handleUpload}
                >
                  <img src={uploadicon} alt=""></img>
                </button>
              </div>
              <p className="percentimgtitle">{percent}% done</p>
            </div>
          </div>
          <br></br>
          <div className="conbody">
            <div className="contentspan">
              <p className="content">Content</p>
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
            ></textarea>
            <br></br>
            <br></br>
            <div className="bottomphototopic">
              <div className="allcontentimg">
                <div className="covercontent">
                  <p className="namecontentp">Content image</p>
                  <p className="op">(Optional)</p>
                </div>
                <br></br>
                <div>
                  <div class="mb-3" className="mb3content">
                    <input
                      class="form-control"
                      type="file"
                      multiple
                      onChange={handleChangemult}
                      accept=".png,.jpg,.jpeg"
                    />
                  </div>
                  <p className="uptoten">(Up to 10 Pics)</p>
                  <div className="btnuploadimg">
                    <button
                      type="button"
                      className="btcontent"
                      id="imagecontent"
                      onClick={handleUploadmult}
                    >
                      Upload <img src={uploadicon} alt=""></img>
                    </button>
                    <p className="permult">{percentmult}% done</p>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="bottomtopic">
                  <p className="topicname">Topic</p>
                  <button className="edittopic" onClick={topicselect}>
                    Edit topic <i class="bi bi-plus-circle-fill"></i>
                  </button>
                </div>
                <div className="topicinpage">{`${checkedItems}`}</div>
              </div>
            </div>
          </div>
          <div className="btnbottom">
            <div className="bth">
              <a href="/home" className="backtohome">
                BACK TO HOME
              </a>
            </div>
            {/* <div className="backtomypost"> */}
            {/* <a href="/mypost"> */}
            <button type="button" className="postbtn" id="buttonpost">
              POST
            </button>
            {/* </a> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className={`topicselectcss ${edittopicheck ? "noting" : null}`}>
        <h1 className="close" onClick={topicselect}>
          <i class="bi bi-x"></i>
        </h1>
        <Topicselect />
        <div className="btnconfirm">
          <button
            type="button"
            className="confirm"
            id="buttonconfirm"
            onClick={topicselectsend}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  )
}

export default Createpost
