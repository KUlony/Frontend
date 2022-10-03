import React from "react";
import "./Success.css";
import success_img from "../picture/success.png"
import { Link } from 'react-router-dom';

function Success(probs) {
  const {display} = probs;
  return (
    <div className="success_container">
      <img className="success_img" src={success_img} alt="xmark_img" onClick={display}></img>
      <h2 className="success_header">Email verification successful</h2>
      <Link className="success_button" to='/login'>CONFIRM</Link>
    </div>
    
  );
}
export default Success;
