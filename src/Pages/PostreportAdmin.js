import axios from "axios"
import React, { useEffect, useState } from "react"
import Post from "../components/Post"
// import Post from "../components/Post"
import "./PostreportAdmin.css"

function PostreportAdmin() {
  const [postdata, setPostdata] = useState([])
  const [postiddata, setPostiddata] = useState([])

  const token = localStorage.getItem("token")

  const genpost = () => {
    axios
      .get(`/api/post/635cd1f7672871211ee8cb13`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbGQuNDExMkBnbWFpbC5jb20iLCJpZCI6IjYzNDU3Njg4ZjdjM2Q1MzRmMjYwZmRhMCIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2Njc5NzEzNzIsImV4cCI6MTY2ODA1Nzc3Mn0.gly9ATCPhhspCN2vrM74iaUZtK0OjMXdgRRhcUiPJlw`,
        },
      })
      .then((res) => {
        setPostiddata((iditemed) => [...iditemed, res.data])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  console.log(postiddata)

  const gendata = () => {
    axios
      .get(`/api/admin/get_post_report`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbGQuNDExMkBnbWFpbC5jb20iLCJpZCI6IjYzNDU3Njg4ZjdjM2Q1MzRmMjYwZmRhMCIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2Njc5NzEzNzIsImV4cCI6MTY2ODA1Nzc3Mn0.gly9ATCPhhspCN2vrM74iaUZtK0OjMXdgRRhcUiPJlw`,
        },
      })
      .then((res) => {
        const data = res.data
        setPostdata(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    gendata()
  }, [])

  console.log(postdata)

  const discarddata = () => {
    axios
      .delete(`/api/admin/delete_report/{report_id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbGQuNDExMkBnbWFpbC5jb20iLCJpZCI6IjYzNDU3Njg4ZjdjM2Q1MzRmMjYwZmRhMCIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2Njc5NzEzNzIsImV4cCI6MTY2ODA1Nzc3Mn0.gly9ATCPhhspCN2vrM74iaUZtK0OjMXdgRRhcUiPJlw`,
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbGQuNDExMkBnbWFpbC5jb20iLCJpZCI6IjYzNDU3Njg4ZjdjM2Q1MzRmMjYwZmRhMCIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2Njc5NzEzNzIsImV4cCI6MTY2ODA1Nzc3Mn0.gly9ATCPhhspCN2vrM74iaUZtK0OjMXdgRRhcUiPJlw`,
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
          {/* {genpost("635cd1f7672871211ee8cb13")} */}
          {/* <Post
          title={item.post_title}
          like={item.post_like_count}
          post_content={item.post_content}
          photo={item.cover_photo_url}
          comment={item.post_comment_count}
          profilepic={item.author.profile_pic_url}
          post_photo_url={item.post_photo_url}
          post_topic={item.post_topic}
          username={item.author.username}
          post_time={item.post_time}
          post_id={item.post_id}
          user_id={item.author.user_id}
          user_like_status_post={item.user_like_status}
          /> */}
        </div>
      ))}
    </div>
  )
}

export default PostreportAdmin
