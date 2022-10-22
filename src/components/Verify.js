import React,{ useState } from "react";
import "./Verify.css";
// import xmark_img from "../picture/Xmark.png"
import Success from "./Success";
import Unsuccess from "./Unsuccess";
import Change from "./Change";

function Verify(probs) {
  const {display_ve,email,isForgot,display_fg} = probs;

  const [display3,setdisplay3] = useState(true);
  const display_success = () =>{
      setdisplay3(!display3)
  }

  const [display4,setdisplay4] = useState(true);
  const display_unsuccess = () =>{
      setdisplay4(!display4)
  }

  const [display5,setdisplay5] = useState(true);
  const display_change = () =>{
      setdisplay5(!display5)
  }

  const [otp, setOTP] = useState([0,0,0,0,0,0])

  const setArrayOTP = (value,index) => {
    setOTP(preotp=>preotp.map((v,i)=> i === index ? value : v))
    // otp.join('')
    // console.log(otp)
  }

  const verify_register = async (e) => {
    try{
    e.preventDefault()
    const postdata = await fetch('http://localhost:4000/api/sing-up/register/email/checkOTP',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    "email": email,
    "otp": `${otp.join('')}`
    })})
    
    const json = await postdata.json()
    console.log(json)

    if (!postdata.ok){
      throw new Error("error")
    }
    display_success()
  }
  catch(err){
    console.log(err.message)
    display_unsuccess()
  }}

  const resend_register = async (e) => {
    try{
    e.preventDefault()
    const postdata = await fetch('http://localhost:4000/api/sing-up/newotp/verify/email',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    "email": email
    })})
    const json = await postdata.json()
    console.log(json)
    if (!postdata.ok){
      throw new Error("error")
    }
  }
  catch(err){
    console.log(err.message)
  }}




  const verify_change = async (e) => {
    try{
    e.preventDefault()
    const postdata = await fetch('http://localhost:4000/api/sing-up/forgotpassword/checkOTP',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    "email": email,
    "otp": `${otp.join('')}`
    })})
    
    const json = await postdata.json()
    console.log(json)

    if (!postdata.ok){
      throw new Error("error")
    }
    display_change()
  }
  catch(err){
    console.log(err.message)
    display_unsuccess()
  }}

  const resend_change = async (e) => {
    try{
    e.preventDefault()
    const postdata = await fetch('http://localhost:4000/api/sing-up/newotp/verify/forgotpassword',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    "email": email
    })})
    const json = await postdata.json()
    console.log(json)
    if (!postdata.ok){
      throw new Error("error")
    }
  }
  catch(err){
    console.log(err.message)
  }}
  

  return (
    <div className="verify_container">
      {/* {x && <img className="verify_xmark" src={xmark_img} alt="xmark_img" onClick={display}></img>} */}
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


      {!isForgot && <p className="verify_resend" onClick={resend_register}>RESEND CODE</p>}
      {isForgot && <p className="verify_resend" onClick={resend_change}>RESEND CODE</p>}

      {!isForgot && <button className="verify_button" onClick={verify_register}>VERIFY</button>}
      {isForgot && <button className="verify_button" onClick={verify_change}>VERIFY</button>}

      <div className={`register_verify  ${display3? 'none':null }`}>
        <Success display_suc={display_success}/>
      </div>

      <div className={`register_verify  ${display4? 'none':null }`}>
        <Unsuccess display_unsuc={display_unsuccess}/>
      </div>

      <div className={`register_verify  ${display5? 'none':null }`}>
        <Change display_ch={display_change} display_ve={display_ve} display_fg={display_fg} email={email}/>
      </div>
      
    </div>
    
    
  );
}
export default Verify;
