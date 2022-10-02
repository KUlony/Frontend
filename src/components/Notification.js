import {React ,useState} from 'react'
import './Notification.css'
import {FaRegBell} from 'react-icons/fa'

function Notification() {
  const [showNoti,setShowNoti] = useState("dropdown_hide")
  const [showNotiAll,setShowNotiAll] = useState(false)
  const showAll = () => {
    setShowNotiAll(!showNotiAll)
    
  }
  console.log(showNotiAll)
    const clickNoti = () => {
        if(showNoti === "dropdown_hide") {
            setShowNoti("dropdown_show")
        }
        else {
            setShowNoti("dropdown_hide")
        }
        console.log(showNoti)
    }
    const notiArr = [{text:'hi',read:false},{text:'hello',read:false},{text:'like',read:false},{text:'share',read:false},{text:'comment',read:true}]
    const notiAll = notiArr.map((item) => {
      return (
        <div className={item.read ? "read" : "unread"}>
          {item.text}
        </div>
      )
    })

  return (
    <div className={showNoti} onClick={clickNoti}>
      <FaRegBell size={25} className="bell-icon" />
      <div className='dropdown-content'>
        <p className='noti-text'>Notification</p>
        <div className='noti-content'>
          {notiAll}
          <p className='noti-view-more' onClick={showAll}>view more</p>
        </div>
      

      </div>
     
    </div>
  );
}


export default Notification