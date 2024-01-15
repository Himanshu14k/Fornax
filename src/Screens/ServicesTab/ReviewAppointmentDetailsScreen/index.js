import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, SafeAreaView, AppState, View} from 'react-native';
import {useSelector} from 'react-redux';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {
  BillDetailsComponent,
  BookedAppointmentOverviewComponent_Doc,
  PaymentMethodComponent,
  ReviewAppoinmentComponent,
  ProfileComponent,
  SubmissionButtonSection,
} from './component';

const ReviewAppointmentDetailsScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [data, setdata] = useState({});
  const [mode, setMode] = useState(1);
  const appState = useRef(AppState.currentState);
  const [modalStatus, setmodalStatus] = useState(false);

  useEffect(() => {
    // const subscription = AppState.addEventListener('change', nextAppState => {
    //   if (
    //     appState.current.match(/inactive|background/) &&
    //     nextAppState === 'active'
    //   ) {
    //     console.log('App has come to the foreground!');
    //   } else {
    //     console.log('Closing this screen and all running tasks');
    //     updateSlotsAvailabilityStatus('A', false);
    //   }
    //   appState.current = nextAppState;
    //   setAppStateVisible(appState.current);
    // });
    // return () => {
    //   console.log('Killing the app!');
    //   subscription.remove();
    // };
  }, []);

  const insertData = () => {
    // if (props?.route?.params?.type === 'Therapist') {
    //   insertData_Therapist();
    // } else {
    //   insertData_Doc();
    // }
  };

  const handleBookAppointment = () => {
    insertData();
  };

  const handleAfterAppointmentBooked = () => {
    setmodalStatus(false);
    props.navigation.popToTop();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader headerTitle="Review Appointment" isHome={false} />

      <ScrollView style={{flex: 1}}>
        <ProfileComponent data={data} isDark={status} />
        <ReviewAppoinmentComponent
          data={props?.route?.params?.appointments}
          isDark={status}
        />
        <PaymentMethodComponent
          mode={mode}
          setMode={setMode}
          data={data}
          isDark={status}
        />
        <BillDetailsComponent data={data} mode={mode} isDark={status} />
      </ScrollView>
      <SubmissionButtonSection
        isDark={status}
        navigation={props.navigation}
        onClickEvent={handleBookAppointment}
      />
      <BookedAppointmentOverviewComponent_Doc
        modalStatus={modalStatus}
        onChangeModalStatus={handleAfterAppointmentBooked}
      />
    </View>
  );
};

export default ReviewAppointmentDetailsScreen;
