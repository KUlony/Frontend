import React, { useState } from "react"
import "./Reportpost_popup.css"
import { AiOutlineClose } from "react-icons/ai"
import smile from "../picture/smile.png"
import fail from "../picture/fail.png"

function Reportpost_popup(props) {
  const [position, setPosition] = useState(0)
  const { display, post_id, type } = props
  const lowertype = type.toLowerCase()
  const [checkArr, setcheckArr] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const [reportOther, setreportOther] = useState("")
  const token = localStorage.getItem("token")
  const reportcheckbox = (e) => {
    e.preventDefault()
    setreportOther("")
  }
  const [status, setStatus] = useState(false)
  const [loading, setLoading] = useState(true)
  const checkreport_popup = (e) => {
    setcheckArr((prevState) =>
      prevState.map((item, idx) => {
        if (idx === Number(e.target.value)) {
          if (checkArr[idx]) {
            return false
          } else {
            setPosition(idx)
            return true
          }
        } else {
          return false
        }
      })
    )
  }

  const arrayofreport = [
    "Nudity",
    "Spam",
    "Violence",
    "Threat",
    "Suicide or self-harm",
    "False information",
    "Hate speech",
    "Terrorism",
  ]

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const submit_report = async () => {
    try {
      let reporttype = ""
      if (!checkArr[8]) {
        reporttype = arrayofreport[position]
      } else {
        reporttype = reportOther
      }
      const reportsent = await fetch(
        `//localhost:4000/api/${lowertype}/${post_id}/report`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({ report_type: reporttype }),
        }
      )
      if (!reportsent.ok) {
        throw new Error("fail")
      }

      setcheckArr((prev) => prev.map((data) => false))
      setLoading(false)
      setStatus(true)
      await timeout(1500)
      setLoading(true)
      setStatus(false)
      display("close", "close")
    } catch (err) {
      console.error(err)
      setLoading(false)
      setStatus(false)
      await timeout(1500)
      setStatus(true)
      setLoading(true)
      setStatus(false)
      display("close", "close")
    }
  }

  return (
    <div>
      {!status && (
        <div className="reportpost_popupbox">
          <h3>Report {type}</h3>
          <div className="reportpost_box">
            <h4>Please select an issue :</h4>
            <form onSubmit={reportcheckbox} className="checkbox-round">
              <input
                type="checkbox"
                onChange={checkreport_popup}
                value="0"
                checked={checkArr[0]}
              ></input>
              <label>Nudity</label>
              <br />
              <input
                type="checkbox"
                onChange={checkreport_popup}
                value="1"
                checked={checkArr[1]}
              ></input>
              <label className="maikan">Spam</label>
              <br />
              <input
                type="checkbox"
                onChange={checkreport_popup}
                value="2"
                checked={checkArr[2]}
              ></input>
              <label>Violence</label>
              <br />
              <input
                type="checkbox"
                onChange={checkreport_popup}
                value="3"
                checked={checkArr[3]}
              ></input>
              <label>Threat</label>
              <br />
              <input
                type="checkbox"
                onChange={checkreport_popup}
                value="4"
                checked={checkArr[4]}
              ></input>
              <label>Suicide or self-harm</label>
              <br />
              <input
                type="checkbox"
                onChange={checkreport_popup}
                value="5"
                checked={checkArr[5]}
              ></input>
              <label>False information</label>
              <br />
              <input
                type="checkbox"
                onChange={checkreport_popup}
                value="6"
                checked={checkArr[6]}
              ></input>
              <label>Hate speech</label>
              <br />
              <input
                type="checkbox"
                onChange={checkreport_popup}
                value="7"
                checked={checkArr[7]}
              ></input>
              <label>Terrorism</label>
              <br />
              <input
                type="checkbox"
                onChange={checkreport_popup}
                value="8"
                checked={checkArr[8]}
              ></input>
              <label>Other</label>
              <br />
              <input
                type="text"
                className={`report_other ${
                  checkArr[8] ? null : "report_display"
                }`}
                onChange={(event) => setreportOther(event.target.value)}
                value={reportOther}
              ></input>
              <button onClick={submit_report}>SEND REPORT</button>
            </form>
          </div>
          <div
            className="reportpost_exit"
            onClick={() => display("close", "close")}
          >
            <AiOutlineClose />
          </div>
        </div>
      )}
      {!loading && status && (
        <div className="Success_popup">
          <img src={smile} className="smile_img" />{" "}
          <h3>Successfully sending report !</h3>
          <img src={smile} className="smile_img" />
        </div>
      )}
      {!loading && !status && (
        <div className="Action_fail_pop_up">
          <img src={fail} className="smile_img" />{" "}
          <h3>Action failed due to error </h3>
          <img src={fail} className="smile_img" />{" "}
        </div>
      )}
    </div>
  )
}

export default Reportpost_popup
