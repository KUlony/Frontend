import React, { useState } from "react"
import Navbar from "../components/NavBar"
import "./Report_post.css"
import bad from "../picture/n0404 1.png"
import Postreport from "./Postreport"
import Commentreport from "./Commentreport"

function Report_post() {
  const [togpost, setTogpost] = useState(true)
  const [togcom, setTogcom] = useState(false)

  const distogpost = () => {
    setTogpost(true)
    setTogcom(false)
  }

  const distogcom = () => {
    setTogpost(false)
    setTogcom(true)
  }

  return (
    <div className="allpage">
      <Navbar />
      <div className="headname">
        <div className="namepage">Reported By User</div>
        <img alt="" src={bad} className="picbad" />
      </div>
      <div className="headpostcom">
        <div className="butn">
          <div>
            <button
              className={`select ${togpost ? "tog" : ""}`}
              onClick={distogpost}
            >
              Post
            </button>
            {togpost && <div className="baseline"></div>}
          </div>
          <p className="noti">10</p>
        </div>
        <div className="butn">
          <div>
            <button
              className={`select ${togcom ? "tog" : ""}`}
              onClick={distogcom}
            >
              Comment
            </button>
            {togcom && <div className="baseline"></div>}
          </div>
          <p className="noti">10</p>
        </div>
        <div className="sortname">Sort by</div>
        {/* <img alt="" src={sortpic} className="sortpic" /> */}
        <div className="dropboxsort">
          <select className="sortby">
            <option value="lastest">Lastest</option>
            <option value="most">Most Reported</option>
          </select>
        </div>
      </div>
      {togpost && <Postreport />}
      {togcom && <Commentreport />}
    </div>
  )
}

export default Report_post
