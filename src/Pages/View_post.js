import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/NavBar";
import "./View_post.css";
import { IoIosArrowBack } from "react-icons/io";
import Comment from "../components/Comment";
import { AiOutlineShareAlt, AiOutlineClose } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import profileimg from "../picture/profile.png";
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
import Checklogin from "../components/Checklogin";

function View_post() {
  // const location = useLocation();
  // console.log(location);
  // const from = location.state;
  // const like = from.like.likecount;
  // const commentcount = from.comment.comment;
  // const title = from.title.title;
  // const post_content = from.post_content.post_content;
  // const photo = from.photo.photo;
  // const profilepic = from.profilepic.profilepic;
  // const username = from.username.username;
  // const scrollRestoration = History.scrollRestoration;
  // console.log(scrollRestoration);

  const [displayReport, setdisplayReport] = useState(true);
  const [displayProfile, setdisplayProfile] = useState(true);
  const [imgurl, setImgurl] = useState("");
  const [displaypostimg, setDisplayposting] = useState(false);
  const [likepost, setLikepost] = useState(false);
  const [likecount, setLikecount] = useState(0);
  const post_id = useParams();
  const [postdataarray, setPostdataarray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [commentcount, setCommentcount] = useState("");
  const [post_content, setPost_content] = useState("");
  const [photo, setPhoto] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const [username, setUsername] = useState("");
  const [post_photo_url, setPost_photo_url] = useState([]);
  const [loadingcomment, setLoadingcomment] = useState(true);
  const [user_like_status, setUser_like_status] = useState(false);
  const [userminiprofile, setUserminiprofile] = useState("");
  const [commentdata, setCommentdata] = useState([]);
  const token = localStorage.getItem("token");
  // console.log(post_id.id);

  const postfetch = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/post/${post_id.id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const json = await response.json();

      setLoading(false);
      setPostdataarray(json);
      setLikecount(json.post_like_count);
      setCommentcount(json.post_comment_count);
      setTitle(json.post_title);
      setPost_content(json.post_content);
      setPhoto(json.cover_photo_url);
      setProfilepic(json.author.profile_pic_url);
      setUsername(json.author.username);
      setPost_photo_url(json.post_photo_url);
      setUser_like_status(json.user_like_status);
      setUserminiprofile(json.author.user_id);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    postfetch();
  }, []);

  const fetchcomment = async () => {
    try {
      const comment_fetch_respone = await fetch(
        `http://localhost:4000/api/comment/${post_id.id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const comment_json = await comment_fetch_respone.json();
      setCommentdata(comment_json);
      setLoadingcomment(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (loadingcomment) {
      fetchcomment();
    }
  }, []);
  const [commentinput, setCommentinput] = useState("");
  const comment = async (e) => {
    try {
      e.preventDefault();
      if (commentinput !== "") {
        const comment_input_value = document.querySelector(
          ".view_post_comment_input"
        );

        const response_comment = await fetch(
          `http://localhost:4000/api/comment/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
            body: JSON.stringify({
              post_id: post_id.id,
              comment_content: commentinput,
            }),
          }
        );
        if (!response_comment.ok) {
          throw new Error("fail");
        }

        const json_comment = await response_comment.json();
        // console.log(`json_comment `, json_comment);

        const userdata = await fetch(
          `http://localhost:4000/api/user/${json_comment.user_id}/profile`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const jsonuserdata = await userdata.json();

        const datainput = {
          comment_content: commentinput,
          comment_id: json_comment._id,
          comment_reply_count: 0,
          comment_time: json_comment.comment_time,
          author: {
            user_id: json_comment.user_id,
            username: jsonuserdata.user_name,
            profile_pic_url: jsonuserdata.profile_pic_url,
          },
        };
        updatecommentdata(datainput);
        setCommentcount(commentcount + 1);
        comment_input_value.value = "";
        setCommentinput("");
      }
    } catch (err) {
      console.error(err);
    }
    //เดี๊ยวฟังชั่นนี้ต้อง fetch  ก่อนที่จะ updatecommentdata
  };
  const comment_input = (e) => {
    setCommentinput(e.target.value);
  };
  const display_report = () => {
    setdisplayReport(!displayReport);
  };
  const display_profile = (userid) => {
    setUserminiprofile(userid);
    setdisplayProfile(!displayProfile);
  };
  const display_postimg = (url) => {
    setDisplayposting(!displaypostimg);
    setImgurl(url);
    setDisplayposting(true);
  };
  const updatecommentdata = (data) =>
    setCommentdata((commentdata) => [...commentdata, data]);
  const likepost_update = async () => {
    try {
      if (user_like_status) {
        const remove = await fetch(
          `http://localhost:4000/api/post/unlike/${post_id.id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `${token}`,
            },
          }
        );
      } else {
        const add = await fetch(
          `http://localhost:4000/api/post/like/${post_id.id}`,
          {
            method: "POST",
            headers: {
              Authorization: `${token}`,
            },
          }
        );
      }

      setLikecount(user_like_status ? likecount - 1 : likecount + 1);
      setUser_like_status(!user_like_status);
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();

  return (
    <div className="view_post_poup">
      <Checklogin />
      <div className="view_post">
        <div className="view_post_nav">
          <Navbar />
        </div>
        <div className="view_post_fullpost">
          <div className="view_post_fullpost_backtohome">
            {/* <Link to="/home" className="view_post_fullpost_backtohome_link">
              <IoIosArrowBack className="view_post_fullpost_backtohome_arrow" />{" "}
              Back to home
            </Link> */}
            <button
              className="view_post_fullpost_backtohome_link"
              onClick={() => {
                navigate("/home");
              }}
            >
              <IoIosArrowBack className="view_post_fullpost_backtohome_arrow" />{" "}
              Back to home
            </button>
          </div>

          <div className="view_post_fullpost_title">{title}</div>
          <div className="view_post_fullpost_profile">
            <div
              className="UserProfile"
              onClick={() => display_profile(postdataarray.author.user_id)}
            >
              {profilepic ? (
                <img
                  src={profilepic}
                  alt="profilemini_img"
                  className="profile_miniimg"
                />
              ) : (
                <img
                  src={profileimg}
                  alt="profilemini_img"
                  className="profile_miniimg"
                />
              )}
            </div>

            <div className="view_post_fullpost_profile_username">
              {username}
            </div>
          </div>
          {photo && (
            <div className="view_post_fullpost_photo">
              <img
                src={photo}
                alt="viewpost_cover_img"
                className="view_post_fullpost_coverimg"
              />
            </div>
          )}
          <div className="view_post_fullpost_content">{post_content}</div>
          <div className="view_post_fullpost_img">
            {post_photo_url.map((data) => {
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
                className={`${user_like_status ? "like" : "unlike"}`}
                size={22}
              />
              <p className="view_post_text">
                <p>{likecount}</p> Likes
              </p>
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
                placeholder="Add your reply here"
              />
              <button className="view_post_comment_button">
                <MdSend size={30} />
              </button>
            </form>
          </div>
          {!loadingcomment && (
            <div className="view_post_comment">
              <Comment_generator
                data={commentdata}
                display_profile={display_profile}
                display_reply={true}
              />
            </div>
          )}
        </div>
      </div>
      {!loading && (
        <div
          className={`viewpost_miniprofile_popup ${
            displayProfile ? "display_none" : null
          }`}
        >
          <Miniprofile display={display_profile} user_id={userminiprofile} />
        </div>
      )}
      <div
        className={`viewpost_report_popup ${
          displayReport ? "display_none" : null
        }`}
      >
        <Reportpost_popup display={display_report} post_id={post_id.id} />
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
