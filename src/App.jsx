// src/App.js
import { useState } from "react";
import Login from "./components/Login";
import Users from "./components/Users";
import Register from "./components/Register";

function App() {
  const [token, setToken] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogout = () => {
    setToken(null); // Clear the token
    setShowRegister(false); // Reset to show the login page
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      {!token ? (
        <>
          {showRegister ? (
            <Register setToken={setToken} />
          ) : (
            <Login setToken={setToken} />
          )}
          <button onClick={() => setShowRegister(!showRegister)}>
            {showRegister ? "Switch to Login" : "Switch to Register"}
          </button>
        </>
      ) : (
        <>
          <Users token={token} />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;
