import React, { useState } from "react";
import "./Reportpost_popup.css";
import { AiOutlineClose } from "react-icons/ai";

function Reportpost_popup(props) {
  const { display } = props;
  const reportcheckbox = (e) => {
    e.preventDefault();
    console.log(checkArr);
  };
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

  const checkreport_popup = (e) => {
    setcheckArr((prevState) =>
      prevState.map((item, idx) =>
        idx === Number(e.target.value) ? !item : item
      )
    );
  };

  return (
    <div className="reportpost_popupbox">
      <h3>Report post</h3>
      <div className="reportpost_box">
        <h4>Please select an issue :</h4>
        <form onSubmit={reportcheckbox} className="checkbox-round">
          <input type="checkbox" onChange={checkreport_popup} value="0"></input>
          <label>Nudity</label>
          <br />
          <input type="checkbox" onChange={checkreport_popup} value="1"></input>
          <label className="maikan">Spam</label>
          <br />
          <input type="checkbox" onChange={checkreport_popup} value="2"></input>
          <label>Violence</label>
          <br />
          <input type="checkbox" onChange={checkreport_popup} value="3"></input>
          <label>Threat</label>
          <br />
          <input type="checkbox" onChange={checkreport_popup} value="4"></input>
          <label>Suicide or self-harm</label>
          <br />
          <input type="checkbox" onChange={checkreport_popup} value="5"></input>
          <label>False information</label>
          <br />
          <input type="checkbox" onChange={checkreport_popup} value="6"></input>
          <label>Hate speech</label>
          <br />
          <input type="checkbox" onChange={checkreport_popup} value="7"></input>
          <label>Terrorism</label>
          <br />
          <input type="checkbox" onChange={checkreport_popup} value="8"></input>
          <label>Other</label>
          <br />
          <input
            className={`report_other ${checkArr[8] ? null : "report_display"}`}
          ></input>
          <button>SEND ROPORT</button>
        </form>
      </div>
      <div className="reportpost_exit" onClick={display}>
        <AiOutlineClose />
      </div>
    </div>
  );
}

export default Reportpost_popup;
