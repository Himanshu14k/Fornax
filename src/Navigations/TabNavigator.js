import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {darkMode, lightMode} from '../Utils/Colors';
import {adjustedFontSize, widthToDp} from '../Utils/dimensionsInPixel';
import {IMAGE} from '../Images/Image';
import ProfileScreen from '../Screens/ProfileTab/ProfileScreen/profileScreen';
import PaymentDetailScreen from '../Screens/ProfileTab/PaymentDetailsScreen/paymentDetailScreen';
import AllAppoinmentsScreen from '../Screens/HistoryTab/AllAppoinmentsScreen/allAppoinmentsScreen';
import NotificationScreen from '../Screens/NotificationTab/NotificationScreen/NotificationScreen';
import HomeScreen from '../Screens/HomeTab/HomeScreen/homeScreen';
import DifferentCareProviderScreen from '../Screens/HomeTab/DifferentCareProviderScreen/differentCareProviderScreen';
import DiffCaringSPDetailsScreen from '../Screens/HomeTab/DiffCaringSPDetailsScreen/diffCaringSPDetailsScreen';

const profileStack = createStackNavigator();
const ProfileStack = props => {
  return (
    <profileStack.Navigator>
      <profileStack.Screen
        name="profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <profileStack.Screen
        name="paymentDetail"
        component={PaymentDetailScreen}
        options={{headerShown: false}}
      />
    </profileStack.Navigator>
  );
};

const historyStack = createStackNavigator();
const HistoryStack = props => {
  return (
    <historyStack.Navigator>
      <historyStack.Screen
        name="allAppoinmentHistory"
        component={AllAppoinmentsScreen}
        options={{headerShown: false}}
      />
    </historyStack.Navigator>
  );
};

const notificationStack = createStackNavigator();
const NotificationStack = props => {
  return (
    <notificationStack.Navigator>
      <notificationStack.Screen
        name="notifications"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
    </notificationStack.Navigator>
  );
};

const homeStack = createStackNavigator();
const HomeStack = props => {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <homeStack.Screen
        name="differentCareProvider"
        component={DifferentCareProviderScreen}
        options={{headerShown: false}}
      />
      <homeStack.Screen
        name="diffCaringSPDetails"
        component={DiffCaringSPDetailsScreen}
        options={{headerShown: false}}
      />
    </homeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? {type: 'antdesign', name: 'home', color: '#00d9ff'}
              : {
                  type: 'antdesign',
                  name: 'home',
                  color: status
                    ? lightMode.screenBackgroundColors.backgroundColor
                    : darkMode.screenBackgroundColors.backgroundColor,
                };
          } else if (route.name === 'Notification') {
            iconName = focused
              ? IMAGE.ICON_DOCTOR_BLACK
              : IMAGE.ICON_DOCTOR_WHITE;
          } else if (route.name === 'History') {
            iconName = focused
              ? {
                  type: 'material',
                  name: 'history',
                  color: '#00d9ff',
                }
              : {
                  type: 'material',
                  name: 'history',
                  color: status
                    ? lightMode.screenBackgroundColors.backgroundColor
                    : darkMode.screenBackgroundColors.backgroundColor,
                };
          } else if (route.name === 'Profile') {
            iconName = focused
              ? {
                  type: 'material-community',
                  name: 'account-circle',
                  color: '#00d9ff',
                }
              : {
                  type: 'material-community',
                  name: 'account-circle',
                  color: status
                    ? lightMode.screenBackgroundColors.backgroundColor
                    : darkMode.screenBackgroundColors.backgroundColor,
                };
          }
          if (route.name === 'Home') {
            return (
              <Icon
                type={iconName.type}
                name={iconName.name}
                color={iconName.color}
                size={widthToDp(6)}
              />
            );
          } else if (route.name === 'Notification') {
            return (
              <Image
                source={iconName}
                style={{
                  width: widthToDp(6),
                  height: widthToDp(6),
                  tintColor: focused
                    ? '#00d9ff'
                    : status
                    ? lightMode.screenBackgroundColors.backgroundColor
                    : darkMode.screenBackgroundColors.backgroundColor,
                }}
                resizeMode="contain"
              />
            );
          } else if (route.name === 'History') {
            return (
              <Icon
                type={iconName.type}
                name={iconName.name}
                color={iconName.color}
                size={widthToDp(6)}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Icon
                type={iconName.type}
                name={iconName.name}
                color={iconName.color}
                size={widthToDp(6)}
              />
            );
          }
        },
        tabBarStyle: {
          backgroundColor: status
            ? darkMode.containerbackgroundColor.backgroundColor
            : lightMode.containerbackgroundColor.backgroundColor,
        },
        tabBarLabelStyle: {fontSize: adjustedFontSize(9), fontWeight: '500'},
        tabBarActiveTintColor: '#00d9ff',
        tabBarInactiveTintColor: status
          ? lightMode.screenBackgroundColors.backgroundColor
          : darkMode.screenBackgroundColors.backgroundColor,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="History"
        component={HistoryStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export {TabNavigator};
