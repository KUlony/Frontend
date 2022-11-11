import './App.css';
// import NavBar from "./components/NavBar";
// import Home from "./Pages/Home"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import MyPost from "./Pages/MyPost"
// import Profile from "./Pages/Profile"
import Createpost from './Pages/Createpost.js';
import EditPost from './Pages/EditPost';

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={<Home />} />
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
          <Route path="/createnewpost" element={<Createpost />} />
          <Route path="/viewpost/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
