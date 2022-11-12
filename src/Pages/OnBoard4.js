import React, { useRef, useState } from 'react';
import './OnBoard4.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { IoMdAddCircle } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import axios from 'axios';
import AddEducation from './AddEducation';
import EditEducation from './EditEducation';
import './AddEducation.css';

function OnBoard4() {
  const token = localStorage.getItem('token');
  //----------------------edit-------------------------
  // const username = useRef()
  // const bio = useRef()
  // const firstname = useRef()
  // const lastname = useRef()
//   const username = 'asdf';
//   const bio = 'HAHAHAH';
//   const firstname = 'hasdfsdwe';
//   const lastname = 'ewuwuwuwuwuwu';
  const instagram = useRef();
  const facebook = useRef();

  const editstyles = {
    border: '1px solid rgba(0, 0, 0, 1)',
  };

  const [inputArray, setInputArray] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const editInputArray = (index) => {
    setInputArray((oldarray) =>
      oldarray.map((data, idx) => (idx === index ? !data : data))
    );
  };
  //----------------------send_api-------------------------

  const onClickSave = async () => {
    try {
      // console.log('hello try')
      axios
        .put(
          'https://kulony-backend.herokuapp.com/api/user/edit_profile',
          {
            // user_name: username,
            // user_firstname: firstname,
            // user_lastname: lastname,
            // user_bio: bio,
            education: educationUpdated,
            contact: {
              facebook: facebook.current.value,
              ig: instagram.current.value,
              _id: '634adc85e5a0f50a0041c392',
            },
            profile_pic_url:
              'https://img.elo7.com.br/product/zoom/2FBB20A/midoriya-my-hero-academia-poster-digital-poster-para-geeks.jpg',
            // gender: 'male',
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          console.log('data res is ', res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //-------------AddEducation_Page-------------
  const [educationInfo, setEducationInfo] = useState(null);

  const [isAddEducation, setIsAddEducation] = useState(null);

  const [educationUpdated, setEducationUpdated] = useState([]);

  function onAddEducationClick() {
    setIsAddEducation(true);
  }
  function onBgClick() {
    setIsAddEducation(null);
  }
  let addEducation = null;
  if (!!isAddEducation) {
    addEducation = (
      <AddEducation onBgClick={onBgClick} educationUpdated={educationUpdated} />
    );
  }

  //-------------Update_Education(edit or delete)-------------
  function checkIsConnect(a, b) {
    if (a !== '') {
      if (b !== '') {
        return true;
      }
    }
  }

  const [isEditEducation, setIsEditEducation] = useState(null);
  const [indexEdit, setIndexEdit] = useState();
  const updateEducation = (data, index) => {
    console.log('data', data);
    console.log(5);

    if (data === null) {
      const st = educationUpdated.splice(0, index);
      const ed = educationUpdated.splice(index + 1, educationUpdated.length);
      const stShowAllEdu = allEduForm.splice(0, index);
      const edShowAllEdu = allEduForm.splice(
        index + 1,
        educationUpdated.length
      );
      // console.log('allEdu 164', allEduForm)
      setEducationUpdated(st.concat(ed));
      setAllEduForm(stShowAllEdu.concat(edShowAllEdu));
    } else {
      //edit
      // educationUpdated
      setEducationUpdated((olddata) =>
        olddata.map((tmp, idx) => (idx === index ? data : tmp))
      );
      console.log('educationupdated 154', educationUpdated);
    }
  };
  // console.log('educationUpdate', educationUpdated)
  //-------------Edit_Education-------------

  function onEditEducationClick(theEdu, index) {
    setIsEditEducation(true);
    setEducationInfo(theEdu);
    setIndexEdit(index);
  }
  const onBgEditClick = () => {
    setIsEditEducation(null);
    setEducationInfo(null);
  };
  let editEducation = null;
  if (!!isEditEducation) {
    editEducation = (
      <EditEducation
        onBgEditClick={onBgEditClick}
        educationInfo={educationInfo}
        index={indexEdit}
        updateEducation={updateEducation}
      />
    );
  }

  //-------------Edit_Education_Template-------------

  const [allEduForm, setAllEduForm] = useState([]);
  // console.log('allEdu 197', allEduForm)

  const eduElements = educationUpdated.map((theEdu, index) => {
    return (
      <div className="user-data">
        {educationUpdated[0].school ? (
          <section className="education-content">
            <article
              className="education-school"
              // style={{ display: 'inline', whiteSpace: 'nowrap' }}
            >
              <span>
                {theEdu.school ? theEdu.school : ''}
                <article>
                  {theEdu.degree ? theEdu.degree : ''}
                  {checkIsConnect(theEdu.degree, theEdu.field_of_study)
                    ? ', '
                    : ''}
                  {theEdu.field_of_study ? theEdu.field_of_study : ''}
                  {checkIsConnect(theEdu.field_of_study, theEdu.start_date)
                    ? ', '
                    : ''}
                  <span className="education-all-date">
                    {theEdu.start_date.split('-')[0]
                      ? theEdu.start_date.split('-')[0]
                      : ''}
                    {checkIsConnect(
                      theEdu.start_date.split('-')[0],
                      theEdu.start_date.split('-')[1]
                    )
                      ? ' '
                      : ''}
                    {theEdu.start_date.split('-')[1]
                      ? theEdu.start_date.split('-')[1]
                      : ''}
                    {checkIsConnect(
                      theEdu.start_date.split('-')[1],
                      theEdu.end_date.split('-')[0]
                    )
                      ? ' - '
                      : ''}
                    {theEdu.end_date.split('-')[0]
                      ? theEdu.end_date.split('-')[0]
                      : ''}
                    {checkIsConnect(
                      theEdu.end_date.split('-')[0],
                      theEdu.end_date.split('-')[1]
                    )
                      ? ' '
                      : ''}
                    {theEdu.end_date.split('-')[1]
                      ? theEdu.end_date.split('-')[1]
                      : ''}
                  </span>
                </article>
              </span>
              <img
                src={require('../picture/editButton.png')}
                alt="edit-button"
                width="20px"
                className="edit-education-button"
                onClick={() => {
                  onEditEducationClick(theEdu, index);
                }}
              />
            </article>
            
          </section>
        ) : (
          <div></div>
        )}
      </div>
    );
  });
  return (
    <div className="onboard4">
      <div className="onboard4-loadbar"></div>
      <p className="onboard4-header-text">We're almost there !</p>
      <div className="onboard4-main">
        <div className="onboard4-edu-container">
          <span className="onboard4-edu-header">
            Education
            <span className="add-more-button" onClick={onAddEducationClick}>
              Add more
              <IoMdAddCircle size={20} className="add-button-icon" />
            </span>
          </span>
          {educationUpdated.length === 0 ? null : (
            <div className="edu-added">
              <div className="degree-faculty">
                <div>
                  {eduElements}
                  {/* <div className="university-name">Kasetsart University</div>
                <span className="degree">Bachelor's degree, </span>
                <span className="faculty">Computer engineering</span> */}
                </div>
              </div>
              {/* <div className="border-edit-icon" onClick="">
                <MdEdit className="edit-icon" size={13} />
              </div> */}
            </div>
          )}
        </div>
      </div>
      <div className="onboard4-contact">
        <span className="onboard4-add-contact">
          Add contact <span className="onboard4-optional">(Optional)</span>
        </span>
        <div className="onboard4-fb-ig-container">
          <div className="fb-contact">
            <FaFacebookSquare className="onboard4-fb-icon" size={25} />
            <input
              type="text"
              className="add-fb-contact"
              name="facebook"
              placeholder="facebook here"
              ref={facebook}
            ></input>
          </div>
          <div className="ig-contact">
            <BsInstagram className="onboard4-ig-icon" size={25} />
            <input
              type="text"
              className="add-ig-contact"
              name="instagram"
              placeholder="instagram here"
              ref={instagram}
            ></input>
          </div>
        </div>
      </div>
      <div className="onboard4-button">
        <div className="onboard4-back-button">BACK</div>
        <div className="onboard4-next-button" onClick={onClickSave}>
          NEXT
        </div>
      </div>
      {addEducation}
      {editEducation}
    </div>
  );
}

export default OnBoard4;
