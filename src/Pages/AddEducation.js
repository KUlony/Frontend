import React from 'react';
import './AddEducation.css';
import { dateMonth, dateYear } from './data/monthYear';
import { FiTrash } from 'react-icons/fi';
const AddEducation = (props) => {
  const { onBgClick } = props;
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="add-education">
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
            {/* <img src={require('../picture/pencil.png')} alt='pencil' className='pencil-pic'/> */}
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
          ></input>
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
          ></input>
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
          ></input>
        </section>
        <section className="start-date">
          <div className="start-date-text">
            <span>Start date </span>
            <span className="optional">(Optional)</span>
          </div>
          <select
            onChange={handleChange}
            name="start-date-month"
            value="start-date-month"
            id="start-month"
            className="start-month"
          >
            {dateMonth.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>{' '}
          <select
            value="start-date-year"
            id="start-year"
            className="start-year"
          >
            {dateYear.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </section>
        <section className="end-date">
          <div className="end-date-text">
            <span>End date / Expected end date </span>
            <span className="optional">(Optional)</span>
          </div>
          <select value="end-date-month" name="end-month" className="end-month">
            {dateMonth.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>{' '}
          <select value="end-date-year" name="end-year" className="end-year">
            {dateYear.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </section>
        <div className="footer-box">
          <div className="add-edu-delete-edu">
          <div className="add-edu-delete-text">
            Delete Education 
          </div><FiTrash size={18}></FiTrash>
          </div>
          <button className="add-edu-save-button">SAVE</button>
        </div>
      </main>
      {/* <div className="cover_page_education" onClick={onBgClick}></div> */}
    </div>
  );
};

export default AddEducation;
