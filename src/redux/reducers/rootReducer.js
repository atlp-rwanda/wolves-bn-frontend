import { combineReducers } from 'redux';
import roleReducer from './user.role';
import requestsReducer from './requests/requests';
import loginReducer from './login.reducer';
import registerReducer from './register';
import passwordReducer from './password.reducer';
import profileReducer from './profile/profile';

const rootReducer = combineReducers({
  login: loginReducer,
  reset: passwordReducer,
  requests: requestsReducer,
  signUp: registerReducer,
  setRole: roleReducer,
  userProfile: profileReducer
});

export default rootReducer;
