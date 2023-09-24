import {put, call} from 'redux-saga/effects';
import {DataManager} from '../../helper/dataManager';
import {getInternetStatus, logout} from '../../helper/globalFunctions';
import networkUtils from '../../helper/networkUtils';
import {ShowAlertMessage} from '../../helper/showAlertMessage';
import {
  confirmSignUpOtpApi,
  forgotPasswordApi,
  loginApi,
  newPasswordApi,
  signUpApi,
  verifyOtpApi,
} from '../axios/axiosApi';
import ApiConstants from '../../Constants/apiConstants';
import {popupType} from '../../Constants/appConstants';
import {navigate, reset} from '../../Navigations/navigationServices';
import {ValidationConstants} from '../../Constants/validationConstants';

export function* loginApiSaga(action) {
  const internetStatus = yield call(getInternetStatus);
  if (internetStatus) {
    try {
      const isConnected = yield call(networkUtils);
      if (isConnected) {
        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: true,
        });
        let response = yield call(loginApi, action?.payload);
        let {result, status} = response;

        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: false,
        });
        if (status === 1) {
          ShowAlertMessage(result.message, popupType.info);
          DataManager.setAccessToken(result?.data?.token);
          yield put({
            type: ApiConstants.API_LOGIN_SUCCESS,
            payload: result?.data,
          });
          reset('home', 0);
        } else if (status === 2) {
          ShowAlertMessage(result.message, popupType.error);
        } else {
          ShowAlertMessage(result.message, popupType.error);
        }
      } else {
        ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
      }
    } catch (error) {
      yield put({
        type: ApiConstants.UPDATE_LODING_STATE,
        data: false,
      });
      ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
    }
  } else {
    ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
  }
}

export function* signUpSaga(action) {
  const internetStatus = yield call(getInternetStatus);
  if (internetStatus) {
    try {
      const isConnected = yield call(networkUtils);
      if (isConnected) {
        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: true,
        });
        let response = yield call(signUpApi, action?.payload);
        let {result, status} = response;

        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: false,
        });
        if (status === 1) {
          ShowAlertMessage(result.message, popupType.info);
          yield put({
            type: ApiConstants.API_SIGNUP_SUCCESS,
            payload: true,
          });
          navigate('confirmation', action?.payload);
        } else if (status === 2) {
          yield put({
            type: ApiConstants.API_SIGNUP_ERROR,
            payload: false,
          });
          ShowAlertMessage(result.message, popupType.error);
        } else {
          yield put({
            type: ApiConstants.API_SIGNUP_ERROR,
            payload: false,
          });
          ShowAlertMessage(result.message, popupType.error);
        }
      } else {
        yield put({
          type: ApiConstants.API_SIGNUP_ERROR,
          payload: false,
        });
        ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
      }
    } catch (error) {
      yield put({
        type: ApiConstants.UPDATE_LODING_STATE,
        data: false,
      });
      ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
    }
  } else {
    ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
  }
}

export function* confirmSignUpOtpSaga(action) {
  const internetStatus = yield call(getInternetStatus);
  if (internetStatus) {
    try {
      const isConnected = yield call(networkUtils);
      if (isConnected) {
        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: true,
        });
        let response = yield call(confirmSignUpOtpApi, action?.payload);
        let {result, status} = response;

        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: false,
        });
        if (status === 1) {
          ShowAlertMessage(result.message, popupType.info);
          yield put({
            type: ApiConstants.API_CONFIRM_SIGNUP_OTP_SUCCESS,
            payload: true,
          });
          reset('auth');
        } else if (status === 2) {
          yield put({
            type: ApiConstants.API_CONFIRM_SIGNUP_OTP_ERROR,
            payload: false,
          });
          ShowAlertMessage(result.message, popupType.error);
        } else {
          yield put({
            type: ApiConstants.API_CONFIRM_SIGNUP_OTP_ERROR,
            payload: false,
          });
          ShowAlertMessage(result.message, popupType.error);
        }
      } else {
        yield put({
          type: ApiConstants.API_CONFIRM_SIGNUP_OTP_ERROR,
          payload: false,
        });
        ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
      }
    } catch (error) {
      yield put({
        type: ApiConstants.UPDATE_LODING_STATE,
        data: false,
      });
      ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
    }
  } else {
    ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
  }
}

