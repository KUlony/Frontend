import React, { useEffect, useState } from "react"
import "./NavBar.css"
import logo from "../picture/Logo.png"
import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import ReqTopic from "./ReqTopic"
import Notification from "./Notification"
import CreateTopic from "./CreateTopic"
import axios from "axios"

function Navbar() {
  const [show, setShow] = useState(false)
  const [showCreateTopic, setShowCreateTopic] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [countunread, setCountunread] = useState(0)
  const [data, setData] = useState([])
  const token = localStorage.getItem("token")
  const [count, setCount] = useState(0)
  const replycount = (e) => {
    setCountunread(e)
  }

  const handleReq = (e) => {
    e.preventDefault()
  }
  console.log(show)
  const handleShow = (e) => {
    e.preventDefault()
    setShow(!show)
  }
  const handleShow2 = (e) => {
    e.preventDefault()
    setShowCreateTopic(!showCreateTopic)
  }
  useEffect(() => {
    setIsAdmin(localStorage.getItem("admin"))
  }, [])

  useEffect(() => {
    axios
      .get(`/api/notification`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("resdata", res.data)
        // setCount(count + 1)
        const array = res.data.filter((data2) => !data2.readed)
        // console.log(array.length);
        setCountunread(array.length)
        setData(res.data.reverse())
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // useEffect(() => {
  //   console.log("lenght", count.lenght);
  //   setCountunread(count.lenght);
  // }, [data]);

  return (
    <ul className="Nav">
      <ReqTopic handleShow={handleShow} handleReq={handleReq} show={show} />
      <CreateTopic
        handleShow2={handleShow2}
        handleReq={handleReq}
        show={showCreateTopic}
      />
      <li className="kulony">
        <img
          src={logo}
          width="120px"
          // height="120%"
          alt=""
          className="kulony-icon"
        />
      </li>
      <li>
        <Link to="/home" className="home-nav">
          HOME
        </Link>
      </li>
      <li>
        {isAdmin === "true" ? (
          <div>
            <Link to="/admin/reportpost" className="reportpost-nav">
              <span>REPORT</span>
              <div className="num-noti">3</div>
            </Link>
          </div>
        ) : (
          <Link to="/search" className="search-nav">
            SEARCH
          </Link>
        )}
      </li>
      <li>
        {isAdmin === "true" ? (
          <Link to="/admin/requesttopic" className="topic-req-nav">
            <span>TOPIC REQUEST</span>
            <div className="num-noti">3</div>
          </Link>
        ) : (
          <Link to="/mypost" className="my-post">
            MY POST
          </Link>
        )}
      </li>
      {isAdmin === "true" ? (
        <div className="free-box"></div>
      ) : (
        <li className="request-topic" onClick={handleShow}>
          REQUEST TOPIC
        </li>
      )}
      <li className="space"> </li>
      <li className="create-new-post">
        {isAdmin === "true" ? (
          <div className="border-create-post" onClick={handleShow2}>
            <p className="create-post-name">Create new topic +</p>
          </div>
        ) : (
          <Link to="/createnewpost" className="create-post-link">
            <div class="border-create-post">Create new post +</div>
          </Link>
        )}
      </li>
      <li className="bell">
        <Notification data={data} />
        <div className="num-noti">{countunread}</div>
      </li>
      {/* <div><Notification /></div> */}
      {/* <li className='vector'><img src={vector} width='40px' height='40px' alt=""/></li> */}
      <li>
        <Link to="/profile" className="vector">
          <BsPersonCircle size={25} className="vector-icon" />
        </Link>
      </li>
    </ul>
  )
}

export default Navbar
