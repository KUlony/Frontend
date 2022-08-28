import React from "react"
import "./NavBar.css"
import { FaRegBell } from "react-icons/fa"

function NavBar() {
  return (
    <div className="Container">
      <div className="Kulony">KULONY</div>
      <div className="Home">HOME</div>
      <div className="MyPost">MY POST</div>
      <div className="RequestTopic">REQUEST TOPIC</div>
      <div className="CreatePost">Create new post</div>
      <FaRegBell className="Bell" size={20} />
    </div>
  )
}

export default NavBar
