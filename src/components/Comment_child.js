import React, { useEffect, useState, useRef } from "react";
import "./Comment_child.css";
import { BiShare } from "react-icons/bi";

function Comment_child(props) {
  const { display_profile, reply_content } = props;

  const [textHidden, settextHidden] = useState(false);

  const [displayviewmorecm, setdisplayviewmorecm] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    console.log(containerRef.current);
    console.log(containerRef.current.clientHeight);
    containerRef.current.clientHeight > 53
      ? setdisplayviewmorecm(false)
      : setdisplayviewmorecm(true);
    console.log(displayviewmorecm);
    settextHidden(true);
  }, [containerRef]);

  return (
    <div className="comment_child_mainbox">
      <div className="comment_child_content">
        <div className="comment_main">
          <div className="comment_parent">
            <div
              className="comment_profile"
              onClick={() => display_profile("testdata")}
            ></div>
            <h5 className="comment_name">สมชาย กินดี</h5>
            <div className="test" ref={containerRef}>
              <p
                className={`comment_breakline ${
                  textHidden ? "comment_text" : null
                }`}
              >
                {reply_content}
              </p>
            </div>
            <button
              className={`comment_viewmore ${
                displayviewmorecm ? "display_none" : null
              }`}
              onClick={() => settextHidden(!textHidden)}
            >
              {textHidden ? "show more" : "show less"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment_child;
