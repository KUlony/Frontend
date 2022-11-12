import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/NavBar"
import "./View_post.css"
import { IoIosArrowBack } from "react-icons/io"
import Comment from "../components/Comment"

import { FcLikePlaceholder } from "react-icons/fc"
import profileimg from "../picture/profile.png"
import axios from "axios"
import { MdOutlineModeComment, MdTitle, MdReport, MdSend } from "react-icons/md"
import { BsFillHeartFill } from "react-icons/bs"
import Reportpost_popup from "../components/Reportpost_popup"
import Miniprofile from "../components/Miniprofile"
import Comment_generator from "../components/Comment_generator"
import Showimg from "../components/Showimg"
import Checklogin from "../components/Checklogin"
import { RiArrowDropDownLine } from "react-icons/ri"
import bin from "../picture/bin.png"
import edit from "../picture/edit.png"
import report from "../picture/reportmini.png"
import { AiOutlineShareAlt, AiOutlineClose } from "react-icons/ai"

function View_post() {
  const [displayReport, setdisplayReport] = useState(true)
  const [displayProfile, setdisplayProfile] = useState(true)
  const [imgurl, setImgurl] = useState("")
  const [displaypostimg, setDisplayposting] = useState(false)
  const [likepost, setLikepost] = useState(false)
  const [likecount, setLikecount] = useState(0)
  const post_id = useParams()
  const [postdataarray, setPostdataarray] = useState([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState("")
  const [commentcount, setCommentcount] = useState("")
  const [post_content, setPost_content] = useState("")
  const [photo, setPhoto] = useState("")
  const [profilepic, setProfilepic] = useState("")
  const [username, setUsername] = useState("")
  const [post_photo_url, setPost_photo_url] = useState([])
  const [loadingcomment, setLoadingcomment] = useState(true)
  const [user_like_status, setUser_like_status] = useState(false)
  const [userminiprofile, setUserminiprofile] = useState("")
  const [commentdata, setCommentdata] = useState([])
  const token = localStorage.getItem("token")
  const [timedata, setTimedate] = useState("")
  // console.log(post_id.id);
  const [reportid, setReportid] = useState("")
  const [reporttype, setRepottype] = useState("")
  const [possession, setPossesstion] = useState(false)
  const userid = localStorage.getItem("user_id")

  const postfetch = async () => {
    try {
      const response = await fetch(`//localhost:4000/api/post/${post_id.id}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      const json = await response.json()

      setLoading(false)
      setPostdataarray(json)
      setLikecount(json.post_like_count)
      setCommentcount(json.post_comment_count)
      setTitle(json.post_title)
      setPost_content(json.post_content)
      setPhoto(json.cover_photo_url)
      setProfilepic(json.author.profile_pic_url)
      setUsername(json.author.username)
      setPost_photo_url(json.post_photo_url)
      setUser_like_status(json.user_like_status)
      setUserminiprofile(json.author.user_id)
      setTimedate(json.post_time)
      setPossesstion(json.author.user_id === userid ? true : false)
    } catch (err) {
      console.log(err)
    }
  }

  const init = () => {
    setLoading(true)
    setPostdataarray([])
    setLikecount(0)
    setCommentcount(0)
    setTitle("")
    setPost_content("")
    setPhoto("")
    setProfilepic("")
    setUsername("")
    setPost_photo_url("")
    setUser_like_status("")
    setUserminiprofile("")
    setTimedate("")
    setPossesstion(false)
    setLoadingcomment(true)
  }

  useEffect(() => {
    init()
    postfetch()
  }, [post_id.id])

  const fetchcomment = async () => {
    try {
      // const comment_fetch_respone = await fetch(
      //   `//localhost:4000/api/comment/${post_id.id}`,
      //   {
      //     headers: {
      //       Authorization: `${token}`,
      //     },
      //   }
      // )
      // const comment_json = await comment_fetch_respone.json()
      // const response = await axios.get(
      //   `//localhost:4000/api/comment/${post_id.id}`,
      //   {
      //     headers: {
      //       Authorization: token,
      //     },
      //   }
      // );
      const response = await axios.get(
        `http://localhost:4000/api/comment/${post_id.id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      // console.log(comment_json);
      setCommentdata(response.data)
      setLoadingcomment(false)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    if (loadingcomment) {
      fetchcomment()
    }
  }, [loadingcomment])

  const [commentinput, setCommentinput] = useState("")
  const [commentposting, setCommentposting] = useState(false)

  const comment = async (e) => {
    try {
      e.preventDefault()
      if (!commentposting) {
        setCommentposting(true)
        if (commentinput !== "") {
          const comment_input_value = document.querySelector(
            ".view_post_comment_input"
          )

          const response_comment = await fetch(
            `//localhost:4000/api/comment/create`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
              },
              body: JSON.stringify({
                post_id: post_id.id,
                comment_content: commentinput,
              }),
            }
          )
          if (!response_comment.ok) {
            throw new Error("fail")
          }

          const json_comment = await response_comment.json()
          // console.log(`json_comment `, json_comment);

          const userdata = await fetch(
            `//localhost:4000/api/user/${json_comment.user_id}/profile`,
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          )
          const jsonuserdata = await userdata.json()
          console.log(json_comment)
          const datainput = {
            comment_content: commentinput,
            comment_id: json_comment._id,
            comment_reply_count: 0,
            comment_time: json_comment.comment_time,
            author: {
              user_id: json_comment.user_id,
              username: jsonuserdata.user_name,
              profile_pic_url: jsonuserdata.profile_pic_url,
            },
          }
          updatecommentdata(datainput)
          setCommentcount(commentcount + 1)
          comment_input_value.value = ""
          setCommentinput("")
          setCommentposting(false)
        }
      }
    } catch (err) {
      console.error(err)
    }
    //เดี๊ยวฟังชั่นนี้ต้อง fetch  ก่อนที่จะ updatecommentdata
  }
  const comment_input = (e) => {
    setCommentinput(e.target.value)
  }
  const display_report = (type, id) => {
    setdisplayReport(!displayReport)
    if (id !== "close") {
      setReportid(id)
      setRepottype(type)
    }
  }

  const display_profile = (user_id) => {
    // if (user_id === "close") {
    //   setdisplayProfile(false);
    // } else if (user_id !== userminiprofile) {
    //   setUserminiprofile(user_id);
    // } else {
    //   setdisplayProfile(!displayProfile);
    // }
    setdisplayProfile(!displayProfile)
    if (user_id !== "close") {
      setUserminiprofile(user_id)
    }
  }
  const display_postimg = (url) => {
    setDisplayposting(!displaypostimg)
    setImgurl(url)
    setDisplayposting(true)
  }
  const updatecommentdata = (data) =>
    setCommentdata((commentdata) => [...commentdata, data])

  const [liking, setLiking] = useState(false)

  const likepost_update = async () => {
    try {
      if (!liking) {
        setLiking(true)
        if (user_like_status) {
          const remove = await fetch(
            `//localhost:4000/api/post/unlike/${post_id.id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `${token}`,
              },
            }
          )
        } else {
          const add = await fetch(
            `//localhost:4000/api/post/like/${post_id.id}`,
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
        setLiking(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const navigate = useNavigate()
  const [datetime, setDatetime] = useState("")

  useEffect(() => {
    if (!loading) {
      const timepost = timedata.split("T")
      const day = timepost[0].split("-").reverse().join("/")
      const timearray = timepost[1].split(".")
      const time = timearray[0]

      let inttime = parseFloat(time.split(":").join("."))

      let min = inttime.toString().split(".")
      if (!inttime.toString().includes(".")) {
        min = (min + ".00").split(".")
      }

      if (inttime >= 12 && inttime < 24) {
        if (inttime === 12) {
          setDatetime("12:00 PM, " + day)
        } else {
          inttime -= 5

          const date = inttime.toString().split(".")
          // console.log(date);
          setDatetime(date[0] + ":" + min[1] + " PM, " + day)
        }
      } else {
        if (inttime === 24) {
          setDatetime("12:00 AM, " + day)
        } else {
          inttime += 7
          const date = inttime.toString().split(".")
          if (min[1].length === 1) {
            setDatetime(date[0] + ":" + min[1] + "0 AM, " + day)
          } else {
            setDatetime(date[0] + ":" + min[1] + " AM, " + day)
          }
        }
      }
    }
  }, [timedata])

  const comment_delete = async (id) => {
    try {
      const respone = await fetch(`//localhost:4000/api/comment/${id}/delete`, {
        method: "PUT",
        headers: {
          Authorization: `${token}`,
        },
      })
      if (!respone.ok) {
        throw new Error("fail to delete")
      }
      setCommentcount(commentcount - 1)
      return true
    } catch (err) {
      return false
      console.error(err)
    }
  }

  const delete_post = async () => {
    try {
      const respone = await fetch(
        `//localhost:4000/api/post/${post_id.id}/delete`,
        {
          method: "PUT",
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      navigate(-1)
    } catch (err) {
      console.error(err)
    }
  }

  const [reportpost_drop, setreportpost_drop] = useState("btn_where")

  const report_dropdown = () => {
    if (reportpost_drop === "btn_where") {
      setreportpost_drop("btn_report_show")
    } else {
      setreportpost_drop("btn_where")
    }
  }

  return (
    <div className="view_post_poup">
      <Checklogin />
      <div className="view_post">
        <div className="view_post_nav">
          <Navbar />
        </div>
        <div className="view_post_fullpost">
          <div className="view_post_fullpost_backtohome">
            {/* <Link to="/home" className="view_post_fullpost_backtohome_link">
              <IoIosArrowBack className="view_post_fullpost_backtohome_arrow" />{" "}
              Back to home
            </Link> */}
            <button
              className="view_post_fullpost_backtohome_link"
              onClick={() => {
                navigate(-1, { state: { back: true } })
              }}
            >
              <IoIosArrowBack className="view_post_fullpost_backtohome_arrow" />{" "}
              Go Back
            </button>
          </div>

          <div className="view_post_fullpost_title">{title}</div>
          <div className="view_post_fullpost_profile">
            <div
              className="UserProfile"
              onClick={() => display_profile(postdataarray.author.user_id)}
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

            {username ? (
              <div className="view_post_fullpost_profile_username">
                {username ? username : "anonymous"}
              </div>
            ) : (
              <div className="view_post_fullpost_profile_username">
                Anonymous
              </div>
            )}
            <div className="date_time">{datetime}</div>
          </div>
          {photo && (
            <div className="view_post_fullpost_photo">
              <img
                src={photo}
                alt="viewpost_cover_img"
                className="view_post_fullpost_coverimg"
              />
            </div>
          )}
          <div className="view_post_fullpost_content">{post_content}</div>
          {post_photo_url && (
            <div className="view_post_fullpost_img">
              {post_photo_url.map((data) => {
                return (
                  <div className="view_post_fullpost_miniimg">
                    <div
                      className="view_post_fullpost_miniimg_center"
                      onClick={() => display_postimg(data)}
                    >
                      <img src={data} alt="post_img" className="post_img" />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          <div className="view_post_interact">
            <div className="view_post_likebox" onClick={likepost_update}>
              <BsFillHeartFill className="likeshadowdrop1" size={28} />
              <BsFillHeartFill
                className={`${user_like_status ? "like" : "unlike"}`}
                size={22}
              />
              <p className="view_post_text">
                <p>{likecount}</p> Likes
              </p>
            </div>
            <div className="view_post_commentbox">
              <MdOutlineModeComment size={30} />
              <p className="view_post_text">{commentcount} Comments</p>
            </div>
            <div
              className="view_post_share"
              onClick={() => navigator.clipboard.writeText("test")}
            >
              <AiOutlineShareAlt className="share_icon" />
              <p className="view_post_text">Share</p>
            </div>
            {!possession && (
              <div
                className="view_post_reportbox"
                onClick={() => display_report("Post", post_id.id)}
              >
                <MdReport size={30} className="view_post_report_icon" />
                <p className="view_post_text">Report post</p>
              </div>
            )}
            {possession && (
              <div className="test_btn">
                <button
                  className="btn_dropdown_report_viewpost"
                  onClick={report_dropdown}
                >
                  <RiArrowDropDownLine className="dropdown_iconri" />
                </button>
                <div className={reportpost_drop}>
                  {possession ? (
                    <div className="my_post_button">
                      <Link to={`/editpost/${post_id}`} className="edit_link">
                        <div className="edit_hover_box">
                          {" "}
                          Edit post
                          <img src={edit} />
                        </div>
                      </Link>
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
            )}
          </div>
          <div className="view_post_commentinputbox">
            <h3>Comments</h3>
            <form onSubmit={comment}>
              <input
                className="view_post_comment_input"
                onChange={comment_input}
                required
                placeholder="Add your reply here"
              />
              <button className="view_post_comment_button">
                <MdSend size={30} />
              </button>
            </form>
          </div>
          {!loadingcomment && (
            <div className="view_post_comment">
              <Comment_generator
                data={commentdata}
                display_profile={display_profile}
                display_reply={true}
                display_report={display_report}
                comment_delete={comment_delete}
              />
            </div>
          )}
        </div>
      </div>
      {!loading && (
        <div
          className={`viewpost_miniprofile_popup ${
            displayProfile ? "display_none" : null
          }`}
        >
          <Miniprofile display={display_profile} user_id={userminiprofile} />
        </div>
      )}
      {!displayProfile && (
        <div className="cover" onClick={() => display_profile("close")}></div>
      )}
      <div
        className={`viewpost_report_popup ${
          displayReport ? "display_none" : null
        }`}
      >
        <Reportpost_popup
          display={display_report}
          post_id={reportid}
          type={reporttype}
        />
      </div>
      <div onClick={() => setDisplayposting(!displaypostimg)}>
        {displaypostimg && <Showimg imgurl={imgurl} />}
      </div>
      {displaypostimg && (
        <div
          className="viewpost_cover"
          onClick={() => setDisplayposting(!displaypostimg)}
        ></div>
      )}
    </div>
  )
}

export default View_post
