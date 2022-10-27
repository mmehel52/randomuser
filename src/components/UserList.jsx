import React from "react";
import "./UserList.css";

const UserList = ({ addUser }) => {
  console.log(addUser);
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Age</th>
      </thead>
      <tbody>
        {addUser.map((item, index) => {
          const { name, email, phone, dob } = item;
          return (
            <tr key={index}>
              <td>
                {name.first}
                {name.last}
              </td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{dob.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
