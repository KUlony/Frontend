import React, {useState} from "react"
import "./NavBar.css"
import logo from "../picture/Logo.png"
import { BsPersonCircle } from "react-icons/bs"
import { FaRegBell } from "react-icons/fa"
import { Link } from "react-router-dom"
import ReqTopic from "./ReqTopic"
import Notification from "./Notification"



function Navbar() {
  const [show,setShow] = useState(false)
  
  const handleReq = (e) => {
    e.preventDefault()
  }
  console.log(show)
  const handleShow = () => setShow(!show)
  return (
    
    <ul className="Nav">
      <ReqTopic handleShow={handleShow} handleReq={handleReq} show={show} />
      <li className="kulony">
        <img
          src={logo}
          width="100px"
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
        <div className="search-nav">SEARCH</div>
      </li>
      <li>
        <Link to="/mypost" className="my-post">
          MY POST
        </Link>
      </li>
      <li className="request-topic" onClick={handleShow}>REQUEST TOPIC</li>
      <li className="space"> </li>
      <li className="create-new-post">
        <Link to="/createnewpost"className="create-post-link" >
          <div class="border-create-post">Create new post +</div>
        </Link>
      </li>
      <li className="bell">
        <Notification />
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
