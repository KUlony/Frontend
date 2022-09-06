import React from "react"
import "./Createpost.css"

function Createpost() {
  // let textArea = document.getElementById("intputT")
  // let characterCounter = document.getElementById("char_count")
  // const maxNumOfChars = 70

  // const countCharacters = () => {
  //   let numOfEnteredChars = textArea.value.length
  //   let counter = maxNumOfChars - numOfEnteredChars
  //   characterCounter.textContent = counter + "/70"

  //   if (counter <= 5) {
  //     characterCounter.style.color = "red"
  //   } else if (counter < 20) {
  //     characterCounter.style.color = "orange"
  //   } else {
  //     characterCounter.style.color = "black"
  //   }
  // }

  // textArea.addEventListener("input", countCharacters)

  return (
    <div>
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
                placeholder="Maximum 200 characters"
                rows="1"
                cols="50"
                maxLength="200"
              ></textarea>
              <span id="char_count">200/200</span>
            </div>
            <div className="allcover">
              <div className="cover">
                <p className="namec">Cover photo</p>
                <p className="op">(Optional)</p>
              </div>
              <button type="button" className="btcover">
                Add image
              </button>
            </div>
          </div>
          <br></br>
          <div className="conbody">
            <p className="content">Content</p>
            <textarea
              className="inputContent"
              id="inputContent"
              type="text"
              rows="20"
              cols="100"
            ></textarea>
            <button type="button" className="btcontent">
              Add image
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
            <button type="button" className="postbtn">
              POST
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createpost
