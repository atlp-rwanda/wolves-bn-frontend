import { UPDATE_ACCOMMODATIONS_START, UPDATE_ACCOMMODATIONS_SUCCESS, UPDATE_ACCOMMODATIONS_FAIL } from '../actions/actionTypes';

const initialState = {
  message: '',
  error: null,
};

const accommodationUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACCOMMODATIONS_START:
      return {
        ...state
      };

    case UPDATE_ACCOMMODATIONS_SUCCESS:
      return {
        ...state, message: action.message
      };

    case UPDATE_ACCOMMODATIONS_FAIL:
      return {
        ...state, error: action.error,
      };

    default: return state;
  }
};

export default accommodationUpdateReducer;