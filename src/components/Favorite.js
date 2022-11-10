import React, { useEffect, useState } from "react";
import "./Favorite.css";

import Favoritebox from "./Favoritebox";

function Favorite() {
  const token = localStorage.getItem("token");

  const [postarray, setPostarray] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchuserlikepost = async () => {
    try {
      const response = await fetch(`/api/user/user_like_post`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      const json = await response.json();
      setPostarray(json);
      setLoading(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchuserlikepost();
  }, []);

  return (
    <div>
      {loading
        ? postarray.map((data, idx) => <Favoritebox data={data} />)
        : null}
    </div>
  );
}

export default Favorite;
