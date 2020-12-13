import { combineReducers } from 'redux';
import roleReducer from './user.role';
import requestsReducer from './requests/requests';
import createRequestReducer from './requests/create/createRequest';
import loginReducer from './login.reducer';
import registerReducer from './register';
import profileReducer from './profile/profile';
import passwordReducer from './password/password.reducer';
import resetPassReducer from './password/reset.password.reducer';
import destination from './destination.reducer';
import locationsReducer from './locations/locations';

const rootReducer = combineReducers({
  locations: locationsReducer,
  login: loginReducer,
  requests: requestsReducer,
  createRequest: createRequestReducer,
  signUp: registerReducer,
  setRole: roleReducer,
  userProfile: profileReducer,
  findUser: passwordReducer,
  resetPass: resetPassReducer,
  topDestination: destination
});

export default rootReducer;
