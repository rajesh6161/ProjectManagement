import React, { useState } from 'react';
import Switch from 'react-switch';
import { FaBars, FaYarn } from 'react-icons/fa';
import './styles.css';

const AddNewProject = ({
  collapsed,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
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
          <h1>Booking Deliveries</h1>

          <div className="add_d_container">
            <p style={{ marginBottom: 10 }}>
              <strong>Ongoing Deliveries</strong>
            </p>
            <div className="add_list_container">
              {[1, 2, 3].map((el) => (
                <div key={el} className="add_flexRow">
                  <p>Name</p>
                  <p>E-Mail</p>
                  <p>Item Name</p>
                  <p>QTY</p>
                  <p>Business Justification</p>
                  <p>Project Name</p>
                  <p>Status</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flexCenter">
            <div className="add_wrapper  flexCenter">
              <p>
                <strong>Ongoing Deliveries</strong>
              </p>
              <div className="add_grid">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Item Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Quantity" />
                <input type="text" placeholder="Business Justification" />
                <input type="text" placeholder="Project Name" />
              </div>
              <button className="add_btn">Submit</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddNewProject;
