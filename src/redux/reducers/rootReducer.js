import { combineReducers } from 'redux';

import requestsReducer from './requests/requests';
import loginReducer from './login.reducer';
import passwordReducer from './password.reducer';

const rootReducer = combineReducers({

  requests: requestsReducer,
  login: loginReducer,
  reset: passwordReducer,

});

export default rootReducer;
