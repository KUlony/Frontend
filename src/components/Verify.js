import React,{ useState } from "react";
import "./Verify.css";
// import xmark_img from "../picture/Xmark.png"
import Success from "./Success";
import Unsuccess from "./Unsuccess";

function Verify(probs) {
  const {display,email} = probs;

  const [display3,setdisplay3] = useState(true);
  const display_success = () =>{
      setdisplay3(!display3)
  }

  const [display4,setdisplay4] = useState(true);
  const display_unsuccess = () =>{
      setdisplay4(!display4)
  }

  // const init = ()=>{
  //   setdisplay3(true)
  //   setdisplay4(true)
  // }

  const [otp, setOTP] = useState([0,0,0,0,0,0])

  const setArrayOTP = (value,index) => {
    setOTP(preotp=>preotp.map((v,i)=> i === index ? value : v))
    // otp.join('')
    // console.log(otp)
  }

  const verify = async (e) => {
    try{
    e.preventDefault()
    const postdata = await fetch('http://localhost:4000/api/sing-up/register/email/checkOTP',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    "email": email,
    "otp": otp.join('')
    })})
    // const json = await postdata.json()
    console.log(postdata)
    if (!postdata.ok){
      throw new Error("error")
    }
    console.log("checked")
    display_success()
  }
  catch(err){
    console.log("catch")
    console.log(err.message)
    // display_unsuccess()
  }}

  

  return (
    <div className="verify_container">
      {/* <img className="verify_xmark" src={xmark_img} alt="xmark_img" onClick={display}></img> */}
      <h2 className="verify_header">Verify your identity</h2>
      <h5 className="verify_subheader">Enter the code we sent to your email</h5>
      <div class="verify_code_container">
        <input type="number" className="verify_code" min="0" max="9" required maxlength="1" onChange={(e)=>{setArrayOTP(e.target.value,0)}}></input>
        <input type="number" className="verify_code" min="0" max="9" required maxlength="1" onChange={(e)=>{setArrayOTP(e.target.value,1)}}></input>
        <input type="number" className="verify_code" min="0" max="9" required maxlength="1" onChange={(e)=>{setArrayOTP(e.target.value,2)}}></input>
        <input type="number" className="verify_code" min="0" max="9" required maxlength="1" onChange={(e)=>{setArrayOTP(e.target.value,3)}}></input>
        <input type="number" className="verify_code" min="0" max="9" required maxlength="1" onChange={(e)=>{setArrayOTP(e.target.value,4)}}></input>
        <input type="number" className="verify_code" min="0" max="9" required maxlength="1" onChange={(e)=>{setArrayOTP(e.target.value,5)}}></input>
      </div>
      <p className="verify_resend">RESEND CODE</p>

      <button className="verify_button" onClick={verify}>VERIFY</button>
      {/* <button className="verify_button" onClick={display_success}>VERIFY</button> */}
      {/* <button className="verify_button" onClick={display_unsuccess}>NOT VERIFY</button> */}

      <div className={`register_verify  ${display3? 'none':null }`}>
        <Success display_suc={display_success}/>
      </div>

      <div className={`register_verify  ${display4? 'none':null }`}>
        <Unsuccess display_unsuc={display_unsuccess} display_ver={display}/>
      </div>
      
    </div>
    
    
  );
}
export default Verify;
