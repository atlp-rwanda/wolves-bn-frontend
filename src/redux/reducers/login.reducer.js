import { LOGIN } from '../actions/actionTypes';
import { pending, fulfilled, rejected } from '../../utils/action.utils';

const initialState = {
  isLoggedIn: false,
  token: '',
  message: ''
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case fulfilled(LOGIN):
      return {
        ...state,
        isLoggedIn: true,
        token: payload.data.token
      };
    case rejected(LOGIN):
      return {
        ...state,
        isLoggedIn: false,
        message: payload.response.data.error
      };
    default:
      return state;
  }
};

export default loginReducer;