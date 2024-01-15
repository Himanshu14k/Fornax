import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import axios from 'axios';
import SimpleToast from 'react-native-simple-toast';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';
import {RatingAndReviewComponent} from '../../../Components/Organisms/RatingAndReviewComponent/ratingAndReviewComponent';
import {
  DoctorDetailsComponent,
  ProfileSectionComponent,
  SlotsComponent,
} from './components';

const Tab = createMaterialTopTabNavigator();

const DoctorProfileScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [data, setdata] = useState({});
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});

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
        headerTitle={props?.route?.params?.prevRouteName + ' Profile'}
      />
      <ProfileSectionComponent
        name={props?.route?.params?.name}
        // data={data?.general_Info}
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
            tabBarItemStyle: {height: widthToDp(12), width: widthToDp(33)},
            tabBarScrollEnabled: true,
          }}
          initialRouteName="Details">
          <Tab.Screen
            name="Details"
            children={() => (
              <DoctorDetailsComponent
                data={data}
                name={props?.route?.params?.name}
                loadingStatus={loadingStatus}
                setloadingStatus={setloadingStatus}
                navigation={props.navigation}
              />
            )}
          />
          <Tab.Screen
            name="Slots"
            children={() => (
              <SlotsComponent
                // id={props.route.params.id}
                navigation={props.navigation}
              />
            )}
          />
          {/* <Tab.Screen
            name="Activity"
            children={() => (
              <PostAndArtcileListComponent navigation={props.navigation} />
            )}
          /> */}
          <Tab.Screen
            name="Review"
            children={() => (
              <RatingAndReviewComponent navigation={props.navigation} />
            )}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default DoctorProfileScreen;
