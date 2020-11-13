import { FIND_USER, RESET_PASSWORD } from '../actions/actionTypes';
import { fulfilled } from '../../utils/action.utils';

const initialState = {
  message: ''
};

const resetPassword = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case fulfilled(FIND_USER):
      return {
        ...state,
        message: { payload }
      };
    default:
      return state;
  }
};

export default resetPassword;