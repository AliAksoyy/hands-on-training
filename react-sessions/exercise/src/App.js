import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://randomuser.me/api/?results=10")
      .then((response) => {
      console.log(response.data)
      return (
        response.data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          image: `${user.picture.thumbnail}`,
      })))}
      )
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="users">
      {users.map((user) => (
        <div key={user.username} className="users__user">
          <img src={user.image} className="users__avatar" alt="#" />
          <div className="users__meta">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;