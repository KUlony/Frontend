import React from 'react'

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="profilePic">
        <img
          src={require('../picture/profileexample.jpeg')}
          alt="profileExample"
          width="150"
          height="150"
        />
      </div>
      <div className="username">
        Username
        <textarea
          class="inputUser"
          type="text"
          placeholder="User"
          rows="1"
          cols="20"
        ></textarea>
      </div>
      <div className="bio">
        Bio
        <br />
        <textarea
          class="inputBio"
          type="text"
          placeholder="Bio"
          rows="1"
          cols="20"
        ></textarea>
      </div>
      <div className="firstname">
        First name
        <br />
        <textarea
          class="inputFirstname"
          type="text"
          placeholder="Firstname"
          rows="1"
          cols="20"
        ></textarea>
      </div>
      <div className="lastname">
        Last name
        <br />
        <textarea
          class="inputLastname"
          type="text"
          placeholder="Lastname"
          rows="1"
          cols="20"
        ></textarea>
      </div>
      <div className="detail">
        <div className="faculty">
          Faculty
          <form className="facultyForm">
            <select name="facultySelect">
              <option value="engineering">Engineering</option>
              <option value="education">Education</option>
              <option value="agriculture">Agriculture</option>
            </select>
          </form>
        </div>
        <div className="campus">
          Campus
          <form className="campusForm">
            <select name="campusSelect">
              <option value="bangken">Bangken</option>
              <option value="kamphaengSaen">Kamphaeng Saen</option>
              <option value="chalermphrakiatSakonNakhonProvince">
                Chalermphrakiat Sakon Nakhon Province
              </option>
              <option value="sriracha">Sriracha </option>
            </select>
          </form>
        </div>
        <div className="ku">
          KU
          <form className="kuForm">
            <select name="kuSelect">
              <option value="79">79</option>
              <option value="80">80</option>
              <option value="81">81</option>
              <option value="82">82</option>
            </select>
          </form>
        </div>
        <div className="department">
          Department
          <form className="departmentForm">
            <select name="departmentSelect">
              <option value="computer">Computer</option>
              <option value="mechanics">Mechanics</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
