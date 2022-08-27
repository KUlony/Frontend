import React from "react";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import "./Home.css";

function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="home_search">
        <div className="home_search_lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        </div>
        <div></div>
      </div>
      <div className="Home_post">koksok
        <Post />
      </div>

    </div>
  );
}

export default Home;
