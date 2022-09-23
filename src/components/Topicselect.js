import React from "react"
import "./Topicselect.css"

function Topicselect() {
  return (
    <div className="topic">
      <div className="headtopic">
        <div className="choosetopic">Choose topics</div>
        <div className="maxtopic">You can choose maximum 5 topics</div>
        <br></br>
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
        <div className="selcom">
          <form>
            <label for="Agriculture">Agriculture</label>
            <input
              type="checkbox"
              id="Agriculture"
              name="Agriculture"
              value="Agriculture"
            />
          </form>
        </div>
      </div>
      <div className="btnconfirm">
        <button type="button" className="confirm" id="buttonokey">
          CONFIRM
        </button>
      </div>
    </div>
  )
}

export default Topicselect
