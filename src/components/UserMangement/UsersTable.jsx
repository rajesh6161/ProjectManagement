import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Table = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">isSuperAdmin </th>
            <th scope="col">isAdmin</th>
            <th scope="col">isSubContractor</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
            <tr key={i}>
              <th>John </th>
              <td>Doe</td>
              <td>john@gmail.com</td>
              <td>9167564532</td>
              <td className="text-center">
                <FaTimes />
              </td>
              <td className="text-center">
                <FaCheck />
              </td>
              <td className="text-center">
                <FaTimes />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
