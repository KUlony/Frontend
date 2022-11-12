import React, { useState } from "react"
import Navbar from "../components/NavBar"
import "./ReportpageAdmin.css"
import bad from "../picture/n0404 1.png"
import PostreportAdmin from "./PostreportAdmin"
import ComreportAdmin from "./ComreportAdmin"
import Checklogin from "../components/Checklogin"

function ReportpageAdmin() {
  const [togpost, setTogpost] = useState(true)
  const [togcom, setTogcom] = useState(false)
  const [numpost, setNumpost] = useState("")
  const [numcom, setNumcom] = useState("")

  const distogpost = () => {
    setTogpost(true)
    setTogcom(false)
  }

  const distogcom = () => {
    setTogpost(false)
    setTogcom(true)
  }

  const sendnumpost = (e) => {
    setNumpost(e)
  }

  const sendnumcom = (e) => {
    setNumcom(e)
  }

  return (
    <div className="allpage">
      <Navbar />
      <Checklogin />
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
          <p className={`${numpost ? "noti" : "nothing"}`}>{numpost}</p>
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
          <p className={`${numcom ? "noti" : "nothing"}`}>{numcom}</p>
        </div>
      </div>
      <br></br>
      {togpost && <PostreportAdmin send={sendnumpost} />}
      {togcom && <ComreportAdmin send={sendnumcom} />}
    </div>
  )
}

export default ReportpageAdmin
