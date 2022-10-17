import React, { useState } from "react"
import "./Post.css"
import { FcLikePlaceholder } from "react-icons/fc"
import { MdOutlineModeComment, MdTitle } from "react-icons/md"
import { AiOutlineShareAlt, AiOutlineClose } from "react-icons/ai"
import Post_generator from "./Post_generator"
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { RiArrowDropDownLine } from "react-icons/ri"
import Miniprofile from "./Miniprofile"
import Reportpost_popup from "./Reportpost_popup"
import Comment from "./Comment"
import Showimg from "./Showimg"
import Comment_generator from "./Comment_generator"
import { BsFillHeartFill } from "react-icons/bs"
import profileimg from "../picture/profile.png"
function Post(props) {
  const {
    title,
    like,
    post_content,
    photo,
    comment,
    profilepic,
    username,
    post_time,
    post_id,
    user_id,
    user_like_status_post,
  } = props
  const [displayReport, setdisplayReport] = useState(true)
  const [displayProfile, setdisplayProfile] = useState(true)
  const [displayComment, setdisplatComment] = useState(true)
  const [displayImg, setdisplayImg] = useState(false)
  const [reportpost_drop, setreportpost_drop] = useState("btn_where")
  const [imgcoverurl, setImgcoverurl] = useState(`${photo}`)
  const [havedata, setHavedata] = useState(true)
  const [likepost, setLikepost] = useState(false)
  const [likecount, setLikecount] = useState(like)
  const [profileurl, setProfileurl] = useState("")
  const [miniprofileid, setMiniprofileid] = useState("")
  const [user_like_status, setUser_like_status] = useState(
    user_like_status_post
  )
  const [commentdata, setCommentdata] = useState([])
  const [loadingcomment, setLoadingcomment] = useState(true)
  const token = localStorage.getItem("token")
  const report_dropdown = () => {
    if (reportpost_drop === "btn_where") {
      setreportpost_drop("btn_where2")
    } else {
      setreportpost_drop("btn_where")
    }
  }
  const display_profile = (userid) => {
    setdisplayProfile(!displayProfile)
    setMiniprofileid(userid)
  }
  const display_report = () => {
    setdisplayReport(!displayReport)
  }
  const display_comment = () => {
    setdisplatComment(!displayComment)
  }

  const display_img = () => {
    setdisplayImg(!displayImg)
  }

  // const likepost_update = () => {
  //   setLikecount(likepost ? likecount - 1 : likecount + 1);
  //   setLikepost(!likepost);
  // };

  const likepost_update = async () => {
    try {
      if (user_like_status) {
        const remove = await fetch(
          `http://localhost:4000/api/post/unlike/${post_id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `${token}`,
            },
          }
        )
      } else {
        const add = await fetch(
          `http://localhost:4000/api/post/like/${post_id}`,
          {
            method: "POST",
            headers: {
              Authorization: `${token}`,
            },
          }
        )
      }

      setLikecount(user_like_status ? likecount - 1 : likecount + 1)
      setUser_like_status(!user_like_status)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchcomment = async () => {
    try {
      const comment_fetch_respone = await fetch(
        `http://localhost:4000/api/comment/${post_id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      const comment_json = await comment_fetch_respone.json()
      console.log(comment_json)
      console.log("as")
      setCommentdata(comment_json)
      setLoadingcomment(false)
      display_comment()
    } catch (err) {
      console.error(err)
    }
  }

  const timepost = post_time.split("T")
  const day = timepost[0].split("-").reverse().join("/")
  const timearray = timepost[1].split(".")
  const time = timearray[0]

  let inttime = parseFloat(time.split(":").join("."))

  let datetime = ""

  if (inttime >= 12 && inttime < 24) {
    if (inttime === 12) {
      datetime = "12:00 PM, " + day
    } else {
      const min = inttime.toString().split(".")
      inttime -= 12

      const date = inttime.toString().split(".")
      // console.log(date);
      datetime = date[0] + ":" + min[1] + " PM, " + day
    }
  } else {
    if (inttime === 24) {
      datetime = "12:00 AM, " + day
    } else {
      datetime = time + " AM, " + day
    }
  }
  // console.log(datetime);

  return (
    <div className>
      <div className="PostBox">
        <div className="Header">
          <div className="UserProfile" onClick={() => display_profile(user_id)}>
            {profilepic ? (
              <img
                src={profilepic}
                alt="profilemini_img"
                className="profile_miniimg"
              />
            ) : (
              <img
                src={profileimg}
                alt="profilemini_img"
                className="profile_miniimg"
              />
            )}
          </div>
          <div className="TitleHead_box">
            <h4 className="TitleHead">{title}</h4>
            <p>{datetime}</p>
          </div>

          <div className="test_btn">
            <button className="btn_dropdown_report" onClick={report_dropdown}>
              <RiArrowDropDownLine className="dropdown_iconri" />
            </button>
            <div className={reportpost_drop}>
              <button className="post_report_btn" onClick={display_report}>
                Report post
              </button>
            </div>
          </div>
        </div>
        <p className="post_Content">{post_content}</p>

        {photo && (
          <div class="FakeImage" onClick={display_img}>
            <img src={photo} alt="profilemini_img" className="post_img_cover" />
          </div>
        )}
        <h4 class="Topic_text">Topics : Engineering, รีวิวการเรียน</h4>
        <div className="interact">
          <div className="like_box_value" onClick={likepost_update}>
            <BsFillHeartFill className="likeshadowdrop1" size={28} />
            <BsFillHeartFill
              className={`${user_like_status ? "like" : "unlike"}`}
              size={22}
            />
          </div>
          <div className="like_box">
            <div class="LikeCount">{likecount}</div>
          </div>
          <div className="comment_box_value">
            <MdOutlineModeComment
              className="comment_icon"
              size={30}
              onClick={fetchcomment}
            />
            <div
              className={`post_relative ${
                displayComment ? "display_none2" : null
              }`}
            >
              <div className="comment_all">
                <div className="minicommentbox">
                  <header className="comment_header">
                    <p>All comments</p>
                    <AiOutlineClose
                      className="comment_exit"
                      onClick={display_comment}
                    />
                  </header>
                  <div className="comment_content">
                    {havedata && (
                      <Comment_generator
                        data={commentdata}
                        display_profile={display_profile}
                        display_reply={false}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment_box">
            <div class="CommentCount">{comment}</div>
          </div>
          <div className="share_box">
            <AiOutlineShareAlt className="Share" size={30} />
          </div>
          <div className="post_viewmorebox">
            <Link to={`/viewpost/${post_id}`} className="More">
              viewpost{" "}
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`miniprofile_post ${displayProfile ? "display_none" : null}`}
      >
        <Miniprofile display={display_profile} user_id={miniprofileid} />
      </div>
      <div
        className={`cover ${displayProfile ? "display_none" : null}`}
        onClick={display_profile}
      ></div>
      <div
        className={`reportpost_popup ${displayReport ? "display_none" : null}`}
      >
        <Reportpost_popup display={display_report} post_id={post_id} />
      </div>
      <div
        className={`post_freespace ${displayComment ? "display_none" : null}`}
      ></div>
      <div
        className={`${displayImg ? null : "display_none"}`}
        onClick={display_img}
      >
        <Showimg imgurl={imgcoverurl} />
        <div className={`cover ${displayImg ? null : "display_none"}`}></div>
      </div>
    </div>
  )
}

export default Post
