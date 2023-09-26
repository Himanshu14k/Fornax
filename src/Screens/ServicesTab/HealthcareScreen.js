import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import CustomHeader from '../../Navigators/CustomHeader';
import {doctorState} from '../../Constants/allStates';
import SwiperComponent from '../../Components/CommonComponent/SwiperComponent';
import {
  HealthcareServicesComponenet,
  PriventiveCareComponent,
} from '../../Components/DoctorTabs/DoctorsScreenComponents';
import {darkMode, lightMode} from '../../Constants/Colors';
import {useSelector} from 'react-redux';

const HealthcareScreen = props => {
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
        <HealthcareServicesComponenet
          isDark={status}
          doctorState={doctorState}
          navigation={props.navigation}
        />
        <PriventiveCareComponent navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HealthcareScreen;
