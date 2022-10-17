import "./App.css"
// import NavBar from "./components/NavBar";

import Home from "./Pages/Home"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MyPost from "./Pages/MyPost"
import Profile from "./Pages/Profile"
import View_post from "./Pages/View_post"
import Search from "./Pages/Search"
import ReportpageAdmin from "./Pages/ReportpageAdmin"
import ReqtopicAdmin from "./Pages/ReqtopicAdmin"
// import ScrollRestoration from "react-scroll-restoration";
function App() {
  return (
    <div>
      {/* {/* <NavBa /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/viewpost/:id" element={<View_post />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/admin/reportpost" element={<ReportpageAdmin />} />
          <Route path="/admin/requesttopic" element={<ReqtopicAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
