import React, {useEffect, useState} from 'react';
import {View, StatusBar, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';
import {setDispatch} from './src/helper/globalFunctions';
import KeyboardManager from 'react-native-keyboard-manager';
import {DataManager} from './src/helper/dataManager';
import Setup from './src/Navigations/setup';
import Loader from './src/Components/Atoms/loader';

var isAppOpenFromKilled = true;
var isDialogOpened = true;

const App = () => {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(true);
  const [isInternetAvailable, setInternetStatus] = useState(true);

  useEffect(() => {
    setDispatch(dispatch);
    setTimeout(() => {
      setIsHidden(false);
      SplashScreen.hide();
    }, 1000);

    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
      KeyboardManager.setEnableDebugging(false);
      KeyboardManager.setKeyboardDistanceFromTextField(20);
      KeyboardManager.setShouldResignOnTouchOutside(true);
      KeyboardManager.setShouldPlayInputClicks(true);
      KeyboardManager.setEnableAutoToolbar(false);
    }
    const unsubscribe = NetInfo.addEventListener(state => {
      setInternetStatus(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  React.useEffect(() => {
    if (isInternetAvailable && !isAppOpenFromKilled) {
      checkReconnection();
    }
    isAppOpenFromKilled = false;
  }, [isInternetAvailable]);

  const checkReconnection = async () => {
    const tempUserId = await DataManager.getUserId();
    const accessToken = await DataManager.getAccessToken();
    // setTimeout(() => {
    //   if (socket.connected) {
    //     if (tempUserId && accessToken) {
    //     }
    //   } else {
    //     checkReconnection();
    //   }
    // }, 500);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
        hidden={isHidden}
      />
      <Setup />
      <Loader />
      <FlashMessage
        statusBarHeight={StatusBar.currentHeight}
        position="top"
        titleStyle={{
          fontSize: 18,
          color: '#fff',
          textAlign: 'left',
          marginTop: Platform.OS === 'android' ? 0 : 0,
        }}
        textStyle={{
          fontSize: 18,
          fontFamily: 'bold',
          color: '#fff',
          textAlign: 'left',
        }}
      />
    </View>
  );
};

export default App;
