import React, { useEffect, useRef, useState } from "react";
import "./Comment.css";
import { BiShare } from "react-icons/bi";
import Miniprofile from "./Miniprofile";
import Comment_child from "./Comment_child";

function Comment(props) {
  const containerRef = useRef(null);
  const { display_profile, comment_content } = props;

  const testCommentChildData = [{ a: 1 }, { a: 2 }, { a: 3 }];

  const [textHidden, settextHidden] = useState(false);
  const [displayviewmorecm, setdisplayviewmorecm] = useState(false);
  const [displayreply, setdisplayreply] = useState(true);
  useEffect(() => {
    console.log(containerRef.current);
    console.log(containerRef.current.clientHeight);
    containerRef.current.clientHeight > 53
      ? setdisplayviewmorecm(false)
      : setdisplayviewmorecm(true);
    console.log(displayviewmorecm);
    settextHidden(true);
  }, [containerRef]);
  // const [divHeight, setDivHeight] = useState(0);

  // const ref = useRef(null);
  // useEffect(() => {
  //   console.log(ref.current);
  //   setDivHeight(ref.current.clientHeight);
  //   console.log("height: ", ref.current.clientHeight);

  //   console.log("width: ", ref.current.clientWidth);
  // }, []);

  return (
    <div className="comment_main">
      <div className="comment_parent">
        <div
          className="comment_profile"
          onClick={() => display_profile("testdata")}
        ></div>
        <h5 className="comment_name">กัณฑ์เพชร เตชะวิจิตราาาาาาาาาาาาาา</h5>
        <div className="test" ref={containerRef}>
          <p
            className={`comment_breakline ${
              textHidden ? "comment_text" : null
            } `}
          >
            {comment_content}
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
