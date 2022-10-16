import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Post from "../components/Post";
import Post_generator from "../components/Post_generator";
import "./MyPost.css";

function MyPost() {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [mypostdata, setMypostdata] = useState([]);
  const [userinfo, setUserinfo] = useState();
  const mypostfetch = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/user/mypost`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      const json = await response.json();
      console.log(json);
      setUserinfo(json.author);
      setMypostdata(json.post);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    mypostfetch();
  }, []);

  return (
    <div className="mypost">
      <div>
        <Navbar />
      </div>
      {!loading && (
        <div className="mypost_allpost">
          {mypostdata.map((element) => {
            return (
              <Post
                title={element.post_title}
                like={element.post_like_count}
                post_content={element.post_content}
                photo={element.cover_photo_url}
                comment={element.post_comment_count}
                profilepic={userinfo.profile_pic_url}
                post_photo_url={element.post_photo_url}
                username={userinfo.username}
                post_time={element.post_time}
                post_id={element.post_id}
                user_id={userinfo.user_id}
                user_like_status_post={element.user_like_status}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MyPost;
