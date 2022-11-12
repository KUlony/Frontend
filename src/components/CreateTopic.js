import axios from "axios"
import React, { useState } from "react"
import { Modal } from "react-bootstrap"

function CreateTopic(props) {
  const { handleShow2, handleReq, show } = props
  const [createTopic, setCreateTopic] = useState("")
  const [category, setCategory] = useState("633268f5eaac832ae2e59dbc")

  const newTopic = (e) => {
    setCreateTopic(e.target.value)
  }

  const ChooseCategory = (e) => {
    setCategory(e.target.value)
  }

  const token = localStorage.getItem("token")

  const sendCreateTopic = () => {
    axios
      .post(
        `http://kulony-backend.herokuapp.com/api/topic/create_topic/`,
        { catagory_id: category, topic_name: createTopic },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => console.log("Posting data", res.data))
      .catch((err) => console.error(err))
    handleShow2()
  }
  console.log(createTopic)
  console.log(category)
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
          <select
            className="dropdown-cate"
            name="categories"
            onChange={ChooseCategory}
            required
          >
            <option value="categories">Categories</option>
            <option value="633268f5eaac832ae2e59dbc">General</option>
            <option value="63326a7029e9433f436bd7a9">Learning</option>
            <option value="63326a9029e9433f436bd7ab">News</option>
            <option value="634ffd740bd46f0bde6256b7">Market</option>
            <option value="634ffe080bd46f0bde6256bd">Faculty</option>
          </select>
        </div>
        <div className="create-topic-footer">
          <div className="create-topic-cancle" onClick={handleShow2}>
            CANCEL
          </div>
          <div
            type="submit"
            className="create-topic-confirm"
            onClick={sendCreateTopic}
          >
            CONFIRM
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default CreateTopic
