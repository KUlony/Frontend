import React from "react";
import "./Register.css";
import register_img from "../picture/register.png"
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="row_register">
      <div className="column_register">
        <h1 className="header_register">SIGN-UP</h1>
        <input className="input_register" type="email" placeholder="EMAIL"></input>
        <input className="input_register" type="password" placeholder="PASSWORD"></input>
        <input className="input_register" type="password" placeholder="CONFIRM PASSWORD"></input>
        <button className="button_register" onClick="">SIGN-UP</button>   
        <div className="qa_register">
          Already have an account? <Link className="link_register" to='/login'>Log-in</Link>
        </div>
      </div>
      <div className="column_register">
        <img className="img_register" src={register_img} alt="register_img"></img>
      </div>
    </div>
  );
}

export default Register;