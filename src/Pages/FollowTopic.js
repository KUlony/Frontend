import axios from "axios"
import React, { useEffect, useState } from "react"
import "./FollowTopic.css"

const FollowTopic = () => {
  const [itemed, setItemed] = useState([])
  const [iditemed, setIditemed] = useState([])

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

  const [ninit, setNinit] = useState(null)

  const token = localStorage.getItem("token")

  const getdata = async () => {
    try {
      await axios
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

      await axios
        .get("https://kulony-backend.herokuapp.com/api/user/following_topic", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log(res.data)
          setNinit(res.data)
        })
        .catch((err) => console.log(err))
    } catch {}
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
    localStorage.setItem("itemed", JSON.stringify(itemed))
    localStorage.setItem("iditemed", JSON.stringify(iditemed))
  }, [])

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

  const senddata = () => {
    axios
      .post(
        "https://kulony-backend.herokuapp.com/api/user/follow_topic",
        { topic_id: iditemed },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }

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
              Learning
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
          <div className="inbtn">
            <button
              className={`followbtn ${news ? "newstog" : ""}`}
              onClick={togglenews}
            >
              news
            </button>
            <div className={`${news ? "greentab" : "noting"}`}></div>
          </div>
          <div className="inbtn">
            <button
              className={`followbtn ${market ? "markettog" : ""}`}
              onClick={togglemarket}
            >
              market
            </button>
            <div className={`${market ? "greentab" : "noting"}`}></div>
          </div>
        </div>
        {ninit && (
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
                      // defaultChecked={ninit[index].user_follow_status}
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
                      // defaultChecked={ninit[index].user_follow_status}
                    />
                    <span className={isChecked(items[1])}>{items[1]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${study ? "scrollstudyfol" : "noting"}`}>
              <div className="comleft">
                {itemLearningleft.map((item, index) => (
                  <div key={index} className="checkbox-wrapper-fol">
                    <input
                      value={item[1]}
                      id={item[0]}
                      type="checkbox"
                      onChange={handleCheck}
                      // defaultChecked={
                      //   ninit[index].user_follow_status &&
                      //   ninit[index].topic_id === item[0]
                      // }
                    />
                    <span className={isChecked(item[1])}>{item[1]}</span>
                  </div>
                ))}
              </div>
              <div className="comright">
                {itemLearningright.map((items, index) => (
                  <div key={index} className="checkbox-wrapper-fol">
                    <input
                      value={items[1]}
                      id={items[0]}
                      type="checkbox"
                      onChange={handleCheck}
                      // defaultChecked={
                      //   ninit[index].user_follow_status &&
                      //   ninit[index].topic_id === items[0]
                      // }
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
                      // defaultChecked={
                      //   ninit[index].topic_id === item[0] ? true : false
                      // }
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
                      // defaultChecked={
                      //   ninit[index].topic_id === items[0] ? true : false
                      // }
                    />
                    <span className={isChecked(items[1])}>{items[1]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${news ? "scrollnewsfol" : "noting"}`}>
              <div className="comleft">
                {itemnewsleft.map((item, index) => (
                  <div key={index} className="checkbox-wrapper-fol">
                    <input
                      value={item[1]}
                      id={item[0]}
                      type="checkbox"
                      onChange={handleCheck}
                      // defaultChecked={
                      //   ninit[index].topic_id === item[0] ? true : false
                      // }
                    />
                    <span className={isChecked(item[1])}>{item[1]}</span>
                  </div>
                ))}
              </div>
              <div className="comright">
                {itemnewsright.map((items, index) => (
                  <div key={index} className="checkbox-wrapper-fol">
                    <input
                      value={items[1]}
                      id={items[0]}
                      type="checkbox"
                      onChange={handleCheck}
                      // defaultChecked={
                      //   ninit[index].topic_id === items[0] ? true : false
                      // }
                    />
                    <span className={isChecked(items[1])}>{items[1]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${market ? "scrollmarketfol" : "noting"}`}>
              <div className="comleft">
                {itemmarketleft.map((item, index) => (
                  <div key={index} className="checkbox-wrapper-fol">
                    <input
                      value={item[1]}
                      id={item[0]}
                      type="checkbox"
                      onChange={handleCheck}
                      // defaultChecked={
                      //   ninit[index].topic_id === item[0] ? true : false
                      // }
                      // defaultChecked={true}
                    />
                    <span className={isChecked(item[1])}>{item[1]}</span>
                  </div>
                ))}
              </div>
              <div className="comright">
                {itemmarketright.map((items, index) => (
                  <div key={index} className="checkbox-wrapper-fol">
                    <input
                      value={items[1]}
                      id={items[0]}
                      type="checkbox"
                      onChange={handleCheck}
                      // defaultChecked={
                      //   ninit[index].topic_id === items[0] ? true : false
                      // }
                      // defaultChecked={true}
                    />
                    <span className={isChecked(items[1])}>{items[1]}</span>
                    {/* {console.log(ninit[index].user_follow_status)} */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
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
          onClick={senddata}
        >
          SAVE
        </button>
      </div>
    </div>
  )
}

export default FollowTopic
