import React from "react"
import NavBar from "../components/NavBar"
import "./Createpost.css"

function Createpost() {
  return (
    <div>
      {/* <NavBar /> */}
      <h1 className="create">Create a post</h1>
      <div className="title">
        <h3 className="namet">Title</h3>
        <textarea
          name="inputTitle"
          type="text"
          placeholder="Maximum 100 characters"
          rows="1"
          cols="50"
        ></textarea>
      </div>
      <div className="cover">
        <h3 className="namec">Cover photo</h3>
        <h3 className="op">(Optional)</h3>
        <button type="button">Add image</button>
      </div>
      <br></br>
      <div className="body">
        <h3 className="content">Content</h3>
        <textarea
          name="inputContent"
          type="text"
          rows="20"
          cols="100"
        ></textarea>
        <button type="button">Add image</button>
      </div>
      <br></br>
      <div className="bottom">
        <h3 className="topic">Topic</h3>
      </div>
    </div>
  )
}

export default Createpost
