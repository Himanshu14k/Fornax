import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import DrawerNavigator from './src/Navigations/DrawerNavigator';
import AuthenticationStack from './src/Navigations/AuthStatckNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const authStatus = useSelector(state => state.authStatusR.authStatus);

  if (authStatus === true) {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar
            animated
            backgroundColor="#00d9ffd6"
            barStyle="dark-content"
          />
          <DrawerNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  } else if (authStatus === false) {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar
            animated
            backgroundColor="#00d9ffd6"
            barStyle="dark-content"
          />
          <AuthenticationStack />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar
            animated
            backgroundColor="#00d9ffd6"
            barStyle="dark-content"
          />
          <DrawerNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    );
    //return console.log('No Stack Matched!');
  }
};

export default App;
