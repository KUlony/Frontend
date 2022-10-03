import React,{ useState } from "react";
import "./Verify.css";
import xmark_img from "../picture/Xmark.png"
import Success from "./Success";
import Unsuccess from "./Unsuccess";

function Verify(probs) {
  const {display} = probs;

  const [display3,setdisplay3] = useState(true);
  const display_success = () =>{
      setdisplay3(!display3)
  }

  const [display4,setdisplay4] = useState(true);
  const display_unsuccess = () =>{
      setdisplay4(!display4)
  }
  return (
    <div className="verify_container">
      <img className="verify_xmark" src={xmark_img} alt="xmark_img" onClick={display}></img>
      <h2 className="verify_header">Verify your identity</h2>
      <h5 className="verify_subheader">Enter the code we sent to your email</h5>
      <div class="verify_code_container">
        <input type="number" className="verify_code" maxlength="1" required></input>
        <input type="number" className="verify_code" min="0" max="9" required maxlength="1"></input>
        <input type="number" className="verify_code" min="0" max="9" required maxlength="1"></input>
        <input type="number" className="verify_code" min="0" max="9" required maxlength="1"></input>
        <input type="number" className="verify_code" min="0" max="9" required maxlength="1"></input>
        <input type="number" className="verify_code" min="0" max="9" required maxlength="1"></input>
      </div>
      <p className="verify_resend">RESEND CODE</p>

      <button className="verify_button" onClick={display_success}>VERIFY</button>
      {/* <button className="verify_button" onClick={display_unsuccess}>NOT VERIFY</button> */}

      <div className={`verify_register  ${display3? 'none':null }`}>
        <Success display={display_success}/>
      </div>

      <div className={`verify_register  ${display4? 'none':null }`}>
        <Unsuccess display={display_unsuccess}/>
      </div>
      
    </div>
    
    
  );
}
export default Verify;
