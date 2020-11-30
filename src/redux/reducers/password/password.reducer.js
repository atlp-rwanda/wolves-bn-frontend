import { FIND_USER } from '../../actions/actionTypes';
import { fulfilled, rejected } from '../../../utils/action.utils';

const initialState = {
  message: '',
};

const finduser = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);

  switch (type) {
    case fulfilled(FIND_USER):
      return {
        ...state,
        message: payload.data.Message
      };
    case rejected(FIND_USER):
      console.log(payload.response.data.Error);
      return {
        ...state,
        message: payload.response.data.Error
      };
    default:
      return state;
  }
};

export default finduser;