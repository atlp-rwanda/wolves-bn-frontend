import React from 'react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ForgotPassword from '../../components/ForgotPassword';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('forgot password component', () => {
  const storeBfr = mockStore({
    reset: {
      message: ''
    },
  });

  storeBfr.dispatch = jest.fn();

  const component = renderer.create(
    <Router>
    <Provider store={storeBfr}>
      <ForgotPassword />
    </Provider>
    </Router>
  );
  it('should render with initial state', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});