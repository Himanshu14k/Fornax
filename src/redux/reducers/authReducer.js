// import {DataManager} from '../../helper/dataManager';

import ApiConstants from '../../Constants/apiConstants';

const initialState = {
  authStatus: false,
  name: '',
  uId: '',
  authToken: '',
  receivedOtpStatus: false,
};

function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case ApiConstants.API_LOGIN_SUCCESS:
      return {
        ...state,
        authStatus: true,
        authToken: action?.payload?.token,
        name: action?.payload?.name,
        uId: action?.payload?.uId,
      };
    case ApiConstants.API_LOGIN_ERROR:
      return {
        ...state,
        authStatus: false,
        authToken: '',
        name: '',
        uId: '',
      };
    case ApiConstants.API_SIGNUP_SUCCESS:
      return {
        ...state,
      };
    case ApiConstants.API_SIGNUP_ERROR:
      return {
        ...state,
      };
    case ApiConstants.API_FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        receivedOtpStatus: action?.payload,
      };
    case ApiConstants.API_FORGET_PASSWORD_ERROR:
      return {
        ...state,
        receivedOtpStatus: action?.payload,
      };
    case ApiConstants.API_VERIFY_OTP_SUCCESS:
      return {
        ...state,
        receivedOtpStatus: action?.payload,
      };
    case ApiConstants.API_VERIFY_OTP_ERROR:
      return {
        ...state,
        receivedOtpStatus: action?.payload,
      };
    case ApiConstants.API_NEW_PASSWORD_SUCCESS:
      return {
        ...state,
      };
    case ApiConstants.API_NEW_PASSWORD_ERROR:
      return {
        ...state,
      };
    case ApiConstants.LOGOUT_AUTH:
      return {
        ...state,
        authStatus: false,
        isRegistered: false,
        name: '',
        spId: '',
        type: '',
      };

    default:
      return state;
  }
}

export default authenticationReducer;
