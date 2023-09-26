import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {doctorState} from '../../../Constants/allStates';
import SwiperComponent from '../../../Components/Molecules/Swiper/swiper';
import {
  HealthcareServicesComponent,
  PriventiveCareComponent,
} from './components';
import {darkMode, lightMode} from '../../../Constants/themeColors';

const ServicesScreen = props => {
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
        isHome={true}
        navigation={props.navigation}
        msgAndNotification
        notificationRoute="notification"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SwiperComponent State={doctorState} />
        <HealthcareServicesComponent
          isDark={status}
          doctorState={doctorState}
          navigation={props.navigation}
        />
        <PriventiveCareComponent navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServicesScreen;
