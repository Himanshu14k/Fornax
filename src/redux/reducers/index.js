import {combineReducers} from 'redux';
import authenticationReducer from './authReducer';
import otherReducer from './otherReducers';
import servicesReducer from './servicesReducers'
const rootReducer = combineReducers({
  authenticationReducer,
  otherReducer,
  servicesReducer
});

export default rootReducer;
