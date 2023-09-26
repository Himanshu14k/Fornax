import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {
  ClinicOrHospitalsDetailsTabComponent,
  DoctorsTabComponent,
  JobsTabComponent,
} from '../../Components/DoctorTabs/ClinicOrHospitalDetailsScreenComponents/ClinicOrHospitalDetailsScreenComponent';
import {darkMode, lightMode} from '../../Constants/Colors';
import {adjustedFontSize, widthToDp} from '../../Constants/dimensionsInPixel';
import CustomHeader from '../../Navigators/CustomHeader';
import {ProfileSectionComponent} from '../../Components/CommonComponent/ServiceProviderProfileSectionComponent';
const Tab = createMaterialTopTabNavigator();

const ClinicOrHospitalsDetailsScreen = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader navigation={props.navigation} />
      <ProfileSectionComponent
        name="Fortis Hospital"
        profilePicSquare
        coverPic={require('../../Assets/Images/MedicalBanner1.jpg')}
        profilePic={require('../../Assets/Images/Himanshu.jpeg')}
      />
      <View
        style={{
          flex: 1,
          marginHorizontal: widthToDp(1),
          borderRadius: 10,
          marginBottom: widthToDp(1),
        }}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: adjustedFontSize(11),
              fontWeight: 'bold',
              color: status
                ? darkMode.textColor.color
                : lightMode.textColor.color,
            },
            tabBarStyle: {
              backgroundColor: status
                ? darkMode.containerbackgroundColor.backgroundColor
                : lightMode.containerbackgroundColor.backgroundColor,
              borderRadius: 10,
            },
            tabBarItemStyle: {height: widthToDp(12), width: widthToDp(32)},
            tabBarScrollEnabled: true,
          }}
          initialRouteName="Details">
          <Tab.Screen
            name="Details"
            children={() => (
              <ClinicOrHospitalsDetailsTabComponent
                navigation={props.navigation}
              />
            )}
          />
          <Tab.Screen
            name="Doctors"
            children={() => (
              <DoctorsTabComponent navigation={props.navigation} />
            )}
          />
          <Tab.Screen
            name="Jobs"
            children={() => <JobsTabComponent navigation={props.navigation} />}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default ClinicOrHospitalsDetailsScreen;
