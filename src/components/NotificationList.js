import { React, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotificationList(props) {
  const { item, clickNoti } = props;
  const [datenow, setdatenow] = useState('');
  const [likeTime, setLikeTime] = useState('');
  // const [delay, setDelay] = useState(!false);

  // setTimeout(() => setDelay(true), 2000);
  async function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    setdatenow(new Date());
  }, 0);

  useInterval(() => {
    let time = new Date(item.notice_time);
    let diffdatetime = Math.abs((time - datenow) / 1000);
    if (diffdatetime < 60) {
      setLikeTime(`${Math.ceil(diffdatetime)} seconds ago`);
    } else if (diffdatetime < 3600) {
      setLikeTime(`${Math.ceil(diffdatetime / 60)} minute ago`);
    } else if (diffdatetime < 86400) {
      setLikeTime(`${Math.ceil(diffdatetime / 3600)} hour ago`);
    } else if (diffdatetime < 2592000) {
      setLikeTime(`${Math.ceil(diffdatetime / 86400)} days ago`);
    } else if (diffdatetime < 31104000) {
      setLikeTime(`${Math.ceil(diffdatetime / 2592000)} month ago`);
    } else {
      setLikeTime(`${Math.ceil(diffdatetime / 31104000)} year ago`);
    }
  }, 0);
  return (
    <Link
      to={`/viewpost/${item.entity_id}`}
      className={item.readed ? 'read' : 'unread'}
      onClick={clickNoti}
    >
      <div className="action-container">
        <div className="action-user-pic">
          <img src={item.action_user.action_user_pic} alt="" />
        </div>
        <div className="action-content">
          {item.action_user.action_user_name} {item.notice_type}{' '}
          {item.notice_type === 'reply' ? 'your comment' : 'your post'}
        </div>
      </div>

      <div className="action-time">{likeTime}</div>
    </Link>
  );
}

export default NotificationList;
