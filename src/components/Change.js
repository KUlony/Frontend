import React from "react";
import "./Change.css";
import change_img from "../picture/change.png"
import { Link } from 'react-router-dom';

function Change(probs) {
  const {display_} = probs;
  return (
    <div className="change_container">
      {/* <img className="change_img" src={change_img} alt="xmark_img" onClick={display_suc}></img> */}
      <h2 className="change_header">Email verification changeful</h2>
      <Link className="change_button" to='/login'>CONFIRM</Link>
    </div>
  );
}
export default Change;
