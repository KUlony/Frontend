import axios from "axios"
import React, { useEffect, useState } from "react"
import "./ComreportAdmin.css"

function ComreportAdmin() {
  const [commentdata, setcommentdata] = useState([])
  const [commentiddata, setcommentiddata] = useState([])

  // console.log(datasort)

  // useEffect(() => {
  //   if (datasort === "reported") {
  //     window.location.reload()
  //   } else if (datasort === "lasted") {
  //     window.location.reload()
  //   }
  // }, [])

  const token = localStorage.getItem("token")

  const gendata = () => {
    axios
      .get(
        `https://kulony-backend.herokuapp.com/api/admin/get_comment_report`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MTU0MTU2LCJleHAiOjE2NjgyNDA1NTZ9.JgM_yBd-_mCvMMv8hlo4Yl1zy7G0tsC8j9bpB9LYd9s`,
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
              `https://kulony-backend.herokuapp.com/api/comment/${item._id}`,
              {
                headers: {
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MTU0MTU2LCJleHAiOjE2NjgyNDA1NTZ9.JgM_yBd-_mCvMMv8hlo4Yl1zy7G0tsC8j9bpB9LYd9s`,
                },
              }
            )
            .then((res) => {
              setcommentiddata((iditemed) => [...iditemed, res.data])
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

  console.log(commentdata)
  console.log(commentiddata)

  const discarddata = (e) => {
    axios
      .delete(
        `https://kulony-backend.herokuapp.com/api/admin/delete_report/${e._id}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MTU0MTU2LCJleHAiOjE2NjgyNDA1NTZ9.JgM_yBd-_mCvMMv8hlo4Yl1zy7G0tsC8j9bpB9LYd9s`,
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
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MTU0MTU2LCJleHAiOjE2NjgyNDA1NTZ9.JgM_yBd-_mCvMMv8hlo4Yl1zy7G0tsC8j9bpB9LYd9s`,
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
              <button className="discardbtncom">
                Discard Report <i class="bi bi-x"></i>
              </button>
              <button className="deletebtncom">
                Delete Comment <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
          {/* <div>
            <a href={`/viewpost/:${item._id}`} className="viewpost">
              View post <i class="bi bi-eye-fill"></i>
            </a>
          </div> */}
          {/* {console.log(item)} */}
        </div>
      ))}
    </div>
  )
}

export default ComreportAdmin
