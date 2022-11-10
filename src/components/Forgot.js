import React, { useState } from "react";
import "./Forgot.css";
import xmark_img from "../picture/Xmark.png";
import Verify from "./Verify";
// import Change from "./Change";

function Forgot(probs) {
  const { display_fg } = probs;

  const [display2, setdisplay2] = useState(true);
  const display_verify = () => {
    setdisplay2(!display2);
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const forgot = async (e) => {
    try {
      e.preventDefault();
      setError("");
      const postdata = await fetch("/api/sing-up/forgotpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const json = await postdata.json();
      console.log(json);

      if (!json.success) {
        setError(json.message);
      }

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
    <div className="forgot_container">
      <img
        className="forgot_xmark"
        src={xmark_img}
        alt="xmark_img"
        onClick={display_fg}
      ></img>
      <h2 className="forgot_header">Forgot password?</h2>
      <h3 className="forgot_subheader">Please enter your e-mail address</h3>
      <input
        className="forgot_input"
        type="email"
        placeholder="EMAIL"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>

      <div className="forgot_noti">
        {error && <div className="forgot_error">{error}</div>}
      </div>
      <button className="forgot_button" onClick={forgot}>
        CONFIRM
      </button>

      <div className={`register_verify  ${display2 ? "none" : null}`}>
        <Verify
          display_ve={display_verify}
          email={email}
          isForgot={true}
          display_fg={display_fg}
        />
      </div>
    </div>
  );
}
export default Forgot;
