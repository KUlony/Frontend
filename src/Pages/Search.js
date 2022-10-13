import React, { useCallback, useRef, useState } from "react";
import Navbar from "../components/NavBar";
import Post_generator from "../components/Post_generator";
import "./Search.css";
import search from "../picture/search.png";
import Post from "../components/Post";

function Search() {
  const [displayload, setDisplayload] = useState(true);
  const [searchOutPutData, setSearchOutPutData] = useState([]);
  const observer = useRef();
  const lastSearchelement = useCallback();

  const searchsubmit = async (e) => {
    try {
      setSearchOutPutData([]);
      setDisplayload(false);
      e.preventDefault();
      const data = await fetch(
        `http://localhost:4000/api/search/post?text=${searchResult}`
      );
      const datajson = await data.json();
      setDisplayload(true);
      setSearchOutPutData(datajson);
      setSearchresult("");
    } catch {
      console.error("fail");
    }
  };
  const [searchResult, setSearchresult] = useState("");
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
          <div
            className={`loader ${displayload ? "display_none" : null}`}
          ></div>
          <div>
            {searchOutPutData.map((element) => {
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
                />
              );
            })}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
