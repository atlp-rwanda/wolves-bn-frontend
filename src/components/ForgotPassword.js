import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findUser } from '../redux/actions/forgot.password';
import InputField from './common/InputField';
import Button from './common/Button';

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { findingUser } = this.props;

    findingUser(email)
      .then(() => {
        console.log('Ngaaho');
      })
      .catch(() => {
        console.log('noooo');
      });
  }

  render() {
    const { message } = this.props;
    console.log(message);
    return (
      <div>
        {message && (
              <div className="form-group">
                <div className="alert alert-danger" >
                  {message}
                </div>
              </div>
        )}

        <form onSubmit={this.onSubmit}>
          <InputField
           type='email'
           name='email'
           label='Email'
           className='form-control'
           handleChange= {this.onChange}
          />
          <Button content='Submit'
          />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    findingUser: (email) => dispatch(findUser(email))
  };
}

function mapStateToProps(state) {
  const { message } = state.reset;
  return {
    message
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);