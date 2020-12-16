import {
  FETCH_TRIPS_START,
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_FAIL,
  FETCH_TRIP_START,
  FETCH_TRIP_SUCCESS,
  FETCH_TRIP_FAIL,
  DELETE_TRIP_START,
  DELETE_TRIP_SUCCESS,
  DELETE_TRIP_FAIL,
  GET_TRIPS_AUTOSEARCH
} from '../../actions/actionTypes';
import { fulfilled, rejected } from '../../../utils/action.utils';

const initialState = {
  tripsRequest: [],
  tripsSearch: [],
  fetchError: null,
  loading: false,
  role: '',
  trips: [],
  trip: {},
  error: '',
  response: ''
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_TRIPS_START:
    case FETCH_TRIP_START:
    case DELETE_TRIP_START:
      return {
        ...state, loading: true
      };

    case FETCH_TRIPS_SUCCESS:
      return {
        ...state,
        tripsRequest: action.requests,
        role: action.role,
        loading: false
      };

    case FETCH_TRIP_SUCCESS:
      return {
        ...state,
        trip: payload.response
      };

    case DELETE_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        response: 'Deleted successfully',
      };

    case FETCH_TRIPS_FAIL:
    case FETCH_TRIP_FAIL:
      return {
        ...state, fetchError: action.error, loading: false
      };

    case DELETE_TRIP_FAIL:
      return {
        ...state,
        error: action.error
      };

    case fulfilled(GET_TRIPS_AUTOSEARCH):
      // console.log(action.payload.data.message);
      return {
        ...state,
        message: action.payload.data.message,
        tripsRequest: action.payload.data.trips,
      };
    case rejected(GET_TRIPS_AUTOSEARCH):
      return {
        ...state,
        error: payload.response.data.Error,
        tripsRequest: {}
      };

    default: return state;
  }
};

export default reducer;
