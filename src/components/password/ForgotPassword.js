import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { findUser } from '../../redux/actions/forgot.password';
import InputField from '../common/InputField';
import Button from '../common/Button';
import './password.scss';

const ForgotPassword = () => {
  const newState = useSelector(state => state);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className='container'>
      <div className='form-pass'>
        <form className='resetPassword' onSubmit={(e) => {
          e.preventDefault();
          console.log(email);
          setSubmitted(true);

          if (email) {
            dispatch(findUser(email));
          }
        }}>
          {newState.findUser.message === 'Check your email for the reset link' ? <div className= 'valid-feedback'>{newState.findUser.message}</div>
            : <div className='invalid-feedback'>{newState.findUser.message} <Link to='/signup' ><h4 className='linkTo'><span>Create Account</span> </h4></Link>
            </div> }
          <div className='form-group'>
            <h3>Forgot Password</h3>
          </div>
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
          <Button content='Submit'
          />
          </div>
        </form>
        </div>
    </div>
  );
};

export default ForgotPassword;