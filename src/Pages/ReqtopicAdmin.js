import React, { useEffect, useState } from "react"
import Navbar from "../components/NavBar"
import "./ReqtopicAdmin.css"
import reqtopicpic from "../picture/0710 1.png"
import picuser from "../picture/Image.png"
import axios from "axios"
import Addtopic_admin from "../components/Addtopic_admin"

function ReqtopicAdmin() {
  const [postdata, setPostdata] = useState([])
  const [cataname, setcataname] = useState([])
  const [edittopicheck, seteditTopicCheck] = useState(true)

  const topicselect = () => {
    seteditTopicCheck(!edittopicheck)
    console.log(edittopicheck)
  }

  const token = localStorage.getItem("token")

  const gentopic = () => {
    axios
      .get(`/api/admin/get_all_request_topic`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MDU4NzY3LCJleHAiOjE2NjgxNDUxNjd9.NJQU4HZ6PGXYigF-G3P5B0-zieqjl4y4jWq4qUMovG8`,
        },
      })
      .then((res) => {
        const data = res.data
        // console.log(data)
        setPostdata(data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get(`/api/topic/get_all_catagory_topic`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MDU4NzY3LCJleHAiOjE2NjgxNDUxNjd9.NJQU4HZ6PGXYigF-G3P5B0-zieqjl4y4jWq4qUMovG8`,
        },
      })
      .then((res) => {
        const data = res.data
        // console.log(data)
        setcataname(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    gentopic()
  }, [])

  const addtopic = (e) => {
    console.log(e.request_id)
    // axios
    //   .post(
    //     `/api/admin/accept_request_topic/${e.request_id}`,
    //     {
    //       catagory_id: "any",
    //       topic_name: "any",
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MDU4NzY3LCJleHAiOjE2NjgxNDUxNjd9.NJQU4HZ6PGXYigF-G3P5B0-zieqjl4y4jWq4qUMovG8`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     const data = res.data
    //     console.log(data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }

  const deletetopic = () => {
    axios
      .delete(`/api/admin/remove_request_topic/{request_id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MDU4NzY3LCJleHAiOjE2NjgxNDUxNjd9.NJQU4HZ6PGXYigF-G3P5B0-zieqjl4y4jWq4qUMovG8`,
        },
      })
      .then((res) => {
        const data = res.data
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div className="allreqpage">
        <Navbar />
        <div className="headnamereq">
          <div className="namepagereq">Requested Topics</div>
          <img alt="" src={reqtopicpic} className="topicpic"></img>
        </div>
        <div className="bodyreq">
          {postdata.map((item, index) => (
            <div className="topiccard" key={index} id={item.request_id}>
              <div className="headcardreq">
                <img alt="" src={picuser} className="picuser"></img>
                <p className="nametopicreq">{item.request_topic}</p>
              </div>
              <div className="buttonreqtopic">
                <p className="datecardreq">{item.requset_time}</p>
                <button
                  className="btnaddtopic"
                  onClick={(() => addtopic(item), topicselect)}
                >
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
      <div className={`addtopiccss ${edittopicheck ? "nothing" : ""}`}>
        <Addtopic_admin />
        <div className="cancleconfirm">
          <p className="cancleaddtopic" onClick={topicselect}>
            CANCLE
          </p>
        </div>
      </div>
      {!edittopicheck && <div className="displayback"></div>}
    </div>
  )
}

export default ReqtopicAdmin
