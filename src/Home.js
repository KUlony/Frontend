import React from "react"
import NavBar from "./components/NavBar"
import Post from "./components/Post"
import "./Home.css"
import Think from "./think.png"
import search from "./search.png"

function Home() {
  return (
    <div className="Home_page">
      <div className="Nav_home">
        <NavBar />
      </div>
      <div className="home_search">
        <div className="home_search_lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          samjdnmlaskmdlksadl kaslk dmaslkdmlkasm
        </div>
        <img src={Think} alt="Girl in a jacket" className="think_img"></img>
        <div className="home_search_input">
          <form>
            {/* <label>maikan</label> */}
            <input
              type="text"
              required
              className="search_input"
              placeholder="Search"
            />
            <button className="search-button">
              <img src={search} width="10px" height="10px" />
            </button>
          </form>
        </div>
      </div>
      <div className="Home_post">
        <nav className="Nav_topic">
          <div className="Topic">Discover</div>
          <div className="Topic">General</div>
        </nav>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Home
