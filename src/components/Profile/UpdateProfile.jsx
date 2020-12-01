import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../common/InputField';
import Button from '../common/Button';
import { viewProfile, updateProfile } from '../../redux/actions/profile/profile';
import profileim from '../../assets/images/profileim.svg';
import './Profile.scss';

export class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        photo: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
        currency: '',
        department: ''
      },
      res: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.fetchProfile());
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.user);
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
      phone: this.state.phone,
      email: this.state.email,
      address: this.state.address,
      gender: this.state.gender,
      currency: this.state.currency,
      department: this.state.department
    };
    const { updatingUser } = this.props;
    updatingUser(data);
  }

  render() {
    const message = this.props.updateError.Message;
    const {
      firstName, lastName, address, email, phone, currency, department, gender,
    } = this.state;
    return (
        <div className='container'>
          <div className='row content'>
            <div className='col-md-6'>
            <h3> <b>Update your profile information </b></h3>
            {this.props.res && <h4>{this.props.res}</h4>}
            <form action='#' onSubmit={this.onSubmit}>
            <InputField
            type='text'
            handleChange={this.onChange}
            label='First name'
            className='form-control'
            name='firstName'
            placeholder={firstName}
            />
            {this.props.updateError && <h5>{ message.includes('firstName') ? message : ''}</h5>}
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Last name'
            className='form-control'
            name='lastName'
            placeholder={lastName}
            />
            {this.props.updateError && <h5>{ message.includes('lastName') ? message : ''} </h5>}
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Address'
            className='form-control'
            name='address'
            placeholder={address}
            />
            {this.props.updateError && <h5>{ message.includes('address') ? message : ''} </h5>}
            <InputField
            type='email'
            handleChange={this.onChange}
            label='Email'
            className='form-control'
            name='email'
            placeholder={email}
            />
            {this.props.updateError && <h5>{ message.includes('email') ? message : ''} </h5>}
            <InputField
            type='number'
            handleChange={this.onChange}
            label='phone'
            className='form-control'
            name='phone'
            placeholder={phone}
            />
            {this.props.updateError && <h5>{ message.includes('phone') ? message : ''} </h5>}
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Gender'
            className='form-control'
            name='gender'
            placeholder={gender}
            />
            {this.props.updateError && <h5>{ message.includes('gender') ? message : ''} </h5>}
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Currency'
            className='form-control'
            name='currency'
            placeholder={currency}
            />
            {this.props.updateError && <h5>{ message.includes('currency') ? message : ''} </h5>}
            <InputField
            type='text'
            handleChange={this.onChange}
            label='Department'
            className='form-control'
            name='department'
            placeholder={department}
            />
            {this.props.updateError && <h5>{ message.includes('department') ? message : ''} </h5>}
            <InputField
            type="file"
            label='Profile image' department
            handleChange={this.onFileChange}
            name="photo"
            className="form-control"
            accept=".png, .jpg, .jpeg"
            />
            {this.props.updateError && <h5>{ message.includes('photo') ? message : ''} </h5>}
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
const mapStateToProps = (state) => ({
  user: state.userProfile.user,
  error: state.userProfile.viewProfileError,
  updateError: state.userProfile.updateProfileError,
  res: state.userProfile.res
});

function mapDispatchToProps(dispatch) {
  return {
    updatingUser: (data) => dispatch(updateProfile(data)),
    fetchProfile: () => dispatch(viewProfile()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);