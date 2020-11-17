import { combineReducers } from 'redux';

import countReducer from './counter';

const rootReducer = combineReducers({

  counter: countReducer,

});

export default rootReducer;