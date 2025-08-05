import axios from "axios";
import React, { useState, useEffect } from "react";
import "./user.css";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/api/user/get-users')
      .then(response => {
        setUsers(response.data.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

 const handleDelete = (id) => {
  axios.delete(`http://localhost:3000/api/user/delete/${id}`)
    .then(response => {
      setUsers(users.filter(user => user._id !== id));
      alert("User deleted successfully");
    })
    .catch(error => {
      console.error("There was an error deleting the user!", error);
      alert("Failed to delete user");
    });
};


  return (
    <div className="userTable">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index)=> (
          <tr key={user._id}>
          <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
          <td>
            <Link to={`/edit-user/${user._id}`}  className="btn btn-primary me-2">Edit</Link>
                <button className="btn btn-danger" onClick={()=> handleDelete(user._id)}>
                  Delete
                </button>
          </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
