/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  VIEW_PROFILE_PENDING,
  VIEW_PROFILE_SUCCESS,
  VIEW_PROFILE_ERROR,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_PENDING
} from '../actionTypes';

export const viewProfilePending = () => ({
  type: VIEW_PROFILE_PENDING,
});

export const viewProfileSuccess = (userData) => ({
  type: VIEW_PROFILE_SUCCESS,
  payload: {
    user: userData
  }
});

export const viewProfileError = (error) => ({
  type: VIEW_PROFILE_ERROR,
  payload: {
    error
  }
});

export const updateProfilePending = () => ({
  type: UPDATE_PROFILE_PENDING,
});

export const updateProfileError = (error) => ({
  type: UPDATE_PROFILE_ERROR,
  payload: {
    error
  }
});
export const updateProfileSuccess = (response) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: {
    data: response
  }
});

export const viewProfile = () => dispatch => {
  dispatch(viewProfilePending());

  const token = localStorage.getItem('token');

  axios.get('http://localhost:4000/api/profiles', { headers: { token } })
    .then(response => {
      console.log('done');
      console.log(response.data);
      dispatch(viewProfileSuccess(response.data));
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch(viewProfileError(err.response.data.error));
    });
};

export const updateProfile = (data) => dispatch => {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('photo', data.photo);
  formData.append('firstName', data.firstName);
  formData.append('lastName', data.lastName);
  formData.append('email', data.email);
  formData.append('address', data.address);
  formData.append('gender', data.gender);
  formData.append('currency', data.currency);
  formData.append('department', data.department);

  console.log('formData', formData);

  axios.put('http://localhost:4000/api/profiles', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      token
    }
  })
    .then((response) => {
      console.log(response.data);
      dispatch(updateProfileSuccess());
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch(updateProfileError(err.response.data.error));
    });
};