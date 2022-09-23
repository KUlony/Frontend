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

  const [displayReport, setdisplayReport] = useState(true);
  const [displayProfile, setdisplayProfile] = useState(true);
  const [displayComment, setdisplatComment] = useState(true);
  const [reportpost_drop, setreportpost_drop] = useState("btn_where");

  const { title, like, post_content, photo } = props;
  const report_dropdown = () => {
    if (reportpost_drop === "btn_where") {
      setreportpost_drop("btn_where2");
    } else {
      setreportpost_drop("btn_where");
    }
  };

  return (
    <div className>
      <div className="PostBox">
        <div className="Header">
          <div className="UserProfile" onClick={display_profile}></div>
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

        <div class="FakeImage">{photo}</div>

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
                displayComment ? "display_none" : null
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
                    <Comment display_profile={display_profile} />
                    <Comment display_profile={display_profile} />{" "}
                    <Comment display_profile={display_profile} />{" "}
                    <Comment display_profile={display_profile} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment_box">
            <div class="CommentCount">123</div>
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
    </div>
  );
}

export default Post;
