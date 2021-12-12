import React, { useState } from 'react';
import Switch from 'react-switch';
import { FaBars, FaYarn } from 'react-icons/fa';
import GanttPage from '../../GanttPage';
import Daily from '../Daily/Daily';
import Calendar from '../Calendar/Calendar';
import './style.css';

const Main = ({ collapsed, handleToggleSidebar, handleCollapsedChange }) => {
  const [tab, setTab] = useState('DAILY');
  const [_daily, set_Daily] = useState(true);
  const [_calendar, set_Calendar] = useState(false);
  const [_gantt, set_Gantt] = useState(false);
  const tabHandler = (t) => {
    setTab(t);
    if (t === 'CALENDAR') {
      set_Daily(false);
      set_Calendar(true);
      set_Gantt(false);
    } else if (t === 'GANTT') {
      set_Daily(false);
      set_Calendar(false);
      set_Gantt(true);
    } else {
      set_Daily(true);
      set_Calendar(false);
      set_Gantt(false);
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
        <div className="selectionPane">
          <p
            onClick={() => tabHandler('DAILY')}
            style={_daily ? { borderBottom: '5px solid gold' } : null}
          >
            DAILY
          </p>
          <p
            onClick={() => tabHandler('CALENDAR')}
            style={_calendar ? { borderBottom: '5px solid gold' } : null}
          >
            CALENDAR
          </p>
          <p
            onClick={() => tabHandler('GANTT')}
            style={_gantt ? { borderBottom: '5px solid gold' } : null}
          >
            GANTT
          </p>
        </div>
        <div className="mainSection">
          {tab === 'DAILY' && <Daily />}
          {tab === 'CALENDAR' && <Calendar />}
          {tab === 'GANTT' && <GanttPage />}
        </div>
      </main>
    </>
  );
};

export default Main;
