import React from 'react';
import './socialLogin.scss';
import facebookSvg from '../../assets/facebook.svg';
import googleSvg from '../../assets/google.svg';

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
            <button className='social-btn google' onClick={this.signInWithGoogle} type='submit'><img src={googleSvg}/></button>
            <button className='social-btn facebook' onClick={this.signInWithFacebook} type='submit'><img src={facebookSvg}/></button>
         </div>
      </div>
    );
  }
}

export default SocialLogin;