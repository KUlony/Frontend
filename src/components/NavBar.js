import React from "react"
import "./NavBar.css"
import bell from "../picture/Colorbell.png"
import vector from "../picture/Vector.png"
import logo from "../picture/Logo.png"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <ul className="Nav">
      <li className="kulony">
        <img src={logo} width="70%" height="60%" alt="" />
      </li>
      <li>
        <Link to="/home" className="home">
          HOME{" "}
        </Link>
      </li>
      <li>
        <Link to="/mypost" className="my-post">
          MY POST{" "}
        </Link>
      </li>
      <li className="request-topic">REQUEST TOPIC</li>
      <li className="space"></li>
      <li className="create-new-post">
        <div class="border-create-post">Create new post</div>
      </li>
      <li className="bell">
        <img src={bell} width="20px" height="25px" alt="" />
      </li>
      <li>
        <Link to="/profile" className="vector">
          <img src={vector} width="40px" height="40px" alt="" />
        </Link>
      </li>
    </ul>
  )
}

export default Navbar
