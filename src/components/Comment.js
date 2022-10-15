import React, { useEffect, useRef, useState } from "react";
import "./Comment.css";
import { BiShare, BiHide, BiShow } from "react-icons/bi";
import Miniprofile from "./Miniprofile";
import Comment_child from "./Comment_child";
import { MdSend } from "react-icons/md";

function Comment(props) {
  const {
    display_profile,
    comment_content,
    display_reply,
    comment_id,
    user_id,
    user_name,
  } = props;
  const containerRef = useRef(null);
  const [replydata, setReplydata] = useState([]);
  const [numberofchild, setNumberofchild] = useState(replydata.length);
  const [textHidden, settextHidden] = useState(false);
  const [displayviewmorecm, setdisplayviewmorecm] = useState(false);
  const [displayreply, setdisplayreply] = useState(display_reply);
  const [displayshowreply, setDisplayshowreply] = useState(
    replydata.length === 0 ? true : false
  );
  const [displayreplyinput, setDisplayreplyinput] = useState(false);
  const [displaychild, setDisplaychild] = useState(false);
  const [replyinput, setReplyinput] = useState("");
  const [displayanimagoback, setdisplayanimagoback] = useState(true);
  const [replyfetch, setReplyfetch] = useState(true);
  const [firsttimeposition, setFirsttimeposition] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    containerRef.current.clientHeight > 53
      ? setdisplayviewmorecm(false)
      : setdisplayviewmorecm(true);
    console.log(displayviewmorecm);
    settextHidden(true);
  }, [containerRef]);

  // console.log(comment_id);
  const [commentdata, setCommentdata] = useState();
  const replydata_fetch = async () => {
    try {
      setLoading(false);
      const response_replydata = await fetch(
        `http://localhost:4000/api/reply/634b0b9822ef3cd0bc45f6c2`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpdHRpcG9uZ3BvbjkxQGdtYWlsLmNvbSIsImlkIjoiNjM0OTIzZTI0ZGY2NmY5OWU2ZWQyZDI0IiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTY2NTgzNDI2MiwiZXhwIjoxNjY1OTIwNjYyfQ.J1WUIsjEaBStoia14Q9s7_NSpMxm_gSbBiPqPUebwHo`,
          },
        }
      );
      const jsonresponse_replydate = await response_replydata.json();
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (loading) {
      // replydata_fetch();
    }
  }, []);
  const comment_reply = async (e) => {
    try {
      e.preventDefault();
      const response_reply = await fetch(
        `http://localhost:4000/api/reply/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpdHRpcG9uZ3BvbjkxQGdtYWlsLmNvbSIsImlkIjoiNjM0OTIzZTI0ZGY2NmY5OWU2ZWQyZDI0IiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTY2NTgzNDI2MiwiZXhwIjoxNjY1OTIwNjYyfQ.J1WUIsjEaBStoia14Q9s7_NSpMxm_gSbBiPqPUebwHo`,
          },
          body: JSON.stringify({
            comment_id: comment_id,
            reply_content: replyinput,
          }),
        }
      );
      if (!response_reply.ok) {
        throw new Error("fail");
      }
      const replyform = { reply_content: replyinput };

      updatecommentdata(replyform);
      setNumberofchild(numberofchild + 1);
      setDisplayshowreply(false);
      setReplyinput("");
    } catch (err) {
      console.error(err);
    }
  };

  const comment_input = (e) => {
    setReplyinput(e.target.value);
  };

  const display_child = () => {
    setDisplaychild(!displaychild);
    setdisplayanimagoback(!displaychild);
    setFirsttimeposition(true);
  };

  const updatecommentdata = (data) =>
    setReplydata((replydata) => [...replydata, data]);
  return (
    <div className="comment_main">
      <div className="comment_parent">
        <div
          className="comment_profile"
          onClick={() => display_profile(user_id)}
        ></div>
        <h5 className="comment_name">{user_name}</h5>
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
      </div>

      {firsttimeposition && (
        <div
          className={`comment_child ${displaychild ? "reply_open" : null} ${
            displayanimagoback ? null : "reply_close"
          }`}
        >
          {replydata.map((data) => (
            <Comment_child
              display_profile={display_profile}
              reply_content={data.reply_content}
            />
          ))}
        </div>
      )}

      <button
        className={`comment_reply ${displayreply ? null : "display_none"}  
        ${displaychild ? null : "comment_reply_nochild"}
        
        
        `}
        onClick={() => setDisplayreplyinput(!displayreplyinput)}
      >
        <BiShare
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
        onClick={display_child}
      >
        {displaychild ? (
          <div className="removebackground">
            <BiHide className={`comment_show_button`} />
            Hide Reply
          </div>
        ) : (
          <div className="removebackground">
            <BiShow className={`comment_show_button`} />
            View {numberofchild} Reply
          </div>
        )}{" "}
      </button>
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
  );
}

export default Comment;
