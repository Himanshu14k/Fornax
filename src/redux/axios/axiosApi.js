import {Method} from './apiMethods';

let header1 = {
  'Content-Type': 'multipart/form-data',
};
// 'Accept': 'application/json',
let header2 = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const loginApi = data => Method.POST('user/login', data, header2);
export const signUpApi = data => Method.POST('user/signUp', data, header2);
export const confirmSignUpOtpApi = data =>
  Method.POST('user/confirmSignUpOtp', data, header2);
export const forgotPasswordApi = data =>
  Method.POST('user/forgetPassword', data, header2);
export const verifyOtpApi = data =>
  Method.POST('user/validateOtp', data, header2);
export const newPasswordApi = data =>
  Method.POST('user/resetNewPassword', data, header2);
export const getCommunityGuidelinesApi = data =>
  Method.GET('Miscellaneous/GetCommunityGuideLine', data, header2);