export function* forgetPasswordSaga(action) {
  const internetStatus = yield call(getInternetStatus);
  if (internetStatus) {
    try {
      const isConnected = yield call(networkUtils);
      if (isConnected) {
        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: true,
        });
        let response = yield call(forgotPasswordApi, action?.payload);
        let {result, status} = response;

        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: false,
        });
        console.log('res 1 ', response);
        if (status === 1) {
          ShowAlertMessage(result.message, popupType.info);
          yield put({
            type: ApiConstants.API_FORGET_PASSWORD_SUCCESS,
            payload: true,
          });
        } else if (status === 2) {
          yield put({
            type: ApiConstants.API_FORGET_PASSWORD_ERROR,
            payload: false,
          });
          ShowAlertMessage(result.message, popupType.error);
        } else {
          yield put({
            type: ApiConstants.API_FORGET_PASSWORD_ERROR,
            payload: false,
          });
          ShowAlertMessage(result.message, popupType.error);
        }
      } else {
        yield put({
          type: ApiConstants.API_FORGET_PASSWORD_ERROR,
          payload: false,
        });
        ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
      }
    } catch (error) {
      yield put({
        type: ApiConstants.UPDATE_LODING_STATE,
        data: false,
      });
      ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
    }
  } else {
    ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
  }
}

export function* verifyOtpSaga(action) {
  const internetStatus = yield call(getInternetStatus);
  if (internetStatus) {
    try {
      const isConnected = yield call(networkUtils);
      if (isConnected) {
        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: true,
        });
        let response = yield call(verifyOtpApi, action?.payload);
        let {result, status} = response;

        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: false,
        });
        console.log('res 2 ', response);
        if (status === 1) {
          ShowAlertMessage(result.message, popupType.info);
          yield put({
            type: ApiConstants.API_VERIFY_OTP_SUCCESS,
            payload: false,
          });
          navigate('newPassword');
        } else if (status === 2) {
          yield put({
            type: ApiConstants.API_VERIFY_OTP_ERROR,
            payload: true,
          });
          ShowAlertMessage(result.message, popupType.error);
        } else {
          yield put({
            type: ApiConstants.API_VERIFY_OTP_ERROR,
            payload: true,
          });
          ShowAlertMessage(result.message, popupType.error);
        }
      } else {
        yield put({
          type: ApiConstants.API_VERIFY_OTP_ERROR,
          payload: true,
        });
        ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
      }
    } catch (error) {
      yield put({
        type: ApiConstants.UPDATE_LODING_STATE,
        data: false,
      });
      ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
    }
  } else {
    ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
  }
}

export function* newPasswordSaga(action) {
  const internetStatus = yield call(getInternetStatus);
  if (internetStatus) {
    try {
      const isConnected = yield call(networkUtils);
      if (isConnected) {
        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: true,
        });
        let response = yield call(newPasswordApi, action?.payload);
        let {result, status} = response;

        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: false,
        });
        console.log('res 3 ', response);
        if (status === 1) {
          ShowAlertMessage(result.message, popupType.info);
          yield put({
            type: ApiConstants.API_NEW_PASSWORD_SUCCESS,
            payload: true,
          });
          reset('auth');
        } else if (status === 2) {
          yield put({
            type: ApiConstants.API_NEW_PASSWORD_ERROR,
            payload: false,
          });
          ShowAlertMessage(result.message, popupType.error);
        } else {
          yield put({
            type: ApiConstants.API_NEW_PASSWORD_ERROR,
            payload: false,
          });
          ShowAlertMessage(result.message, popupType.error);
        }
      } else {
        yield put({
          type: ApiConstants.API_NEW_PASSWORD_ERROR,
          payload: false,
        });
        ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
      }
    } catch (error) {
      yield put({
        type: ApiConstants.UPDATE_LODING_STATE,
        data: false,
      });
      ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
    }
  } else {
    ShowAlertMessage(ValidationConstants.internetCheck, popupType.error);
  }
}
