import React from "react";
import "./Post.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineModeComment, MdTitle } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import Post_generator from "./Post_generator";
import { Link } from "react-router-dom";

function Post(props) {
  const { title, like, post_content, photo } = props;
  console.log(title);
  return (
    <div className="PostBox">
      <div className="Header">
        <div className="UserProfile"></div>
        {/* <div class="Report">Report</div> */}
        <div className="TitleHead_box">
          <h4 className="TitleHead">{title}</h4>
        </div>
        {/* <div>
          <button onclick="myFunction()" class="dropbtn">
            Dropdown
          </button>
          <div id="myDropdown" class="dropdown-content">
            <a href="#">Link 1</a>
          </div>
        </div> */}
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
    </div>
  );
}

export default Post;
