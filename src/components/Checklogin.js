import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Checklogin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return;
}

export default Checklogin;
