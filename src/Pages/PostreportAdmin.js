import axios from "axios"
import React, { useEffect, useState } from "react"
import Post from "../components/Post"
// import Post from "../components/Post"
import "./PostreportAdmin.css"

function PostreportAdmin({ datasort, send }) {
  const [postdata, setPostdata] = useState([])
  const [postiddata, setPostiddata] = useState([])

  console.log(datasort)

  useEffect(() => {
    if (datasort === "reported") {
      window.location.reload()
    } else if (datasort === "lasted") {
      window.location.reload()
    }
  }, [])

  const token = localStorage.getItem("token")

  const gendata = () => {
    axios
      .get(
        `https://kulony-backend.herokuapp.com/api/admin/get_post_report?sortby${datasort}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        const data = res.data
        setPostdata(data)
        setPostiddata([])

        // console.log(data)
        data.map((item, index) =>
          axios
            .get(`https://kulony-backend.herokuapp.com/api/post/${item._id}`, {
              headers: {
                Authorization: `${token}`,
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

  send(postdata.length)

  console.log(postdata)
  console.log(postiddata)

  const discarddata = (e) => {
    axios
      .delete(
        `https://kulony-backend.herokuapp.com/api/admin/delete_report/${e._id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        const data = res.data
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deletedata = (e) => {
    axios
      .put(
        `https://kulony-backend.herokuapp.com/api/admin/delete_reported_entity/${e._id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        const data = res.data
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // const checkedItems = items.length
  //   ? items.reduce((total, item) => {
  //       return total + ", " + item
  //     })
  //   : ""

  return (
    <div className="allpostreport">
      {!postdata.length ? (
        <div className="contentreportpost">
          <p className="donthave">dont have report post</p>
        </div>
      ) : (
        postdata.map((item, index) => (
          <div className="contentreportpost" key={index}>
            <div className="headcard">
              <div className="headnamecom">
                <p className="topname">
                  Reported by{" "}
                  <span className="greenspan">{item.count_user}</span> users,
                  Lastest report on{" "}
                  <span className="greenspan">
                    {item.year}-{item.month}-{item.day}
                  </span>
                </p>
              </div>
              <div className="btnpost">
                <button
                  className="discardbtnpost"
                  onClick={() => {
                    discarddata(item)
                    window.location.reload()
                  }}
                >
                  Discard Report <i class="bi bi-x"></i>
                </button>
                <button
                  className="deletebtnpost"
                  onClick={() => {
                    deletedata(item)
                    window.location.reload()
                  }}
                >
                  Delete Post <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
            {postiddata.map((item2, index2) =>
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
            )}
            <p className="reporttype">
              Report Type :{" "}
              {item.report_type.map((item3, index) =>
                index >= 1 ? "," + item3 : item3
              )}
            </p>
          </div>
        ))
      )}
    </div>
  )
}

export default PostreportAdmin
