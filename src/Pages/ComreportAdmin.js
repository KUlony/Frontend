import axios from "axios"
import React, { useEffect, useState } from "react"
import Commentadmin from "../components/Commentadmin"
import "./ComreportAdmin.css"

function ComreportAdmin({ send }) {
  const [commentdata, setcommentdata] = useState([])
  const [commentiddata, setcommentiddata] = useState([])

  const token = localStorage.getItem("token")

  const gendata = () => {
    axios
      .get(`//localhost:4000/api/admin/get_comment_report`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        const data = res.data
        setcommentdata(data)
        setcommentiddata([])

        // console.log(data)
        data.map((item, index) =>
          axios
            .get(`//localhost:4000/api/comment/get_comment_data/${item._id}`, {
              headers: {
                Authorization: token,
              },
            })
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

  send(commentdata.length)

  console.log(commentdata)
  console.log(commentiddata)

  const discarddata = (e) => {
    axios
      .delete(`//localhost:4000/api/admin/delete_report/${e._id}`, {
        headers: {
          Authorization: token,
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

  const deletedata = (e) => {
    axios
      .delete(
        `//localhost:4000/api/admin/delete_report_entity/${e.report_id[0]}`,
        {
          headers: {
            Authorization: token,
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
      {!commentdata.length ? (
        <div className="contentreportcom">
          <p className="donthave">dont have report comment</p>
        </div>
      ) : (
        commentdata.map((item, index) => (
          <div className="contentreportcom" key={index}>
            <div className="headcardcom">
              <div className="deteil">
                <p className="topnamecom">
                  Reported by{" "}
                  <span className="greenspan">{item.count_user}</span> users,
                  Lastest report on{" "}
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
                        href={`/viewpost/${item2.post_id}`}
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
        ))
      )}
    </div>
  )
}

export default ComreportAdmin
