import {takeLatest} from 'redux-saga/effects';
import {
  confirmSignUpOtpSaga,
  forgetPasswordSaga,
  loginApiSaga,
  newPasswordSaga,
  signUpSaga,
  verifyOtpSaga,
} from './authSaga';
import ApiConstants from '../../Constants/apiConstants';

export function* rootSaga() {
  yield takeLatest(ApiConstants.API_LOGIN_LOAD, loginApiSaga);
  yield takeLatest(ApiConstants.API_SIGNUP_LOAD, signUpSaga);
  yield takeLatest(
    ApiConstants.API_CONFIRM_SIGNUP_OTP_LOAD,
    confirmSignUpOtpSaga,
  );
  yield takeLatest(ApiConstants.API_FORGET_PASSWORD_LOAD, forgetPasswordSaga);
  yield takeLatest(ApiConstants.API_VERIFY_OTP_LOAD, verifyOtpSaga);
  yield takeLatest(ApiConstants.API_NEW_PASSWORD_LOAD, newPasswordSaga);
}
