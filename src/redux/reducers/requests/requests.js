import { FETCH_TRIPS_START, FETCH_TRIPS_SUCCESS, FETCH_TRIPS_FAIL } from '../../actions/actionTypes';

const initialState = {
  tripsRequest: [],
  fetchError: null,
  loading: false,
  role: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRIPS_START:
      return {
        ...state, loading: true
      };

    case FETCH_TRIPS_SUCCESS:
      return {
        ...state, tripsRequest: action.requests, role: action.role, loading: false
      };

    case FETCH_TRIPS_FAIL:
      return {
        ...state, fetchError: action.error, loading: false
      };

    default: return state;
  }
};

export default reducer;
