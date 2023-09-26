import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  Alert,
  AppState,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProfileComponent from '../../Components/DoctorTabs/DoctorProfileScreenComponent/ProfileComponent';
import {
  BillDetailsComponent,
  BookedAppointmentOverviewComponent_Doc,
  PaymentMethodComponent,
} from '../../Components/DoctorTabs/PatientAppoinmentComponent/BillAndPaymentMethodComponent';
import ReviewAppoinmentComponent from '../../Components/DoctorTabs/PatientAppoinmentComponent/ReviewAppoinmentComponent';
import SubmissionButtonSection from '../../Components/DoctorTabs/PatientAppoinmentComponent/SubmissionButtonSection';
import {darkMode, lightMode} from '../../Constants/Colors';
import {widthToDp} from '../../Constants/dimensionsInPixel';
import CustomHeader from '../../Navigators/CustomHeader';
import {clinicDetails} from '../../Styles/DoctorProfileStyles/styles';
import {setAppoinmentData} from '../../../Redux/Actions/DataActions/actions';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {
  CustomLoadingComponent1,
  CustomLoadingComponent2,
} from '../../Components/CommonComponent/CustomLoadingComponents';

const ReviewAppointmentDetailsScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [data, setdata] = useState({});
  const uId = useSelector(state => state.authStatusR.uId);
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});
  const [loadingStatus1, setloadingStatus1] = useState({status: 2, msg: ''});
  const [mode, setMode] = useState(1);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [modalStatus, setmodalStatus] = useState(false);
  const [userData, setuserData] = useState({});

  const fetchUserData = () => {
    try {
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/user/getProfile', {
          params: {
            id: uId,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus({status: 2, msg: 'Completed'});
            setuserData(response.data.data);
          } else {
            setloadingStatus({status: 3, msg: 'No Data Found.'});
          }
        })
        .catch(error => {
          setloadingStatus({status: 3, msg: 'No Data Found.'});
          console.log('Axios error (fetchUserData)', error);
        });
    } catch (error) {
      console.log('Uexpected error occured during user profile data fetching.');
      console.log('Error is (fetchUserData): ', error);
      setloadingStatus({status: 3, msg: 'No Data Found.'});
    }
  };

  const fetchData_Doc = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/pd/getDocProfile', {
          params: {
            id: props?.route?.params?.authID,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus({status: 2, msg: 'Completed'});
            setdata(response.data.data);
          } else {
            setloadingStatus({status: 3, msg: 'No Data Found.'});
            SimpleToast.show((message = 'No Data Found!'), (duration = 5000));
          }
        })
        .catch(error => {
          setloadingStatus({status: 3, msg: 'No Data Found.'});
          console.log('Axios error (fetchData_Doc)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during doctor profile data fetching.',
      );
      console.log('Error is (fetchData_Doc): ', error);
      setloadingStatus({status: 3, msg: 'No Data Found.'});
    }
  };

  const fetchData_Therapist = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/pd/getTherapistProfile', {
          params: {
            id: props?.route?.params?.authID,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus({status: 2, msg: 'Completed'});
            setdata(response.data.data);
          } else {
            setloadingStatus({status: 3, msg: 'No Data Found.'});
            SimpleToast.show((message = 'No Data Found!'), (duration = 5000));
          }
        })
        .catch(error => {
          setloadingStatus({status: 3, msg: 'No Data Found.'});
          console.log('Axios error (fetchData_Therapist)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during therapist profile data fetching.',
      );
      console.log('Error is (fetchData_Therapist): ', error);
      setloadingStatus({status: 3, msg: 'No Data Found.'});
    }
  };

  const fetchSpData = () => {
    if (props.route.params?.type === 'Therapist') {
      fetchData_Therapist();
    } else {
      fetchData_Doc();
    }
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      } else {
        console.log('Closing this screen and all running tasks');
        updateSlotsAvailabilityStatus('A', false);
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      console.log('Killing the app!');
      subscription.remove();
    };
  }, []);

  const insertData_Doc = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus1({status: 1, msg: 'Appointment Booking...'});
      axios
        .post('https://fornaxbackend.herokuapp.com/uBA/insertDA', {
          authID: props?.route?.params?.authID,
          appointments: props?.route?.params?.appointments,
          sp: {
            name: data?.general_Info?.name,
            profilePic: data?.general_Info?.profilePic,
            specialities: data?.professional_Info?.specialities,
            yoe: data?.professional_Info?.yoe,
          },
          user: {
            name: userData?.name,
            profilePic: userData?.profilePic,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus1({status: 2, msg: 'Completed'});
            updateSlotsAvailabilityStatus('NA', true);
          } else {
            setloadingStatus1({status: 3, msg: 'Appointment Booking failed.'});
            SimpleToast.show((message = 'Booking failed!'), (duration = 5000));
          }
        })
        .catch(error => {
          setloadingStatus1({status: 3, msg: 'Appointment Booking failed.'});
          console.log('Axios error (insertData_Doc)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during doctor appointment Booking data insertion.',
      );
      console.log('Error is (insertData_Doc): ', error);
      setloadingStatus1({status: 3, msg: 'No Details Found.'});
    }
  };

  const insertData_Therapist = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus1({status: 1, msg: 'Appointment Booking...'});
      axios
        .post('https://fornaxbackend.herokuapp.com/uBA/insertTA', {
          authID: props?.route?.params?.authID,
          appointments: props?.route?.params?.appointments,
          sp: {
            name: data?.general_Info?.name,
            profilePic: data?.general_Info?.profilePic,
            specialities: data?.professional_Info?.specialities,
            yoe: data?.professional_Info?.yoe,
          },
          user: {
            name: userData?.name,
            profilePic: userData?.profilePic,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus1({status: 2, msg: 'Completed'});
            updateSlotsAvailabilityStatus('NA', true);
          } else {
            setloadingStatus1({status: 3, msg: 'Appointment Booking failed.'});
            SimpleToast.show((message = 'Booking failed!'), (duration = 5000));
          }
        })
        .catch(error => {
          setloadingStatus1({status: 3, msg: 'Appointment Booking failed.'});
          console.log('Axios error (insertData_Therapist)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during therapist appointment Booking data insertion.',
      );
      console.log('Error is (insertData_Therapist): ', error);
      setloadingStatus1({status: 3, msg: 'No Details Found.'});
    }
  };

  const insertData = () => {
    if (props?.route?.params?.type === 'Therapist') {
      insertData_Therapist();
    } else {
      insertData_Doc();
    }
  };

  const updateSlotsAvailabilityStaus_Doc = (value, loadStatus) => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      loadStatus &&
        setloadingStatus1({status: 1, msg: 'Appointment Booking...'});
      axios
        .post('https://fornaxbackend.herokuapp.com/slotD/updateSlotStatusD', {
          authID: props?.route?.params?.authID,
          id: props?.route?.params?.appointments?.ref?.sdId,
          subId: props?.route?.params?.appointments?.ref?.stId,
          slotType:
            props?.route?.params?.appointments?.appointmentInfo?.slotType,
          value: value,
        })
        .then(response => {
          if (response.data.status === 'success') {
            if (response.data?.code === 203) {
            } else {
              if (value === 'NA') {
                loadStatus &&
                  setloadingStatus1({
                    status: 2,
                    msg: 'Appointment Booked Successfully.',
                  });
                Alert.alert(
                  'Success !!',
                  'Appointment Booked Successfully.',
                  [
                    {
                      text: 'Ok',
                      onPress: () => setmodalStatus(true),
                    },
                  ],
                  {cancelable: false},
                );
              } else {
                loadStatus &&
                  setloadingStatus1({
                    status: 2,
                    msg: 'Appointment Booked Successfully.',
                  });
                props.navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'specialities',
                    },
                  ],
                });
              }
            }
          } else {
            loadStatus &&
              setloadingStatus1({
                status: 3,
                msg: 'Appointment Booking Failed.',
              });
            SimpleToast.show(
              (message = 'No Details Found!'),
              (duration = 5000),
            );
          }
        })
        .catch(error => {
          loadStatus &&
            setloadingStatus1({status: 3, msg: 'Appointment Booking Failed.'});
          console.log('Axios error (updateSlotsAvailabilityStaus_Doc)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during appointment slot status updation.',
      );
      console.log('Error is (updateSlotsAvailabilityStaus_Doc): ', error);
      loadStatus &&
        setloadingStatus1({status: 3, msg: 'Appointment Booking Failed.'});
    }
  };

  const updateSlotsAvailabilityStatus_Therapist = (value, loadStatus) => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      loadStatus &&
        setloadingStatus1({status: 1, msg: 'Appointment Booking...'});
      axios
        .post('https://fornaxbackend.herokuapp.com/slotT/updateSlotStatusT', {
          authID: props?.route?.params?.authID,
          id: props?.route?.params?.appointments?.ref?.sdId,
          subId: props?.route?.params?.appointments?.ref?.stId,
          slotType:
            props?.route?.params?.appointments?.appointmentInfo?.slotType,
          value: value,
        })
        .then(response => {
          if (response.data.status === 'success') {
            if (response.data?.code === 203) {
            } else {
              if (value === 'NA') {
                loadStatus &&
                  setloadingStatus1({
                    status: 2,
                    msg: 'Appointment Booked Successfully.',
                  });
                Alert.alert(
                  'Success !!',
                  'Appointment Booked Successfully.',
                  [
                    {
                      text: 'Ok',
                      onPress: () => setmodalStatus(true),
                    },
                  ],
                  {cancelable: false},
                );
              } else {
                loadStatus &&
                  setloadingStatus1({
                    status: 2,
                    msg: 'Appointment Booked Successfully.',
                  });
                props.navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'specialities',
                    },
                  ],
                });
              }
            }
          } else {
            loadStatus &&
              setloadingStatus1({
                status: 3,
                msg: 'Appointment Booking Failed.',
              });
            SimpleToast.show(
              (message = 'No Details Found!'),
              (duration = 5000),
            );
          }
        })
        .catch(error => {
          loadStatus &&
            setloadingStatus1({status: 3, msg: 'Appointment Booking Failed.'});
          console.log(
            'Axios error (updateSlotsAvailabilityStatus_Therapist)',
            error,
          );
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during appointment slot status updation.',
      );
      console.log(
        'Error is (updateSlotsAvailabilityStatus_Therapist): ',
        error,
      );
      loadStatus &&
        setloadingStatus1({status: 3, msg: 'Appointment Booking Failed.'});
    }
  };

  const updateSlotsAvailabilityStatus = (value, loadStatus) => {
    if (props?.route?.params?.type === 'Therapist') {
      updateSlotsAvailabilityStatus_Therapist(value, loadStatus);
    } else {
      updateSlotsAvailabilityStaus_Doc(value, loadStatus);
    }
  };

  useEffect(() => {
    fetchSpData();
    fetchUserData();
  }, []);

  const handleBookAppointment = () => {
    insertData();
  };

  const clinicDetailsSection = () => {
    return (
      <View
        style={[
          clinicDetails.clinicInfoSectionContainer,
          {marginHorizontal: widthToDp(1)},
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <View style={clinicDetails.clinicInfoFirstRowContainer}>
          <View style={clinicDetails.clinicNameContainer}>
            <Text
              adjustsFontSizeToFit
              style={[
                clinicDetails.clinicName,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Astral Skin World
            </Text>
          </View>
          <View style={clinicDetails.clinicAdressContainer}>
            <Text
              adjustsFontSizeToFit
              style={[
                clinicDetails.clinicAdress,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Kharar, punjab (140301) fghrh rrtydg tregrgre
            </Text>
          </View>
          <View style={clinicDetails.clinicFeesContainer}>
            <Text
              adjustsFontSizeToFit
              style={[
                clinicDetails.clinicFees,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              600 In-clinic Fees
            </Text>
          </View>
          <View style={clinicDetails.clinicRatingAndVerificationContainer}>
            <View style={clinicDetails.clinicRatingContainer}>
              <Text
                adjustsFontSizeToFit
                style={[
                  clinicDetails.clinicRating,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Rating
              </Text>
            </View>
            <View style={clinicDetails.clinicVerificationContainer}>
              <Text
                adjustsFontSizeToFit
                style={[
                  clinicDetails.clinicRating,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Verified
              </Text>
            </View>
          </View>
        </View>
        <View style={clinicDetails.clinicImageContainer}>
          <Image
            style={clinicDetails.clinicImage}
            source={require('../../Banner/MedicalBanner1.jpg')}
          />
        </View>
      </View>
    );
  };

  const onReload = () => {
    fetchData();
    fetchUserData();
  };

  const onReload1 = () => {
    handleBookAppointment();
  };

  const handleCloseLS = () => {
    Alert.alert(
      'Alert !!',
      'Are you sure want to cancel booking ?',
      [
        {
          text: 'Yes',
          onPress: () => updateSlotsAvailabilityStaus('A', false),
        },
      ],
      {cancelable: false},
    );
  };

  const handleAfterAppointmentBooked = () => {
    setmodalStatus(false);
    props.navigation.popToTop();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader
        headerTitle="Review Appointment"
        isHome={false}
        navigation={props.navigation}
      />
      <>
        {loadingStatus.status === 2 ? (
          <>
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
          </>
        ) : (
          <CustomLoadingComponent2
            loadingStatus={loadingStatus}
            setloadingStatus={onReload}
          />
        )}
        <CustomLoadingComponent1
          loadingStatus={loadingStatus1}
          onReload={onReload1}
          onClose={handleCloseLS}
        />
      </>
      <BookedAppointmentOverviewComponent_Doc
        modalStatus={modalStatus}
        onChangeModalStatus={handleAfterAppointmentBooked}
      />
    </SafeAreaView>
  );
};

export default ReviewAppointmentDetailsScreen;
