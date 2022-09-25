import React, { useEffect, useState } from "react"
import Createpost from "../Pages/Createpost"
import "./Topicselect.css"

function Topicselect() {
  const [itemed, setItemed] = useState([])
  // const [dis, setDis] = useState(false)

  const itemListleft = [
    "Agriculture",
    "Agro-Industry",
    "Architecture",
    "Business Administration",
    "Economics",
    "Education",
  ]
  const itemlistright = [
    "Environment",
    "Fisheries",
    "Forestry",
    "Humanities",
    "Science",
    "Social science",
  ]

  const handleCheck = (event) => {
    var updatedList = [...itemed]

    if (event.target.checked) {
      updatedList = [...itemed, event.target.value]
    } else {
      updatedList.splice(itemed.indexOf(event.target.value), 1)
    }
    setItemed(updatedList)
    // eventlength(event)
  }

  var isChecked = (item) =>
    itemed.includes(item) ? "checked-item" : "not-checked-item"

  // console.log(itemed.length)

  useEffect(() => {
    localStorage.setItem("itemed", JSON.stringify(itemed))
  }, [itemed])

  useEffect((e) => {
    if (itemed.length > 5) {
      alert("You can choose maximum 5 topics")
      // console.log(e)
      // event.target.checked = false
    }
    console.log(itemed.length)
  })

  // console.log(itemed)

  // input.checkbox.click(function (input) {
  //   var bol = input.checkbox.checked.length >= 5
  //   $("input:checkbox").not(":checked").attr("disabled", bol)
  // })

  return (
    <div className="topic">
      <div className="headtopic">
        <div className="choosetopic">Choose topics</div>
        <div className="maxtopic">You can choose maximum 5 topics</div>
        <br></br>
        <br></br>
      </div>
      <div className="contenttopic">
        <div className="seltopic">
          <button className="general">general</button>
          <br></br>
          <button className="study">study</button>
          <br></br>
          <button className="faculty">faculty</button>
        </div>
        <div className="selcom">
          <div className="scroll">
            <div className="comleft">
              {itemListleft.map((item, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input value={item} type="checkbox" onChange={handleCheck} />
                  <span className={isChecked(item)}>{item}</span>
                </div>
              ))}
            </div>
            <div className="comright">
              {itemlistright.map((items, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input value={items} type="checkbox" onChange={handleCheck} />
                  <span className="itemname">{items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topicselect
