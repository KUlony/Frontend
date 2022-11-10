import axios from 'axios'
import React, { useRef, useState } from 'react'
import './Setting.css'
import SettingChangePassword from './SettingChangePassword'
const Setting = () => {
  const currentPassword = useRef()
  const newPassword = useRef()
  const confirmPassword = useRef()

  const onClickCancel = () => {
    currentPassword.current.value = ''
    newPassword.current.value = ''
    confirmPassword.current.value = ''
  }
  //popup
  const [isChangePassword, setIsChangePassword] = useState(null)
  let changePasswordPopup = null
  const [isSuccess, setIsSuccess] = useState(false)
  if (isChangePassword) {
    changePasswordPopup = <SettingChangePassword isSuccess={isSuccess} />
  }
  function timeoutPopup(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  const onClickChangePassword = async () => {
    try {
      const response = await axios.post(
        '/api/sing-up/changepassword',
        {
          currentpassword: currentPassword.current.value,
          newpassword: newPassword.current.value,
          confirm_newpassword: confirmPassword.current.value,
        },
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpdHRpcG9uZy50YW1Aa3UudGgiLCJpZCI6IjYzNmNhMjEyNjE3M2Q4MTNlOWUzOGNhYiIsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2NjgwNzU2MTEsImV4cCI6MTY2ODE2MjAxMX0.XnPansFtdZVQm4AT7IZBJ9hD4sSYDdz8itjWfc1kSoc',
          },
        }
      )
      console.log('response is', response)
      setIsSuccess(true)
      setIsChangePassword(true) // popup now
      await timeoutPopup(1500)
      setIsChangePassword(null) // popup down
      setIsSuccess(null)
    } catch (error) {
      console.log('error', error)
      setIsSuccess(false)
      setIsChangePassword(true) // popup now
      await timeoutPopup(1500)
      setIsChangePassword(null) // popup down
      setIsSuccess(null)
    }
  }
  const [currentPasswordShown, setCurrentPasswordShown] = useState(false)
  function toggleCurrentPassword() {
    setCurrentPasswordShown(!currentPasswordShown)
  }

  const [newPasswordShown, setNewPasswordShown] = useState(false)
  function toggleNewPassword() {
    setNewPasswordShown(!newPasswordShown)
  }

  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)
  function toggleConfirmPassword() {
    setConfirmPasswordShown(!confirmPasswordShown)
  }

  const inVisibility = (
    <img
      src={require('../picture/invisibility.png')}
      alt="eye"
      width="20px"
      style={{ 'vertical-align': 'middle' }}
    />
  )
  const vis = (
    <img
      src={require('../picture/visibility.png')}
      alt="eye"
      width="20px"
      style={{ 'vertical-align': 'middle' }}
    />
  )
  const [isShowPass, setIsShowPass] = useState(false)
  const showContentChangePass = () => {
    setIsShowPass(!isShowPass)
  }
  return (
    <main className="setting-main">
      <h2 className="setting-title">Setting</h2>
      {isShowPass ? (
        <section className="setting-content">
          <article
            className="setting-content-header"
            onClick={showContentChangePass}
          >
            <div style={{ 'text-align': 'right' }}>
              <img
                src={require('../picture/arrowUp.png')}
                width="20px"
                alt="arrow"
                className="setting-arrow"
              />
            </div>
            <div className="setting-header-text" style={{ color: '#339C64' }}>
              Change password
            </div>
            <br />
          </article>
          <article className="setting-content-main">
            Choose a unique password to protect your account
            <div className="setting-time">Last changed : 10/05/2022</div>
            <br />
            <div className="setting-current-pass">
              <b>Type your current password</b>
              <br />
              <input
                type={currentPasswordShown ? 'text' : 'password'}
                ref={currentPassword}
                className="current-pass-input"
              />
              <span
                className="setting-visibility"
                onClick={toggleCurrentPassword}
              >
                {currentPasswordShown ? vis : inVisibility}
              </span>
            </div>
            <br />
            <div className="setting-new-pass">
              <b>Type your new password</b>
              <br />
              <input
                type={newPasswordShown ? 'text' : 'password'}
                ref={newPassword}
                className="new-pass-input"
              />
              <span className="setting-visibility" onClick={toggleNewPassword}>
                {newPasswordShown ? vis : inVisibility}
              </span>
            </div>
            <br />
            <div className="setting-confirm-pass">
              <b>Confirm new password</b>
              <br />
              <input
                type={confirmPasswordShown ? 'text' : 'password'}
                ref={confirmPassword}
                className="confirm-pass-input"
              />
              <span
                className="setting-visibility"
                onClick={toggleConfirmPassword}
              >
                {confirmPasswordShown ? vis : inVisibility}
              </span>
            </div>
            <br />
          </article>
          <article style={{ 'text-align': 'right' }}>
            <span
              onClick={() => {
                onClickCancel()
                showContentChangePass()
              }}
              className="setting-cancel"
            >
              {' '}
              CANCEL{' '}
            </span>
            <span
              className="setting-confirm-change"
              onClick={onClickChangePassword}
            >
              CHANGE PASSWORD
            </span>
          </article>
        </section>
      ) : (
        <section className="setting-content">
          <article
            className="setting-content-header"
            onClick={showContentChangePass}
          >
            <div style={{ 'text-align': 'right' }}>
              <img
                src={require('../picture/arrowDown.png')}
                width="20px"
                alt="arrow"
                className="setting-arrow"
                onClick={showContentChangePass}
              />
            </div>
            <div className="setting-header-text">Change password</div>
          </article>
        </section>
      )}

      {changePasswordPopup}
    </main>
  )
}

export default Setting
