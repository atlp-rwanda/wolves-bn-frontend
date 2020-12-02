/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import axios from 'axios';
import {
  CREATE_ACCOMMODATIONS_START,
  CREATE_ACCOMMODATIONS_SUCCESS,
  CREATE_ACCOMMODATIONS_FAIL,
  UPDATE_ACCOMMODATIONS_START,
  UPDATE_ACCOMMODATIONS_SUCCESS,
  UPDATE_ACCOMMODATIONS_FAIL
} from './actionTypes';

export const createStart = () => ({
  type: CREATE_ACCOMMODATIONS_START,
});

export const createSuccess = (message) => ({
  type: CREATE_ACCOMMODATIONS_SUCCESS,
  message,
});

export const createFail = (error) => ({
  type: CREATE_ACCOMMODATIONS_FAIL,
  error,
});
export const updateStart = () => ({
  type: UPDATE_ACCOMMODATIONS_START,
});

export const updateSuccess = (message) => ({
  type: UPDATE_ACCOMMODATIONS_SUCCESS,
  message,
});

export const updateFail = (error) => ({
  type: UPDATE_ACCOMMODATIONS_FAIL,
  error,
});

export const createAccommodations = (data) => (dispatch) => {
  dispatch(createStart());
  const token = localStorage.getItem('token');
  const formData = new FormData();
  for (const field in data) {
    formData.append(field, data[field]);
  }
  axios.post(`${process.env.REACT_APP_URL}api/accommodations`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      token,
    },
  })
    .then((response) => {
      console.log('dataaaaaa', response);
      dispatch(createSuccess(response.data));
      return response;
    })
    .catch((err) => {
      console.log('err.response.data', err.response.data);
      dispatch(createFail(err.response.data.error));
    });
};
export const updateAccommodations = (data, id) => (dispatch) => {
  dispatch(updateStart());
  const token = localStorage.getItem('token');
  const formData = new FormData();
  console.log('accomodation data=====', data);
  for (const field in data) {
    console.log('field====', field, data[field]);
    formData.append(field, data[field]);
  }
  console.log('form data=======', formData);

  axios.patch(`${process.env.REACT_APP_URL}api/accommodations/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      token,
    },
  })
    .then((response) => {
      console.log('dataaaaaa', response);
      dispatch(updateSuccess(response.data));
      return response;
    })
    .catch((err) => {
      console.log('====err', err.response.data.error);
      dispatch(updateFail(err.response.data.error));
    });
};
