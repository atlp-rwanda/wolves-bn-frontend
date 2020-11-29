/* eslint-disable import/prefer-default-export */
import AuthService from '../../services/auth.service';
import { FIND_USER } from './actionTypes';

export const findUser = (email) => ({
  type: FIND_USER,
  payload: AuthService.findUserService(email),
});
