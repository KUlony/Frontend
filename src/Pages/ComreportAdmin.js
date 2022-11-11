import axios from "axios"
import React, { useEffect, useState } from "react"
import Commentadmin from "../components/Commentadmin"
import "./ComreportAdmin.css"

function ComreportAdmin() {
  const [commentdata, setcommentdata] = useState([])
  const [commentiddata, setcommentiddata] = useState([])

  const token = localStorage.getItem("token")

  const gendata = () => {
    axios
      .get(
        `https://kulony-backend.herokuapp.com/api/admin/get_comment_report`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MTY5MDQzLCJleHAiOjE2NjgyNTU0NDN9.3gqHm5QHtVx0dzm0_vtI-VPYWOveBqvVJGMECmv5vOo`,
          },
        }
      )
      .then((res) => {
        const data = res.data
        setcommentdata(data)
        setcommentiddata([])

        // console.log(data)
        data.map((item, index) =>
          axios
            .get(
              `https://kulony-backend.herokuapp.com/api/comment/get_comment_data/${item._id}`,
              {
                headers: {
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MTY5MDQzLCJleHAiOjE2NjgyNTU0NDN9.3gqHm5QHtVx0dzm0_vtI-VPYWOveBqvVJGMECmv5vOo`,
                },
              }
            )
            .then((res) => {
              setcommentiddata((iditemed) => [...iditemed, res.data])
              // setPostiddata(res.data)
              // console.log(res.data)
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

  console.log(commentdata)
  console.log(commentiddata)

  const discarddata = (e) => {
    axios
      .delete(
        `https://kulony-backend.herokuapp.com/api/admin/delete_report/${e._id}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MTY5MDQzLCJleHAiOjE2NjgyNTU0NDN9.3gqHm5QHtVx0dzm0_vtI-VPYWOveBqvVJGMECmv5vOo`,
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
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MTY5MDQzLCJleHAiOjE2NjgyNTU0NDN9.3gqHm5QHtVx0dzm0_vtI-VPYWOveBqvVJGMECmv5vOo`,
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

  return (
    <div className="allcomreport">
      {commentdata.map((item, index) => (
        <div className="contentreportcom" key={index}>
          <div className="headcardcom">
            <div className="deteil">
              <p className="topnamecom">
                Reported by <span className="greenspan">{item.count_user}</span>{" "}
                users, Lastest report on{" "}
                <span className="greenspan">
                  {item.year}-{item.month}-{item.day}
                </span>
              </p>
            </div>
            <div className="buttondis">
              <button
                className="discardbtncom"
                onClick={() => {
                  discarddata(item)
                  window.location.reload()
                }}
              >
                Discard Report <i class="bi bi-x"></i>
              </button>
              <button
                className="deletebtncom"
                onClick={() => {
                  deletedata(item)
                  window.location.reload()
                }}
              >
                Delete Comment <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
          {commentiddata.map((item2, index2) =>
            index === index2 ? (
              <div key={index2}>
                <Commentadmin
                  user_url={item2.author.profile_pic_url}
                  user_username={item2.author.username}
                  comment_content={item2.comment_content}
                  comment_time={item2.comment_time}
                />
                <div className="viewpostcomment">
                  <div className="typecomment">
                    <p className="reporttypecom">
                      Report Type :{" "}
                      {item.report_type.map((item3, index) =>
                        index >= 1 ? "," + item3 : item3
                      )}
                    </p>
                  </div>
                  <div className="view">
                    <a
                      href={`/viewpost/:${item2.post_id}`}
                      className="viewpost"
                    >
                      View post <i class="bi bi-eye-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      ))}
    </div>
  )
}

export default ComreportAdmin
