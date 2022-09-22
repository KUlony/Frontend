import React from "react"
import "./Topicselect.css"

function Topicselect() {
  return (
    <div className="topic">
      <div className="headtopic">
        <div className="choosetopic">Choose topics</div>
        <br></br>
        <div className="maxtopic">You can choose maximum 5 topics</div>
        <br></br>
      </div>
      <div className="contenttopic">
        <div className="seltopic">
          <button className="general">general</button>
          <br></br>
          <button className="study">study</button>
          <br></br>
          <button className="faculty">faculty</button>
        </div>
        <div className="selcom">components</div>
      </div>
    </div>
  )
}

export default Topicselect
