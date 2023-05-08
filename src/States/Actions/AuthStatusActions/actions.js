import {AUTHENTICATION_STATUS} from './types';

export const setAuthStatus = (status, authToken, uId) => {
  return {
    type: AUTHENTICATION_STATUS,
    authStatus: status,
    authToken: authToken,
    uId: uId,
  };
};
