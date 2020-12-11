/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  FETCH_TRIPS_FAIL, FETCH_TRIPS_SUCCESS, FETCH_TRIPS_START, GET_TRIPS_AUTOSEARCH
} from '../actionTypes';
import SearchTrips from '../../../services/search.trips';

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
    .get('/api/trips', {
      headers: {
        token,
      },
    })
    .then((response) => {
      const { info, role } = response.data;
      dispatch(fetchTripSuccess(info, role));
      return response;
    })
    .catch((err) => dispatch(fetchTripFail(err.response.data.error))
    );
};
export const autoSearchTripsList = (departure) => ({
  type: GET_TRIPS_AUTOSEARCH,
  payload: SearchTrips.autoSearchTrip(departure)

});
export const autoSearchTrips_Destination = (destination) => ({
  type: GET_TRIPS_AUTOSEARCH,
  payload: SearchTrips.autoSearchTripByDestination(destination)

});
