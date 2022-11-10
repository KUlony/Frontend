import axios from "axios"
import React, { useEffect, useState } from "react"
import "./Addtopic_admin.css"

const Addtopic_admin = () => {
  const [editname, setEditname] = useState(false)

  const token = localStorage.getItem("item")

  const editnamehandle = () => {
    setEditname(!editname)
  }

  return (
    <div className="addtopicadmin">
      <div className="headaddtopic">Add topic</div>
      <hr></hr>
      <div className="bodyaddtopic">
        <div className="topicname">
          <p className="topicnameedit">Topic : </p>
          <textarea
            className="topicnametext"
            placeholder="Topic name"
            maxLength="35"
            id="topicname"
            disabled={editname}
          ></textarea>
          <h3 className="icontopic" onClick={editnamehandle}>
            <i class="bi bi-slash-circle-fill"></i>
          </h3>
        </div>
        <div className="addtocata">
          <p className="catanameedit">Add this topic to : </p>
          <div className="dropboxcata">
            <select className="cataname" placeholder="Categories">
              {/* {cataname.map((item, index) => (
                <option
                  key={index}
                  value={item.catagory_name}
                  id={item.catagory_id}
                >
                  {item.catagory_name}
                  {console.log(item)}
                </option>
              ))} */}
            </select>
          </div>
        </div>
      </div>
      <div className="bottomaddtopic">
        <button type="button" className="confirmaddtopic" id="confirmaddtopic">
          CONFIRM
        </button>
      </div>
    </div>
  )
}

export default Addtopic_admin
