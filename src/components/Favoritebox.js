import React, { useEffect, useState } from "react";
import "./Favorite.css";
import { BsFillHeartFill } from "react-icons/bs";
import profileimg from "../picture/profile.png";
import { Link } from "react-router-dom";
import Miniprofile from "./Miniprofile";

function Favoritebox(props) {
  const { data } = props;
  console.log(data);
  const [status, setStatus] = useState(true);
  const [displayProfile, setdisplayProfile] = useState(true);
  const token = localStorage.getItem("token");

  const likepost_update = async () => {
    try {
      if (status) {
        const remove = await fetch(`https://kulony-backend.herokuapp.com/api/post/unlike/${data.post_id}`, {
          method: "DELETE",
          headers: {
            Authorization: `${token}`,
          },
        });
        setStatus(false);
      } else {
        const add = await fetch(`https://kulony-backend.herokuapp.com/api/post/like/${data.post_id}`, {
          method: "POST",
          headers: {
            Authorization: `${token}`,
          },
        });
        setStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const display_profile = () => {
    setdisplayProfile(!displayProfile);
  };

  return (
    <div className="favorite_box">
      <div className="favorite_box_profile" onClick={display_profile}>
        {data.author.profile_pic_url ? (
          <img
            src={data.author.profile_pic_url}
            alt="profilemini_img"
            className="favorite_box_profile_miniimg"
          />
        ) : (
          <img
            src={profileimg}
            alt="profilemini_img"
            className="favorite_box_profile_miniimg"
          />
        )}
      </div>
      <div className="favorite_box_title">{data.post_title}</div>
      <div className="favorite_box_like">
        {" "}
        <div className="favorite_likebox" onClick={likepost_update}>
          <BsFillHeartFill className="likeshadowdrop1" size={32} />
          <BsFillHeartFill
            className={`${status ? "like" : "unlike"}`}
            size={26}
          />
        </div>
      </div>
      <div className="favorite_viewmorebox">
        <Link to={`/viewpost/${data.post_id}`} className="favorite_viewmore">
          View post{" "}
        </Link>
      </div>
      {!displayProfile ? (
        <div className="favorite_miniprofile">
          <Miniprofile
            display={display_profile}
            user_id={data.author.user_id}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Favoritebox;
