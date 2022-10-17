import React from "react"
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
        </div>
      ))}
    </div>
  )
}

export default PostreportAdmin
