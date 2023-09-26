import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import CustomHeader from '../../Navigators/CustomHeader';
import {doctorState} from '../../Constants/allStates';
import SwiperComponent from '../../Components/CommonComponent/SwiperComponent';
import {darkMode, lightMode} from '../../Constants/Colors';
import {useSelector} from 'react-redux';
import {CommonSymptomsComponent} from '../../Components/DoctorTabs/InstantDoctorBookingScreenComponents/InstantDoctorBookingScreenComponent';

const InstantDoctorScreen = props => {
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
        headerTitle="Instant Booking"
        navigation={props.navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SwiperComponent State={doctorState} />
        <CommonSymptomsComponent navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default InstantDoctorScreen;
