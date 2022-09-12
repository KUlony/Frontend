import React, { useEffect } from "react"
import "./Createpost.css"
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import NavBar from "../components/NavBar"

function Createpost() {
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
        characterCounter.style.color = "black"
      }
    }

    textArea.addEventListener("input", countCharacters)
  })

  useEffect(() => {
    let textArea = document.getElementById("inputC")
    let characterCounter = document.getElementById("char_count_content")

    const countCharacters = () => {
      let numOfEnteredChars = textArea.value.length
      characterCounter.textContent = numOfEnteredChars + "/5000"

      if (numOfEnteredChars >= 4995) {
        characterCounter.style.color = "red"
      } else if (numOfEnteredChars >= 4950) {
        characterCounter.style.color = "orange"
      } else {
        characterCounter.style.color = "black"
      }
    }

    textArea.addEventListener("input", countCharacters)
  })

  var ImgName, ImgUrl

  const firebaseConfig = {
    apiKey: "AIzaSyBxDBbM9rV1lHYXftLcqt3uwDFwo181H04",
    authDomain: "kulony-5f1ef.firebaseapp.com",
    projectId: "kulony-5f1ef",
    storageBucket: "kulony-5f1ef.appspot.com",
    messagingSenderId: "50655501627",
    appId: "1:50655501627:web:7495323b7559c9a7986b1e",
    measurementId: "G-BPQ130W12B",
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)

  useEffect(() => {
    var files = []
    document.getElementById("imagecover").onclick = function (e) {
      var input = document.createElement("input")
      input.type = "file"

      input.onchange = (e) => {
        files = e.target.files
        // console.log(files[0].type)
        if (files[0].type !== "image/png") {
          alert("only .jpg .jpeg .png")
          return
        }
        var reader = new FileReader()
        // reader.onload = function () {
        //   document.getElementById("").src = reader.result
        // }
        reader.readAsDataURL(files[0])
        console.log(files[0])
      }
      input.click()
    }

    document.getElementById("imagecontent").onclick = function (e) {
      var input = document.createElement("input")
      input.type = "file"

      input.onchange = (e) => {
        files = e.target.files
        var reader = new FileReader()
        // reader.onload = function () {
        //   document.getElementById("").src = reader.result
        // }
        reader.readAsDataURL(files[0])
        console.log(files[0])
      }
      input.click()
    }
  })

  return (
    <div>
      <NavBar />
      <div className="all">
        <div className="createTitle">
          <h1 className="create">Create a post</h1>
        </div>
        <br></br>
        <div className="allcontent">
          <div className="head">
            <div className="title">
              <p className="namet">Title</p>
              <textarea
                className="inputTitle"
                id="inputT"
                type="text"
                placeholder="Maximum 70 characters"
                rows="1"
                cols="50"
                maxLength="70"
              ></textarea>
<<<<<<< HEAD
              <span id="char_count">70/70</span>
=======
              <span id="char_count_title" className="char_count_title">
                0/200
              </span>
>>>>>>> 3ea0a5f4429ff739cc52a2e78211a2c7afa3d5da
            </div>
            <div className="allcover">
              <div className="cover">
                <p className="namec">Cover photo</p>
                <p className="op">(Optional)</p>
              </div>
<<<<<<< HEAD
              <button type="button" className="btcover">
                Add image
=======
              <button type="button" className="btcover" id="imagecover">
                Add image <i class="bi bi-image"></i>
>>>>>>> 3ea0a5f4429ff739cc52a2e78211a2c7afa3d5da
              </button>
            </div>
          </div>
          <br></br>
          <div className="conbody">
            <p className="content">Content</p>
            <textarea
              className="inputContent"
              id="inputC"
              type="text"
              rows="20"
              cols="100"
            ></textarea>
<<<<<<< HEAD
            <button type="button" className="btcontent">
              Add image
=======
            <span id="char_count_content" className="char_count_content">
              0/5000
            </span>
            <button type="button" className="btcontent" id="imagecontent">
              Add image <i class="bi bi-image"></i>
>>>>>>> 3ea0a5f4429ff739cc52a2e78211a2c7afa3d5da
            </button>
          </div>
          <br></br>
          <div className="bottom">
            <p className="topic">Topic</p>
            <div className="tagbox">
              <button className="edittopic">Edit topic</button>
            </div>
          </div>
          <br></br>
          <div className="btnbottom">
            <div className="bth">
              <a href="/home" className="backtohome">
                BACK TO HOME
              </a>
            </div>
            <button type="button" className="postbtn" id="buttonpost">
              POST
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createpost
