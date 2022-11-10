import axios from 'axios'
import React, { useRef, useState } from 'react'
import './Setting.css'
const Setting = () => {
  const currentPassword = useRef()
  const newPassword = useRef()
  const confirmPassword = useRef()

  const onClickCancel = () => {
    currentPassword.current.value = ''
    newPassword.current.value = ''
    confirmPassword.current.value = ''
  }

  const onClickChangePassword = async () => {
    try {
      axios
        .post(
          '/api/sing-up/changepassword',
          {
            currentpassword: currentPassword.current.value,
            newpassword: newPassword.current.value,
            confirm_newpassword: confirmPassword.current.value,
          },
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthbnBlY2gudEBrdS50aCIsImlkIjoiNjM0Y2VmNmQwYmJkYzIwODlhZWU5YTliIiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTY2Nzk3NzE3OSwiZXhwIjoxNjY4MDYzNTc5fQ.5SZm06jDG4ey-aryW8gJ8Z-unhuxGrB2xbXN0cEr3Nc',
            },
          }
        )
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (error) {}
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
      width="17px"
      style={{ 'vertical-align': 'middle' }}
    />
  )
  const vis = (
    <img
      src={require('../picture/visibility.png')}
      alt="eye"
      width="17px"
      style={{ 'vertical-align': 'middle' }}
    />
  )
  return (
    <main className="setting-main">
      <h2 className="title">Setting</h2>
      <section className="content">
        <article className="content-header">Change password</article>
        <article className="content-main">
          Choose a unique password to protect your account
          <div className="time">Last changed : 10/05/2022</div>
          <div className="current-pass">
            <b>Type your current password</b>
            <br />
            <input
              type={currentPasswordShown ? 'text' : 'password'}
              ref={currentPassword}
            />
            <span className="visibility" onClick={toggleCurrentPassword}>
              {currentPasswordShown ? vis : inVisibility}
            </span>
          </div>
          <div className="new-pass">
            <b>Type your new password</b>
            <br />
            <input
              type={newPasswordShown ? 'text' : 'password'}
              ref={newPassword}
            />
            <span className="visibility" onClick={toggleNewPassword}>
              {newPasswordShown ? vis : inVisibility}
            </span>
          </div>
          <div className="confirm-pass">
            <b>Confirm new password</b>
            <br />
            <input
              type={confirmPasswordShown ? 'text' : 'password'}
              ref={confirmPassword}
            />
            <span className="visibility" onClick={toggleConfirmPassword}>
              {confirmPasswordShown ? vis : inVisibility}
            </span>
          </div>
        </article>
        <button onClick={onClickCancel}> CANCEL </button>
        <button onClick={onClickChangePassword}> CHANGE PASSWORD </button>
      </section>
    </main>
  )
}

export default Setting
