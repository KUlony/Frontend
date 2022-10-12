import React from 'react'
import './AddEducation.css'
import { dateMonth, dateYear } from './data/monthYear'
const AddEducation = (props) => {
  const { onBgClick } = props
  const handleChange = (event) => {
    console.log(event.target.value)
  }
  return (
    <div className="add-education">
      <div className="add-education-bg" onClick={onBgClick}></div>
      <main className="add-education-inner">
        <header>
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
            />
          </button>
        </header>
        <section className="school">
          {' '}
          School
          <br />
          <textarea
            class="input-school"
            type="text"
            placeholder="Kasetsart University"
            rows="1"
            cols="20"
          ></textarea>
        </section>
        <section className="degree">
          <span>Degree </span>
          <span className="optional">(Optional)</span>
          <br />
          <textarea
            class="input-degree"
            type="text"
            placeholder="Bachelor's degree"
            rows="1"
            cols="20"
          ></textarea>
        </section>
        <section className="field-of-study">
          <div className="field-box">
            <span>Field of study </span>
            <span className="optional">(Optional)</span>
          </div>
          <textarea
            class="input-field"
            type="text"
            placeholder="Computer engineering"
            rows="1"
            cols="20"
          ></textarea>
        </section>
        <section className="start-date">
          <div className="start-box">
            <span>Start date </span>
            <span className="optional">(Optional)</span>
          </div>
          <select
            onChange={handleChange}
            name="start-date-month"
            value="start-date-month"
            id="start-month"
          >
            {dateMonth.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>{' '}
          <select value="start-date-year" id="start-year">
            {dateYear.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </section>
        <section className="end-date">
          <div className="end-box">
            <span>End date </span>
            <span className="optional">(Optional)</span>
          </div>
          <select value="end-date-month" name="end-month">
            {dateMonth.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>{' '}
          <select value="end-date-year" name="end-year">
            {dateYear.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </section>
        <button>Save</button>
      </main>
      {/* <div className="cover_page_education" onClick={onBgClick}></div> */}
    </div>
  )
}

export default AddEducation
