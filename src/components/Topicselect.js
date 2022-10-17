import axios from "axios"
import React, { useEffect, useState } from "react"
import "./Topicselect.css"

function Topicselect(props) {
  const [itemed, setItemed] = useState([])
  const [iditemed, setIditemed] = useState([])
  const { sendbtn } = props

  const [itemgeneralleft, setitemgeneralleft] = useState([])
  const [itemgeneralright, setitemgeneralright] = useState([])

  const [itemstudyleft, setitemstudyleft] = useState([])
  const [itemstudyright, setitemstudyright] = useState([])

  const [itemfacultyleft, setitemfacultyleft] = useState([])
  const [itemfacultyright, setitemfacultyright] = useState([])

  const getdata = () => {
    const token = localStorage.getItem("token")
    axios
      .get("http://localhost:4000/api/topic/get_all_catagory_topic", {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        // console.log(res.data)
        const getarray = res.data
        console.log(getarray)
        for (let i = 0; i < getarray.length; i++) {
          let isinlist = true
          if (getarray[i].catagory_name === "General") {
            // edit this
            setitemgeneralleft([])
            setitemgeneralright([])
            for (let j = 0; j < getarray[i].all_topic.length; j++) {
              if (j < getarray[i].all_topic.length && isinlist) {
                setitemgeneralleft((prevState) => [
                  ...prevState,
                  [
                    getarray[i].all_topic[j].topic_id,
                    getarray[i].all_topic[j].topic_name,
                  ],
                ])
                isinlist = false
              } else {
                setitemgeneralright((prevState) => [
                  ...prevState,
                  [
                    getarray[i].all_topic[j].topic_id,
                    getarray[i].all_topic[j].topic_name,
                  ],
                ])
                isinlist = true
              }
            }
          } else if (getarray[i].catagory_name === "Study") {
            // edit this
            setitemstudyleft([])
            setitemstudyright([])
            for (let j = 0; j < getarray[i].all_topic.length; j++) {
              if (j < getarray[i].all_topic.length && isinlist) {
                setitemstudyleft((prevState) => [
                  ...prevState,
                  [
                    getarray[i].all_topic[j].topic_id,
                    getarray[i].all_topic[j].topic_name,
                  ],
                ])
                isinlist = false
              } else {
                setitemstudyright((prevState) => [
                  ...prevState,
                  [
                    getarray[i].all_topic[j].topic_id,
                    getarray[i].all_topic[j].topic_name,
                  ],
                ])
                isinlist = true
              }
            }
          } else if (getarray[i].catagory_name === "Faculty") {
            // edit this
            setitemfacultyleft([])
            setitemfacultyright([])
            for (let j = 0; j < getarray[i].all_topic.length; j++) {
              if (j < getarray[i].all_topic.length && isinlist) {
                setitemfacultyleft((prevState) => [
                  ...prevState,
                  [
                    getarray[i].all_topic[j].topic_id,
                    getarray[i].all_topic[j].topic_name,
                  ],
                ])
                isinlist = false
              } else {
                setitemfacultyright((prevState) => [
                  ...prevState,
                  [
                    getarray[i].all_topic[j].topic_id,
                    getarray[i].all_topic[j].topic_name,
                  ],
                ])
                isinlist = true
              }
            }
          }
        }
      })
      .catch((err) => console.log(err))
  }

  // console.log(itemgeneralleft, itemgeneralright)
  // console.log(itemstudyleft, itemstudyright)
  // console.log(itemfacultyleft, itemfacultyright)

  useEffect(() => {
    getdata()
  }, [])

  const handleCheck = (event) => {
    var updatedList = [...itemed]
    var updatedIdList = [...iditemed]

    if (event.target.checked) {
      updatedList = [...itemed, event.target.value]
      updatedIdList = [...iditemed, event.target.id]
    } else {
      updatedList.splice(itemed.indexOf(event.target.value), 1)
      updatedIdList.splice(iditemed.indexOf(event.target.id), 1)
    }
    setItemed(updatedList)
    setIditemed(updatedIdList)
  }

  var isChecked = (item) =>
    itemed.includes(item) ? "checked-item" : "not-checked-item"

  // console.log(itemed.length)

  useEffect(() => {
    if (itemed.length <= 5) {
      localStorage.setItem("itemed", JSON.stringify(itemed))
      localStorage.setItem("iditemed", JSON.stringify(iditemed))
      sendbtn(false)
    } else if (itemed.length > 5) {
      sendbtn(true)
    }
  }, [itemed])

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
            className={`generalC ${general ? "generaltog" : ""}`}
            onClick={togglegeneral}
          >
            general
          </button>
          <br></br>
          <button
            className={`studyC ${study ? "studytog" : ""}`}
            onClick={togglestudy}
          >
            study
          </button>
          <br></br>
          <button
            className={`facultyC ${faculty ? "facultytog" : ""}`}
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
                  <input
                    value={item[1]}
                    id={item[0]}
                    type="checkbox"
                    onChange={handleCheck}
                  />
                  <span className={isChecked(item[1])}>{item[1]}</span>
                </div>
              ))}
            </div>
            <div className="comright">
              {itemgeneralright.map((items, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input
                    value={items[1]}
                    id={items[0]}
                    type="checkbox"
                    onChange={handleCheck}
                  />
                  <span className={isChecked(items[1])}>{items[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`${study ? "scrollstudy" : "noting"}`}>
            <div className="comleft">
              {itemstudyleft.map((item, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input
                    value={item[1]}
                    id={item[0]}
                    type="checkbox"
                    onChange={handleCheck}
                  />
                  <span className={isChecked(item[1])}>{item[1]}</span>
                </div>
              ))}
            </div>
            <div className="comright">
              {itemstudyright.map((items, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input
                    value={items[1]}
                    id={items[0]}
                    type="checkbox"
                    onChange={handleCheck}
                  />
                  <span className={isChecked(items[1])}>{items[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`${faculty ? "scrollfaculty" : "noting"}`}>
            <div className="comleft">
              {itemfacultyleft.map((item, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input
                    value={item[1]}
                    id={item[0]}
                    type="checkbox"
                    onChange={handleCheck}
                  />
                  <span className={isChecked(item[1])}>{item[1]}</span>
                </div>
              ))}
            </div>
            <div className="comright">
              {itemfacultyright.map((items, index) => (
                <div key={index} className="checkbox-wrapper">
                  <input
                    value={items[1]}
                    id={items[0]}
                    type="checkbox"
                    onChange={handleCheck}
                  />
                  <span className={isChecked(items[1])}>{items[1]}</span>
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
