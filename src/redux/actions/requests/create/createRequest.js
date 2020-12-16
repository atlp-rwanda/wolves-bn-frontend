/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  CREATE_TRIPS_FAIL, CREATE_TRIPS_SUCCESS, CREATE_TRIPS_START,
} from '../../actionTypes';

export const createTripStart = () => ({
  type: CREATE_TRIPS_START,
});

export const createTripSuccess = (response) => ({
  type: CREATE_TRIPS_SUCCESS,
  response,
});

export const createTripFail = (error) => ({
  type: CREATE_TRIPS_FAIL,
  error
});

export const createRequests = (data) => async (dispatch) => {
  dispatch(createTripStart());
  const token = localStorage.getItem('token');

  return axios
    .post('/api/trips', data, {
      headers: {
        token,
      },
    })
    .then((response) => {
      console.log(response.data);
      dispatch(createTripSuccess(response.data));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(createTripFail(err.response.data.Message));
    }
    );
};
