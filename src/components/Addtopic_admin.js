import axios from "axios"
import React, { useEffect, useState } from "react"
import "./Addtopic_admin.css"

const Addtopic_admin = ({ cata, datatopic }) => {
  const [editname, setEditname] = useState(true)
  const [senddatabtn, setSenddatabtn] = useState(true)
  const [sendtopic, setSendtopic] = useState("")

  // useEffect(() => {
  // setTimeout(() => {
  // setTopicname(datatopic.request_topic)
  //   if (state) {
  //   }
  // setState(false)
  // }, 100)
  // }, [])

  const token = localStorage.getItem("item")

  const editnamehandle = () => {
    setEditname(!editname)
  }

  const handlecata = (e) => {
    setSendtopic(e.target.value)
    if (e.target.value === "none") {
      setSenddatabtn(true)
    } else {
      setSenddatabtn(false)
    }
    console.log(e.target.value)
  }

  const addtopic = (e) => {
    const nametopic = document.getElementById("topicname")
    console.log(nametopic.value)
    console.log(sendtopic)
    axios
      .post(
        `https://kulony-backend.herokuapp.com/api/admin/accept_request_topic/${datatopic.request_id}`,
        {
          catagory_id: sendtopic,
          topic_name: nametopic.value,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MTAyMTM0LCJleHAiOjE2NjgxODg1MzR9.oIbRkgrR4b7tSaEySHYyVig26NBFTdSYdsLBteNdfKg`,
          },
        }
      )
      .then((res) => {
        const data = res.data
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="addtopicadmin">
      <div className="headaddtopic">Add topic</div>
      <hr></hr>
      <div className="bodyaddtopic">
        <div className="topicname">
          <p className="topicnameedit">Topic : </p>
          <textarea
            className={`${editname ? "topicnametext" : "outlinebox"}`}
            placeholder={datatopic.request_topic}
            maxLength="50"
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
            <select
              className="cataname"
              placeholder="Categories"
              onChange={(e) => handlecata(e)}
            >
              <option value="none">-Categories-</option>
              {cata.map((item, index) => (
                <option key={index} value={item.catagory_id}>
                  {item.catagory_name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="bottomaddtopic">
        <button
          type="button"
          className={`${senddatabtn ? "dis" : "confirmaddtopic"}`}
          id="confirmaddtopic"
          onClick={() => {
            addtopic()
            window.location.reload()
          }}
          disabled={senddatabtn}
        >
          CONFIRM
        </button>
      </div>
    </div>
  )
}

export default Addtopic_admin
