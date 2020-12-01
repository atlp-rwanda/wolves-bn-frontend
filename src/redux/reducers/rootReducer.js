import { combineReducers } from 'redux';
import roleReducer from './user.role';
import requestsReducer from './requests/requests';
import loginReducer from './login.reducer';
import registerReducer from './register';
import profileReducer from './profile/profile';

const rootReducer = combineReducers({
  login: loginReducer,
  reset: passwordReducer,
  profile: profileReducer,
  requests: requestsReducer,
  signUp: registerReducer,
  setRole: roleReducer,
  requests: requestsReducer,
});

export default rootReducer;
