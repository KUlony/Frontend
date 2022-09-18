import React, { useState } from "react";
import "./Reportpost_popup.css";
function Reportpost_popup() {
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

  const cheackei = (e) => {
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
        <form onSubmit={reportcheckbox}>
          <input type="checkbox" onChange={cheackei} value="0"></input>
          <label>Nudity</label>
          <br />
          <input type="checkbox" onChange={cheackei} value="1"></input>
          <label>Spam</label>
          <br />
          <input type="checkbox" onChange={cheackei} value="2"></input>
          <label>Violence</label>
          <br />
          <input type="checkbox" onChange={cheackei} value="3"></input>
          <label>Threat</label>
          <br />
          <input type="checkbox" onChange={cheackei} value="4"></input>
          <label>Suicide or self-harm</label>
          <br />
          <input type="checkbox" onChange={cheackei} value="5"></input>
          <label>False information</label>
          <br />
          <input type="checkbox" onChange={cheackei} value="6"></input>
          <label>Hate speech</label>
          <br />
          <input type="checkbox" onChange={cheackei} value="7"></input>
          <label>Terrorism</label>
          <br />
          <input type="checkbox" onChange={cheackei} value="8"></input>
          <label>Other</label>
          <br />
          <button>SEND ROPORT</button>
        </form>
      </div>
    </div>
  );
}

export default Reportpost_popup;
