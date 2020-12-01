import { combineReducers } from 'redux';
<<<<<<< HEAD
import roleReducer from './user.role';
||||||| merged common ancestors
=======
<<<<<<< HEAD
||||||| merged common ancestors

<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> view and update profile
>>>>>>> view and update profile
import requestsReducer from './requests/requests';
import loginReducer from './login.reducer';
import registerReducer from './register';
import passwordReducer from './password.reducer';
<<<<<<< HEAD
||||||| merged common ancestors
||||||| merged common ancestors
import countReducer from './counter';
=======
import countReducer from './counter/counter';
=======
||||||| merged common ancestors
import countReducer from './counter';
=======
import countReducer from './counter/counter';
||||||| merged common ancestors

import countReducer from './counter/counter';
=======
>>>>>>> view and update profile
>>>>>>> view and update profile
import profileReducer from './profile/profile';

const rootReducer = combineReducers({
<<<<<<< HEAD
||||||| merged common ancestors
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> view and update profile
  login: loginReducer,
  reset: passwordReducer,
<<<<<<< HEAD
  requests: requestsReducer,
  signUp: registerReducer,
<<<<<<< HEAD
  setRole: roleReducer,
||||||| merged common ancestors
=======
||||||| merged common ancestors
  requests: requestsReducer

||||||| merged common ancestors

  counter: countReducer,

=======
  counter: countReducer,
=======
  requests: requestsReducer

||||||| merged common ancestors

  counter: countReducer,

=======
  counter: countReducer,
||||||| merged common ancestors
  counter: countReducer,
=======
>>>>>>> view and update profile
>>>>>>> view and update profile
>>>>>>> view and update profile
  userProfile: profileReducer
});

export default rootReducer;
