import React from "react";

function Showimg(props) {
  const { imgurl } = props;
  return (
    <div>
      <img src={imgurl} alt="big_img" className="" />
    </div>
  );
}

export default Showimg;
