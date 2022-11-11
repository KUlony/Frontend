import { React, useState, useEffect } from "react"
import "./Notification.css"
import { FaRegBell } from "react-icons/fa"
import axios from "axios"
import NotificationList from "./NotificationList"

function Notification() {
  const [showNoti, setShowNoti] = useState("dropdown_hide")
  // const [showNotiAll, setShowNotiAll] = useState(false);

  const token = localStorage.getItem("token")

  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(`/api/notification`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data)
        setData(res.data.reverse())
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const clickNoti = () => {
    if (showNoti === "dropdown_hide") {
      setShowNoti("dropdown_show")
    } else {
      data.map((i) => {
        axios
          .post(
            `http://kulony-backend.herokuapp.com/api/notification/read/${i.notic_id}`,
            {},
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then((res) => console.log("Updated read", res.data))
          .catch((err) => console.error(err))
        return console.log(i.notic_id)
      })
      setShowNoti("dropdown_hide")
    }
    console.log(showNoti)
  }

  const notiAll = data.map((item) => {
    return <NotificationList item={item} />
  })

  return (
    <div className={showNoti} onClick={clickNoti}>
      <FaRegBell size={25} className="bell-icon" />
      <div className="dropdown-content">
        <p className="noti-text">Notification</p>
        <div className="noti-content">
          {notiAll}
          {/* <p className="noti-view-more" onClick={showAll}>
            view more
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default Notification
