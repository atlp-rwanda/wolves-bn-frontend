/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_TRIPS_FAIL, FETCH_TRIPS_SUCCESS, FETCH_TRIPS_START } from '../actionTypes';

export const fetchTripStart = () => ({
  type: FETCH_TRIPS_START,
});

export const fetchTripSuccess = (requests, role) => ({
  type: FETCH_TRIPS_SUCCESS,
  requests,
  role
});

export const fetchTripFail = (error) => ({
  type: FETCH_TRIPS_FAIL,
  error
});

export const fetchRequests = () => async (dispatch) => {
  dispatch(fetchTripStart());
  const token = localStorage.getItem('token');

  return axios
    .get(`${process.env.REACT_APP_URL}/api/trips`, {
      headers: {
        token,
      },
    })
    .then((response) => {
      const { info, role } = response.data;
      dispatch(fetchTripSuccess(info, role));
      return response;
    })
    .catch((err) => dispatch(fetchTripFail(err.response.data.error)));
};
