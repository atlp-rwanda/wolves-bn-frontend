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

// try {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//       token: localStorage.getItem('token')
//     }
//   };

//   const body = JSON.stringify({ email, role });
//   // const response = await axios.patch(`${process.env.REACT_APP_URL}/users/settings`, body, config);
//   response = await axios.patch('http://localhost:3000/api/users/settings', body, config);
//   dispatch({
//     type: USER_ROLE_CHANGED,
//     payload: response.data
//   });
// } catch (error) {
//   console.log('Response==>', error);
//   dispatch({
//     type: ERROR,
//     payload: response.data

//   });
// }

// export const changeRole = (email, role) => async (dispatch) => {
//   const token = localStorage.getItem('token');
//   const body = JSON.stringify({ email, role });
//   return axios.get('http://localhost:3000/api/users/settings', {
//     body,
//     headers: {
//       token,
//     },
//   })
//     .then((response) => {
//       console.log(`============${response}`);
//       // const { info, role } = response.data;
//       dispatch({
//         type: USER_ROLE_CHANGED,
//         payload: response.data
//       });
//       return response;
//     })
//     .catch((err) => dispatch(fetchFail(err.response.data.error)));
// };

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
