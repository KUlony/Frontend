import React from "react";
import "./Login.css";
import login_img from "../picture/login.png"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="row_login">
      <div className="column_login">
        <img className="img_login" src={login_img} alt="login_img"></img>
      </div>
      <div className="column_login">
        <h1 className="header_login">LOG-IN</h1>
        <input className="input_login" type="email" placeholder="EMAIL"></input>
        <input className="input_login" type="password" placeholder="PASSWORD"></input>
        <Link className="button_login" to='/home'>LOG IN</Link>
        <div className="qa_login">
          Don’t have an account?  <Link className="link_login" to='/register'>Sign-up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
