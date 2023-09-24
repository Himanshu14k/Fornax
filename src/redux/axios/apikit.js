import axios from 'axios';
import {DataManager} from '../../helper/dataManager';

export const url = 'https://fornaxbackend-ufxj.onrender.com/'; //local
// export const url = "http://1.6.98.141:2048/" // dell
// export const url = "http://1.6.98.139:4007/" // Public
// export const temUrl = "http://192.168.3.174:6001/"

export const finalURL = `${url}`;
const APIKit = axios.create({
  baseURL: finalURL,
  timeout: 60000000,
});

APIKit.interceptors.request.use(async config => {
  let accessToken = await DataManager.getAccessToken();
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

export default APIKit;
