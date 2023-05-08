import AsyncStorage from '@react-native-async-storage/async-storage';
import {DARK_THEME} from './types';

export const themeMode = () => {
  return {
    type: DARK_THEME,
  };
};
