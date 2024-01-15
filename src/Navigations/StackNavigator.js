import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {heightToDp, widthToDp} from '../Utils/dimensionsInPixel';
import {TabNavigator} from './TabNavigator';
import NotificationScreen from '../Screens/NotificationTab/NotificationScreen/NotificationScreen';
import RequestedDCSPServiceScreen from '../Screens/NotificationTab/RequestedDCSPServiceScreen/requestedDCSPServiceScreen';
import UpcomingAppoinmentDetailsScreen from '../Screens/HistoryTab/UpcomingAppoinmentDetailsScreen';
import DifferentOnGoingCaringServiceScreen from '../Screens/HistoryTab/DifferentOnGoingCaringServiceScreen';
import DifferentCaringServiceHistoryScreen from '../Screens/HistoryTab/DifferentCaringServiceHistoryScreen';
import AllAppoinmentsScreen from '../Screens/HistoryTab/AllAppoinmentsScreen';
import DoctorListScreen from '../Screens/ServicesTab/DoctorListScreen';
import PatientDetailsEnterScreen from '../Screens/ServicesTab/PatientDetailsEnterScreen';
import ReviewAppointmentDetailsScreen from '../Screens/ServicesTab/ReviewAppointmentDetailsScreen';
import SpecialitiesScreen from '../Screens/ServicesTab/SpecialitiesScreen';
import DoctorProfileScreen from '../Screens/ServicesTab/DoctorProfileScreen';
import ViewAllSlotsScreen from '../Screens/ServicesTab/ViewAllSlotsScreen';
import DifferentCareProviderScreen from '../Screens/HomeTab/DifferentCareProviderScreen';
import DiffCaringSPDetailsScreen from '../Screens/HomeTab/DiffCaringSPDetailsScreen';
import PaymentDetailScreen from '../Screens/ProfileTab/PaymentDetailsScreen';
import SignAndSecurityScreen from '../Screens/ProfileTab/SignAndSecurityScreen';
import HelpCenterScreen from '../Screens/ProfileTab/HelpCenterScreen';
import PrivacyPolicyScreen from '../Screens/ProfileTab/PrivacyPolicyScreen';
import TermsAndConditionScreen from '../Screens/ProfileTab/TermsAndConditionScreen';
import AboutUsScreen from '../Screens/ProfileTab/AboutsUsScreen';

const mainStack = createStackNavigator();
class MainStack extends Component {
  render() {
    return (
      <mainStack.Navigator
        initialRouteName="tabNav"
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
          name="tabNav"
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
        <mainStack.Screen
          name="doctorList"
          component={DoctorListScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="patientDetailsEnter"
          component={PatientDetailsEnterScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="reviewAppointment"
          component={ReviewAppointmentDetailsScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="specialities"
          component={SpecialitiesScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="doctorProfile"
          component={DoctorProfileScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="viewAllSlots"
          component={ViewAllSlotsScreen}
          options={{headerShown: false}}
        />

        <mainStack.Screen
          name="differentCareProvider"
          component={DifferentCareProviderScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="diffCaringSPDetails"
          component={DiffCaringSPDetailsScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="paymentHistory"
          component={PaymentDetailScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="signAndSecurity"
          component={SignAndSecurityScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="helpCenter"
          component={HelpCenterScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="privacyPolicy"
          component={PrivacyPolicyScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="termsAndCondition"
          component={TermsAndConditionScreen}
          options={{headerShown: false}}
        />
        <mainStack.Screen
          name="aboutUs"
          component={AboutUsScreen}
          options={{headerShown: false}}
        />
      </mainStack.Navigator>
    );
  }
}

export {MainStack};
