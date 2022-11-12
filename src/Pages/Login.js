import React, { useState } from "react";
import "./Login.css";
import login_img from "../picture/login.png"
import { Link, useNavigate } from 'react-router-dom';
import Forgot from "../components/Forgot";
// import Card from "../components/Card";

function Login() {
  const [display1,setdisplay1] = useState(true);
  const display_forgot = () =>{
      setdisplay1(!display1)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const [error,setError] = useState('')

  const [work,setWork] = useState(true);
  
  const login = async (e)=>{
    try{
      if (work){
        setWork(false)
        e.preventDefault()
        setError('')
        const postdata = await fetch('https://kulony-backend.herokuapp.com/api/sing-up/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        "email": email,
        "password": password})
        })
        const json = await postdata.json()

        if (!json.success){
          setError(json.message)
          setWork(true)
          setPassword('')
        }

        if (!postdata.ok){
          throw new Error("error")
        }
        console.log(json)
        const token = json.token
        localStorage.setItem("token", token);
        // console.log(localStorage.getItem("token"))
        const user_id = json.user_id
        localStorage.setItem("user_id", user_id);
        const admin = json.admin
        localStorage.setItem("admin", admin);
        navigate("/home");
        setWork(true)
      }
    }
    catch(err){
      // console.log("catch")
      // console.log(err.message)
    }
  }


  return (
    <div className="login_row">
      {/* <Card/> */}
      <div className="login_column">
        <img className="login_img" src={login_img} alt="login_img"></img>
      </div>
      <div className="login_column">
        <h1 className="login_header">LOG-IN</h1>

        <form onSubmit={login}>
          <input className="login_input" type="email" placeholder="EMAIL" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
          <input className="login_input" type="password" placeholder="PASSWORD" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
          <div className={`login_forgot`}>
            <p className="login_fotgot_click" onClick={display_forgot}>Forgot password?</p>
          </div>
          <div className="login_noti">
            {error && <div className="login_error">{error}</div>}
          </div>
          <button className="login_button" onClick={login}>LOG IN</button>
        </form>

        <div className="login_qa">
          Don’t have an account?  <Link className="login_link" to='/register'>Sign-up</Link>
        </div>

      </div>

      <div className={`login_fg ${display1? 'none':null }`}>
        <Forgot display_fg={display_forgot}/>
      </div>

      
      {(!display1)&&<div className="login_cover"></div>}

      
    </div>
  );
}

export default Login;
