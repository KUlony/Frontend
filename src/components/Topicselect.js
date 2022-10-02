import React, { useEffect, useState } from "react"
import "./Topicselect.css"

function Topicselect() {
  const [itemed, setItemed] = useState([])

  const itemgeneralleft = ["general1"]
  const itemgeneralright = ["general2"]

  const itemstudyleft = ["study1"]
  const itemstudyright = ["study2"]

  const itemfacultyleft = [
    "Agriculture",
    "Agro-Industry",
    "Architecture",
    "Business Administration",
    "Economics",
    "Education",
    "other1",
    "other2",
    "other3",
    "other4",
  ]
  const itemfacultyright = [
    "Environment",
    "Fisheries",
    "Forestry",
    "Humanities",
    "Science",
    "Social science",
    "other5",
    "other6",
    "other7",
    "other8",
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
    if (itemed.length <= 5) {
      localStorage.setItem("itemed", JSON.stringify(itemed))
      // event.target.checked = false
    } else if (itemed.length > 5) {
      alert("You can choose maximum 5 topics")
    }
  }, [itemed])

  // console.log(itemed)

  // input.checkbox.click(function (input) {
  //   var bol = input.checkbox.checked.length >= 5
  //   $("input:checkbox").not(":checked").attr("disabled", bol)
  // })

  const [general, setgeneral] = useState(true)
  const [study, setstudy] = useState(false)
  const [faculty, setfaculty] = useState(false)

  const togglegeneral = () => {
    setgeneral(true)
    setstudy(false)
    setfaculty(false)
  }

  const togglestudy = () => {
    setgeneral(false)
    setstudy(true)
    setfaculty(false)
  }

  const togglefaculty = () => {
    setgeneral(false)
    setstudy(false)
    setfaculty(true)
  }

  console.log(general, study, faculty)

  return (
    <div className="topic">
      <div className="headtopic">
        <div className="choosetopic">Choose topics</div>
        <div className="maxtopic">You can choose maximum 5 topics</div>
        <br></br>
      </div>
      <div className="contenttopic">
        <div className="seltopic">
          <button
            className={`general ${general ? "generaltog" : ""}`}
            onClick={togglegeneral}
          >
            general
          </button>
          <br></br>
          <button
            className={`study ${study ? "studytog" : ""}`}
            onClick={togglestudy}
          >
            study
          </button>
          <br></br>
          <button
            className={`faculty ${faculty ? "facultytog" : ""}`}
            onClick={togglefaculty}
          >
            faculty
          </button>
        </div>
        <div className="selcom">
          <div className={`${general ? "scrollgeneral" : "noting"}`}>
            <div className="comleft">
              {itemgeneralleft.map((item, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input value={item} type="checkbox" onChange={handleCheck} />
                  <span className={isChecked(item)}>{item}</span>
                </div>
              ))}
            </div>
            <div className="comright">
              {itemgeneralright.map((items, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input value={items} type="checkbox" onChange={handleCheck} />
                  <span className={isChecked(items)}>{items}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`${study ? "scrollstudy" : "noting"}`}>
            <div className="comleft">
              {itemstudyleft.map((item, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input value={item} type="checkbox" onChange={handleCheck} />
                  <span className={isChecked(item)}>{item}</span>
                </div>
              ))}
            </div>
            <div className="comright">
              {itemstudyright.map((items, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input value={items} type="checkbox" onChange={handleCheck} />
                  <span className={isChecked(items)}>{items}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`${faculty ? "scrollfaculty" : "noting"}`}>
            <div className="comleft">
              {itemfacultyleft.map((item, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input value={item} type="checkbox" onChange={handleCheck} />
                  <span className={isChecked(item)}>{item}</span>
                </div>
              ))}
            </div>
            <div className="comright">
              {itemfacultyright.map((items, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input value={items} type="checkbox" onChange={handleCheck} />
                  <span className={isChecked(items)}>{items}</span>
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
