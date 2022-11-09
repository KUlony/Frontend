import React, { useCallback, useEffect, useRef, useState } from "react"
import Navbar from "../components/NavBar"
import Post_generator from "../components/Post_generator"
import "./Search.css"
import search from "../picture/search.png"
import Post from "../components/Post"
import Checklogin from "../components/Checklogin"
import Card from "../components/Card"
import Miniprofile from "../components/Miniprofile"

function Search() {
  const [keepresult, setKeepresult] = useState("")
  const [searchResult, setSearchresult] = useState("")
  const [pagecount, setPageCount] = useState(1)
  const [displayload, setDisplayload] = useState(true)
  const [searchOutPutData, setSearchOutPutData] = useState([])
  const [havemore, setHavemore] = useState(true)
  const observer = useRef()
  const token = localStorage.getItem("token")
  const [searchtype, setSearchtype] = useState([true, false])
  const [displayprofile, setDisplayprofile] = useState(false)
  const [carduserid, setCarduserid] = useState("")

  const loadmore = async (e) => {
    try {
      setDisplayload(false)
      const loadmoredata = await fetch(
        `/api/search/post?text=${keepresult}&page=${pagecount}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      const loadmoredatajson = await loadmoredata.json()
      setDisplayload(true)
      setSearchOutPutData([...searchOutPutData, ...loadmoredatajson])

      if (loadmoredatajson.length === 0) {
        setHavemore(false)
      }
    } catch {
      console.error("fail to load more")
    }
  }
  const lastSearchelement = useCallback(
    (node) => {
      if (!displayload) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageCount((pagecount) => pagecount + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [displayload]
  )

  useEffect(() => {
    if (pagecount !== 1 && havemore) {
      loadmore()
    }
  }, [pagecount])

  const updatesearchselect = (position) => {
    setSearchOutPutData([])
    setSearchtype((prev) =>
      prev.map((data, idx) => (idx === position ? true : false))
    )
  }

  const searchsubmit = async (e) => {
    try {
      e.preventDefault()
      if (searchtype[0]) {
        setHavemore(true)
        setPageCount(1)
        setSearchOutPutData([])
        setDisplayload(false)
        const data = await fetch(
          `/api/search/post?text=${searchResult}&page=1`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        const datajson = await data.json()

        setDisplayload(true)
        setSearchOutPutData(datajson)
        setKeepresult(searchResult)
        setSearchresult("")
      } else if (searchtype[1]) {
        setDisplayload(false)
        setSearchOutPutData([])
        const data = await fetch(`/api/searchtopic/user?text=${searchResult}`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        const datajson = await data.json()
        console.log(datajson)
        setSearchOutPutData(datajson)
        setDisplayload(true)
        setSearchresult("")
      }
    } catch {
      console.error("fail")
    }
  }

  const display_profile = (user_id) => {
    if (user_id === "close") {
      setDisplayprofile(false)
    } else if (user_id !== carduserid) {
      setCarduserid(user_id)
    } else {
      setDisplayprofile(!displayprofile)
    }
  }

  return (
    <div className="search_page">
      <Checklogin />
      <div className="search_page_scoll">
        <div className="search_page_navkulony">
          <Navbar />
        </div>
        <div className="search_page_navbar">
          <nav className="search_page_topic_nav">
            <form onSubmit={searchsubmit}>
              <input
                type="text"
                required
                className="search_page_input"
                placeholder="Search"
                onChange={(e) => setSearchresult(e.target.value)}
                value={searchResult}
              />
              <button className="search_page_button">
                <img src={search} width="14px" height="14px" alt="" />
              </button>
            </form>
            <div className="search_page_nav_topic">
              <ul>
                <li
                  className={`${searchtype[0] ? "search_select" : null}`}
                  onClick={() => updatesearchselect(0)}
                >
                  Post
                </li>
                <li
                  className={`${searchtype[1] ? "search_select" : null}`}
                  onClick={() => updatesearchselect(1)}
                >
                  User
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="search_page_content">
          {/* <Post_generator data={testdata} /> */}

          {searchtype[0] && (
            <div>
              {searchOutPutData.map((element, index) => {
                if (searchOutPutData.length === index + 1) {
                  return (
                    <div ref={lastSearchelement}>
                      <Post
                        title={element.post_title}
                        like={element.post_like_count}
                        post_content={element.post_content}
                        photo={element.cover_photo_url}
                        comment={element.post_comment_count}
                        profilepic={element.author.profile_pic_url}
                        post_photo_url={element.post_photo_url}
                        post_topic={element.post_topic}
                        username={element.author.username}
                        post_time={element.post_time}
                        post_id={element.post_id}
                        user_id={element.author.user_id}
                        user_like_status_post={element.user_like_status}
                      />
                    </div>
                  )
                } else {
                  return (
                    <Post
                      title={element.post_title}
                      like={element.post_like_count}
                      post_content={element.post_content}
                      photo={element.cover_photo_url}
                      comment={element.post_comment_count}
                      profilepic={element.author.profile_pic_url}
                      post_photo_url={element.post_photo_url}
                      post_topic={element.post_topic}
                      username={element.author.username}
                      post_time={element.post_time}
                      post_id={element.post_id}
                      user_id={element.author.user_id}
                      user_like_status_post={element.user_like_status}
                    />
                  )
                }
              })}{" "}
            </div>
          )}
          {searchtype[1] && (
            <div className="search_user_content">
              {searchOutPutData.map((e) => (
                <Card
                  username={e.user_name}
                  profile_url={e.profile_pic_url}
                  user_id={e._id}
                  user_firstname={e.user_firstname}
                  user_lastname={e.user_lastname}
                  display_profile={display_profile}
                />
              ))}
            </div>
          )}
          <div
            className={`loadersearch ${displayload ? "display_none" : null}`}
          ></div>
        </div>
      </div>

      {displayprofile && (
        <div className="miniprofile_popup">
          <Miniprofile display={display_profile} user_id={carduserid} />
        </div>
      )}
    </div>
  )
}

export default Search
