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
import { BsFillHeartFill } from "react-icons/bs";
import Reportpost_popup from "../components/Reportpost_popup";
import Miniprofile from "../components/Miniprofile";
import Comment_generator from "../components/Comment_generator";
import Showimg from "../components/Showimg";

function View_post() {
  const location = useLocation();
  console.log(location);
  const from = location.state;
  const like = from.like.likecount;
  const commentcount = from.comment.comment;
  const title = from.title.title;
  const post_content = from.post_content.post_content;
  const photo = from.photo.photo;
  const profilepic = from.profilepic.profilepic;
  const username = from.username.username;
  // const scrollRestoration = History.scrollRestoration;
  // console.log(scrollRestoration);
  const [displayReport, setdisplayReport] = useState(true);
  const [displayProfile, setdisplayProfile] = useState(true);
  const [imgurl, setImgurl] = useState("");
  const [displaypostimg, setDisplayposting] = useState(false);
  const [likepost, setLikepost] = useState(false);
  const [likecount, setLikecount] = useState(like);
  const [commentdata, setCommentdata] = useState([
    {
      comment_content:
        "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quii",
    },
    {
      comment_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    },
    {
      comment_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ",
    },
  ]);
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

    if (commentinput !== "") {
      const comment_input_value = document.querySelector(
        ".view_post_comment_input"
      );
      const datainput = {
        comment_content: commentinput,
      };
      updatecommentdata(datainput);

      comment_input_value.value = "";
      setCommentinput("");
    }

    //เดี๊ยวฟังชั่นนี้ต้อง fetch  ก่อนที่จะ updatecommentdata
  };
  const comment_input = (e) => {
    setCommentinput(e.target.value);
  };
  const display_report = () => {
    setdisplayReport(!displayReport);
  };
  const display_profile = (maikan) => {
    setdisplayProfile(!displayProfile);
  };
  const display_postimg = (url) => {
    setDisplayposting(!displaypostimg);
    setImgurl(url);
    setDisplayposting(true);
  };
  const updatecommentdata = (data) =>
    setCommentdata((commentdata) => [...commentdata, data]);
  const likepost_update = () => {
    setLikecount(likepost ? likecount - 1 : likecount + 1);
    setLikepost(!likepost);
  };
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
              {username}
            </div>
          </div>
          <div className="view_post_fullpost_photo">
            <img
              src={photo}
              alt="viewpost_cover_img"
              className="view_post_fullpost_coverimg"
            />
          </div>
          <div className="view_post_fullpost_content">{post_content}</div>
          <div className="view_post_fullpost_img">
            {testimgdata.map((data) => {
              return (
                <div className="view_post_fullpost_miniimg">
                  <div
                    className="view_post_fullpost_miniimg_center"
                    onClick={() => display_postimg(data)}
                  >
                    <img src={data} alt="post_img" className="post_img" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="view_post_interact">
            <div className="view_post_likebox" onClick={likepost_update}>
              <BsFillHeartFill className="likeshadowdrop1" size={28} />
              <BsFillHeartFill
                className={`${likepost ? "like" : "unlike"}`}
                size={22}
              />
              <p className="view_post_text">{likecount} Likes</p>
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
                required
              />
              <button className="view_post_comment_button">
                <MdSend size={30} />
              </button>
            </form>
          </div>
          <div className="view_post_comment">
            <Comment_generator
              data={commentdata}
              display_profile={display_profile}
              display_reply={true}
            />
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
      <div onClick={() => setDisplayposting(!displaypostimg)}>
        {displaypostimg && <Showimg imgurl={imgurl} />}
      </div>
      {displaypostimg && (
        <div
          className="cover"
          onClick={() => setDisplayposting(!displaypostimg)}
        ></div>
      )}
    </div>
  );
}

export default View_post;
