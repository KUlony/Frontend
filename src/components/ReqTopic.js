import axios from 'axios';
import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

function ReqTopic(props) {
  const { handleShow, handleReq, show } = props;
  const [reqTopic, setReqTopic] = useState('');
  const newTopic = (e) => {
    setReqTopic(e.target.value);
    console.log(reqTopic);
  };

  const submitReqTopic = () => {
    axios
      .post(
        `http://kulony-backend.herokuapp.com/api/topic/request_topic/?topic=${reqTopic}`,
        {
          topic: reqTopic,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtZWVub25AZ21haWwuY29tIiwiaWQiOiI2MzQ1NzY3ZjJiOTVlZTlmOWMwYTY2M2QiLCJ2ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjY4MDU4NzY3LCJleHAiOjE2NjgxNDUxNjd9.NJQU4HZ6PGXYigF-G3P5B0-zieqjl4y4jWq4qUMovG8`,
          },
        }
      )
      .then((res) => console.log('Posting data', res.data))
      .catch((err) => console.error(err));
    handleShow();
  };

  return (
    <Modal show={show} onHide={handleShow} className="pop-up">
      <div className="modal-container">
        <ModalHeader className="req-header">
          <div className="title-req">Request new topic here !</div>
          <button onClick={handleShow} className="close-req-but">
            X
          </button>
        </ModalHeader>
        <ModalBody className="req-box">
          <form onSubmit={handleReq}>
            <input
              type="text"
              className="input-req"
              onChange={newTopic}
            ></input>
            <input
              type="submit"
              value="SEND REQUEST"
              className="send-req-but"
              onClick={submitReqTopic}
            ></input>
          </form>
        </ModalBody>
      </div>
    </Modal>
  );
}

export default ReqTopic;
