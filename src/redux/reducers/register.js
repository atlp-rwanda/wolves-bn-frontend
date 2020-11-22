import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/actionTypes';

const initialState = {
  token: null,
  message: '',
};

const registerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_START:
      return {
        ...state,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        token: payload.token,
        message: payload.message,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        message: payload.message,
      };

    default:
      return state;
  }
};

export default registerReducer;
