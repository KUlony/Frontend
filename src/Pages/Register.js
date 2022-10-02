import React, { useState } from "react"
import "./Register.css"
import register_img from "../picture/register.png"
import { Link } from "react-router-dom"
import Verify from "../components/Verify.js"
import Terms from "../components/Terms.js"

function Register() {
  const [display1, setdisplay1] = useState(true)
  const display_terms = () => {
    setdisplay1(!display1)
  }

  const [display2, setdisplay2] = useState(true)
  const display_verify = () => {
    setdisplay2(!display2)
  }
  return (
    <div className="row_register">
      <div className="column_register">
        <h1 className="header_register">SIGN-UP</h1>
        <input
          className="input_register"
          type="email"
          placeholder="EMAIL"
        ></input>
        <input
          className="input_register"
          type="password"
          placeholder="PASSWORD"
        ></input>
        <input
          className="input_register"
          type="password"
          placeholder="CONFIRM PASSWORD"
        ></input>
        <div className="tp_register">
          <input className="check_register" type="checkbox"></input>I agree to
          the KUlony{" "}
          <p className={`link_register`} onClick={display_terms}>
            term of service
          </p>
        </div>
        <button className="button_register" onClick={display_verify}>
          SIGN UP
        </button>
        <div className="qa_register">
          Already have an account?{" "}
          <Link className="link_register" to="/login">
            Log-in
          </Link>
        </div>
      </div>
      <div className="column_register">
        <img
          className="img_register"
          src={register_img}
          alt="register_img"
        ></img>
      </div>

      <div className={`terms_register  ${display1 ? "none" : null}`}>
        <Terms display={display_terms} />
      </div>

      <div className={`verify_register  ${display2 ? "none" : null}`}>
        <Verify display={display_verify} />
      </div>
    </div>
  )
}

export default Register
