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
import {getDocsListSaga, getTherapistListSaga} from './servicesSaga';

export function* rootSaga() {
  //Auth
  yield takeLatest(ApiConstants.API_LOGIN_LOAD, loginApiSaga);
  yield takeLatest(ApiConstants.API_SIGNUP_LOAD, signUpSaga);
  yield takeLatest(
    ApiConstants.API_CONFIRM_SIGNUP_OTP_LOAD,
    confirmSignUpOtpSaga,
  );
  yield takeLatest(ApiConstants.API_FORGET_PASSWORD_LOAD, forgetPasswordSaga);
  yield takeLatest(ApiConstants.API_VERIFY_OTP_LOAD, verifyOtpSaga);
  yield takeLatest(ApiConstants.API_NEW_PASSWORD_LOAD, newPasswordSaga);

  //Services
  yield takeLatest(ApiConstants.API_GET_DOC_LIST_LOAD, getDocsListSaga);
  yield takeLatest(ApiConstants.API_THERAPIST_LIST_LOAD, getTherapistListSaga);
}
