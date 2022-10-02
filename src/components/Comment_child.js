import React, { useState } from "react";
import "./Comment_child.css";
import { BiShare } from "react-icons/bi";

function Comment_child(props) {
  const { display_profile } = props;
  const commenttestdata =
    "dsamkldalksdmlkadmlkasldkaskldkaldkaldalkjdlkadjkaldjkalsj";
  const commentData = commenttestdata.length >= 120;
  const [textHidden, settextHidden] = useState(true);
  const [displayviewmorecm, setdisplayviewmorecm] = useState(
    commentData ? false : true
  );

  // const getheight = (e) => {
  //   console.log(e.offsetHeight);
  // };

  return (
    <div className="comment_child_mainbox">
      <div className="comment_child_content">
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
        </div>
      </div>
    </div>
  );
}

export default Comment_child;
