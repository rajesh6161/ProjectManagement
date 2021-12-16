import React from 'react';
import { MdOutlineDone } from 'react-icons/md';
import './style.css';

const Table = () => {
  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Project Name</th>
            <th scope="col">Progress in %</th>
            <th scope="col">Start Date</th>
            <th scope="col">Forecast Completion</th>
            <th scope="col">Net Completion</th>
            <th scope="col">Budget</th>
            <th scope="col">Attachments</th>
            <th scope="col">Deliveries</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
            <tr key={i}>
              <th>Mark-1</th>
              <td>95%</td>
              <td>24/11/2021</td>
              <td>21/12/2021</td>
              <td>87%</td>
              <td>$4566</td>
              <td>None</td>
              <td className="text-center">
                <MdOutlineDone />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
