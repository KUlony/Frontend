import React from "react";
import Comment from "./Comment";

function Comment_generator(props) {
  const { data, display_profile, display_reply, updatecommentdata } = props;

  return (
    <div>
      {data.map((element) => {
        return (
          <Comment
            display_profile={display_profile}
            comment_content={element.comment_content}
            display_reply={display_reply}
          />
        );
      })}
    </div>
  );
}

export default Comment_generator;