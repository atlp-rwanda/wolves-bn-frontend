/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  DELETE_TRIP_FAIL, DELETE_TRIP_SUCCESS, DELETE_TRIP_START,
} from '../../actionTypes';

export const deleteRequestStart = () => ({
  type: DELETE_TRIP_START,
});

export const deleteRequestSuccess = (response) => ({
  type: DELETE_TRIP_SUCCESS,
  response,
});

export const deleteRequestFail = (error) => ({
  type: DELETE_TRIP_FAIL,
  error
});

export const deleteRequest = (id) => (dispatch) => {
  dispatch(deleteRequestStart());
  const token = localStorage.getItem('token');

  return axios
    .delete(`/api/trips/${id}`, {
      headers: {
        token,
      }
    })
    .then((response) => {
      console.log(response.data.info);
      dispatch(deleteRequestSuccess(response.data.info));
    })
    .catch((err) => {
      console.log(err);
      dispatch(deleteRequestFail(err));
    }
    );
};
