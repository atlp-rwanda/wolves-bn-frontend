import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../redux/actions/login';
import InputField from './common/InputField';
import Button from './common/Button';
import logo from '../assets/undraw_travelers.svg';
import './login.scss';

const Login = () => {
  const newState = useSelector(state => state);
  console.log(newState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const { token, isLoggedIn } = newState.login;
    if (isLoggedIn && token) {
      localStorage.setItem('token', token);
      window.location.replace('/dashboard');
    }
  });

  return (
        <div className='container'>
          <div className='row content'>
            <div className='col-md-6 mb-3'>
              <img src={logo} alt='' className='img-fluid' />
            </div>
            <div className='col-md-6'>
              <h3 className='signin-text mb-3'>Sign In</h3>
              <form className='loginForm' action='#' onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);

                if (email && password) {
                  dispatch(login(email, password));
                }
              }}>
                {submitted && newState.login.message && <div className= 'invalid-feedback'>{newState.login.message}</div> }
                <div className='form-group'>
                  <InputField
                  type='email'
                  name='email'
                  label='Email'
                  className='form-control'
                  onChange = {(e) => { setEmail(e.target.value); }}
                  />
                  {submitted && !email && <div className="invalid-feedback">Email is required</div>}
                </div>
                <div className='form-group'>
                  <InputField
                  label='Password'
                  type='password'
                  name='password'
                  className='form-control'
                  onChange = {(e) => { setPassword(e.target.value); }}
                  />
                  {submitted && !password
                    && <div className="invalid-feedback">Password is required</div>}
                </div>
                <div className='form-group'>
                  <ul className='expLinks'>
                    <li><Link to='/signup' ><h4><span>Create Account</span> </h4></Link></li>
                    <li> <Link to='/forgotpassword'><span>Forgot Password?</span></Link></li>
                  </ul>
                </div>
                <div className="form-group">
                <Button content='Login' />
            </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;