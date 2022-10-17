import React, { useCallback, useEffect, useRef, useState } from "react"
import Navbar from "../components/NavBar"
import Post_generator from "../components/Post_generator"
import "./Search.css"
import search from "../picture/search.png"
import Post from "../components/Post"

function Search() {
  const [keepresult, setKeepresult] = useState("")
  const [searchResult, setSearchresult] = useState("")
  const [pagecount, setPageCount] = useState(1)
  const [displayload, setDisplayload] = useState(true)
  const [searchOutPutData, setSearchOutPutData] = useState([])
  const [havemore, setHavemore] = useState(true)
  const observer = useRef()
  const loadmore = async (e) => {
    try {
      setDisplayload(false)
      const loadmoredata = await fetch(
        `http://localhost:4000/api/search/post?text=${keepresult}&page=${pagecount}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpdHRpcG9uZ3BvbjkxQGdtYWlsLmNvbSIsImlkIjoiNjM0OTIzZTI0ZGY2NmY5OWU2ZWQyZDI0IiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTY2NTgzNDI2MiwiZXhwIjoxNjY1OTIwNjYyfQ.J1WUIsjEaBStoia14Q9s7_NSpMxm_gSbBiPqPUebwHo`,
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

  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbGQuNDExMkBnbWFpbC5jb20iLCJpZCI6IjYzNDU3Njg4ZjdjM2Q1MzRmMjYwZmRhMCIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2NjU2NTY3MDgsImV4cCI6MTY2NTc0MzEwOH0.uy6bvp4C6OnL6h6aG3kh2NLo0lfZCo9bprn1EHAIXE0

  const searchsubmit = async (e) => {
    try {
      setHavemore(true)
      setPageCount(1)
      setSearchOutPutData([])
      setDisplayload(false)
      e.preventDefault()
      const data = await fetch(
        `http://localhost:4000/api/search/post?text=${searchResult}&page=1`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpdHRpcG9uZ3BvbjkxQGdtYWlsLmNvbSIsImlkIjoiNjM0OTIzZTI0ZGY2NmY5OWU2ZWQyZDI0IiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTY2NTgzNDI2MiwiZXhwIjoxNjY1OTIwNjYyfQ.J1WUIsjEaBStoia14Q9s7_NSpMxm_gSbBiPqPUebwHo`,
          },
        }
      )
      const datajson = await data.json()
      setDisplayload(true)
      setSearchOutPutData(datajson)
      setKeepresult(searchResult)
      setSearchresult("")
    } catch {
      console.error("fail")
    }
  }

  return (
    <div className="search_page">
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
                <li>Post</li>
                <li>User</li>
                <li>Topics</li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="search_page_content">
          {/* <Post_generator data={testdata} /> */}

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
                      username={element.author.username}
                      post_time={element.post_time}
                      post_id={element.post_id}
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
                    username={element.author.username}
                    post_time={element.post_time}
                    post_id={element.post_id}
                  />
                )
              }
            })}{" "}
          </div>
          <div
            className={`loadersearch ${displayload ? "display_none" : null}`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Search
