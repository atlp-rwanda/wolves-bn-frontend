import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    const linkStyle = {
      color: 'white'
    };
    return (
      <div>
        <div className= "nav">
          <h1> Logo</h1>
              <ul className="nav_links">
            <Link style={linkStyle} to="/home">
              <h>
              <li>Home</li>
              </h>

                </Link>
                <Link style={linkStyle} to="/profile">
                <li>Profile</li>
                </Link>
                <Link style={linkStyle} to="/login">
                <li>Login</li>
                </Link>
              </ul>
        </div>

      </div>

    );
  }
}

export default Nav;
