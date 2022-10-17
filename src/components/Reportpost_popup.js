import React, { useState } from "react";
import "./Reportpost_popup.css";
import { AiOutlineClose } from "react-icons/ai";

function Reportpost_popup(props) {
  const [position, setPosition] = useState(0);
  const { display, post_id } = props;
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
  ]);
  const [reportOther, setreportOther] = useState("");
  const token = localStorage.getItem("token");
  const reportcheckbox = (e) => {
    e.preventDefault();
    setreportOther("");
  };

  const checkreport_popup = (e) => {
    setcheckArr((prevState) =>
      prevState.map((item, idx) => {
        if (idx === Number(e.target.value)) {
          if (checkArr[idx]) {
            return false;
          } else {
            setPosition(idx);
            return true;
          }
        } else {
          return false;
        }
      })
    );
  };

  const arrayofreport = [
    "Nudity",
    "Spam",
    "Violence",
    "Threat",
    "Suicide or self-harm",
    "False information",
    "Hate speech",
    "Terrorism",
  ];

  const submit_report = async () => {
    try {
      let reporttype = "";
      if (!checkArr[8]) {
        reporttype = arrayofreport[position];
      } else {
        reporttype = reportOther;
      }
      const reportsent = await fetch(
        `http://localhost:4000/api/post/${post_id}/report`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({ report_type: reporttype }),
        }
      );
      setcheckArr((prev) => prev.map((data) => false));
      display();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="reportpost_popupbox">
      <h3>Report post</h3>
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
            className={`report_other ${checkArr[8] ? null : "report_display"}`}
            onChange={(event) => setreportOther(event.target.value)}
            value={reportOther}
          ></input>
          <button onClick={submit_report}>SEND ROPORT</button>
        </form>
      </div>
      <div className="reportpost_exit" onClick={display}>
        <AiOutlineClose />
      </div>
    </div>
  );
}

export default Reportpost_popup;
