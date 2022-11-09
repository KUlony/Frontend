import React, {useState} from "react";
import "./Forgot.css";
import xmark_img from "../picture/Xmark.png";
import Verify from "./Verify";

function Forgot(probs) {
  const {display} = probs;

  const [display2,setdisplay2] = useState(true);
  const display_verify = () =>{
      setdisplay2(!display2)
  }


  return (
    <div className="forgot_container">
      <img className="forgot_xmark" src={xmark_img} alt="xmark_img" onClick={display}></img>
      <h2 className="forgot_header">Forgot password?</h2>
      <h3 className="forgot_subheader">Please enter your e-mail address</h3>
      <input className="forgot_input" type="email" placeholder="EMAIL"></input>
      <button className="forgot_button" onClick={display_verify}>CONFIRM</button>
      

      <div className={`register_verify  ${display2? 'none':null }`}>
        <Verify display={display_verify}/>
      </div>
    </div>
  );
}
export default Forgot;
