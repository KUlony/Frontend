import React, { useEffect, useState, useRef } from "react";
import "./Comment_child.css";
import { BiShare } from "react-icons/bi";
import profileimg from "../picture/profile.png";
import reportgreen from "../picture/reportgreenimg.png";

function Comment_child(props) {
  const { display_profile, reply_data, display_report } = props;
  // console.log(reply_data);
  const userid = localStorage.getItem("user_id");
  const [possession, setPossession] = useState(
    reply_data.author.user_id === userid ? true : false
  );
  const [textHidden, settextHidden] = useState(false);
  const profile_pic_url = reply_data.author.profile_pic_url;
  const [displayviewmorecm, setdisplayviewmorecm] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // console.log(containerRef.current);
    // console.log(containerRef.current.clientHeight);
    containerRef.current.clientHeight > 53
      ? setdisplayviewmorecm(false)
      : setdisplayviewmorecm(true);
    // console.log(displayviewmorecm);
    settextHidden(true);
  }, [containerRef]);
  // console.log("replydata", reply_data);

  const [replytimeago, setReplyttimeago] = useState("");
  const [datenow, setdatenow] = useState(new Date());

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    setdatenow(new Date());
  }, 1000);

  useInterval(() => {
    let timeback = new Date("2022-10-20T12:56:08.372Z");

    let time = new Date(reply_data.reply_time);

    let diffdatetime = Math.abs((time - datenow) / 1000);
    if (diffdatetime < 60) {
      setReplyttimeago(`${Math.ceil(diffdatetime)} seconds ago`);
    } else if (diffdatetime < 3600) {
      setReplyttimeago(`${Math.ceil(diffdatetime / 60)} minute ago`);
    } else if (diffdatetime < 86400) {
      setReplyttimeago(`${Math.ceil(diffdatetime / 3600)} hour ago`);
    } else if (diffdatetime < 2592000) {
      setReplyttimeago(`${Math.ceil(diffdatetime / 86400)} days ago`);
    } else if (diffdatetime < 31104000) {
      setReplyttimeago(`${Math.ceil(diffdatetime / 2592000)} month ago`);
    } else {
      setReplyttimeago(`${Math.ceil(diffdatetime / 31104000)} year ago`);
    }
  }, 1000);

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
            {/* <h5 className="comment_name">{reply_data.author.username}</h5> */}
            <h5 className="comment_name">maikaneiei</h5>
            {!possession && (
              <img
                src={reportgreen}
                className="comment_report_button"
                onClick={() => display_report("Reply", reply_data.reply_id)}
              />
            )}
            {possession && <div>delete</div>}

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
            <div className="date_time_diff">{replytimeago}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment_child;
