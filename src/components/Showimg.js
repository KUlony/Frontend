import React from "react"
import "./Showimg.css"

function Showimg(props) {
  const { imgurl } = props
  return (
    <div className="center_img">
      <img src={imgurl} alt="big_img" />
    </div>
  )
}

export default Showimg
