import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Favorite.css";

import Favoritebox from "./Favoritebox";

function Favorite() {
  const token = localStorage.getItem("token");

  const [postarray, setPostarray] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchuserlikepost = async () => {
    try {
      console.log("json");

      const response = await axios.get(
        "http://kulony-backend.herokuapp.com/api/user/user_like_post",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // const response = await fetch(`/api/user/user_like_post`, {
      //   headers: {
      //     Authorization: `${token}`,
      //   },
      // });
      console.log(response);
      // const json = await response.json();
      // console.log("json", json);
      setPostarray(response.data);
      setLoading(true);
    } catch (err) {
      console.error(err);
    }
  };

  // fetchuserlikepost();

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
