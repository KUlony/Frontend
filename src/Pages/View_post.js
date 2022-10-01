import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/NavBar";
import "./View_post.css";
import { IoIosArrowBack } from "react-icons/io";
import Comment from "../components/Comment";
import { AiOutlineShareAlt, AiOutlineClose } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import {
  MdOutlineModeComment,
  MdTitle,
  MdReport,
  MdSend,
} from "react-icons/md";
import Reportpost_popup from "../components/Reportpost_popup";
import Miniprofile from "../components/Miniprofile";

function View_post() {
  const location = useLocation();
  const from = location.state;
  const like = from.like.like;
  const commentcount = from.comment.comment;
  const title = from.title.title;
  const post_content = from.post_content.post_content;
  const photo = from.photo.photo;
  const profilepic = from.profilepic.profilepic;
  // const scrollRestoration = History.scrollRestoration;
  // console.log(scrollRestoration);
  const testimgdata = [
    "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
    "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80",
    "https://images.unsplash.com/photo-1543769657-fcf1236421bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  ];
  const [commentinput, setCommentinput] = useState("");
  const comment = (e) => {
    e.preventDefault();
    const comment_input_value = document.querySelector(
      ".view_post_comment_input"
    );
    comment_input_value.value = "";
  };
  const comment_input = (e) => {
    setCommentinput(e.target.value);
  };
  const display_report = () => {
    setdisplayReport(!displayReport);
  };
  const display_profile = (maikan) => {
    setdisplayProfile(!displayProfile);
    console.log(maikan);
  };

  const [displayReport, setdisplayReport] = useState(true);
  const [displayProfile, setdisplayProfile] = useState(true);

  return (
    <div className="view_post_poup">
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
            <div className="UserProfile" onClick={display_profile}>
              <img
                src={profilepic}
                alt="profilemini_img"
                className="profile_miniimg"
              />
            </div>
            <div className="view_post_fullpost_profile_username">
              johnny depp
            </div>
          </div>
          <div className="view_post_fullpost_photo">{photo}</div>
          <div className="view_post_fullpost_content">{post_content}</div>
          <div className="view_post_fullpost_img">
            {testimgdata.map((data) => {
              return (
                <div className="view_post_fullpost_miniimg">
                  <img src={data} alt="post_img" className="post_img" />
                </div>
              );
            })}
          </div>
          <div className="view_post_interact">
            <div className="view_post_likebox">
              <FcLikePlaceholder size={30} />
              <p className="view_post_text">{like} Likes</p>
            </div>
            <div className="view_post_commentbox">
              <MdOutlineModeComment size={30} />
              <p className="view_post_text">{commentcount} Comments</p>
            </div>
            <div className="view_post_reportbox" onClick={display_report}>
              <MdReport size={30} className="view_post_report_icon" />
              <p className="view_post_text">Report post</p>
            </div>
          </div>
          <div className="view_post_commentinputbox">
            Comments
            <form onSubmit={comment}>
              <input
                className="view_post_comment_input"
                onChange={comment_input}
              />
              <button className="view_post_comment_button">
                <MdSend size={30} />
              </button>
            </form>
          </div>
          <div className="view_post_comment">
            <Comment display_profile={display_profile} />
            <Comment display_profile={display_profile} />
            <Comment display_profile={display_profile} />
          </div>
        </div>
      </div>
      <div
        className={`viewpost_miniprofile_popup ${
          displayProfile ? "display_none" : null
        }`}
      >
        <Miniprofile display={display_profile} />
      </div>
      <div
        className={`viewpost_report_popup ${
          displayReport ? "display_none" : null
        }`}
      >
        <Reportpost_popup display={display_report} />
      </div>
    </div>
  );
}

export default View_post;
