import React, { useState } from "react";
import "./Post.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineModeComment, MdTitle } from "react-icons/md";
import { AiOutlineShareAlt, AiOutlineClose } from "react-icons/ai";
import Post_generator from "./Post_generator";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Miniprofile from "./Miniprofile";
import Reportpost_popup from "./Reportpost_popup";
import Comment from "./Comment";
import Showimg from "./Showimg";
import Comment_generator from "./Comment_generator";

function Post(props) {
  const display_profile = (maikan) => {
    setdisplayProfile(!displayProfile);
    console.log(maikan);
  };
  const display_report = () => {
    setdisplayReport(!displayReport);
  };
  const display_comment = () => {
    setdisplatComment(!displayComment);
  };

  const display_img = () => {
    setdisplayImg(!displayImg);
  };
  const { title, like, post_content, photo, comment, profilepic, username } =
    props;
  const [displayReport, setdisplayReport] = useState(true);
  const [displayProfile, setdisplayProfile] = useState(true);
  const [displayComment, setdisplatComment] = useState(true);
  const [displayImg, setdisplayImg] = useState(false);
  const [reportpost_drop, setreportpost_drop] = useState("btn_where");
  const [imgcoverurl, setImgcoverurl] = useState(`${photo}`);
  const [havedata, setHavedata] = useState(true);
  const report_dropdown = () => {
    if (reportpost_drop === "btn_where") {
      setreportpost_drop("btn_where2");
    } else {
      setreportpost_drop("btn_where");
    }
  };

  const comment_test_data = [
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
  ];

  return (
    <div className>
      <div className="PostBox">
        <div className="Header">
          <div className="UserProfile" onClick={display_profile}>
            <img
              src={profilepic}
              alt="profilemini_img"
              className="profile_miniimg"
            />
          </div>
          <div className="TitleHead_box">
            <h4 className="TitleHead">{title}</h4>
          </div>

          <div className="test_btn">
            <button className="btn_dropdown_report" onClick={report_dropdown}>
              <RiArrowDropDownLine className="dropdown_iconri" />
            </button>
            <div className={reportpost_drop}>
              <button className="post_report_btn" onClick={display_report}>
                Report post
              </button>
            </div>
          </div>
        </div>

        <p className="post_Content">{post_content}</p>

        <div class="FakeImage" onClick={display_img}>
          <img src={photo} alt="profilemini_img" className="post_img_cover" />
        </div>

        <h4 class="Topic_text">Topics : Engineering, รีวิวการเรียน</h4>
        <div className="interact">
          <div className="like_box_value">
            <FcLikePlaceholder className="Like" size={30} />
          </div>
          <div className="like_box">
            <div class="LikeCount">{like}</div>
          </div>
          <div className="comment_box_value">
            <MdOutlineModeComment
              className="comment_icon"
              size={30}
              onClick={display_comment}
            />
            <div
              className={`post_relative ${
                displayComment ? "display_none2" : null
              }`}
            >
              <div className="comment_all">
                <div className="minicommentbox">
                  <header className="comment_header">
                    <p>All comments</p>
                    <AiOutlineClose
                      className="comment_exit"
                      onClick={display_comment}
                    />
                  </header>
                  <div className="comment_content">
                    $
                    {havedata && (
                      <Comment_generator
                        data={comment_test_data}
                        display_profile={display_profile}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment_box">
            <div class="CommentCount">{comment}</div>
          </div>
          <div className="share_box">
            <AiOutlineShareAlt className="Share" size={30} />
          </div>
          <Link
            to="/viewpost"
            className="More"
            state={{
              title: { title },
              like: { like },
              post_content: { post_content },
              photo: { photo },
              comment: { comment },
              profilepic: { profilepic },
              username: { username },
            }}
          >
            viewpost{" "}
          </Link>
        </div>
      </div>
      <div
        className={`miniprofile_post ${displayProfile ? "display_none" : null}`}
      >
        <Miniprofile titlepost={title} display={display_profile} />
      </div>
      <div
        className={`cover ${displayProfile ? "display_none" : null}`}
        onClick={display_profile}
      ></div>
      <div
        className={`reportpost_popup ${displayReport ? "display_none" : null}`}
      >
        <Reportpost_popup display={display_report} />
      </div>
      <div
        className={`post_freespace ${displayComment ? "display_none" : null}`}
      ></div>
      <div
        className={`${displayImg ? null : "display_none"}`}
        onClick={display_img}
      >
        <Showimg imgurl={imgcoverurl} />
        <div className={`cover ${displayImg ? null : "display_none"}`}></div>
      </div>
    </div>
  );
}

export default Post;
