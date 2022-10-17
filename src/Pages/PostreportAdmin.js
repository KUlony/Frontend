import React from "react"
import Post from "../components/Post"
// import Post from "../components/Post"
import "./PostreportAdmin.css"

function PostreportAdmin() {
  const data = [
    { people: 3, date: { name: "09/09/9099" }, postid: 1 },
    // { people: 2, date: "10/10/1011", postid: 2 },
  ]
  console.log(data)
  return (
    <div className="allpostreport">
      {data.map((item, index) => (
        <div className="contentreportpost" key={index}>
          <div className="headcard">
            <p className="topname">
              Reported by <span className="greenspan">{item.people}</span>{" "}
              users, Lastest report on{" "}
              <span className="greenspan">{item.date.name}</span>
            </p>
            <button className="discardbtnpost">
              Discard Report <i class="bi bi-x"></i>
            </button>
            <button className="deletebtnpost">
              Delete Post <i class="bi bi-trash"></i>
            </button>
          </div>
          {/* <Post
            title={post_title}
            like={element.post_like_count}
            post_content={element.post_content}
            photo={element.cover_photo_url}
            comment={element.post_comment_count}
            profilepic={element.author.profile_pic_url}
            post_photo_url={element.post_photo_url}
            username={element.author.username}
            post_time={element.post_time}
            post_id={element.post_id}
          /> */}
        </div>
      ))}
    </div>
  )
}

export default PostreportAdmin
