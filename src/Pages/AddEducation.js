import React from 'react'
import './AddEducation.css'
const AddEducation = (props) => {
  const { onBgClick } = props
  console.log('hello im in add education')
  return (
    <div className="add-education">
      <div className="add-education-bg" onClick={onBgClick}></div>
      <main className="add-education-inner">
        <header>
          Add Education
          <button onClick={onBgClick}> close</button>
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
          <span>Field of study </span>
          <span className="optional">(Optional)</span>
          <br />

          <textarea
            class="input-field"
            type="text"
            placeholder="Computer engineering"
            rows="1"
            cols="20"
          ></textarea>
        </section>
        <section className="start-date">
          <select value="start-date-value">
            <option value="january">January</option>
            <option value="january">January</option>
            <option value="january">January</option>
            <option value="january">January</option>
            <option value="january">January</option>
            <option value="january">January</option>
            <option value="january">January</option>
            <option value="january">January</option>
            <option value="january">January</option>
            <option value="january">January</option>
            <option value="january">January</option>
            <option value="january">January</option>
          </select>
        </section>
        <section className="end-date"> </section>
        <button>Save</button>
      </main>
      {/* <div className="cover_page_education" onClick={onBgClick}></div> */}
    </div>
  )
}

export default AddEducation
