/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  FETCH_TRIP_FAIL, FETCH_TRIP_SUCCESS, FETCH_TRIP_START,
} from '../../actionTypes';

export const fetchRequestStart = () => ({
  type: FETCH_TRIP_START,
});

export const fetchRequestSuccess = (response) => ({
  type: FETCH_TRIP_SUCCESS,
  response,
});

export const fetchRequestFail = (error) => ({
  type: FETCH_TRIP_FAIL,
  error
});

export const fetchRequest = (id) => (dispatch) => {
  dispatch(fetchRequestStart());
  const token = localStorage.getItem('token');

  return axios
    .get(`/api/trips/${id}`, {
      headers: {
        token,
      }
    })
    .then((response) => {
      console.log(response.data.info);
      dispatch(fetchRequestSuccess(response.data.info));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(fetchRequestFail(err.response.data));
    }
    );
};
