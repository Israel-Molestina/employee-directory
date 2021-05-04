import React from "react";

function Table(props) {
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
        <tr>
          <td>Some Image</td>
          <td>Mark Twain</td>
          <td>666-666-6666</td>
          <td>12345@gmail.com</td>
          <td>06/19/1997</td>
        </tr>
        <tr>
          <td>Some Image</td>
          <td>Mark Twain</td>
          <td>666-666-6666</td>
          <td>12345@gmail.com</td>
          <td>06/19/1997</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
