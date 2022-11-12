import React from "react"
import "./OnBoard2.css"
import Hello from "../picture/hello.png"
import { useNavigate } from "react-router-dom"
import Checklogin from "../components/Checklogin"

function OnBoard2() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="hello-page">
        <div className="hello-container">
          <p className="hello-text">Hello !</p>
          <p className="next-text">
            Before you start, tell others more about yourself : )
          </p>
        </div>
        <img src={Hello} alt="" className="hello=icon" width="370px" />
        <div className="hello-button">
          <p
            className="hello-skip"
            onClick={() => {
              navigate("/home")
            }}
          >
            SKIP
          </p>
          <div
            className="hello-begin"
            onClick={() => {
              navigate("/onboard3")
            }}
          >
            <p>BEGIN</p>
          </div>
        </div>
      </div>
      <Checklogin />
    </div>
  )
}

export default OnBoard2
