import { RESET_PASSWORD } from '../../actions/actionTypes';
import { fulfilled, rejected } from '../../../utils/action.utils';

const initialState = {
  message: '',
  success: false
};

const resetPassword = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case fulfilled(RESET_PASSWORD):
      return {
        ...state,
        message: { payload },
        success: true
      };
    case rejected(RESET_PASSWORD):
      return {
        ...state,
        message: { payload },
        success: false
      };
    default:
      return state;
  }
};

export default resetPassword;