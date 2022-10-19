import React from "react";
import "./NavBar.css";
import logo from "../picture/Logo.png";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="Nav">
      <li className="kulony">
        <img
          src={logo}
          width="60%"
          height="120%"
          alt=""
          className="kulony-icon"
        />
      </li>
      <li>
        <Link to="/home" className="home">
          HOME
        </Link>
      </li>
      <li>
        <Link to="/mypost" className="my-post">
          MY POST
        </Link>
      </li>
      <li className="request-topic">REQUEST TOPIC</li>
      <li className="space"> </li>
      <li>
        <Link to="/createnewpost" className="create-new-post">
          <div className="border-create-post">Create new post</div>
        </Link>
      </li>
      <li className="bell">
        <FaRegBell size={25} className="bell-icon" />
      </li>
      {/* <li className='vector'><img src={vector} width='40px' height='40px' alt=""/></li> */}
      <li>
        <Link to="/profile" className="vector">
          <BsPersonCircle size={25} className="vector-icon" />
        </Link>
      </li>
      <div></div>
    </ul>
  );
}

export default Navbar;
