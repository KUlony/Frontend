import React, { useState } from "react";
import "./Card.css";
import profile_img from "../picture/miniprofileimg.png";
import Miniprofile from "./Miniprofile";

function Card(props) {
  const { username, profile_url, user_id, user_firstname, user_lastname } =
    props;

  const [onlyname, setOnlyname] = useState(
    !username && (user_firstname || user_lastname)
  );

  const [displayprofile, setDisplayprofile] = useState(false);

  const display_profile = () => {
    setDisplayprofile(!displayprofile);
  };

  return (
    <div className="card_container" onClick={display_profile}>
      <div className="card_profile">
        {profile_url ? (
          <img src={profile_url} alt="xmark_img" className="card_profile_img" />
        ) : (
          <img src={profile_img} alt="xmark_img" className="card_profile_img" />
        )}
      </div>
      <div className="card_info">
        {username && <div className="card_user">{username}</div>}
        {!username && !user_firstname && !user_lastname && (
          <div className="card_user">Anonymous</div>
        )}

        {!onlyname && (user_firstname || user_lastname) && (
          <div className="card_name">
            ({user_firstname} {user_lastname})
          </div>
        )}
        {onlyname && (
          <div className="card_name card_center">
            <p>
              {user_firstname} {user_lastname}
            </p>
          </div>
        )}
      </div>
      {displayprofile && (
        <div className="miniprofile_popup">
          <Miniprofile display={display_profile} user_id={user_id} />
        </div>
      )}
    </div>
  );
}
export default Card;
