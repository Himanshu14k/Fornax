import {combineReducers} from 'redux';
import authenticationReducer from './authReducer';
import otherReducer from './otherReducers';
const rootReducer = combineReducers({
  authenticationReducer,
  otherReducer,
});

export default rootReducer;
