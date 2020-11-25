import { combineReducers } from 'redux';

import countReducer from './counter';
import requestsReducer from './requests/requests';

const rootReducer = combineReducers({

  counter: countReducer,
  requests: requestsReducer

});

export default rootReducer;
