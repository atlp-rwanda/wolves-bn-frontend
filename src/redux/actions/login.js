/* eslint-disable import/prefer-default-export */
import AuthService from '../../services/auth.service';
import { LOGIN } from './actionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  payload: AuthService.login(email, password),
});
