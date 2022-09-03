import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/NavBar";
import "./View_post.css";

function View_post() {
  const location = useLocation();
  const from = location.state;
  const like = from.like.like;
  const title = from.title.title;
  const post_content = from.post_content.post_content;
  const photo = from.photo.photo;
  return (
    <div className="view_page">
      <Navbar />
    </div>
  );
}

export default View_post;
