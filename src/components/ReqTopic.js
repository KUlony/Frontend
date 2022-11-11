import axios from "axios"
import React, { useState } from "react"
import { Modal, ModalBody, ModalHeader } from "react-bootstrap"

function ReqTopic(props) {
  const { handleShow, handleReq, show } = props
  const [reqTopic, setReqTopic] = useState("")
  const newTopic = (e) => {
    setReqTopic(e.target.value)
    console.log(reqTopic)
  }

  const token = localStorage.getItem("token")

  const submitReqTopic = () => {
    axios
      .post(
        `http://kulony-backend.herokuapp.com/api/topic/request_topic/?topic=${reqTopic}`,
        {
          topic: reqTopic,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => console.log("Posting data", res.data))
      .catch((err) => console.error(err))
    handleShow()
  }

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
  )
}

export default ReqTopic
