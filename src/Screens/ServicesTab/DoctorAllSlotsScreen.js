import React from 'react';
import {View, SafeAreaView} from 'react-native';
import CustomHeader from '../../Navigators/CustomHeader';
import {darkMode, lightMode} from '../../Constants/Colors';
import {useSelector} from 'react-redux';
import {adjustedFontSize, widthToDp} from '../../Constants/dimensionsInPixel';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  DoctorProfileComponent,
  SlotsListComponent_I,
  SlotsListComponent_T,
} from '../../Components/DoctorTabs/DoctorAllSlotsScreenComponents/DoctorAllSlotsScreenComponent';

const Tab = createMaterialTopTabNavigator();

const DoctorAllSlotsScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader
        navigation={props.navigation}
        headerTitle="Appoinments Slots"
      />
      <DoctorProfileComponent
        data={props?.route?.params?.data}
        navigation={props.navigation}
      />
      <View
        style={{
          flex: 1,
          marginHorizontal: widthToDp(1),
          borderRadius: 10,
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
            tabBarItemStyle: {height: widthToDp(12), width: widthToDp(60)},
            tabBarScrollEnabled: true,
          }}
          initialRouteName={props.route.params.tabName}>
          <Tab.Screen
            name="Teli Consultation"
            children={() => (
              <SlotsListComponent_T
                data={props?.route?.params?.data}
                navigation={props.navigation}
              />
            )}
          />
          <Tab.Screen
            name="In-Person Consultation"
            children={() => (
              <SlotsListComponent_I
                navigation={props.navigation}
                data={props?.route?.params?.data}
              />
            )}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default DoctorAllSlotsScreen;
