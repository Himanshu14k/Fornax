import {DataManagersKeys} from './dataManagersKeys';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DataManager = {
  async setAccessToken(token) {
    return await AsyncStorage.setItem(DataManagersKeys.access_token, token);
  },
  async getAccessToken() {
    return await AsyncStorage.getItem(DataManagersKeys.access_token);
  },
  async removeData() {
    await AsyncStorage.clear();
  },
  async setUserId(userId) {
    return await AsyncStorage.setItem(DataManagersKeys.user_id, userId);
  },
  async getUserId() {
    return await AsyncStorage.getItem(DataManagersKeys.user_id);
  },
  async setUserName(userName) {
    return await AsyncStorage.setItem(DataManagersKeys.userName, userName);
  },
  async getUserName() {
    return await AsyncStorage.getItem(DataManagersKeys.userName);
  },
};
