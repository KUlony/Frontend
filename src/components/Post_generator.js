import React from "react";
import Post from "./Post";

function Post_generator(props) {
  const { data } = props;

  return (
    <div>
      {data.map((element) => {
        return (
          <Post
            title={element.post_title}
            like={element.post_like_count}
            post_content={element.post_content}
            photo={element.cover_photo_url}
            comment={element.post_comment_count}
            profilepic={element.author.profile_pic_url}
            post_photo_url={element.post_photo_url}
            username={element.author.username}
            post_time={element.post_time}
            post_id={element.post_id}
            user_id={element.author.user_id}
            user_like_status_post={element.user_like_status}
          />
        );
      })}{" "}
    </div>
  );
}

export default Post_generator;
