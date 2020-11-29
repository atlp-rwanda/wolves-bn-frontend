import jwt from 'jsonwebtoken';
import loginReducer from '../../redux/reducers/login.reducer';
import { fulfilled, rejected } from '../../utils/action.utils';
import { LOGIN } from '../../redux/actions/actionTypes';

describe('login reducer', () => {
  it('should return log in success', () => {
    const user = {
      email: 'someemail@gmail.com',
      password: '123456'
    };
    const token = jwt.sign(user, 'amabanga', {
      expiresIn: 24,
    });
    const action = {
      type: fulfilled(LOGIN),
      payload: {
        data: { token },
        isLoggedIn: true
      },
    };

    const response = {
      isLoggedIn: true,
      token,
    };
    const newState = loginReducer({}, action);
    expect(newState).toEqual(response);
  });
});