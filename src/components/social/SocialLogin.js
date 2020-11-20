import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

class SocialLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      apiAddress: 'http://localhost:3000/api'
    };
  }

  signInWithGoogle =() => {
    window.location.replace('http://localhost:3000/auth/google');
  }

  signInWithFacebook = () => {
    window.location.replace('http://localhost:3000/auth/facebook');
  }

  render() {
    return (
      <div>
         <div className='social'>
            <button onClick={this.signInWithGoogle} type='submit' className='google'>Google</button>
            <button onClick={this.signInWithFacebook} type='submit' className='facebook'>facebook</button>
         </div>
      </div>
    );
  }
}

export default SocialLogin;