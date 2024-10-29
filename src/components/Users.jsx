// src/components/Users.js
import { useState } from "react";
import { getAllUsers } from "../Apis";

const Users = ({ token }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setError("");
    try {
      const data = await getAllUsers(token);
      setUsers(data);
    } catch (error) {
      setError(error.response.data.error || "Failed to fetch users.");
    }
  };

  return (
    <div>
      <h2>Admin: Get All Users</h2>
      <h2>user: no access to Get All Users</h2>
      <button onClick={fetchUsers}>Get Users</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
