// import { reset } from "../routes/navigationServices"
import {DataManager} from './dataManager';
import {ShowAlertMessage} from './showAlertMessage';
import {popupType} from '../Constants/appConstants';
import {Dimensions} from 'react-native';
import ApiConstants from '../Constants/apiConstants';
import NetInfo from '@react-native-community/netinfo';
import {reset} from '../Navigations/navigationServices';

var purchaseStart = false;
var dispatch = null;
var isDialogOpen = false;
var newLocation = null;
var locationIssueAPIHIT = false;
export const setDispatch = data => {
  dispatch = data;
};

export const logout = (message, type = popupType.info) => {
  dispatch({
    type: ApiConstants.LOGOUT_AUTH,
  });
  reset('auth', 0);
  DataManager.removeData();
  ShowAlertMessage(message, type);
};

export const setIsDialogOpen = data => {
  isDialogOpen = data;
};

export const getIsDialogOpen = () => {
  return isDialogOpen;
};

export const setLocationIssueAPIHIT = data => {
  locationIssueAPIHIT = data;
};

export const getLocationIssueAPIHIT = () => {
  return locationIssueAPIHIT;
};

export const setLocationData = data => {
  newLocation = data;
};

export const getLocationData = () => {
  return newLocation;
};

export const setPurchaseStart = data => {
  purchaseStart = data;
};
export const getPurchaseStart = () => {
  return purchaseStart;
};
export const generateDeviceToken = tokenLen => {
  if (tokenLen == null) {
    tokenLen = 16;
  }
  var text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < tokenLen; ++i)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

export const getInternetStatus = async () => {
  return NetInfo.fetch().then(state => state.isConnected);
};

export const width =
  Dimensions.get('screen').height > Dimensions.get('screen').width
    ? Dimensions.get('screen').width
    : Dimensions.get('screen').height;
export const height =
  Dimensions.get('screen').height > Dimensions.get('screen').width
    ? Dimensions.get('screen').height
    : Dimensions.get('screen').width;
