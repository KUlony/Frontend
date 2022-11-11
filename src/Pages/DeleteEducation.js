import React from 'react'
import './DeleteEducation.css'
const DeleteEducation = (props) => {
  const { onBgEducationClick, deletingEducation, onBgEditClick } = props
  // console.log(educationInfoUpdatedDel, index)
  console.log('is delete?')
  return (
    <div className="delete-edu">
      <div className="delete-edu-content">
        <h3 className="delete-are-you">Are you sure you want to delete ?</h3>
        <div className="delete-becareful">
          Becareful! The action cannot be undone
        </div>
        <img
          src={require('../picture/deleteBtn.png')}
          alt="delete"
          width="50%"
          className="delete-delete-btn"
          onClick={() => {
            deletingEducation()
            onBgEducationClick()
            onBgEditClick()
          }}
        />
        <span onClick={onBgEducationClick} className="delete-cancel">
          {' '}
          CANCEL
        </span>
      </div>
      <div
        className="delete-edu-bg"
        onClick={() => {
          onBgEducationClick()
        }}
      ></div>
    </div>
  )
}

export default DeleteEducation
