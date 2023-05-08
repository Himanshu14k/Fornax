import {combineReducers} from 'redux';
import themeReducers from './themeReducers/themeReducers';
import {authStatusReducer} from './AuthStatusReducers/authStatusReducer';
import {
  hsCachesDocReducer,
  hsCachesTheraistReducer,
} from './CachesDataReducers/homeScreenCacheReducers';

const rootReducers = combineReducers({
  themeR: themeReducers,
  authStatusR: authStatusReducer,
  hsCachesDocR: hsCachesDocReducer,
  hsCachesTheraistR: hsCachesTheraistReducer,
});

export default rootReducers;
