import {
  FETCH_TRIPS_START,
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_FAIL,
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
  trip: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_TRIPS_START:
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
    case FETCH_TRIPS_FAIL:
      return {
        ...state, fetchError: action.error, loading: false
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
