import React, { useState } from "react";
import "./Login.css";
import login_img from "../picture/login.png"
import { Link, useNavigate } from 'react-router-dom';
import Forgot from "../components/Forgot";

function Login() {
  const [display1,setdisplay1] = useState(true);
  const display_forgot = () =>{
      setdisplay1(!display1)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  
  const login = async (e)=>{
    try{
      e.preventDefault()
      const postdata = await fetch('http://localhost:4000/api/sing-up/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      "email": email,
      "password": password})
      })
      // const json = await postdata.json()
      // console.log(postdata)
      if (!postdata.ok){
        throw new Error("error")
      }
      // console.log(await postdata.json())
      const postdata_json = await postdata.json()
      const token = postdata_json.token
      // console.log(token)
      localStorage.setItem("token", token);
      // console.log(localStorage.getItem("token"))
      navigate("/home");
    }
    catch(err){
      // console.log("catch")
      console.log(err.message)
    }
  }


  return (
    <div className="login_row">
      <div className="login_column">
        <img className="login_img" src={login_img} alt="login_img"></img>
      </div>
      <div className="login_column">
        <h1 className="login_header">LOG-IN</h1>

        <form onSubmit={login}>
          <input className="login_input" type="email" placeholder="EMAIL" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
          <input className="login_input" type="password" placeholder="PASSWORD" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
          <p className={`login_forgot`} onClick={display_forgot}>Forgot password?</p>
          <button className="login_button" onClick={login}>LOG IN</button>
        </form>

        <div className="login_qa">
          Don’t have an account?  <Link className="login_link" to='/register'>Sign-up</Link>
        </div>
      </div>

      <div className={`login_fg ${display1? 'none':null }`}>
        <Forgot display={display_forgot}/>
      </div>

      {(!display1)&&<div className="login_cover"></div>}
    </div>
  );
}

export default Login;
