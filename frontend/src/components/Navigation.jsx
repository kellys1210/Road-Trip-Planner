import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login.jsx";

const Navigation = () => {
  const [user, setUser] = useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      {user ? (
        <a onClick={logout}>Logout {user.name}</a>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
    </nav>
  );
};

export default Navigation;
