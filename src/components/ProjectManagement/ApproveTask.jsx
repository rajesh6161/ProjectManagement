import React, { useState } from 'react';
import Switch from 'react-switch';
import { FaBars, FaYarn, FaClipboard, FaCheckSquare } from 'react-icons/fa';
import Modal from '../Modal/Modal';

const ApproveTask = ({
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
          <h2>Approve Tasks</h2>
          <div className="d_tasksContainer">
            {[1, 2, 3].map((el) => (
              <div key={el} className="_task">
                <FaClipboard style={{ fontSize: 28 }} />
                <div className="_details">
                  <div>
                    <p style={{ fontWeight: 'bold' }}>
                      Survey Required for Construction
                    </p>
                    <p>Raised By: Mr John Doe</p>
                  </div>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-success">
                      Approve
                    </button>

                    <Modal
                      type={'danger'}
                      title={'Reject'}
                      header={'Do You Want To Reject?'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ApproveTask;
