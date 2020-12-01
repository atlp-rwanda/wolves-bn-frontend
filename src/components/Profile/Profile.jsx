import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { viewProfile } from '../../redux/actions/profile/profile';
import './Profile.scss';

export class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    const {
      firstName, lastName, address, email, phone, role, currency, department, gender, profileimage,
    } = this.props.user;

    return (
      <div className='profile'>
        <div className="infoCard">
          <div className="userIcon">
              <img src={profileimage} alt="user Icon"/>
          </div>
          <button className='btn btn--primary' ><Link to='/updateprofile'>Edit</Link></button>
          <div className="user" >
          <div className="userName">
            {lastName && <span>{lastName}</span>}
            {firstName && <span>{firstName}</span>}
          </div>
          <div className="moreInfo">
            {email && <span> <b>Email</b>: {email}</span>}
          </div>
          <div className="moreInfo">
            {department && <span> <b>Department</b>: {department}</span>}
          </div>
          <div className="moreInfo">
            {phone && <span> <b>Phone</b>: {phone}</span>}
          </div>
          <div className="moreInfo">
            {address && <span><b>Address</b>: {address}</span>}
          </div>
          <div className="moreInfo">
            {gender && <span><b>Gender</b>: {gender}</span>}
          </div>
          <div className="moreInfo">
            {role && <span><b>Role</b>: {role}</span>}
          </div>
          <div className="moreInfo">
            {currency && <span><b>Currency</b>: {currency}</span>}
          </div>
          </div>
          {this.props.error && <span className='error'>{this.props.error}</span>}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.userProfile.user,
  error: state.userProfile.viewProfileError
});
const mapDispatchToProps = (dispatch) => ({
  fetchProfile: () => dispatch(viewProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
