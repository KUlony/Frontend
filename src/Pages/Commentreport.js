import React from "react"
import "./Commentreport.css"

function Commentreport() {
  const data = [
    { people: 3, date: "09/09/9099", postid: 1 },
    { people: 2, date: "10/10/1011", postid: 2 },
  ]
  console.log(data)

  return (
    <div className="allcomreport">
      {data.map((item, index) => (
        <div className="contentreportcom" key={index}>
          <div className="headcardcom">
            <div className="deteil">
              <p className="topnamecom">
                Reported by <span className="greenspan">{item.people}</span>{" "}
                users, Lastest report on{" "}
                <span className="greenspan">{item.date}</span>
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
          <div>
            <a href={`/viewpost/:${item.postid}`} className="viewpost">
              View post <i class="bi bi-eye-fill"></i>
            </a>
          </div>
          {console.log(item)}
        </div>
      ))}
    </div>
  )
}

export default Commentreport
