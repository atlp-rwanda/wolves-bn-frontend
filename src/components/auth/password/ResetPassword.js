import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../../redux/actions/auth/forgot.password';
import InputField from '../../common/InputField';
import Button from '../../common/Button';
import './password.scss';

const ResetPassword = () => {
  const newState = useSelector(state => state);
  const dispatch = useDispatch();

  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const { success } = newState.resetPass;
    if (success) {
      window.location.replace('/login');
    }
  });

  return (
  <div className='container'>
  <div className='form-pass'>
    <form className='resetPassword' onSubmit={(e) => {
      e.preventDefault();
      setSubmitted(true);

      if (password1 === password2) { dispatch(resetPassword(password2)); }
    }}>
      <div className='form-group'>
        <h3>Reset Password</h3>
      </div>
      <div className='form-group'>
      <InputField
       type='password'
       name='password'
       label='New Password'
       className='form-control'
       onChange= {(e) => setPassword1(e.target.value)}
      />
      {submitted && !password1 && <div className="invalid-feedback">Password is required</div>}
      {submitted && password1 !== password2 && <div className="invalid-feedback">Both Password have to match</div>}
      </div>
      <div className='form-group'>
      <InputField
       type='password'
       name='password'
       label='Confirm Password'
       className='form-control'
       onChange= {(e) => setPassword2(e.target.value)}
      />
      {submitted && !password2 && <div className="invalid-feedback">Password is required</div>}
      {submitted && password1 !== password2 && <div className="invalid-feedback">Both Password have to match</div>}
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

export default ResetPassword;