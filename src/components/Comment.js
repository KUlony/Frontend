import React, { useEffect, useRef, useState } from "react";
import "./Comment.css";
import { BiShare, BiHide, BiShow } from "react-icons/bi";
import Miniprofile from "./Miniprofile";
import Comment_child from "./Comment_child";
import { MdSend } from "react-icons/md";
import profileimg from "../picture/profile.png";
import reportgreen from "../picture/reportgreenimg.png";
import reply from "../picture/reply.png";
import showmore from "../picture/showmore.png";
import showless from "../picture/showless.png";
import x from "../picture/x.png";

function Comment(props) {
  const {
    display_profile,
    comment_content,
    display_reply,
    comment_id,
    user_id,
    user_name,
    reply_count,
    profile_pic_url,
    comment_time,
    display_report,
    comment_delete,
  } = props;
  // console.log(comment_time);
  //2022-10-20T13:56:08.372Z

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

  const [timeago, settimeago] = useState("");
  const [datenow, setdatenow] = useState(new Date());

  useInterval(() => {
    setdatenow(new Date());
  }, 1000);

  useInterval(() => {
    let timeback = new Date("2022-10-20T12:56:08.372Z");
    let date = new Date();
    let time = new Date(comment_time);
    // console.log("time", time, "date", date);
    // console.log(Math.abs((time - datenow) / 1000)); // safe to use

    let diffdatetime = Math.abs((time - datenow) / 1000);

    if (diffdatetime < 60) {
      console.log(diffdatetime);
      settimeago(`${Math.ceil(diffdatetime)} seconds ago`);
    } else if (diffdatetime < 3600) {
      settimeago(`${Math.ceil(diffdatetime / 60)} minute ago`);
    } else if (diffdatetime < 86400) {
      settimeago(`${Math.ceil(diffdatetime / 3600)} hour ago`);
    } else if (diffdatetime < 2592000) {
      settimeago(`${Math.ceil(diffdatetime / 86400)} days ago`);
    } else if (diffdatetime < 31104000) {
      settimeago(`${Math.ceil(diffdatetime / 2592000)} month ago`);
    } else {
      settimeago(`${Math.ceil(diffdatetime / 31104000)} year ago`);
    }
    // console.log(timeago);
  }, 1000);

  const token = localStorage.getItem("token");
  const userid = localStorage.getItem("user_id");
  const [possession, setPossession] = useState(
    user_id === userid ? true : false
  );
  const containerRef = useRef(null);
  const [replydata, setReplydata] = useState([]);
  const [numberofchild, setNumberofchild] = useState(reply_count);
  const [textHidden, settextHidden] = useState(false);
  const [displayviewmorecm, setdisplayviewmorecm] = useState(false);
  const [displayreply, setdisplayreply] = useState(display_reply);
  const [displayshowreply, setDisplayshowreply] = useState(
    reply_count === 0 ? true : false
  );
  const [displayreplyinput, setDisplayreplyinput] = useState(false);
  const [displaychild, setDisplaychild] = useState(false);
  const [replyinput, setReplyinput] = useState("");
  const [displayanimagoback, setdisplayanimagoback] = useState(true);
  const [replyfetch, setReplyfetch] = useState(true);
  const [firsttimeposition, setFirsttimeposition] = useState(false);
  const [profileopenstatus, setProfileopenstatus] = useState(false);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    containerRef.current.clientHeight > 53
      ? setdisplayviewmorecm(false)
      : setdisplayviewmorecm(true);
    // console.log(displayviewmorecm);
    settextHidden(true);
  }, [containerRef]);
  // console.log(comment_id);
  const [commentdata, setCommentdata] = useState();
  const replydata_fetch = async () => {
    try {
      if (loading) {
        const response_replydata = await fetch(`/api/reply/${comment_id}`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        if (!response_replydata.ok) {
          throw new Error("error");
        }
        const jsonresponse_replydate = await response_replydata.json();
        // console.log(jsonresponse_replydate);

        setReplydata(jsonresponse_replydate);
        setLoading(false);
        console.log("ok");
      }
      display_child();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!loading) {
      setDisplayshowreply(replydata.length === 0 ? true : false);
      setNumberofchild(replydata.length);
    }
  }, [replydata]);

  // useEffect(() => {
  //   replydata_fetch();
  // }, []);
  const comment_reply = async (e) => {
    try {
      e.preventDefault();
      const response_reply = await fetch(`/api/reply/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          comment_id: comment_id,
          reply_content: replyinput,
        }),
      });
      if (!response_reply.ok) {
        throw new Error("fail");
      }
      const json_reply = await response_reply.json();
      // console.log("json_reply", json_reply);
      const userdata = await fetch(`/api/user/${json_reply.user_id}/profile`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      const jsonuserdata = await userdata.json();
      const replyform = {
        author: {
          user_id: json_reply.user_id,
          username: jsonuserdata.user_name,
          profile_pic_url: jsonuserdata.profile_pic_url,
        },
        reply_id: json_reply._id,
        reply_content: json_reply.reply_content,
        reply_like_count: 0,
        reply_time: json_reply.reply_time,
      };

      updatecommentdata(replyform);
      setNumberofchild(numberofchild + 1);
      setDisplayshowreply(false);
      setReplyinput("");
    } catch (err) {
      console.error(err);
    }
  };

  const comment_input = (e) => {
    setReplyinput(e.target.value)
  }

  const display_child = () => {
    setDisplaychild(!displaychild)
    setdisplayanimagoback(!displaychild)
    setFirsttimeposition(true)
  }

  const updatecommentdata = (data) =>
    setReplydata((replydata) => [...replydata, data]);

  const [visible, setVisible] = useState(false);

  const deletecomment = () => {
    comment_delete(comment_id);
    if (comment_delete(comment_id)) {
      setVisible(true);
    }
  };
  return (
    <div className="comment_main">
      {!visible && (
        <div>
          <div className="comment_parent">
            <div
              className="comment_profile"
              onClick={() => display_profile(user_id)}
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
            {/* <h5 className="comment_name">{user_name}</h5> */}
            <h5 className="comment_name">{user_name}</h5>
            {!possession && (
              <img
                src={reportgreen}
                className="comment_report_button"
                onClick={() => display_report("Comment", comment_id)}
              />
            )}
            {possession && (
              <img
                src={x}
                className="comment_x_button"
                onClick={deletecomment}
              />
            )}
            <div className="comment_parent_context" ref={containerRef}>
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
              {textHidden ? "show more" : "show less"}
            </button>
            <div className="date_time_diff">{timeago}</div>
          </div>

          {firsttimeposition && (
            <div
              className={`comment_child ${displaychild ? "reply_open" : null} ${
                displayanimagoback ? null : "reply_close"
              }`}
            >
              {!loading && (
                <div>
                  {replydata.map((data) => (
                    <Comment_child
                      display_profile={display_profile}
                      reply_data={data}
                      display_report={display_report}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
          <div className="comment_interact">
            <button
              className={`comment_reply ${
                displayreply ? null : "display_none"
              }  
        ${displaychild ? null : "comment_reply_nochild"}
        
        
        `}
              onClick={() => setDisplayreplyinput(!displayreplyinput)}
            >
              <img
                src={reply}
                className={`comment_shareimg
          }`}
              />{" "}
              Reply
            </button>
            <button
              className={`comment_showreply ${
                displayreply ? null : "comment_showreplyfreespace"
              }
          ${!displayshowreply ? null : "display_none"}
           ${displaychild ? null : "comment_showreply_nochild"}  
        ${displayreply || displaychild || "comment_showreplyhome"}
        `}
              onClick={replydata_fetch}
            >
              {displaychild ? (
                <div className="removebackground">
                  <img src={showless} className={`comment_show_button`} />
                  Hide Reply
                </div>
              ) : (
                <div className="removebackground">
                  <img src={showmore} className={`comment_show_button`} />
                  View {numberofchild} Reply
                </div>
              )}{" "}
            </button>
          </div>
          <div>
            {displayreplyinput && (
              <form onSubmit={comment_reply} className={`commentreply_form `}>
                <input
                  className="commentreply_input"
                  onChange={comment_input}
                  required
                  type="text"
                  value={replyinput}
                  placeholder="Add your reply here"
                />
                <button className="commentreply_button">
                  <MdSend size={30} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Comment
