import React from "react";
import "./Card.css";
import profile_img from "../picture/card.png"

function Card() {
  return (
    <div className="card_container">
      <img className="card_profile" src={profile_img} alt="xmark_img"></img>
      <div className="card_user">@kwt</div>
      <div className="card_name">Kim Winter</div>
    </div>
  );
}
export default Card;
