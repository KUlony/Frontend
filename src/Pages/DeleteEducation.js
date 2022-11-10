import React from 'react'
import './DeleteEducation.css'
const DeleteEducation = (props) => {
  const { onBgEducationClick } = props
  console.log('is delete?')
  return (
    <div className="delete-edu">
      <div className="delete-edu-content">
        <div>Are you sure you want to delete ?</div>
        <div>Becareful! The action cannot be undone</div>
        <button> DELETE</button>
        <button onClick={onBgEducationClick}> CANCEL</button>
      </div>
      <div className="delete-edu-bg" onClick={onBgEducationClick}></div>
    </div>
  )
}

export default DeleteEducation
