import { LOCATIONS_START, LOCATIONS_SUCCESS, LOCATIONS_FAIL } from '../../actions/actionTypes';

const initialState = {
  locations: [],
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS_START:
      return {
        ...state
      };

    case LOCATIONS_SUCCESS:
      return {
        ...state, locations: action.locations
      };

    case LOCATIONS_FAIL:
      return {
        ...state, error: action.error
      };

    default: return state;
  }
};

export default reducer;
