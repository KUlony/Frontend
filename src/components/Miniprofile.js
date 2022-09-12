import React from "react";
import "./Miniprofile.css";

function Miniprofile(props) {
  const { titlepost, display } = props;
  return (
    <article className="home_post_profile">
      <div className="post_miniprofile">
        <section className="miniprofile_pic">
          <div className="miniprofile_fakeimg">url?</div>
        </section>
        <section className="miniprofile_info">
          <header>
            <h3>LoremLoremLorem</h3>
            <p className="miniprofile_info_">(lorem lorem)</p>
          </header>
          <p className="inputbox">Hello!</p>
          <p className="miniprofile_info_miniheader">Education:</p>
          <p className="miniprofile_info_university">
            <strong>Kasetsart University</strong>
            <br />
            Bachelors degree, Computer engineering
          </p>
          <footer>
            <p>Contact: Lorem facebook</p>
            <p className="miniprofile_info_contact">ig</p>
          </footer>
          <button onClick={display}>exit</button>
        </section>
      </div>
    </article>
  );
}

export default Miniprofile;
