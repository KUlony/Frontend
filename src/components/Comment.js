import React, { useState } from "react";
import "./Comment.css";
import { BiShare } from "react-icons/bi";
import Miniprofile from "./Miniprofile";
import Comment_child from "./Comment_child";

function Comment(props) {
  const { display_profile } = props;

  const testCommentChildData = [{ a: 1 }, { a: 2 }, { a: 3 }];

  const commenttestdata = "dsamkldalksdmlkadmlkasldkaskldka";
  const commentData = commenttestdata.length >= 120;
  const [textHidden, settextHidden] = useState(true);
  const [displayviewmorecm, setdisplayviewmorecm] = useState(
    commentData ? false : true
  );
  const [displayreply, setdisplayreply] = useState(true);
  return (
    <div className="comment_main">
      <div className="comment_parent">
        <div
          className="comment_profile"
          onClick={() => display_profile("testdata")}
        ></div>
        <h5 className="comment_name">กัณฑ์เพชร เตชะวิจิตราาาาาาาาาาาาาา</h5>
        <div className="test">
          <p
            className={`comment_breakline ${
              textHidden ? "comment_text" : null
            }`}
          >
            {commenttestdata}
          </p>
        </div>
        <button
          className={`comment_viewmore ${
            displayviewmorecm ? "display_none" : null
          }`}
          onClick={() => settextHidden(!textHidden)}
        >
          {textHidden ? "view more" : "show less"}
        </button>
      </div>
      <button
        className={`comment_reply ${displayreply ? null : "display_none"}`}
      >
        <BiShare className="comment_shareimg" /> Reply
      </button>
      <div className={`comment_child `}>
        {testCommentChildData.map(() => (
          <Comment_child display_profile={display_profile} />
        ))}
      </div>
    </div>
  );
}

export default Comment;
