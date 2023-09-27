import {put, call} from 'redux-saga/effects';
import {DataManager} from '../../helper/dataManager';
import {getInternetStatus, logout} from '../../helper/globalFunctions';
import networkUtils from '../../helper/networkUtils';
import {ShowAlertMessage} from '../../helper/showAlertMessage';
import {
  confirmSignUpOtpApi,
  forgotPasswordApi,
  getDocsListApi,
  getTherapistListApi,
  loginApi,
  newPasswordApi,
  signUpApi,
  verifyOtpApi,
} from '../axios/axiosApi';
import ApiConstants from '../../Constants/apiConstants';
import {popupType} from '../../Constants/appConstants';
import {navigate, reset} from '../../Navigations/navigationServices';
import {ValidationConstants} from '../../Constants/validationConstants';

export function* getDocsListSaga(action) {
  const internetStatus = yield call(getInternetStatus);
  if (internetStatus) {
    try {
      const isConnected = yield call(networkUtils);
      if (isConnected) {
        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: true,
        });
        let response = yield call(getDocsListApi, action?.payload);
        let {result, status} = response;
        console.log('ressssss', response);

        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: false,
        });
        if (status === 1) {
          yield put({
            type: ApiConstants.API_GET_DOC_LIST_SUCCESS,
            payload: result?.data,
          });
        } else if (status === 2) {
          ShowAlertMessage(result.message, popupType.error);
          yield put({
            type: ApiConstants.API_GET_DOC_LIST_ERROR,
            payload: null,
          });
          logout('Session Expired, Please login again.', popupType.error);
        } else {
          ShowAlertMessage(result.message, popupType.error);
          yield put({
            type: ApiConstants.API_GET_DOC_LIST_ERROR,
            payload: null,
          });
        }
      } else {
        yield put({
          type: ApiConstants.API_GET_DOC_LIST_ERROR,
          payload: null,
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

export function* getTherapistListSaga(action) {
  const internetStatus = yield call(getInternetStatus);
  if (internetStatus) {
    try {
      const isConnected = yield call(networkUtils);
      if (isConnected) {
        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: true,
        });
        let response = yield call(getTherapistListApi, action?.payload);
        let {result, status} = response;

        yield put({
          type: ApiConstants.UPDATE_LODING_STATE,
          data: false,
        });
        if (status === 1) {
          yield put({
            type: ApiConstants.API_THERAPIST_LIST_SUCCESS,
            payload: true,
          });
        } else if (status === 2) {
          yield put({
            type: ApiConstants.API_THERAPIST_LIST_ERROR,
            payload: null,
          });
          ShowAlertMessage(result.message, popupType.error);
          logout('Session Expired, Please login again.', popupType.error);
        } else {
          yield put({
            type: ApiConstants.API_THERAPIST_LIST_ERROR,
            payload: null,
          });
          ShowAlertMessage(result.message, popupType.error);
        }
      } else {
        yield put({
          type: ApiConstants.API_THERAPIST_LIST_ERROR,
          payload: null,
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
