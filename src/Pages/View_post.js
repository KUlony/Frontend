import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/NavBar";
import "./View_post.css";
import { IoIosArrowBack } from "react-icons/io";
function View_post() {
  const location = useLocation();
  const from = location.state;
  const like = from.like.like;
  const title = from.title.title;
  const post_content = from.post_content.post_content;
  const photo = from.photo.photo;

  return (
    <div className="view_post">
      <div className="view_post_nav">
        <Navbar />
      </div>
      <div className="view_post_fullpost">
        <div className="view_post_fullpost_backtohome">
          <Link to="/home" className="view_post_fullpost_backtohome_link">
            <IoIosArrowBack className="view_post_fullpost_backtohome_arrow" />{" "}
            Back to home
          </Link>
        </div>

        <div className="view_post_fullpost_title">{title}</div>
        <div className="view_post_fullpost_profile">
          <div className="UserProfile"></div>
          <div className="view_post_fullpost_profile_username">johnny depp</div>
        </div>
        <div className="view_post_fullpost_photo">{photo}</div>
        <div className="view_post_fullpost_content">{post_content}</div>
      </div>
    </div>
  );
}

export default View_post;
