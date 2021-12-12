import React from 'react';
import { FaClipboard, FaYarn } from 'react-icons/fa';
import './styles.css';

const Daily = () => {
  return (
    <div>
      <h1>CPM</h1>

      <div className="d_tasksContainer">
        {[1, 2, 3].map((el) => (
          <div key={el} className="_task">
            <FaClipboard style={{ fontSize: 28 }} />
            <div className="_details">
              <div>
                <p>Menu - My Projects | My Tasks | Active Projects |</p>
                <p>Due tomorrow</p>
              </div>
              <div>
                <FaYarn style={{ fontSize: 28 }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Daily;
