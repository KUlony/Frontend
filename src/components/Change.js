import React, { useState } from "react"
import "./Change.css"
// import xmark_img from "../picture/Xmark.png"

function Change(probs) {
  const { display_ch, display_ve, display_fg, email } = probs

  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")

  const display_close = () => {
    display_ch()
    display_ve()
    display_fg()
  }

  const [error, setError] = useState("")
  const confirm = async (e) => {
    try {
      e.preventDefault()
      setError("")
      const postdata = await fetch(
        "//localhost:4000/api/sing-up/forgotpassword/resetpassword",
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
        setPassword("")
        setConfirmpassword("")
      }

      if (!postdata.ok) {
        throw new Error("error")
      }
      display_close()
    } catch (err) {
      // console.log("catch")
      console.log(err.message)
    }
  }

  return (
    <div className="change_container">
      {/* <img className="change_xmark" src={xmark_img} alt="xmark_img" onClick={display_ch}></img> */}
      <h2 className="change_header">Change Password</h2>
      <h3 className="change_subheader">New password</h3>
      <input
        className="change_input"
        type="password"
        placeholder="NEW PASSWORD"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      ></input>

      <h3 className="change_subheader">Confirm password</h3>
      <input
        className="change_input"
        type="password"
        placeholder="CONFIRM PASSWORD"
        value={confirmpassword}
        onChange={(e) => {
          setConfirmpassword(e.target.value)
        }}
      ></input>

      <div className="change_noti">
        {error && <div className="change_error">{error}</div>}
      </div>
      <button className="change_button" onClick={confirm}>
        CONFIRM
      </button>
    </div>
  )
}
export default Change
