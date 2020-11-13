import React from 'react';
import configureMockStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Login from '../../components/Login';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

describe('Login Hooks', () => {
  let wrapper;
  const store = mockStore({});
  const handleSubmit = jest.fn;
  beforeEach(() => {
    wrapper = mount(
    <Router>
    <Provider store={store}>
    <Login handleSubmit={handleSubmit} />
    </Provider>
    </Router>);
  });
  store.dispatch = jest.fn();
});

describe('Login component', () => {
  const storeBfrLogin = mockStore({
    login: {
      isLoggedIn: false,
      token: null
    },
  });

  storeBfrLogin.dispatch = jest.fn();

  const component = renderer.create(
    <Router>
    <Provider store={storeBfrLogin}>
      <Login />
    </Provider>
    </Router>
  );

  it('should render with initial state', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});