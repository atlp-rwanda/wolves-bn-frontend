/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ isLoggedIn }) => <div className= "nav">
              <ul className="nav_links">
            <Link to="/home">
                  <li>Home</li>
              </Link>
                <Link to="/profile">
                      <li>Profile</li>
                </Link>
                <br/>
                <Link to="/login">
                        <li>login</li>
                </Link>
                <br/>
                <Link to="/userlist">
                        <li>Setting</li>
                </Link>
                <br/>
                <Link to="/Requests">
                        <li>Requests</li>
                </Link>
                <br/>
              </ul>
        </div>;
const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});
export default connect(mapStateToProps, {})(Nav);
