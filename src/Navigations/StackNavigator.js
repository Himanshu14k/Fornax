import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {heightToDp, widthToDp} from '../Utils/dimensionsInPixel';
import {TabNavigator} from './TabNavigator';
import NotificationScreen from '../Screens/NotificationTab/NotificationScreen/NotificationScreen';
import RequestedDCSPServiceScreen from '../Screens/NotificationTab/RequestedDCSPServiceScreen/requestedDCSPServiceScreen';
import UpcomingAppoinmentDetailsScreen from '../Screens/HistoryTab/UpcomingAppoinmentDetailsScreen/UpcomingAppoinmentDetailsScreen';
import DifferentOnGoingCaringServiceScreen from '../Screens/HistoryTab/DifferentOnGoingCaringServiceScreen/DifferentOnGoingCaringServiceScreen';
import DifferentCaringServiceHistoryScreen from '../Screens/HistoryTab/DifferentCaringServiceHistoryScreen/DifferentCaringServiceHistoryScreen';
import AllAppoinmentsScreen from '../Screens/HistoryTab/AllAppoinmentsScreen/allAppoinmentsScreen';

const mainStack = createStackNavigator();
class MainStack extends Component {
  render() {
    return (
      <mainStack.Navigator
        initialRouteName="home"
        screenOptions={({navigation}) => ({
          headerMode: 'screen',
          headerTintColor: 'black',
          headerStyle: {backgroundColor: '#00d9ff', height: heightToDp(6)},
          headerRight: () => (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  width: widthToDp(9),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="search" size={28} onPress={() => {}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text numberOfLines={1} adjustsFontSizeToFit>
                    Chandigarh
                  </Text>
                  <Text numberOfLines={1} adjustsFontSizeToFit>
                    140301
                  </Text>
                </View>
                <Icon name="keyboard-arrow-down" size={20} onPress={() => {}} />
              </TouchableOpacity>
            </View>
          ),
        })}>
        <mainStack.Screen
          name="home"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="notification"
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="requestedDCSPService"
          component={RequestedDCSPServiceScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="upcomingAppoinmentDetails"
          component={UpcomingAppoinmentDetailsScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="differentOnGoingCaringService"
          component={DifferentOnGoingCaringServiceScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="differentCaringServiceHistory"
          component={DifferentCaringServiceHistoryScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="allAppoinments"
          component={AllAppoinmentsScreen}
          options={{headerShown: false}}
        />
      </mainStack.Navigator>
    );
  }
}

export {MainStack};
