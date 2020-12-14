import { FETCH_ACCOMMODATIONS_START, FETCH_ACCOMMODATIONS_SUCCESS, FETCH_ACCOMMODATIONS_FAIL } from '../actions/actionTypes';

const initialState = {
  accommodations: [],
  fetchError: null,
};

const accommodationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOMMODATIONS_START:
      return {
        ...state
      };

    case FETCH_ACCOMMODATIONS_SUCCESS:
      return {
        ...state, accommodations: action.accommodations
      };

    case FETCH_ACCOMMODATIONS_FAIL:
      return {
        ...state, fetchError: action.error,
      };

    default: return state;
  }
};

export default accommodationReducer;
