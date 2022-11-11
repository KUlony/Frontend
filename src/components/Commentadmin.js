import React from "react"
import "./Commentadmin.css"

const Commentadmin = ({
  user_url,
  user_username,
  comment_content,
  comment_time,
}) => {
  return (
    <div className="commentbody">
      <div className="insidecomment">
        <img alt="" src={user_url} className="userpicincomment"></img>
        <div className="contentcomment">
          <p className="commentnameuser">{user_username}</p>
          <p className="commentcententuser">{comment_content}</p>
          <div className="timeday">{comment_time}</div>
        </div>
      </div>
    </div>
  )
}

export default Commentadmin
