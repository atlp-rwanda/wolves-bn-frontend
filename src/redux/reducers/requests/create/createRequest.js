import {
  CREATE_TRIPS_START,
  CREATE_TRIPS_SUCCESS,
  CREATE_TRIPS_FAIL,
} from '../../../actions/actionTypes';

const initialState = {
  loading: false,
  response: '',
  error: ''
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TRIPS_START:
      return {
        ...state, loading: true
      };

    case CREATE_TRIPS_SUCCESS:
      return {
        ...state,
        response: payload.response,
        loading: false
      };
    case CREATE_TRIPS_FAIL:
      return {
        ...state, error: action.error, loading: false
      };

    default: return state;
  }
};

export default reducer;
