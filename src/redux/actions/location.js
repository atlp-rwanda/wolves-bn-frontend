import axios from 'axios';
import {
  VIEW_LOCATION_STARRT,
  VIEW_LOCATION_SUCCES,
  VIEW_LOCATION_ERROR,
} from './actionTypes';

export const fetchAccStart = () => ({
  type: VIEW_LOCATION_STARRT,
});

export const fetchAccSuccess = (locations) => ({
  type: VIEW_LOCATION_SUCCES,
  locations,
});

export const fetchAccFail = (error) => ({
  type: VIEW_LOCATION_ERROR,
  error
});

export const fetchLocations = () => async (dispatch) => {
  dispatch(fetchAccStart());
  //   const token = localStorage.getItem('token');

  return axios.get(`${process.env.REACT_APP_URL}api/locations`)
    .then((response) => {
      console.log('data', response.data);
      dispatch(fetchAccSuccess(response.data));
      return response;
    })
    .catch((err) => dispatch(fetchAccFail(err.response.data.error)));
};
