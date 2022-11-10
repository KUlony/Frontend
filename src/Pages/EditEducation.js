import React, { useEffect, useRef, useState } from 'react'
import './EditEducation.css'
import { dateMonth, dateYear } from './data/monthYear'
import { FiTrash } from 'react-icons/fi'
import DeleteEducation from './DeleteEducation'
const EditEducation = (props) => {
  const { onBgEditClick, educationInfo, index, updateEducation } = props
  const [isDeleteEducation, setIsDeleteEducation] = useState(null)
  //DeleteEducation Page
  function onDeleteEducationClick() {
    setIsDeleteEducation(true)
  }
  function onBgEducationClick() {
    setIsDeleteEducation(null)
  }
  let deleteEducation = null
  if (!!isDeleteEducation) {
    deleteEducation = (
      <DeleteEducation onBgEducationClick={onBgEducationClick} />
    )
  }
  const [editSchool, setEditSchool] = useState(educationInfo.school)
  const [editDegree, setEditDegree] = useState(educationInfo.degree)
  const [editField, setEditField] = useState(educationInfo.field)
  const [editStartMonth, setEditStartMonth] = useState(educationInfo.startMonth)
  const [editStartYear, setEditStartYear] = useState(educationInfo.startYear)
  const [editEndMonth, setEditEndMonth] = useState(educationInfo.endMonth)
  const [editEndYear, setEditEndYear] = useState(educationInfo.endYear)

  const [eduForm, setEduForm] = useState({
    school: editSchool,
    degree: editDegree,
    field: editField,
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
  })

  const updatingEducation = (e) => {
    e.preventDefault()
    const educationInfoUpdated = {
      school: editSchool,
      degree: editDegree,
      field: editField,
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
    }
    updateEducation(educationInfoUpdated, index)
  }

  console.log(editStartMonth)
  console.log('index', index)
  //check if local not defined
  if (localStorage.getItem('allEducation') === null) {
    localStorage.setItem('allEducation', JSON.stringify([]))
  }

  const objInLocalStorage = JSON.parse(localStorage.getItem('allEducation'))
  const [allEduForm, setallEduForm] = useState(objInLocalStorage)
  useEffect(() => {
    localStorage.setItem('allEducation', JSON.stringify(allEduForm))
  }, [allEduForm])

  function onEduFormChange(event) {
    const { name, value } = event.target
    setEduForm((prevEduForm) => {
      return {
        ...prevEduForm,
        [name]: value,
      }
    })
  }

  function onEduFormSubmit(event) {
    event.preventDefault()
    setallEduForm((prevAllEduForm) => {
      return [...prevAllEduForm, eduForm]
    })
  }

  return (
    <main>
      <form className="add-education">
        <div className="add-education-bg" onClick={onBgEditClick}></div>
        <main className="add-education-inner">
          <header className="add-edu-header">
            Edit Education
            <button
              onClick={onBgEditClick}
              style={{
                width: '16px',
                height: '16px',
                border: 'none',
                background: 'none',
              }}
            >
              <img
                src={require('../picture/close.png')}
                alt="close"
                style={{
                  width: '16px',
                  height: '16px',
                  cursor: 'pointer',
                }}
                className="close-add-edu"
              />
            </button>
          </header>
          <section className="school">
            <div className="school-text">School</div>
            <input
              class="input-school"
              type="text"
              placeholder="Kasetsart University"
              rows="1"
              cols="20"
              name="school"
              value={editSchool}
              onChange={(e) => setEditSchool(e.target.value)}
              required
            />
          </section>
          <section className="degree">
            <div className="degree-text">
              <span>Degree </span>
              <span className="optional">(Optional)</span>
            </div>
            <input
              class="input-degree"
              type="text"
              placeholder="Bachelor's degree"
              rows="1"
              cols="20"
              name="degree"
              value={editDegree}
              onChange={(e) => setEditDegree(e.target.value)}
            />
          </section>
          <section className="field-of-study">
            <div className="fos-text">
              <span>Field of study </span>
              <span className="optional">(Optional)</span>
            </div>
            <input
              class="input-field"
              type="text"
              placeholder="Computer engineering"
              rows="1"
              cols="20"
              name="field"
              vvalue={editField}
              onChange={(e) => setEditField(e.target.value)}
            />
          </section>
          <section className="start-date">
            <div className="start-date-text">
              <span>Start date </span>
              <span className="optional"> (Optional)</span>
            </div>
            <select
              className="start-month"
              name="startMonth"
              //   value={editStartMonth}
              //   onChange={(e) => setEditSchool(e.target.value)}
            >
              {dateMonth.map((option, index) => (
                <option
                  key={index}
                  // value={option.value}
                >
                  {option.text}
                </option>
              ))}
            </select>{' '}
            <select
              className="start-year"
              name="startYear"
              value={eduForm.startYear}
              onChange={onEduFormChange}
            >
              {dateYear.map((option, index) => (
                <option key={index}>{option.text}</option>
              ))}
            </select>
          </section>
          <section className="end-date">
            <div className="end-date-text">
              <span>End date / Expected end date</span>
              <span className="optional"> (Optional)</span>
            </div>
            <select
              className="end-month"
              name="endMonth"
              value={eduForm.endMonth}
              onChange={onEduFormChange}
            >
              {dateMonth.map((option, index) => (
                <option
                  key={index}
                  // value={option.value} is
                >
                  {option.text}
                </option>
              ))}
            </select>{' '}
            <select
              name="endYear"
              className="end-year"
              value={eduForm.endYear}
              onChange={onEduFormChange}
            >
              {dateYear.map((option, index) => (
                <option
                  key={index}
                  // value={option.value}
                >
                  {option.text}
                </option>
              ))}
            </select>
          </section>
          <div className="footer-box">
            <div
              className="edit-edu-delete-edu"
              onClick={onDeleteEducationClick}
            >
              <div className="edit-edu-delete-text">Delete Education</div>
              <FiTrash size={18}></FiTrash>
            </div>
            <button
              className="edit-edu-save-button"
              type="submit"
              onClick={() => updatingEducation}
            >
              SAVE
            </button>
          </div>
        </main>
      </form>
      {deleteEducation}
    </main>
  )
}

export default EditEducation
