import React, { useState, useRef } from "react"
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
  const ref = useRef(null)

  const display_verify = () => {
    if (ref.current.checked) {
      setdisplay2(!display2)
    } else {
      setdisplay5(!display5)
    }
  }

  const [display5, setdisplay5] = useState(true)
  const display_checked = () => {
    setdisplay5(!display5)
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")

  const [error, setError] = useState("")

  const register = async (e) => {
    try {
      e.preventDefault()
      setError("")
      const postdata = await fetch(
        "//localhost:4000/api/sing-up/register/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            confirm_password: confirmpassword,
          }),
        }
      )

      const json = await postdata.json()
      console.log(json)

      if (!json.success) {
        setError(json.message)
      }

      if (!postdata.ok) {
        throw new Error("error")
      }
      display_verify()
    } catch (err) {
      // console.log("catch")
      console.log(err.message)
    }
  }

  return (
    <div className="register_row">
      <div className="register_column">
        <h1 className="register_header">SIGN-UP</h1>

        <input
          className="register_input_email"
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        ></input>
        <input
          className="register_input_password"
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        ></input>
        <input
          className="register_input_password"
          type="password"
          placeholder="CONFIRM PASSWORD"
          value={confirmpassword}
          onChange={(e) => {
            setConfirmpassword(e.target.value)
          }}
        ></input>

        <div className="register_tp">
          <input
            className="register_check"
            type="checkbox"
            ref={ref}
            onClick={display_checked}
          ></input>
          I agree to the KUlony{" "}
          <p className={`register_link`} onClick={display_terms}>
            term of service
          </p>
          {/* <div className={`register_checked  ${display5? null:'none' }`}>
          Plese confirm you have read the term of service
          </div> */}
        </div>

        <div className="register_noti">
          {error && <div className="register_error">{error}</div>}
        </div>

        <button
          className={`register_button_before  ${display5 ? null : "none"}`}
        >
          SIGN UP
        </button>
        <button
          className={`register_button_after  ${display5 ? "none" : null}`}
          onClick={register}
        >
          SIGN UP
        </button>

        <div className="register_qa">
          Already have an account?{" "}
          <Link className="register_link" to="/login">
            Log-in
          </Link>
        </div>
      </div>
      <div className="register_column">
        <img
          className="register_img"
          src={register_img}
          alt="register_img"
        ></img>
      </div>

      <div className={`register_terms  ${display1 ? "none" : null}`}>
        <Terms display={display_terms} />
      </div>

      <div className={`register_verify  ${display2 ? "none" : null}`}>
        <Verify display_ve={display_verify} email={email} isForgot={false} />
      </div>

      {(!display1 || !display2) && <div className="register_cover"></div>}
    </div>
  )
}

export default Register
