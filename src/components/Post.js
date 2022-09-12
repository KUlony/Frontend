import React, { useState } from "react";
import "./Post.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineModeComment, MdTitle } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import Post_generator from "./Post_generator";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Miniprofile from "./Miniprofile";
function Post(props) {
  const display = () => {
    setdisplayProfile(!displayProfile);
  };
  const [displayProfile, setdisplayProfile] = useState(true);
  const { title, like, post_content, photo } = props;
  console.log(title);
  const [reportpost_drop, setreportpost_drop] = useState("btn_where");
  const report_btn = () => {
    if (reportpost_drop === "btn_where") {
      setreportpost_drop("btn_where2");
    } else {
      setreportpost_drop("btn_where");
    }
  };
  return (
    <div>
      <div className="PostBox">
        <div className="Header">
          <div className="UserProfile" onClick={display}></div>
          <div className="TitleHead_box">
            <h4 className="TitleHead">{title}</h4>
          </div>

          <div className="test_btn">
            <button className="btn_where3" onClick={report_btn}>
              <RiArrowDropDownLine className="dropdown_iconri" />
            </button>
            <div className={reportpost_drop}>
              <button className="post_report_btn">Report post</button>
            </div>
          </div>
        </div>

        <p className="Content">{post_content}</p>

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
            <MdOutlineModeComment className="Comment" size={30} />
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
        {/* <div className="post_profile"></div> */}
      </div>
      <div className={`miniprofile_post ${displayProfile ? "none" : null}`}>
        <Miniprofile titlepost={title} display={display} />
        {title}
      </div>
      <div
        className={`cover ${displayProfile ? "none" : null}`}
        onClick={display}
      ></div>
    </div>
  );
}

export default Post;
