import React, { useEffect, useState, useRef } from "react";
import "./Comment_child.css";
import { BiShare } from "react-icons/bi";
import profileimg from "../picture/profile.png";
function Comment_child(props) {
  const { display_profile, reply_data } = props;

  const [textHidden, settextHidden] = useState(false);
  const profile_pic_url = reply_data.author.profile_pic_url;
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
  console.log("replydata", reply_data);

  return (
    <div className="comment_child_mainbox">
      <div className="comment_child_content">
        <div className="comment_main">
          <div className="comment_parent">
            <div
              className="comment_profile"
              onClick={() => display_profile(reply_data.author.user_id)}
            >
              {profile_pic_url ? (
                <img
                  src={profile_pic_url}
                  alt="profile_img"
                  className="comment_profile_pic"
                />
              ) : (
                <img
                  src={profileimg}
                  alt="profile_img"
                  className="comment_profile_pic"
                />
              )}
            </div>
            <h5 className="comment_name">{reply_data.author.username}</h5>
            <div className="test" ref={containerRef}>
              <p
                className={`comment_breakline reply_content ${
                  textHidden ? "comment_text" : null
                }`}
              >
                {reply_data.reply_content}
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
