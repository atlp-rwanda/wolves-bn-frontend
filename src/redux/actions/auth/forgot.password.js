/* eslint-disable import/prefer-default-export */
import AuthService from '../../../services/auth.service';
import { FIND_USER, RESET_PASSWORD } from '../actionTypes';

export const findUser = (email) => ({
  type: FIND_USER,
  payload: AuthService.findUserService(email),
});

export const resetPassword = (password) => ({
  type: RESET_PASSWORD,
  payload: AuthService.resetPassword(password)
});
