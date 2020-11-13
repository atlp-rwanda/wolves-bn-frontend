import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return <div className= "nav">
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
              </ul>
        </div>;
  }
}

export default Nav;