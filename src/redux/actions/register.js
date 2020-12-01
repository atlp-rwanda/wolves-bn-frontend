/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL
} from './actionTypes';

const registerStart = () => ({
  type: REGISTER_START,
});

const registerSuccess = (token, message) => ({
  type: REGISTER_SUCCESS,
  payload: {
    token,
    message,
  },
});

const registerFail = (message) => ({
  type: REGISTER_FAIL,
  payload: {
    message,
  },
});

export const signUp = (data) => (dispatch) => {
  dispatch(registerStart());
  axios
    .post('api/users/signup', data)
    .then((response) => {
      const message = response.data.message;
      console.log(message);
      localStorage.setItem('token', response.data.token);
      dispatch(registerSuccess(response.data.token, message));
    })
    .catch((error) => {
      // eslint-disable-next-line max-len
      const message = ((error.response && error.response.data) && (error.response.data.message || error.response.data.Message))
      || error.message || error.toString();
      console.log(error.response);
      console.log(`It is a ${message}`);
      dispatch(registerFail(message));
    });
};
