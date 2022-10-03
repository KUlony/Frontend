import React from "react"
import "./Profile.css"
const AddEducation = (props) => {
  const { onBgClick } = props
  console.log("hello im in add education")
  return (
    <div className="add-education">
      <div className="add-education-inner">
        <button onClick={onBgClick}> close</button>
        <div className="school">
          {" "}
          school
          <br />
          <textarea
            class="input-school"
            type="text"
            placeholder="school"
            rows="1"
            cols="20"
          ></textarea>
        </div>
        <div className="degree">
          {" "}
          <br />
          <textarea
            class="input-degree"
            type="text"
            placeholder="degree"
            rows="1"
            cols="20"
          ></textarea>
        </div>
        <div className="field-of-study">
          {" "}
          <br />
          <textarea
            class="input-field"
            type="text"
            placeholder="field"
            rows="1"
            cols="20"
          ></textarea>
        </div>
        <div className="start-date"> </div>
        <div className="end-date"> </div>
      </div>
    </div>
  )
}

export default AddEducation
