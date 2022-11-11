import React from "react";
import Favorite from "./Favorite";
import "./Favourite.css";

function Favourite() {
  return (
    <div className="Favourite_main">
      <div className="Favourite_main_box">
        <div>
          <h2 className="Favourite_main_title">My favorite posts</h2>
        </div>
        <div className="Favourite_main_box2">
          <Favorite />
        </div>
        <h2 className="Favourite_main_back_to_home">BACK TO HOME</h2>
      </div>
    </div>
  );
}

export default Favourite;
