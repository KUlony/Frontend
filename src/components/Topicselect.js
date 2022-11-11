import axios from "axios"
import React, { useEffect, useState } from "react"
import "./Topicselect.css"

function Topicselect(props) {
  const [itemed, setItemed] = useState([])
  const [iditemed, setIditemed] = useState([])
  const { sendbtn } = props

  const [itemgeneralleft, setitemgeneralleft] = useState([])
  const [itemgeneralright, setitemgeneralright] = useState([])

  const [itemLearningleft, setitemLearningleft] = useState([])
  const [itemLearningright, setitemLearningright] = useState([])

  const [itemfacultyleft, setitemfacultyleft] = useState([])
  const [itemfacultyright, setitemfacultyright] = useState([])

  const [itemnewsleft, setitemnewsleft] = useState([])
  const [itemnewsright, setitemnewsright] = useState([])

  const [itemmarketleft, setitemmarketleft] = useState([])
  const [itemmarketright, setitemmarketright] = useState([])

  const token = localStorage.getItem("token")

  const getdata = () => {
    axios
      .get(
        "https://kulony-backend.herokuapp.com/api/topic/get_all_catagory_topic",
        {
          headers: {
            Authorization: token,
          },
        }
      )
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
          } else if (getarray[i].catagory_name === "Learning") {
            // edit this
            setitemLearningleft([])
            setitemLearningright([])
            for (let j = 0; j < getarray[i].all_topic.length; j++) {
              if (j < getarray[i].all_topic.length && isinlist) {
                setitemLearningleft((prevState) => [
                  ...prevState,
                  [
                    getarray[i].all_topic[j].topic_id,
                    getarray[i].all_topic[j].topic_name,
                  ],
                ])
                isinlist = false
              } else {
                setitemLearningright((prevState) => [
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
          } else if (getarray[i].catagory_name === "News") {
            // edit this
            setitemnewsleft([])
            setitemnewsright([])
            for (let j = 0; j < getarray[i].all_topic.length; j++) {
              if (j < getarray[i].all_topic.length && isinlist) {
                setitemnewsleft((prevState) => [
                  ...prevState,
                  [
                    getarray[i].all_topic[j].topic_id,
                    getarray[i].all_topic[j].topic_name,
                  ],
                ])
                isinlist = false
              } else {
                setitemnewsright((prevState) => [
                  ...prevState,
                  [
                    getarray[i].all_topic[j].topic_id,
                    getarray[i].all_topic[j].topic_name,
                  ],
                ])
                isinlist = true
              }
            }
          } else if (getarray[i].catagory_name === "Market") {
            // edit this
            setitemmarketleft([])
            setitemmarketright([])
            for (let j = 0; j < getarray[i].all_topic.length; j++) {
              if (j < getarray[i].all_topic.length && isinlist) {
                setitemmarketleft((prevState) => [
                  ...prevState,
                  [
                    getarray[i].all_topic[j].topic_id,
                    getarray[i].all_topic[j].topic_name,
                  ],
                ])
                isinlist = false
              } else {
                setitemmarketright((prevState) => [
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
  const [news, setnews] = useState(false)
  const [market, setmarket] = useState(false)

  const togglegeneral = () => {
    setgeneral(true)
    setstudy(false)
    setfaculty(false)
    setnews(false)
    setmarket(false)
  }

  const togglestudy = () => {
    setgeneral(false)
    setstudy(true)
    setfaculty(false)
    setnews(false)
    setmarket(false)
  }

  const togglefaculty = () => {
    setgeneral(false)
    setstudy(false)
    setfaculty(true)
    setnews(false)
    setmarket(false)
  }

  const togglenews = () => {
    setgeneral(false)
    setstudy(false)
    setfaculty(false)
    setnews(true)
    setmarket(false)
  }

  const togglemarket = () => {
    setgeneral(false)
    setstudy(false)
    setfaculty(false)
    setnews(false)
    setmarket(true)
  }

  console.log(general, study, faculty, news, market)

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
            General
          </button>
          <br></br>
          <button
            className={`studyC ${study ? "studytog" : ""}`}
            onClick={togglestudy}
          >
            Learning
          </button>
          <br></br>
          <button
            className={`facultyC ${faculty ? "facultytog" : ""}`}
            onClick={togglefaculty}
          >
            Faculty
          </button>
          <br></br>
          <button
            className={`newsC ${news ? "newtog" : ""}`}
            onClick={togglenews}
          >
            News
          </button>
          <br></br>
          <button
            className={`marketC ${market ? "markettog" : ""}`}
            onClick={togglemarket}
          >
            Market
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
              {itemLearningleft.map((item, index) => (
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
              {itemLearningright.map((items, index) => (
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
          <div className={`${news ? "scrollnews" : "noting"}`}>
            <div className="comleft">
              {itemnewsleft.map((item, index) => (
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
              {itemnewsright.map((items, index) => (
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
          <div className={`${market ? "scrollmarket" : "noting"}`}>
            <div className="comleft">
              {itemmarketleft.map((item, index) => (
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
              {itemmarketright.map((items, index) => (
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
