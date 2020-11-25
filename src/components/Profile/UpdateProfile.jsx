import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../common/InputField';
import Button from '../common/Button';
import profileAction, { updateProfile } from '../../redux/actions/profile/profile';
import profileim from '../../assets/images/profileim.svg';
import './Profile.scss';

class UpdateProfile extends Component {
  constructor() {
    super();
    this.state = {
      photo: '',
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      gender: '',
      currency: '',
      department: ''

    };

    this.onChange = this.onChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onFileChange(e) {
    this.setState({ [e.target.name]: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      photo: this.state.photo,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      address: this.state.address,
      gender: this.state.gender,
      currency: this.state.currency,
      department: this.state.department
    };

    const { updatingUser } = this.props;
    console.log(data);
    updatingUser(data);
  }

  render() {
    return (
        <div className='container'>
          <div className='row content'>
            <div className='col-md-6'>
              <h3> <b>Update your profile information </b></h3>
            <form action='#' onSubmit={this.onSubmit}>
            <InputField
            type='text'
            handleChange={this.onChange}
            label='First name'
            className='form-control'
            name='firstName'
            />
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Last name'
            className='form-control'
            name='lastName'
            />
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Address'
            className='form-control'
            name='address'
            />
            <InputField
            type='email'
            handleChange={this.onChange}
            label='Email'
            className='form-control'
            name='email'
            />
            <InputField
            type='number'
            handleChange={this.onChange}
            label='phone'
            className='form-control'
            name='phone'
            />
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Gender'
            className='form-control'
            name='gender'
            />
            <InputField
            type='text'
            handleChange={this.onChange}
            label='currency'
            className='form-control'
            name='currency'
            />
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Department'
            className='form-control'
            name='department'
            />
            <InputField
            type="file"
            label='Profile image' department
            handleChange={this.onFileChange}
            name="photo"
            className="form-control"
            accept=".png, .jpg, .jpeg"
            />
            <Button content='Update' />
          </form>
          </div>
          <div className='col-md-6 mb-3'>
              <img src={profileim} alt='' className='img-fluid' />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { res } = state.userProfile;
  return {
    res
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updatingUser: (data) => dispatch(updateProfile(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);