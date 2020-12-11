/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../common/Buttons/Button';
import travellingman from '../../../assets/images/travellingman.svg';
import google from '../../../assets/images/google.svg';
import facebook from '../../../assets/images/facebook.svg';
import Input from '../../common/Inputs/Input';
import './signUp.scss';
import { signUp } from '../../../redux/actions/auth/register';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      error: '',
      lNameError: '',
      fNameError: '',
      passwordError: '',
      emailError: '',
      phoneError: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

	handleSubmit = (e) => {
	  e.preventDefault();
	  setTimeout(() => {
	    this.clearErrors();
	  }, 3000);
	    const {
	      firstName, lastName, phone, email, password
	    } = this.state;

	    const data = {
	      firstName,
	      lastName,
	      phone,
	      email,
	      password,
	    };

	    this.props.onSignUp(data);
	};

  clearErrors = () => {
    this.setState({
      lNameError: '',
      fNameError: '',
      passwordError: '',
      emailError: '',
      phoneError: '',
    });
  };

  signInWithGoogle = () => {
    window.location.replace(`${process.env.REACT_APP_URL}/auth/google`);
  };

  signInWithFacebook = () => {
    window.location.replace(`${process.env.REACT_APP_URL}/auth/facebook`);
  };

	  render() {
    const { message } = this.props;
    const tokenParam = this.props.location.search;
    if (tokenParam.length > 1) {
      const token = tokenParam.split('=')[1];
      localStorage.setItem('token', token);
      window.location.replace('/dashboard');
    }

	    return (
        <div className="col">
          <h1>Barefoot Nomad Registration Form</h1>

          <div className="card card-container">
            <form className='register-form' onSubmit={this.handleSubmit}>
              <h2>{message.includes('user already') ? message : ''}</h2>
              <h2>{message.includes('may go') ? message : ''}</h2>
              <div className="formgroup">
                <label htmlFor="firstName">First Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={this.state.firstName}
                  handleChange={this.handleChange}
                />
              </div>
              <div className="errorClass">
                {message.includes('firstName') ? message : ''}
              </div>

              <div className="formgroup">
                <label htmlFor="lastName">Last Name</label>
                <Input
                  type="text"
                  className="form-control"
                  value={this.state.lastName}
                  handleChange={this.handleChange}
                  name="lastName"
                />
              </div>
              <div className="errorClass">
                {message.includes('lastName') ? message : ''}
              </div>

              <div className="formgroup">
                <label htmlFor="phone">Phone</label>
                <Input
                  type="text"
                  className="form-control"
                  value={this.state.phone}
                  handleChange={this.handleChange}
                  name="phone"
                />
              </div>
              <div className="errorClass">
                {message.includes('phone') ? message : ''}
              </div>

              <div className="formgroup">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  value={this.state.email}
                  handleChange={this.handleChange}
                  name="email"
                />
              </div>
              <div className="errorClass">
                {message.includes(' valid email') ? message : ''}
              </div>

              <div className="formgroup">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  handleChange={this.handleChange}
                  name="password"
                />
              </div>
              <div className="errorClass">
                {message.includes('password') ? message : ''}
              </div>
              <div className="buttonClass">
                <Button content="Sign Up" />
              </div>
              <p className='link-tags'>
                Do you already have an account?
                <Link to="/login">Login</Link>
              </p>
            </form>

            <div className="logIcon">
              <div className="log">
                <img src={travellingman} alt=" " className="imageHere" />
              </div>
              <div className="anotherways">
                <p>Or continue with </p>
                <br></br>
                <button
                  className="social-btn google"
                  onClick={this.signInWithGoogle}
                  type="submit"
                >
                  <img src={google} alt="" className="goole" />
                </button>

                <button
                  className="social-btn facebook"
                  onClick={this.signInWithFacebook}
                  type="submit"
                >
                  <img src={facebook} alt="" className="facebook" />
                </button>
              </div>
            </div>
          </div>
        </div>
    );
	  }
}
const mapStateToProps = (state) => ({
  token: state.signUp.token,
  message: state.signUp.message,
});

const mapDispatchToProps = (dispatch) => ({
  onSignUp: (data) => dispatch(signUp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);