import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function CreateTopic(props) {
  const { handleShow2, handleReq, show } = props;
  const [createTopic, setCreateTopic] = useState('');
  const newTopic = (e) => {
    setCreateTopic(e.target.value);
    console.log(createTopic);
  };

  return (
    <Modal show={show} onHide={handleShow2} className="pop-up topic-con">
      <form className="create-topic-container" onSubmit={handleReq}>
        <div className="create-topic-text">Create new topic</div>
        <div>
          Topic :
          <input
            type="text"
            className="input-topic"
            onChange={newTopic}
          ></input>
        </div>
        <div className="select-cate">
          Add this topic to :
          <select className="dropdown-cate" name="categories" required>
            <option value="categories">Categories</option>
            <option value="a">a</option>
            <option value="b">b</option>
          </select>
        </div>
        <div className="create-topic-footer">
          <div className="create-topic-cancle" onClick={handleShow2}>
            CANCEL
          </div>
          <div
            type="submit"
            className="create-topic-confirm"
            onClick={handleShow2}
          >
            CONFIRM
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default CreateTopic;
