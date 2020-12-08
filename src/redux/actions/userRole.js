/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import axios from 'axios';
import RoleService from '../../services/role.service';
import {
  USER_ROLE_CHANGED,
  ERROR,
  GET_LIST
} from './constants';

let response = null;
export const changeRole = (email, role) => ({
  type: USER_ROLE_CHANGED,
  payload: RoleService.changingRoles(email, role)
});
export const userList = () => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token')
      }
    };
    response = await axios.get('http://localhost:3000/api/users/list', config);
    dispatch({
      type: GET_LIST,
      payload: { users: response.data }
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    });
  }
};
