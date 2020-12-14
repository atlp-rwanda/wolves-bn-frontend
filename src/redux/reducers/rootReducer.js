import { combineReducers } from 'redux';
import roleReducer from './user.role';
import requestsReducer from './requests/requests';
import loginReducer from './login.reducer';
import registerReducer from './register';
import profileReducer from './profile/profile';
import passwordReducer from './password/password.reducer';
import resetPassReducer from './password/reset.password.reducer';
import destination from './destination.reducer';
import accommodationReducer from './accommodation.reducer';
import accommodationCreateReducer from './accommodationCreate.reducer';
import accommodationUpdateReducer from './accommodationUpdate';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  requests: requestsReducer,
  signUp: registerReducer,
  setRole: roleReducer,
  userProfile: profileReducer,
  findUser: passwordReducer,
  resetPass: resetPassReducer,
  topDestination: destination,
  accommodation: accommodationReducer,
  accommodationCreate: accommodationCreateReducer,
  accommodationUpdate: accommodationUpdateReducer,
  location: locationReducer

});

export default rootReducer;
