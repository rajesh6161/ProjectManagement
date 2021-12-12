import React, { useState } from 'react';
import Switch from 'react-switch';
import {
  FaBars,
  FaBuilding,
  FaCloudscale,
  FaMapMarkerAlt,
  FaYarn,
} from 'react-icons/fa';
import './style.css';

const MyProject = ({
  collapsed,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  const [tab, setTab] = useState('Main Table');
  const [mainTable, setMainTable] = useState(true);
  const [map, setMap] = useState(false);
  const [timeline, setTimeline] = useState(false);

  const tabHandler = (t) => {
    setTab(t);
    if (t == 'Map') {
      setMainTable(false);
      setMap(true);
      setTimeline(false);
    } else if (t == 'Timeline') {
      setMainTable(false);
      setMap(false);
      setTimeline(true);
    } else {
      setMainTable(true);
      setMap(false);
      setTimeline(false);
    }
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
        <div className="my_project_wrapper">
          <h2>Construction Projects</h2>
          <div className="my_selectionPane">
            <p
              onClick={() => tabHandler('MainTable')}
              style={mainTable ? { borderBottom: '5px solid gold' } : null}
            >
              <FaBuilding />
              Main Table
            </p>
            <p
              onClick={() => tabHandler('Map')}
              style={map ? { borderBottom: '5px solid gold' } : null}
            >
              <FaMapMarkerAlt />
              Map
            </p>
            <p
              onClick={() => tabHandler('Timeline')}
              style={timeline ? { borderBottom: '5px solid gold' } : null}
            >
              <FaCloudscale />
              Timeline
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyProject;
