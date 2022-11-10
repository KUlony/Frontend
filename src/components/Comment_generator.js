import React from "react";
import Comment from "./Comment";

function Comment_generator(props) {
  const {
    data,
    display_profile,
    display_reply,
    updatecommentdata,
    display_report,
    comment_delete,
  } = props;

  return (
    <div>
      {data.map((element) => {
        // console.log(data);
        return (
          <Comment
            display_profile={display_profile}
            comment_content={element.comment_content}
            display_reply={display_reply}
            comment_id={element.comment_id}
            user_id={element.author.user_id}
            user_name={element.author.username}
            reply_count={element.comment_reply_count}
            profile_pic_url={element.author.profile_pic_url}
            comment_time={element.comment_time}
            display_report={display_report}
            comment_delete={comment_delete}
          />
        );
      })}
    </div>
  );
}

export default Comment_generator;
