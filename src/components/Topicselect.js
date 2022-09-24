import React, { useState } from "react"
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
  }

  const checkedItems = itemed.length
    ? itemed.reduce((total, item) => {
        return total + ", " + item
      })
    : ""

  var isChecked = (item) =>
    itemed.includes(item) ? "checked-item" : "not-checked-item"

  // $("input:checkbox").click(function () {
  //   var bol = $("input:checkbox:checked").length >= 5
  //   $("input:checkbox").not(":checked").attr("disabled", bol)
  // })

  // const senddata = () => {
  //   return <Createpost array={setItemed} />
  // }

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
      <div className="btnconfirm">
        <button
          type="button"
          className="confirm"
          id="buttonconfirm"
          // onClick={() => senddata()}
        >
          CONFIRM
        </button>
        {/* <Createpost array={setItemed} /> */}
      </div>
      <div>{`${checkedItems}`}</div>
    </div>
  )
}

export default Topicselect
