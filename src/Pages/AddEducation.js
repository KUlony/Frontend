// import React, { useState } from 'react'
// import './AddEducation.css'
// import { dateMonth, dateYear } from './data/monthYear'
// const AddEducation = (props) => {
//   const { onBgClick, educationUpdated } = props

//   const [editSchool, setEditSchool] = useState('')
//   const [editDegree, setEditDegree] = useState('')
//   const [editField, setEditField] = useState('')
//   const [editStartMonth, setEditStartMonth] = useState('')
//   const [editStartYear, setEditStartYear] = useState('')
//   const [editEndMonth, setEditEndMonth] = useState('')
//   const [editEndYear, setEditEndYear] = useState('')

//   const addTwo = (editStartMonth, editStartYear) => {
//     let startMonthAddYear = ''
//     if (editStartMonth) {
//       if (editStartYear) {
//         startMonthAddYear = editStartMonth + '-' + editStartYear
//       } else {
//         startMonthAddYear = editStartMonth
//       }
//     }
//     return startMonthAddYear
//   }
//   const addingEducation = (e) => {
//     e.preventDefault()
//     if (editSchool !== '') {
//       const startMonthAddYear = addTwo(editStartMonth, editStartYear)
//       const endMonthAddYear = addTwo(editEndMonth, editEndYear)
//       e.preventDefault()
//       const educationAdded = {
//         school: editSchool,
//         degree: editDegree,
//         field_of_study: editField,
//         start_date: startMonthAddYear,
//         end_date: endMonthAddYear,
//       }
//       console.log('newdata', educationAdded)
//       educationUpdated.push(educationAdded)
//       onBgClick()
//       // .then(onBgEditClick)
//     }
//   }
//   // const [eduForm, setEduForm] = useState({
//   //   school: '',
//   //   degree: '',
//   //   field: '',
//   //   startMonth: '',
//   //   startYear: '',
//   //   endMonth: '',
//   //   endYear: '',
//   // })

//   // const objInLocalStorage = JSON.parse(localStorage.getItem('allEducation'))
//   // const [allEduForm, setallEduForm] = useState(objInLocalStorage)
//   // useEffect(() => {
//   //   localStorage.setItem('allEducation', JSON.stringify(allEduForm))
//   // }, [allEduForm])

//   // function onEduFormChange(event) {
//   //   const { name, value } = event.target
//   //   setEduForm((prevEduForm) => {
//   //     return {
//   //       ...prevEduForm,
//   //       [name]: value,
//   //     }
//   //   })
//   // }

//   // function onEduFormSubmit(event) {
//   //   event.preventDefault()
//   //   setallEduForm((prevAllEduForm) => {
//   //     return [...prevAllEduForm, eduForm]
//   //   })
//   // }

//   return (
//     <main>
//       <form className="add-education">
//         <div className="add-education-bg" onClick={onBgClick}></div>
//         <main className="add-education-inner">
//           <header className="add-edu-header">
//             Add Education
//             <button
//               onClick={onBgClick}
//               style={{
//                 width: '16px',
//                 height: '16px',
//                 border: 'none',
//                 background: 'none',
//               }}
//             >
//               <img
//                 src={require('../picture/close.png')}
//                 alt="close"
//                 style={{
//                   width: '16px',
//                   height: '16px',
//                   cursor: 'pointer',
//                 }}
//                 className="close-add-edu"
//               />
//             </button>
//           </header>
//           <section className="school">
//             <div className="school-text">School</div>
//             <input
//               class="input-school"
//               type="text"
//               placeholder="Ex. Kasetsart University"
//               rows="1"
//               cols="20"
//               name="school"
//               value={editSchool}
//               onChange={(e) => setEditSchool(e.target.value)}
//               required
//             />
//           </section>
//           <section className="degree">
//             <div className="degree-text">
//               <span>Degree </span>
//               <span className="optional">(Optional)</span>
//             </div>
//             <input
//               class="input-degree"
//               type="text"
//               placeholder="Ex. Bachelor's degree"
//               rows="1"
//               cols="20"
//               name="degree"
//               value={editDegree}
//               onChange={(e) => setEditDegree(e.target.value)}
//             />
//           </section>
//           <section className="field-of-study">
//             <div className="fos-text">
//               <span>Field of study </span>
//               <span className="optional">(Optional)</span>
//             </div>
//             <input
//               class="input-field"
//               type="text"
//               placeholder="Ex. Computer engineering"
//               rows="1"
//               cols="20"
//               name="field"
//               value={editField}
//               onChange={(e) => setEditField(e.target.value)}
//             />
//           </section>
//           <section className="start-date">
//             <div className="start-date-text">
//               <span>Start date </span>
//               <span className="optional"> (Optional)</span>
//             </div>
//             <select
//               className="start-month"
//               name="startMonth"
//               onChange={(e) => setEditStartMonth(e.target.value)}
//             >
//               {dateMonth.map((option, index) => (
//                 <option
//                   key={index}
//                   // value={option.value}
//                 >
//                   {option.text}
//                 </option>
//               ))}
//             </select>{' '}
//             <select
//               className="start-year"
//               name="startYear"
//               onChange={(e) => setEditStartYear(e.target.value)}
//             >
//               {dateYear.map((option, index) => (
//                 <option key={index}>{option.text}</option>
//               ))}
//             </select>
//           </section>
//           <section className="end-date">
//             <div className="end-date-text">
//               <span>End date / Expected end date</span>
//               <span className="optional"> (Optional)</span>
//             </div>
//             <select
//               className="end-month"
//               name="endMonth"
//               onChange={(e) => setEditEndMonth(e.target.value)}
//             >
//               {dateMonth.map((option, index) => (
//                 <option
//                   key={index}
//                   // value={option.value} is
//                 >
//                   {option.text}
//                 </option>
//               ))}
//             </select>{' '}
//             <select
//               name="endYear"
//               className="end-year"
//               onChange={(e) => setEditEndYear(e.target.value)}
//             >
//               {dateYear.map((option, index) => (
//                 <option
//                   key={index}
//                   // value={option.value}
//                 >
//                   {option.text}
//                 </option>
//               ))}
//             </select>
//           </section>
//           <div className="footer-box">
//             <button
//               className="add-edu-save-button"
//               // type="submit"
//               onClick={addingEducation}
//             >
//               SAVE
//             </button>
//           </div>
//         </main>
//       </form>
//       {/* {deleteEducation} */}
//     </main>
//   )
// }

// export default AddEducation
