import React from "react"
import "./Login.css"
import Talk from "../picture/Talk.png"

function Login() {
  return (
    <div className="Login_page">
      <img src={Talk} alt="People talking" className="talk_img"></img>

      <h1 className="logintitle">LOG-IN</h1>

      <div className="form-group">
        <input id="email" type="email" placeholder=" EMAIL"></input>
        <input id="password" type="password" placeholder=" PASSWORD"></input>
      </div>

      <button className="login-button" onClick="">
        LOG IN
      </button>

      <div className="sign-up">
        Don’t have an account?<a href="#">Sign-up</a>
      </div>
    </div>
  )
}

export default Login
