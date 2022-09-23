import React from "react"
import Checkbox from "./Checkbox"
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
          <div className="scroll">
            <div className="comleft">
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="kdvknk" label="kdvknk" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
            </div>
            <div className="comright">
              {/* <form>
            <label for="Agriculture">Agriculture</label>
            <input
            type="checkbox"
            id="Agriculture"
            name="Agriculture"
            value="Agriculture"
            />
          </form> */}
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
              <Checkbox id="Agriculture" label="Agriculture" />
            </div>
          </div>
        </div>
      </div>
      <div className="btnconfirm">
        <button type="button" className="confirm" id="buttonconfirm">
          CONFIRM
        </button>
      </div>
    </div>
  )
}

export default Topicselect
