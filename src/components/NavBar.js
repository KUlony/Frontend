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
  // const [isAdmin, setIsAdmin] = useState('false');
  const [countunread, setCountunread] = useState(0)
  const [data, setData] = useState([])
  const token = localStorage.getItem("token")
  const [count, setCount] = useState(0)
  const [countReq, setCountReq] = useState(0)
  const [countReport, setCountReport] = useState(0)
  const [profile, setProfile] = useState([])
  const replycount = (e) => {
    setCountunread(e)
  }
  const userid = localStorage.getItem("user_id")
  const isAdmin = localStorage.getItem("admin")
  console.log(isAdmin)
  console.log("user id: ", userid)
  // useEffect(() => {
  //   console.log(isAdmin);
  // }, []);

  const getalltopic = async () => {
    try {
      if (localStorage.getItem("admin") === "true") {
        const response = await axios.get(
          `http://localhost:4000/api/admin/get_all_request_topic`,
          {
            headers: { Authorization: token },
          }
        )

        console.log("hi", response.data)
        setCountReq(response.data.length)
      }
    } catch (error) {
      getalltopic()
    }
  }

  useEffect(() => {
    getalltopic()
  }, [])
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
    axios
      .get(`http://localhost:4000/api/user/${userid}/profile`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setProfile(res.data)
      })
      .catch((err) => console.log(err))
  })

  useEffect(() => {
    if (localStorage.getItem("admin") === "true") {
      axios
        .get(`http://localhost:4000/api/admin/get_comment_report`, {
          headers: { Authorization: token },
        })
        .then((res) => {
          setCountReport((countReport) => countReport + res.data.length)
        })
        .catch((err) => console.log(err))
    }
  }, [])
  useEffect(() => {
    if (localStorage.getItem("admin") === "true") {
      axios
        .get(`http://localhost:4000/api/admin/get_post_report`, {
          headers: { Authorization: token },
        })
        .then((res) => {
          setCountReport((countReport) => countReport + res.data.length)
        })
        .catch((err) => console.log(err))
    }
  }, [])

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/notification`, {
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
              <div className="num-noti">{countReport}</div>
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
            <div className="num-noti">{countReq}</div>
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
        {profile.profile_pic_url ? (
          <Link to="/profile" className="nav-profile">
            <img
              src={profile.profile_pic_url}
              alt=""
              className="nav-profile-img"
            ></img>
          </Link>
        ) : (
          <Link to="/profile" className="vector">
            <BsPersonCircle size={25} className="vector-icon" />
          </Link>
        )}
      </li>
    </ul>
  )
}

export default Navbar
