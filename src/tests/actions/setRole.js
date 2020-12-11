/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { userRole } from '../../redux/actions/userRole';
import { GET_LIST } from '../../redux/actions/actionTypes';
import AuthService from '../../services/auth.service';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('getting users List action', () => {
  beforeEach(() => {
    store.clearActions();
  });

  let email, role;
  it('should have type Set Role', (done) => {
    expect(userList()).toEqual(
      expect.objectContaining({
        type: GET_LIST,
        payload: { users: response.data },
      }),
      done()
    );
  });
});