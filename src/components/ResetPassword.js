import React, { Component } from 'react';

class ResetPassword extends Component {
  render() {
    return (
      <div>
        <form>
          <h3>Reset Password</h3>
          <div>
            <label>Password</label>
            <input type='password' name='password' placeholder='Password' />
          </div>
          <div>
            <label>Confirm new Password</label>
            <input type='password2' name='password2' placeholder='Confirm Password' />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default ResetPassword;