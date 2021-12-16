import React, { useState } from 'react';
import Switch from 'react-switch';
import { FaBars, FaYarn } from 'react-icons/fa';
import './styles.css';
import UsersTable from './UsersTable';

const AddNewUser = ({
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
          <h1>Current Users</h1>
          <div className="users_tableContainer">
            <UsersTable />
          </div>
        </div>
      </main>
    </>
  );
};

export default AddNewUser;
