import React from 'react'
import smile from '../picture/smile.png'
import fail from '../picture/fail.png'
import './SettingChangePassword.css'
const SettingChangePassword = (props) => {
  const { isSuccess } = props
  //   console.log('success? ', isSuccess)

  return (
    <div className="setting-popup">
      {isSuccess ? (
        <div className="success-popup">
          <img src={smile} className="smile-img" alt="smile" />{' '}
          <h2>Successfully sending report !</h2>
          <img src={smile} className="smile-img" alt="smile" />
        </div>
      ) : (
        <div className="fail-popup">
          <img src={fail} className="smile-img" alt="fail" />{' '}
          <h3>Action failed due to error </h3>
          <img src={fail} className="smile-img" alt="fail" />{' '}
        </div>
      )}
    </div>
  )
}

export default SettingChangePassword
