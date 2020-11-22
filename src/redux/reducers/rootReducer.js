import { combineReducers } from 'redux';
import requestsReducer from './requests/requests';
import loginReducer from './login.reducer';
import registerReducer from './register';
import passwordReducer from './password.reducer';

const rootReducer = combineReducers({

  login: loginReducer,
  reset: passwordReducer,
  requests: requestsReducer,
  signUp: registerReducer,

});

export default rootReducer;
