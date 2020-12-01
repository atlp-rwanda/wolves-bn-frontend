import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <h1> Logo</h1>
        <ul className="nav_links">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/signUp">
            <li>SignUp</li>
          </Link>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/requests">
            <li>Requests</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Nav;
