import React, { useState } from 'react';
import Switch from 'react-switch';
import { FaBars, FaYarn } from 'react-icons/fa';
import './styles.css';

const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  profilePhoto: '',
  isAdmin: true,
  isSuperAdmin: false,
  isSubContractor: false,
};
const AddNewUser = ({
  collapsed,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  const [formData, setFormData] = useState(initialState);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCheckBox = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <main className="main_container">
        <nav className="navbar">
          <Switch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleCollapsedChange}
            checked={collapsed}
            onColor="#219de9"
            offColor="#bbbbbb"
          />
          <FaYarn style={{ fontSize: '40px', color: 'gold' }} />
        </nav>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>

        <div className="mainSection">
          <h1>Add New User</h1>
          <div className="formSection">
            <div className="_formContainer">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="row pb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="isAdmin"
                      checked={formData.isAdmin}
                      onChange={(e) => handleCheckBox(e)}
                    />
                    <label className="form-check-label ">Make Admin</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="isSuperAdmin"
                      checked={formData.isSuperAdmin}
                      onChange={(e) => handleCheckBox(e)}
                    />
                    <label className="form-check-label ml-">
                      Make Super Admin
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="isSubContractor"
                      checked={formData.isSubContractor}
                      onChange={(e) => handleCheckBox(e)}
                    />
                    <label className="form-check-label ml-">
                      Make Sub-Contractor
                    </label>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col col-md-6">
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Profile Photo"
                      name="profilePhoto"
                      value={formData.profilePhoto}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
                <div className="col col-md-6">
                  <button className="btn btn-dark">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddNewUser;
