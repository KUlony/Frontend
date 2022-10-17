import React, { useState } from 'react';
import './NavBar.css';
import logo from '../picture/Logo.png';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ReqTopic from './ReqTopic';
import Notification from './Notification';
import CreateTopic from './CreateTopic';

function Navbar() {
  const [show, setShow] = useState(false);
  const [showCreateTopic,setShowCreateTopic] = useState(false)
  const handleReq = (e) => {
    e.preventDefault();
  };
  console.log(show);
  const handleShow = () => setShow(!show);
  const handleShow2 = () => setShowCreateTopic(!showCreateTopic)

  const isAdmin = !false;
  return (
    <ul className="Nav">
      <ReqTopic handleShow={handleShow} handleReq={handleReq} show={show} />
      <CreateTopic handleShow2={handleShow2} handleReq={handleReq} show={showCreateTopic}/>
      <li className="kulony">
        <img
          src={logo}
          width="120px"
          // height="120%"
          alt=""
          className="kulony-icon"
        />
      </li>
      <li>
        <Link to="/home" className="home-nav">
          HOME
        </Link>
      </li>
      <li>
        {isAdmin ? (
          <Link to="/admin/reportpost" className="reportpost-nav">
            REPORT
          </Link>
        ) : (
          <div className="search-nav">SEARCH</div>
        )}
      </li>
      <li>
        {isAdmin ? (
          <Link to="/admin/requesttopic" className="topic-req-nav">
            TOPIC REQUEST
          </Link>
        ) : (
          <Link to="/mypost" className="my-post">
            MY POST
          </Link>
        )}
      </li>
      {isAdmin ? (
        <div className="free-box"></div>
      ) : (
        <li className="request-topic" onClick={handleShow}>
          REQUEST TOPIC
        </li>
      )}
      <li className="space"> </li>
      <li className="create-new-post">
        {isAdmin ? (
          <div className="border-create-post" onClick={handleShow2}>Create new topic +</div>
        ) : (
          <Link to="/createnewpost" className="create-post-link">
            <div class="border-create-post">Create new post +</div>
          </Link>
        )}
      </li>
      <li className="bell">
        <Notification />
      </li>
      {/* <div><Notification /></div> */}
      {/* <li className='vector'><img src={vector} width='40px' height='40px' alt=""/></li> */}
      <li>
        <Link to="/profile" className="vector">
          <BsPersonCircle size={25} className="vector-icon" />
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
