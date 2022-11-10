import axios from "axios"
import React, { useEffect, useState } from "react"
import Post from "../components/Post"
// import Post from "../components/Post"
import "./PostreportAdmin.css"

function PostreportAdmin() {
  const [postdata, setPostdata] = useState([])
  const [postiddata, setPostiddata] = useState([])

  const token = localStorage.getItem("token")

  // const genpost = (e) => {
  //   axios
  //     .get(`/api/post/${e}`, {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MDU4NzY3LCJleHAiOjE2NjgxNDUxNjd9.NJQU4HZ6PGXYigF-G3P5B0-zieqjl4y4jWq4qUMovG8`,
  //       },
  //     })
  //     .then((res) => {
  //       // setPostiddata((iditemed) => [...iditemed, res.data])
  //       setPostiddata(res.data)
  //       console.log(postiddata)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  // console.log(postiddata)

  const gendata = () => {
    setPostiddata([])
    axios
      .get(`/api/admin/get_post_report`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MDY4OTIzLCJleHAiOjE2NjgxNTUzMjN9.sFV9mFX51mo1n0-w49Dr8f52FyjgJ9FtqW6E_b1_AGE`,
        },
      })
      .then((res) => {
        const data = res.data
        setPostdata(data)
        // console.log(data)
        data.map((item, index) =>
          axios
            .get(`/api/post/${item._id}`, {
              headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MDY4OTIzLCJleHAiOjE2NjgxNTUzMjN9.sFV9mFX51mo1n0-w49Dr8f52FyjgJ9FtqW6E_b1_AGE`,
              },
            })
            .then((res) => {
              setPostiddata((iditemed) => [...iditemed, res.data])
              // setPostiddata(res.data)
              console.log(res.data)
            })
            .catch((err) => {
              console.log(err)
            })
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    gendata()
  }, [])

  console.log(postdata)
  console.log(postiddata)

  const discarddata = () => {
    axios
      .delete(`/api/admin/delete_report/{report_id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MDU4NzY3LCJleHAiOjE2NjgxNDUxNjd9.NJQU4HZ6PGXYigF-G3P5B0-zieqjl4y4jWq4qUMovG8`,
        },
      })
      .then((res) => {
        const data = res.data
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deletedata = () => {
    axios
      .delete(`/api/admin/delete_reported_entity/{report_id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MDU4NzY3LCJleHAiOjE2NjgxNDUxNjd9.NJQU4HZ6PGXYigF-G3P5B0-zieqjl4y4jWq4qUMovG8`,
        },
      })
      .then((res) => {
        const data = res.data
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="allpostreport">
      {postdata.map((item, index) => (
        <div className="contentreportpost" key={index}>
          <div className="headcard">
            <p className="topname">
              Reported by <span className="greenspan">{item.count_user}</span>{" "}
              users, Lastest report on{" "}
              <span className="greenspan">
                {item.year}-{item.month}-{item.day}
              </span>
            </p>
            <button className="discardbtnpost">
              Discard Report <i class="bi bi-x"></i>
            </button>
            <button className="deletebtnpost">
              Delete Post <i class="bi bi-trash"></i>
            </button>
          </div>
          {/* <p className="">Report Type : {item.report_type}</p> */}
          {/* {postiddata.map((item2, index2) =>
            index === index2 ? (
              <div key={index2}>
                <Post
                  title={item2.post_title}
                  like={item2.post_like_count}
                  post_content={item2.post_content}
                  photo={item2.cover_photo_url}
                  comment={item2.post_comment_count}
                  profilepic={item2.author.profile_pic_url}
                  post_photo_url={item2.post_photo_url}
                  post_topic={item2.post_topic}
                  username={item2.author.username}
                  post_time={item2.post_time}
                  post_id={item2.post_id}
                  user_id={item2.author.user_id}
                  user_like_status_post={item2.user_like_status}
                />
              </div>
            ) : null
          )} */}
        </div>
      ))}
    </div>
  )
}

export default PostreportAdmin
