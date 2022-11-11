import './App.css';
// import NavBar from "./components/NavBar";

import Home from "./Pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MyPost from "./Pages/MyPost";
import Profile from "./Pages/Profile";
import View_post from "./Pages/View_post";
import Search from "./Pages/Search";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Createpost from "./Pages/Createpost";
import ReportpageAdmin from "./Pages/ReportpageAdmin";
import ReqtopicAdmin from "./Pages/ReqtopicAdmin";
import EditPost from './Pages/EditPost';

// import ScrollRestoration from "react-scroll-restoration";
function App() {
  // const clientId =
  //   "434016079883-16upiqfv4b4gamkgdog1mvg4jeh0bt0b.apps.googleusercontent.com"

  // const [profile, setProfile] = useState(null)

  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.clientId.init({
  //       clientId: clientId,
  //       scope: "",
  //     })
  //   }
  //   gapi.load("client:auth2", initClient)
  // }, [])

  // const onSuccess = (res) => {
  //   setProfile(res.profileObj)
  //   console.log("success", res)
  // }

  // const onFailure = (res) => {
  //   console.log("failed", res)
  // }

  // const logOut = () => {
  //   setProfile(null)
  // }

  return (
    <div>
      {/* <NavBa /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/viewpost/:id" element={<View_post />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createnewpost" element={<Createpost />} />
          <Route path="/viewpost/:id" element={<EditPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/reportpost" element={<ReportpageAdmin />} />
          <Route path="/admin/requesttopic" element={<ReqtopicAdmin />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
