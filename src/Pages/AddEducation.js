import React, { useEffect, useState } from 'react'
import './AddEducation.css'
import { dateMonth, dateYear } from './data/monthYear'
import { FiTrash } from 'react-icons/fi'
const AddEducation = (props) => {
  const { onBgClick } = props
  const [eduForm, setEduForm] = useState({
    school: '',
    degree: '',
    field: '',
    // start: '',
    // end: '',
  })
  const [allEduForm, setallEduForm] = useState([])
  function onEduFormChange(event) {
    const { name, value } = event.target
    setEduForm((prevEduForm) => {
      return {
        ...prevEduForm,
        [name]: value,
      }
    })
    console.log(eduForm)
  }

  function onEduFormSubmit(event) {
    event.preventDefault()
    setallEduForm((prevAllEduForm) => {
      return [...prevAllEduForm, eduForm]
    })
  }
  useEffect(() => {
    console.log(allEduForm)
  }, [allEduForm])
  const eduElements = allEduForm.map((theEdu) => {
    return (
      <div className="education-main">
        <div>{theEdu.school}</div>
        <div>{theEdu.degree}</div>
        <div>{theEdu.field}</div>
      </div>
    )
  })

  return (
    <form className="add-education">
      <div className="add-education-bg" onClick={onBgClick}></div>
      <main className="add-education-inner">
        <header className="add-edu-header">
          Add Education
          <button
            onClick={onBgClick}
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
          {/* school */}
          <div className="school-text">School</div>
          <input
            class="input-school"
            type="text"
            placeholder="Kasetsart University"
            rows="1"
            cols="20"
            name="school"
            value={eduForm.school}
            onChange={onEduFormChange}
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
            value={eduForm.degree}
            onChange={onEduFormChange}
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
            value={eduForm.field}
            onChange={onEduFormChange}
          />
        </section>
        <section className="start-date">
          <div className="start-date-text">
            <span>Start date </span>
            <span className="optional"> (Optional)</span>
          </div>
          <select name="start-month" className="start-month">
            {dateMonth.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>{' '}
          <select name="start-year" className="start-year">
            {dateYear.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </section>
        <section className="end-date">
          <div className="end-date-text">
            <span>End date / Expected end date</span>
            <span className="optional"> (Optional)</span>
          </div>
          <select name="end-month" className="end-month">
            {dateMonth.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>{' '}
          <select name="end-year" className="end-year">
            {dateYear.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </section>
        <div className="footer-box">
          <div className="add-edu-delete-edu">
            <div className="add-edu-delete-text">Delete Education</div>
            <FiTrash size={18}></FiTrash>
          </div>
          <button
            className="add-edu-save-button"
            type="submit"
            onClick={onEduFormSubmit}
          >
            SAVE
          </button>
        </div>
        {eduElements}
      </main>
    </form>
  )
}

export default AddEducation
