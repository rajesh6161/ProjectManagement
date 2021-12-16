import React from 'react';

const Table = () => {
  return (
    <div className="users_tableContainer">
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <tr key={i}>
              <th>John </th>
              <td>Doe</td>
              <td>john@gmail.com</td>
              <td>9167564532</td>
              <td>true</td>
              <td>false</td>
              <td>false</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
