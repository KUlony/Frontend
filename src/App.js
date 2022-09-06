import "./App.css";
// import NavBar from "./components/NavBar";

import Home from "./Pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MyPost from "./Pages/MyPost";
import Profile from "./Pages/Profile";
import View_post from "./Pages/View_post";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/viewpost" element={<View_post />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
