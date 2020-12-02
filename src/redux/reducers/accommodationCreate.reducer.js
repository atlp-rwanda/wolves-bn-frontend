import { CREATE_ACCOMMODATIONS_START, CREATE_ACCOMMODATIONS_SUCCESS, CREATE_ACCOMMODATIONS_FAIL } from '../actions/actionTypes';

const initialState = {
  message: '',
  error: null,
};

const accommodationCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOMMODATIONS_START:
      return {
        ...state
      };

    case CREATE_ACCOMMODATIONS_SUCCESS:
      return {
        ...state, message: 'Succesfully registered'
      };

    case CREATE_ACCOMMODATIONS_FAIL:
      return {
        ...state, error: action.error,
      };

    default: return state;
  }
};

export default accommodationCreateReducer;