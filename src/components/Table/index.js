import React from "react";

function Table(props) {
  console.log(props);
  let emps = Array.from(props.employees);
  console.log(emps);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Headshots</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>

      <tbody>
        {emps.map((employee) => (
          <tr>
            <td>Some Image</td>
            <td>hi</td>
            <td>{employee.cell}</td>
            <td>{employee.email}</td>
            <td>{new Date().toISOString(employee.dob.date).split('T')[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
