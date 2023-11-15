import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const UserList = () => {
  // State to store the list of users
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>User List</h2>
      <ul className="user-list">
        {listOfUsers.map(user => (
          <li key={user.id} className="user-list-item">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
