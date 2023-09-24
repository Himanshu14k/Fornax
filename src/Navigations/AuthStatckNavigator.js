import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ConfirmationScreen from '../Screens/PreAuthTab/ConfirmationScreen/ConfirmationScreen';
import LoginScreen from '../Screens/PreAuthTab/LoginScreen/LoginScreen';
import NewPasswordScreen from '../Screens/PreAuthTab/NewPasswordScreen/NewPasswordScreen';
import SignUpScreen from '../Screens/PreAuthTab/SignUpScreen';
import ResetPassScreen from '../Screens/PreAuthTab/ResetPassScreen/ResetPassScreen';

const authStack = createStackNavigator();
const AuthenticationStack = props => {
  return (
    <authStack.Navigator initialRouteName="login">
      <authStack.Screen
        name="login"
        //children={props => <LoginScreen {...props} />}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <authStack.Screen
        name="signUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <authStack.Screen
        name="confirmation"
        component={ConfirmationScreen}
        options={{headerShown: false}}
      />
      <authStack.Screen
        name="reset"
        component={ResetPassScreen}
        options={{headerShown: false}}
      />
      <authStack.Screen
        name="newPassword"
        component={NewPasswordScreen}
        options={{headerShown: false}}
      />
    </authStack.Navigator>
  );
};

export default AuthenticationStack;
