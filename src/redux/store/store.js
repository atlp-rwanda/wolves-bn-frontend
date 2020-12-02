import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from '../reducers/user.role';

const middleWare = [thunk];
const initialState = {};
const store = createStore(
  authReducer,
  initialState,
  composeWithDevTools(applicationCache(...middleWare))
);

export default store;