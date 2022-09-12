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
            like={element.like}
            post_content={element.post_content}
            photo={element.cover_photo_url}
          />
        );
      })}
    </div>
  );
}

export default Post_generator;
