import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/rootReducer';

const middlewares = [thunk, promise];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
export default store;
