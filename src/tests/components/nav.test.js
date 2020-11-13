import React from 'react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Nav from '../../components/nav/nav';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Nav component', () => {
  const store = mockStore({});

  store.dispatch = jest.fn();

  const component = renderer.create(
    <Router>
    <Provider store={store}>
      <Nav />
    </Provider>
    </Router>
  );
  it('should render nav with initial state', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});