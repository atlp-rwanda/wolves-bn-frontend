import axios from 'axios';
import {
  FETCH_ACCOMMODATIONS_START,
  FETCH_ACCOMMODATIONS_SUCCESS,
  FETCH_ACCOMMODATIONS_FAIL,
} from './actionTypes';

export const fetchAccStart = () => ({
  type: FETCH_ACCOMMODATIONS_START,
});

export const fetchAccSuccess = (accommodations) => ({
  type: FETCH_ACCOMMODATIONS_SUCCESS,
  accommodations,
});

export const fetchAccFail = (error) => ({
  type: FETCH_ACCOMMODATIONS_FAIL,
  error
});

export const fetchAccommodations = () => async (dispatch) => {
  dispatch(fetchAccStart());
  const token = localStorage.getItem('token');

  return axios.get(`${process.env.REACT_APP_URL}api/accommodations`, {
    headers: {
      token,
    },
  })
    .then((response) => {
      console.log('data', response.data);
      dispatch(fetchAccSuccess(response.data));
      return response;
    })
    .catch((err) => dispatch(fetchAccFail(err.response.data.error)));
};

export const fetchAccommodation = (id) => async (dispatch) => {
  dispatch(fetchAccStart());
  const token = localStorage.getItem('token');

  return axios.get(`${process.env.REACT_APP_URL}api/accommodations/${id}`, {
    headers: {
      token,
    },
  })
    .then((response) => {
      console.log(' 1 accommodation data=====', response.data);
      dispatch(fetchAccSuccess(response.data));
      return response;
    })
    .catch((err) => {
      dispatch(fetchAccFail(err.response.data.error));
      console.log(err);
    });
};
