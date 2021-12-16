import React, { useState } from 'react';
import Switch from 'react-switch';
import { FaBars, FaYarn } from 'react-icons/fa';
import './styles.css';

const initialState = {
  projectName: '',
  startDate: '',
  forecastCompletionDate: '',
  projectManager: '',
  attachments: '',
};
const CreateDelivery = () => {
  const [formData, setFormData] = useState(initialState);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <main className="main_container">
        <div className="mainSection">
          <div className="formSection">
            <div className="_formContainer">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="row pb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Project Name"
                      name="projectName"
                      value={formData.projectName}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Item Name"
                      name="itemName"
                      value={formData.itemName}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Business Justification"
                      name="businessJustification"
                      value={formData.businessJustification}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Project Manager"
                      name="projectManager"
                      value={formData.projectManager}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Quantity"
                      name="qty"
                      value={formData.qty}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
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

export default CreateDelivery;
