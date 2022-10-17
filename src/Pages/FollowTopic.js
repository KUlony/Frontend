import axios from "axios"
import React, { useEffect, useState } from "react"
import "./FollowTopic.css"

const FollowTopic = () => {
  const [itemed, setItemed] = useState([])
  const [iditemed, setIditemed] = useState([])

  const [itemgeneralleft, setitemgeneralleft] = useState([])
  const [itemgeneralright, setitemgeneralright] = useState([])

  const [itemstudyleft, setitemstudyleft] = useState([])
  const [itemstudyright, setitemstudyright] = useState([])

  const [itemfacultyleft, setitemfacultyleft] = useState([])
  const [itemfacultyright, setitemfacultyright] = useState([])

  const token = localStorage.getItem("token")

  const getdata = () => {
    axios
      .get("//localhost:4000/api/topic/get_all_catagory_topic", {
        headers: { Authorization: token },
      })
      .then((res) => {
        // console.log(res.data)
        const getarray = res.data
        console.log(getarray)
        for (let i = 0; i < getarray.length; i++) {
          let isinlist = true
          if (getarray[i].catagory_name === "general") {
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
          } else if (getarray[i].catagory_name === "study") {
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
          } else if (getarray[i].catagory_name === "faculty") {
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
    itemed.includes(item) ? "checked-itemfol" : "not-checked-itemfol"

  console.log(iditemed, itemed)

  useEffect(() => {
    if (itemed.length <= 5) {
      localStorage.setItem("itemed", JSON.stringify(itemed))
      localStorage.setItem("iditemed", JSON.stringify(iditemed))
    } else if (itemed.length > 5) {
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

  // console.log(general, study, faculty)

  return (
    <div className="page">
      <p className="editmyfollowing">Edit my following</p>
      <div className="followtopictap">
        <div className="headtopicfollow">
          <div className="followtopic">Follow topics</div>
          <div className="selecttopic">Select the topic you want to follow</div>
          <br></br>
        </div>
        <div className="seltopicfollow">
          <div className="inbtn">
            <button
              className={`followbtn ${general ? "generaltog" : ""}`}
              onClick={togglegeneral}
            >
              General
            </button>
            <div className={`${general ? "greentab" : "noting"}`}></div>
          </div>
          <div className="inbtn">
            <button
              className={`followbtn ${study ? "studytog" : ""}`}
              onClick={togglestudy}
            >
              Study
            </button>
            <div className={`${study ? "greentab" : "noting"}`}></div>
          </div>
          <div className="inbtn">
            <button
              className={`followbtn ${faculty ? "facultytog" : ""}`}
              onClick={togglefaculty}
            >
              Faculty
            </button>
            <div className={`${faculty ? "greentab" : "noting"}`}></div>
          </div>
        </div>
        <div className="selcomfol">
          <div className={`${general ? "scrollgeneralfol" : "noting"}`}>
            <div className="comleft">
              {itemgeneralleft.map((item, index) => (
                <div key={index} className="checkbox-wrapper-fol">
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
                <div key={index} className="checkbox-wrapper-fol">
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
          <div className={`${study ? "scrollstudyfol" : "noting"}`}>
            <div className="comleft">
              {itemstudyleft.map((item, index) => (
                <div key={index} className="checkbox-wrapper-fol">
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
                <div key={index} className="checkbox-wrapper-fol">
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
          <div className={`${faculty ? "scrollfacultyfol" : "noting"}`}>
            <div className="comleft">
              {itemfacultyleft.map((item, index) => (
                <div key={index} className="checkbox-wrapper-fol">
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
                <div key={index} className="checkbox-wrapper-fol">
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
      <div className="btnbottomfol">
        <div className="bthfol">
          <a href="/home" className="backtohome">
            BACK TO HOME
          </a>
        </div>
        <button
          type="button"
          className="postbtnfol"
          id="buttonpostfol"
          // onClick={senddata}
        >
          SAVE
        </button>
      </div>
    </div>
  )
}

export default FollowTopic
