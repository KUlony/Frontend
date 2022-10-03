import React from "react";
import "./Unsuccess.css";
// import unsuccess_img from "../picture/unsuccess.png"
import { Link } from 'react-router-dom';

function Unsuccess(probs) {
  const {display} = probs;
  return (
    <div className="unsuccess_container">
      {/* <img className="success_img" src={unsuccess_img} alt="unhappyface_img" onClick={display}></img> */}
      <h2 className="unsuccess_header">Email verification successful</h2>



    
      <p className="verify_resend">CANCLE</p>
    
      <button className="verify_button" onClick={display}>TRY AGAIN</button>

    </div>
    
  );
}
export default Unsuccess;
