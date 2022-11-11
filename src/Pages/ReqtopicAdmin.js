import React, { useEffect, useState } from "react"
import Navbar from "../components/NavBar"
import "./ReqtopicAdmin.css"
import reqtopicpic from "../picture/0710 1.png"
import axios from "axios"
import Addtopic_admin from "../components/Addtopic_admin"
import Checklogin from "../components/Checklogin"

function ReqtopicAdmin() {
  const [postdata, setPostdata] = useState([])
  const [cataname, setcataname] = useState([])
  const [nametopic, setNametopic] = useState(null)
  const [edittopicheck, seteditTopicCheck] = useState(true)

  const topicselect = () => {
    seteditTopicCheck(!edittopicheck)
    console.log(edittopicheck)
  }

  const token = localStorage.getItem("token")

  const gentopic = async () => {
    try {
      const respone = await axios.get(
        `https://kulony-backend.herokuapp.com/api/admin/get_all_request_topic`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      setPostdata(respone.data)

      const response2 = await axios.get(
        `https://kulony-backend.herokuapp.com/api/topic/get_all_catagory_topic`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      setcataname(response2.data)

      // console.log(response2.data);
    } catch {}
  }

  useEffect(() => {
    gentopic()
  }, [])

  const deletetopic = (e) => {
    axios
      .delete(
        `https://kulony-backend.herokuapp.com/api/admin/remove_request_topic/${e.request_id}`,
        {
          headers: {
            Authorization: `${token}`,
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
    <div>
      <div className="allreqpage">
        <Navbar />
        <Checklogin />
        <div className="headnamereq">
          <div className="namepagereq">Requested Topics</div>
          <img alt="" src={reqtopicpic} className="topicpic"></img>
        </div>
        {postdata && (
          <div className="bodyreq">
            {postdata.map((item, index) => (
              <div className="topiccard" key={index} id={item.request_id}>
                <div className="headcardreq">
                  <img
                    alt=""
                    src={item.profile_pic_url}
                    className="picuser"
                  ></img>
                  <p className="nametopicreq">{item.request_topic}</p>
                </div>
                <div className="buttonreqtopic">
                  <p className="datecardreq">
                    {item.year}-{item.month}-{item.day}
                  </p>
                  <button
                    className="btnaddtopic"
                    onClick={() => {
                      topicselect()
                      setNametopic(item)
                    }}
                  >
                    Add Topic <i class="bi bi-check-lg"></i>
                  </button>
                  <h2
                    className="trashreq"
                    onClick={() => {
                      deletetopic(item)
                      window.location.reload()
                    }}
                  >
                    <i class="bi bi-trash"></i>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {nametopic && (
        <div className={`addtopiccss ${edittopicheck ? "nothing" : ""}`}>
          <Addtopic_admin cata={cataname} datatopic={nametopic} />
          <div className="cancleconfirm">
            <p className="cancleaddtopic" onClick={topicselect}>
              CANCEL
            </p>
          </div>
        </div>
      )}
      {!edittopicheck && <div className="displayback"></div>}
    </div>
  )
}

export default ReqtopicAdmin
