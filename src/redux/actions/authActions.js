import ApiConstants from '../../Constants/apiConstants';

export const loginAction = payload => {
  return {
    type: ApiConstants.API_LOGIN_LOAD,
    payload,
  };
};

export const signUpAction = payload => {
  return {
    type: ApiConstants.API_SIGNUP_LOAD,
    payload,
  };
};

export const confirmSignUpOtpAction = payload => {
  return {
    type: ApiConstants.API_CONFIRM_SIGNUP_OTP_LOAD,
    payload,
  };
};

export const forgetPasswordAction = payload => {
  return {
    type: ApiConstants.API_FORGET_PASSWORD_LOAD,
    payload,
  };
};
export const verifyOtpAction = payload => {
  return {
    type: ApiConstants.API_VERIFY_OTP_LOAD,
    payload,
  };
};
export const newPasswordAction = payload => {
  return {
    type: ApiConstants.API_NEW_PASSWORD_LOAD,
    payload,
  };
};
