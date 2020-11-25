import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/images/bg.png';
import { viewProfile } from '../../redux/actions/profile/profile';
import './Profile.scss';

class Profile extends Component {
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

          <div className="userName">
            {lastName && <span>{lastName}</span>}
            {firstName && <span>{firstName}</span>}
            {address && <p>{address}</p>}
          </div>

          <div className="moreInfo">
            {email && <span>{email}</span>}
            {phone && <span>{phone}</span>}
          </div>

          <div className="moreInfo">
            {gender && <span>{gender}</span>}
            {role && <span>{role}</span>}
          </div>
          <div className="moreInfo">
            {department && <span>{department}</span>}
            {currency && <span>{currency}</span>}
          </div>

          {this.props.error && <span className='error'>{this.props.error}</span>}
        </div>
      </div>
    );
  }
}
//  data this component needs
const mapStateToProps = (state) => ({
  user: state.userProfile.user,
  error: state.userProfile.viewProfileError
});
// which actions your component might need to dispatch.
const mapDispatchToProps = (dispatch) => ({
  fetchProfile: () => dispatch(viewProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
