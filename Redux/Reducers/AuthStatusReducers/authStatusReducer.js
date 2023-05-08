import {AUTHENTICATION_STATUS} from '../../Actions/AuthStatusActions/types';

const initialState = {
  authStatus: false,
  authToken: {},
  uId: '',
};

const authStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION_STATUS:
      return {
        ...state,
        authStatus: action.authStatus,
        authToken: action.authToken,
        uId: action.uId,
      };
    default:
      return state;
  }
};

export {authStatusReducer};
