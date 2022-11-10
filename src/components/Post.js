import React, { useEffect, useState } from "react"
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
import bin from "../picture/bin.png"
import edit from "../picture/edit.png"
import report from "../picture/reportmini.png"

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
    post_topic,
  } = props
  // console.log(post_topic);
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
  const user_current_Id = localStorage.getItem("user_id")

  const [possession, setPossession] = useState(
    user_current_Id === user_id ? true : false
  )
  const [deletedone, setDeletedone] = useState(false)
  const [commentcount, setCommentcount] = useState(comment)

  const [topicname, setTopicname] = useState([])
  // const [loadtopicname, setloadtopicname] = useState(false);

  const gettopicname = async (topicid) => {
    try {
      const response = await fetch(`/api/topic/get_topic_data?id=${topicid}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      // console.log(response);
      const json = await response.json()
      // console.log("json topic", json);
      setTopicname((oldarray) => [...oldarray, json.topic_name])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    post_topic.map((data) => {
      gettopicname(data)
    })
  }, [])

  const report_dropdown = () => {
    if (reportpost_drop === "btn_where") {
      setreportpost_drop("btn_where2")
    } else {
      setreportpost_drop("btn_where")
    }
  }

  const display_profile = (userid) => {
    setdisplayProfile(!displayProfile)
    if (userid !== "close") {
      setMiniprofileid(userid)
    }
  }
  const [reportid, setReportid] = useState("")
  const [reporttype, setReporttype] = useState("")

  const display_report = (type, id) => {
    setdisplayReport(!displayReport)
    if (type !== "close") {
      setReporttype(type)
      setReportid(id)
    }
  }
  const display_comment = () => {
    setdisplatComment(!displayComment)
  }

  const display_img = () => {
    setdisplayImg(!displayImg)
  }

  const likepost_update = async () => {
    try {
      if (user_like_status) {
        const remove = await fetch(`/api/post/unlike/${post_id}`, {
          method: "DELETE",
          headers: {
            Authorization: `${token}`,
          },
        })
      } else {
        const add = await fetch(`/api/post/like/${post_id}`, {
          method: "POST",
          headers: {
            Authorization: `${token}`,
          },
        })
      }

      setLikecount(user_like_status ? likecount - 1 : likecount + 1)
      setUser_like_status(!user_like_status)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchcomment = async () => {
    try {
      const comment_fetch_respone = await fetch(`/api/comment/${post_id}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
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

  const delete_post = async () => {
    try {
      const respone = await fetch(`/api/post/${post_id}/delete`, {
        method: "PUT",
        headers: {
          Authorization: `${token}`,
        },
      })

      setDeletedone(true)
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
      inttime -= 5

      const date = inttime.toString().split(".")
      // console.log(date);
      datetime = date[0] + ":" + min[1] + " PM, " + day
    }
  } else {
    if (inttime === 24) {
      datetime = "12:00 AM, " + day
    } else {
      const min = inttime.toString().split(".")
      inttime += 7
      const date = inttime.toString().split(".")
      if (min[1].length === 1) {
        datetime = date[0] + ":" + min[1] + "0 AM, " + day
      } else {
        datetime = date[0] + ":" + min[1] + " AM, " + day
      }
    }
  }

  const comment_delete = async (id) => {
    try {
      const respone = await fetch(`/api/comment/${id}/delete`, {
        method: "PUT",
        headers: {
          Authorization: `${token}`,
        },
      })
      if (!respone.ok) {
        throw new Error("fail")
      }
      setCommentcount(commentcount - 1)
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  return (
    <div className>
      {!deletedone && (
        <div>
          <div className="PostBox">
            <div className="Header">
              <div
                className="UserProfile"
                onClick={() => display_profile(user_id)}
              >
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
                <button
                  className="btn_dropdown_report"
                  onClick={report_dropdown}
                >
                  <RiArrowDropDownLine className="dropdown_iconri" />
                </button>
                <div className={reportpost_drop}>
                  {possession ? (
                    <div className="my_post_button">
                      <div className="edit_hover_box">
                        {" "}
                        Edit post
                        <img src={edit} />
                      </div>
                      {/* <div className="edit_button">
                        Edit post
                        <img src={edit} />
                      </div> */}

                      <div className="delete_button" onClick={delete_post}>
                        Delete post <img src={bin} />
                      </div>
                      <div className="free_space"></div>
                    </div>
                  ) : (
                    <div
                      className="report_button"
                      onClick={() => display_report("Post", post_id)}
                    >
                      Report post
                      <img src={report} />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="post_Content">{post_content}</p>

            {photo && (
              <div class="FakeImage" onClick={display_img}>
                <img
                  src={photo}
                  alt="profilemini_img"
                  className="post_img_cover"
                />
              </div>
            )}
            <h4 class="Topic_text">
              Topics : {topicname.map((data) => `${data} `)}
            </h4>
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
                            display_report={display_report}
                            comment_delete={comment_delete}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment_box">
                <div class="CommentCount">{commentcount}</div>
              </div>
              <div
                className="share_box"
                onClick={() => navigator.clipboard.writeText("bra bra")}
              >
                <AiOutlineShareAlt className="Share" size={30} />
              </div>
              <div className="post_viewmorebox">
                <Link to={`/viewpost/${post_id}`} className="More">
                  View post{" "}
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`miniprofile_post ${
              displayProfile ? "display_none" : null
            }`}
          >
            <Miniprofile display={display_profile} user_id={miniprofileid} />
          </div>
          <div
            className={`cover ${displayProfile ? "display_none" : null}`}
            onClick={() => display_profile("close")}
          ></div>
          <div
            className={`reportpost_popup ${
              displayReport ? "display_none" : null
            }`}
          >
            <Reportpost_popup
              display={display_report}
              post_id={reportid}
              type={reporttype}
            />
          </div>
          <div
            className={`post_freespace ${
              displayComment ? "display_none" : null
            }`}
          ></div>
          <div
            className={`${displayImg ? null : "display_none"}`}
            onClick={display_img}
          >
            <Showimg imgurl={imgcoverurl} />
            <div
              className={`cover ${displayImg ? null : "display_none"}`}
            ></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Post
