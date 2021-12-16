import React, { useState } from 'react';
import Switch from 'react-switch';
import { FaBars, FaYarn } from 'react-icons/fa';
import './styles.css';
import Modal from '../Modal/Modal';
import CreateDelivery from './CreateDelivery';

const Deliveries = ({
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
          <div className="add_flexRow">
            <h1>Deliveries</h1>

            <Modal
              title={'Book Delivery'}
              header="Book Delivery"
              my_component={<CreateDelivery />}
            />
          </div>
          <div className="deliveries_container">
            <p style={{ marginBottom: 10 }}>
              <strong>Ongoing Deliveries</strong>
            </p>
            <div className="deliveries_list_container">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((el) => (
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
        </div>
      </main>
    </>
  );
};

export default Deliveries;
