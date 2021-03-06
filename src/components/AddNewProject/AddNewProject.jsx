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
const AddNewProject = ({
  collapsed,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
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
          <h1>Add New Project</h1>
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
                      placeholder="Start Date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Forecast Completion Date"
                      name="forecastCompletionDate"
                      value={formData.forecastCompletionDate}
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
                      type="file"
                      className="form-control"
                      placeholder="Upload Attachments"
                      name="attachments"
                      value={formData.attachments}
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

export default AddNewProject;
