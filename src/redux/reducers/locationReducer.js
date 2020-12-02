import {
  VIEW_LOCATION_STARRT,
  VIEW_LOCATION_SUCCES,
  VIEW_LOCATION_ERROR,
} from '../actions/actionTypes';

const initialState = {
  locations: [],
  error: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_LOCATION_STARRT:
      return {
        ...state
      };

    case VIEW_LOCATION_SUCCES:
      console.log('locations action', action);
      return {
        ...state, locations: action.locations
      };

    case VIEW_LOCATION_ERROR:
      return {
        ...state, fetchError: action.error,
      };

    default: return state;
  }
};

export default locationReducer;
