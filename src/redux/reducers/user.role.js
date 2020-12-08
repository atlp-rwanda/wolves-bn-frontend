import {
  LOAD_USER,
  USER_ROLE_CHANGED,
  GET_LIST
} from '../actions/actionTypes';
import { fulfilled, rejected } from '../../utils/action.utils';

const initialState = {
  token: localStorage.getItem('token'),
  errors: null,
  users: [],
  setRoleResponse: {}
};
const userRoleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        users: payload,
        message: payload.message,
      };
    case GET_LIST:
      return {
        ...state,
        message: payload.message,
        users: payload.users,
      };
    case fulfilled(USER_ROLE_CHANGED):
      return {
        ...state,
        message: payload.data.message,
        user: { id: payload.data.user, role: payload.data.role }
      };
    case rejected(USER_ROLE_CHANGED):
      return {
        ...state,
        error: payload.response.data.message
      };
    default:
      return state;
  }
};
export default userRoleReducer;