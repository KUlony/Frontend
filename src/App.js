import './App.css';
// import { GoogleLogin, GoogleLogout } from "react-google-login"
// import { gapi } from "gapi-script"
// import { useState, useEffect } from "react"
import OnBoard4 from './Pages/OnBoard4';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Route, Routes, Navigate } from 'react-router-dom';

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
    // <div>
    //   <h2>React Google login</h2>
    //   <br></br>
    //   {profile ? (
    //     <div>
    //       <img src={profile.imageUrl} alt="" />
    //       <p>Name: {profile.name}</p>
    //       <p>Email: {profile.email}</p>
    //       <GoogleLogout
    //         clientId={clientId}
    //         buttonText="Log out"
    //         onLogoutSuccess={logOut}
    //       />
    //     </div>
    //   ) : (
    //     <GoogleLogin
    //       clientId={clientId}
    //       buttonText="Sign in with Google"
    //       onSuccess={onSuccess}
    //       onFailure={onFailure}
    //       cookiePolicy={"single_host_origin"}
    //       isSignedIn={true}
    //     />
    //   )}
    // </div>
    <div>
      <Routes>
        <Route path="/onboard4" element={<OnBoard4 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
