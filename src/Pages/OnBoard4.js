import React from 'react';
import './OnBoard4.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { IoMdAddCircle } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';

function OnBoard4() {
  return (
    <div className="onboard4">
      <div className="onboard4-loadbar"></div>
      <p className="onboard4-header-text">We're almost there !</p>
      <div className="onboard4-main">
        <div className="onboard4-edu-container">
          <span className="onboard4-edu-header">
            Education
            <span className="add-more-button">
              Add more
              <IoMdAddCircle size={20} className="add-button-icon" />
            </span>
          </span>
          <div className="edu-added">
            <div className="degree-faculty">
              <div>
                <div className="university-name">Kasetsart University</div>
                <span className="degree">Bachelor's degree, </span>
                <span className="faculty">Computer engineering</span>
              </div>
            </div>
            <div className="border-edit-icon">
              <MdEdit className="edit-icon" size={13} />
            </div>
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
              ></input>
            </div>
            <div className="ig-contact">
              <BsInstagram className="onboard4-ig-icon" size={25} />
              <input
                type="text"
                className="add-ig-contact"
                name="instagram"
                placeholder="instagram here"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="onboard4-button">
        <div className="onboard4-back-button">BACK</div>
        <div className="onboard4-next-button">NEXT</div>
      </div>
    </div>
  );
}

export default OnBoard4;
