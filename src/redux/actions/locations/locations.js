/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { LOCATIONS_FAIL, LOCATIONS_SUCCESS, LOCATIONS_START } from '../actionTypes';

export const locationStart = () => ({
  type: LOCATIONS_START,
});

export const locationSuccess = (locations) => ({
  type: LOCATIONS_SUCCESS,
  locations
});

export const locationFail = (error) => ({
  type: LOCATIONS_FAIL,
  error
});

export const fetchLocations = () => async (dispatch) => {
  dispatch(locationStart());
  const token = localStorage.getItem('token');

  return axios
    .get(`${process.env.REACT_APP_URL}/api/locations`, {
      headers: {
        token,
      },
    })
    .then((response) => {
      console.log(response.data);
      dispatch(locationSuccess(response.data));
      return response;
    })
    .catch((err) => dispatch(locationFail(err.response.data.error)));
};
