import React from 'react';
import SocialLogin from '../social/SocialLogin';

class Login extends React.Component {
  render() {
    const tokenParam = this.props.location.search;
    const { history } = this.props;
    if (tokenParam.length > 1) {
      const token = tokenParam.split('=')[1];
      localStorage.setItem('token', token);
      history.push('/dashboard');
    }
    return (
      <div>
         <h1>Login</h1>
          <SocialLogin/>
      </div>
    );
  }
}

export default Login;
