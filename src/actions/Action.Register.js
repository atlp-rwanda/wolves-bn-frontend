import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_MESSAGE,
} from './Action.Type';

import AuthService from '../services/auth.service';

const register = (
  firstName, lastName, phone, email, password
) => (dispatch) => {
  AuthService.register(
    firstName, lastName, phone, email, password
  )
    .then((response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user: response }
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.response
          && error.response.data
          && error.response.data.message)
          || error.message
          || error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
    );
};

export default register;