import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducers from './Reducers/rootReducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
// import {encryptTransform} from 'redux-persist-transform-encrypt';

// const encrypter = encryptTransform({
//   secretKey: 'my-super-secret-key',
//   onError: function (error) {
//     console.log(
//       'error arrise during encryption of redux store and error is : ',
//       error,
//     );
//   },
// });

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //transform: [encrypter],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(logger));
  let persistor = persistStore(store);
  return {store, persistor};
};

//const Stores = createStore(
//reducers,
//applyMiddleware(logger)
//)

//export default Stores;
