import React, { useEffect, useState } from "react";
import "./Miniprofile.css";
import { AiOutlineClose } from "react-icons/ai";

function Miniprofile(props) {
  const { titlepost, display, urlimg, user_id } = props;
  console.log(user_id);
  const [userdata, setUserdata] = useState();
  const [loading, setLoading] = useState(true);
  const user_info = async () => {
    try {
      setLoading(true);
      const userdata = await fetch(
        `http://localhost:4000/api/user/${user_id}/profile`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpdHRpcG9uZ3BvbjkxQGdtYWlsLmNvbSIsImlkIjoiNjM0OTIzZTI0ZGY2NmY5OWU2ZWQyZDI0IiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTY2NTgzNDI2MiwiZXhwIjoxNjY1OTIwNjYyfQ.J1WUIsjEaBStoia14Q9s7_NSpMxm_gSbBiPqPUebwHo`,
          },
        }
      );
      const jsonuserdata = await userdata.json();
      // console.log(jsonuserdata);
      setUserdata(jsonuserdata);
      setLoading(false);
    } catch (err) {}
  };
  useEffect(() => {
    user_info();
  }, [user_id]);
  return (
    <article className="home_post_profile">
      {!loading && (
        <div className="post_miniprofile">
          <section className="miniprofile_pic">
            <div className="miniprofile_fakeimg">
              {" "}
              <img src={urlimg} alt="profile_img" className="miniprofile_img" />
            </div>
          </section>
          <section className="miniprofile_info">
            <header>
              <h3>{userdata.user_name}</h3>
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
            <button onClick={display} className="miniprofile_info_exit">
              <AiOutlineClose className="miniprofile_info_exit_icon" />
            </button>
          </section>
        </div>
      )}
    </article>
  );
}

export default Miniprofile;
