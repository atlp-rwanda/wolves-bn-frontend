import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import accSvg from '../../assets/icons/accomodation.svg';
import reqSvg from '../../assets/icons/request.svg';
import dashSvg from '../../assets/icons/menu.svg';
import tripSvg from '../../assets/icons/airplane.svg';
import profileSvg from '../../assets/icons/user.svg';
import './dashboard.scss';
import { viewProfile } from '../../redux/actions/profile/profile';
import { fetchDest } from '../../redux/actions/destination';

const Dashboard = () => {
  const newState = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewProfile());
    dispatch(fetchDest());
  }, []);

  return (
      <div className='dashboard'>
            <div className='sidebar'>
            <div className='profile-pic'>
                 {newState.userProfile.user.profileimage !== null
                   ? <img src={newState.userProfile.user.profileimage} />
                   : <img src={profileSvg} /> }
            </div>
                  <ul className='user-options'>
                  <h3>Dashboard</h3>
                  <li className='user-option'>
                  <Link to='/dashboard'>
                        <img src={dashSvg} />
                        <h4>Dashboard</h4>
                  </Link>
                  </li>
                  <h3>Trips</h3>
                  <li className='user-option'>
                  <Link to='/requests'>
                        <img src={tripSvg}/>
                        <h4>Book a trip</h4>
                  </Link>
                  </li>
                  <li className='user-option'>
                  <Link to='/requests'>
                        <img src={reqSvg} />
                        <h4>My trip requests</h4>
                  </Link>
                  </li>
                  <h3>Accomodations</h3>
                  <li className='user-option'>
                  <Link to='/accomodation'>
                        <img src={accSvg} />
                        <h4>View all Accomodations</h4>
                  </Link>
                  </li>
                  </ul>
            </div>
            <div className='main-body'>
                  <h4 className='names'>Welcome back {newState.userProfile.user.firstName}</h4>
            </div>
            <div className='trip-stats'>
            <div className='accHeader'><h2>Most travelled destination</h2></div>
            <hr />
            <div className='accomPic'><img src={newState.topDestination.accImage} /></div>
            <div className='destination'>
                  <h2>
                  <span>{newState.topDestination.destination} </span>
                  is the most travelled destination</h2>
            </div>
            </div>
      </div>
  );
};

export default Dashboard;
