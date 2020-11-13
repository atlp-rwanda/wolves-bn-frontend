import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { login } from '../../redux/actions/login';
import { LOGIN } from '../../redux/actions/actionTypes';
import AuthService from '../../services/auth.service';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('login actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  let email, password;

  it('should have type Login', (done) => {
    expect(login(email, password)).toEqual(
      expect.objectContaining({
        type: LOGIN,
        payload: AuthService.login(email, password),
      }),
      done()
    );
  });
});