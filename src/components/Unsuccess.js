import React from "react";
import "./Unsuccess.css";
import unsuccess_img from "../picture/unsuccess.png"

function Unsuccess(probs) {
  const {display_unsuc,display_ver} = probs;

  return (
    <div className="unsuccess_container">
      <img className="unsuccess_img" src={unsuccess_img} alt="unhappyface_img"></img>
      <h2 className="unsuccess_header">Incorrect verification code</h2>

      <p className="unsuccess_cancle" onClick={display_ver}>CANCLE</p>
    
      <button className="unsuccess_button" onClick={display_unsuc}>TRY AGAIN</button>

    </div>
    
  );
}
export default Unsuccess;
