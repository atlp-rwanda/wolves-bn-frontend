import React from 'react';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import Profile from '../../components/Profile';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('profile component', () => {
  store.dispatch = jest.fn();

  const component = renderer.create(
    <Router>
    <Provider store={store}>
      <Profile />
    </Provider>
    </Router>
  );
  it('should render with initial state', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});