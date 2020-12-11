import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { findUser } from '../../redux/actions/auth/forgot.password';
import { FIND_USER } from '../../redux/actions/actionTypes';
import AuthService from '../../services/auth.service';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('login actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  let email;

  it('should have type Login', (done) => {
    expect(findUser(email)).toEqual(
      expect.objectContaining({
        type: FIND_USER,
        payload: AuthService.findUserService(email),
      }),
      done()
    );
  });
});