import React from "react"
import Navbar from "../components/NavBar"
import "./ReqtopicAdmin.css"
import reqtopicpic from "../picture/0710 1.png"
import picuser from "../picture/Image.png"

function ReqtopicAdmin() {
  const data = [
    { name: "LOVE", date: "09/09/9099" },
    { name: "LOVE", date: "09/09/9099" },
    { name: "LOVE", date: "09/09/9099" },
    { name: "LOVE", date: "09/09/9099" },
  ]

  return (
    <div className="allreqpage">
      <Navbar />
      <div className="headnamereq">
        <div className="namepagereq">Requested Topics</div>
        <img alt="" src={reqtopicpic} className="topicpic"></img>
      </div>
      <div className="bodyreq">
        {data.map((item, index) => (
          <div className="topiccard" key={index}>
            <div className="headcardreq">
              <img alt="" src={picuser} className="picuser"></img>
              <p className="nametopicreq">{item.name}</p>
            </div>
            <div className="buttonreqtopic">
              <p className="datecardreq">{item.date}</p>
              <button className="btnaddtopic">
                Add Topic <i class="bi bi-check-lg"></i>
              </button>
              <h2 className="trashreq">
                <i class="bi bi-trash"></i>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReqtopicAdmin
