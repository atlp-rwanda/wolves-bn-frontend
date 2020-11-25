import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <h1> Logo</h1>
        <ul className="nav_links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/requests">
            <li>Requests</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;
