/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
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
    response
  }
});

export const viewProfile = () => dispatch => {
  dispatch(viewProfilePending());

  const token = localStorage.getItem('token');

  axios.get('http://localhost:4000/api/profiles', { headers: { token } })
    .then(response => {
      dispatch(viewProfileSuccess(response.data));
    })
    .catch(err => {
      dispatch(viewProfileError(err.response.data.error));
      localStorage.removeItem('token');
    });
};

export const updateProfile = (data) => dispatch => {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  for (const field in data) {
    formData.append(field, data[field]);
  }

  axios.put('http://localhost:4000/api/profiles', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      token
    }
  })
    .then((response) => {
      dispatch(updateProfileSuccess(response.data.message));
    })
    .catch(err => {
      dispatch(updateProfileError(err.response.data));
    });
};