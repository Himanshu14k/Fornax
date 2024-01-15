import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  DoctorProfileComponent,
  SlotsListComponent_I,
  SlotsListComponent_T,
} from './component';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const Tab = createMaterialTopTabNavigator();

const ViewAllSlotsScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <View
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
          initialRouteName={props.route.params?.tabName}>
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
    </View>
  );
};

export default ViewAllSlotsScreen;
