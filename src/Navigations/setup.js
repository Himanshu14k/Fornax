import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import DrawerNavigator from './DrawerNavigator';
import {navigationRef} from './navigationServices';

const Setup = () => {
  const authStatus = useSelector(
    state => state.authenticationReducer.authStatus,
  );
  if (authStatus === true) {
    return (
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigator data="home" />
      </NavigationContainer>
    );
  } else if (authStatus === false) {
    return (
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigator data="auth" />
      </NavigationContainer>
    );
  }
};

export default Setup;
