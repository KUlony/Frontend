import React, { useState, useRef } from "react";
import "./Register.css";
import register_img from "../picture/register.png";
import { Link } from "react-router-dom";
import Verify from "../components/Verify.js";
import Terms from "../components/Terms.js";

function Register() {
  const [display1, setdisplay1] = useState(true);
  const display_terms = () => {
    setdisplay1(!display1);
  };

  const [display2, setdisplay2] = useState(true);
  const ref = useRef(null);

  const display_verify = () => {
    if (ref.current.checked) {
      setdisplay2(!display2);
    } else {
      setdisplay5(!display5);
    }
  };

  const [display5, setdisplay5] = useState(true);
  const display_checked = () => {
    if (display5 === false) {
      setdisplay5(!display5);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const register = async (e) => {
    try {
      e.preventDefault();
      const postdata = await fetch(
        "http://localhost:4000/api/sing-up/register/email",
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
      );

      // const json = await postdata.json()
      // console.log(postdata)
      if (!postdata.ok) {
        throw new Error("error");
      }
      display_verify();
    } catch (err) {
      // console.log("catch")
      console.log(err.message);
    }
  };

  return (
    <div className="register_row">
      <div className="register_column">
        <h1 className="register_header">SIGN-UP</h1>
        <input
          className="register_input"
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          className="register_input"
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          className="register_input"
          type="password"
          placeholder="CONFIRM PASSWORD"
          value={confirmpassword}
          onChange={(e) => {
            setConfirmpassword(e.target.value);
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
          <div className={`register_checked  ${display5 ? "none" : null}`}>
            Plese confirm you have read the term of service
          </div>
        </div>

        {/* <button className="register_button" onClick={display_verify}>SIGN UP</button>    */}
        <button className="register_button" onClick={register}>
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
        <Verify display={display_verify} email={email} />
      </div>

      {(!display1 || !display2) && <div className="register_cover"></div>}
    </div>
  );
}

export default Register;
