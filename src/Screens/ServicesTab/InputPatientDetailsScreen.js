import React, {useEffect, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  AppState,
} from 'react-native';
import {useSelector} from 'react-redux';
import {darkMode, lightMode} from '../../Constants/Colors';
import {widthToDp} from '../../Constants/dimensionsInPixel';
import inputDetailsScreenStyles from '../../Styles/DoctorTab/InputPatientsDetailsScreenStyles/styles';
import CustomHeader from '../../Navigators/CustomHeader';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import DropdownMenuComponent from '../../Components/CommonComponent/DropdownMenuComponent';
import {Icon} from '@rneui/themed';
import InputComponent from '../../Components/CommonComponent/InputComponent';
import MultiSelectDropDownMenuComponent from '../../Components/CommonComponent/DropDownListItems';
import {CustomLoadingComponent1} from '../../Components/CommonComponent/CustomLoadingComponents';

const dummData = [
  {
    _id: 1,
    title: 'Feeling Tired or Poorly',
  },
  {
    _id: 2,
    title: 'Fever',
  },
  {
    _id: 3,
    title: 'Sore throat',
  },
  {
    _id: 4,
    title: 'Sinus Pain',
  },
  {
    _id: 5,
    title: 'Musculoskeletal Symptoms',
  },
  {
    _id: 6,
    title: 'Red Blood in Bowel Movement',
  },
  {
    _id: 7,
    title: 'Diarrhea',
  },
  {
    _id: 8,
    title: 'Chills',
  },
  {
    _id: 9,
    title: 'Constipation',
  },
  {
    _id: 10,
    title: 'Headache',
  },
  {
    _id: 11,
    title: 'Blood in Urine',
  },
  {
    _id: 12,
    title: 'Vaginal Discharge',
  },
  {
    _id: 13,
    title: 'Urinating frequently more than twice a night',
  },
  {
    _id: 14,
    title: 'Neck Symptoms',
  },
  {
    _id: 15,
    title: 'Urinary Loss of Control',
  },
  {
    _id: 16,
    title: 'Vision Problems',
  },
  {
    _id: 17,
    title: 'Pain During Urination',
  },
  {
    _id: 18,
    title: 'Earache',
  },
  {
    _id: 19,
    title: 'Pain in Flank',
  },
  {
    _id: 20,
    title: 'Nasal Symptoms',
  },
  {
    _id: 21,
    title: 'Chest pains or Discomfort',
  },
  {
    _id: 22,
    title: 'Soft Tissue Swelling',
  },
  {
    _id: 23,
    title: 'Palpitations',
  },
  {
    _id: 24,
    title: 'Swelling in both leg',
  },
  {
    _id: 25,
    title: 'Difficulty in Breathing',
  },
  {
    _id: 26,
    title: 'Motor Disturbances',
  },
  {
    _id: 27,
    title: 'Cough',
  },
  {
    _id: 28,
    title: 'Sensory Disturbances',
  },
  {
    _id: 29,
    title: 'Wheezing',
  },
  {
    _id: 30,
    title: 'Anxiety',
  },
  {
    _id: 31,
    title: 'Heartburn',
  },
  {
    _id: 32,
    title: 'Depression',
  },
  {
    _id: 33,
    title: 'Nausea',
  },
  {
    _id: 37,
    title: 'Insomnia',
  },
  {
    _id: 38,
    title: 'Vomiting',
  },
  {
    _id: 39,
    title: 'Skin Lesion',
  },
  {
    _id: 40,
    title: 'Abdominal pain',
  },
  {
    _id: 41,
    title: 'Rashes',
  },
  {
    _id: 42,
    title: 'Black or Tarry Stools',
  },
  {
    _id: 43,
    title: 'Others',
  },
];

const bookingForData = [
  {
    _id: 1,
    title: 'Booking Appointment for yourself.',
  },
  {
    _id: 2,
    title: 'Booking Appointment for others.',
  },
];

const genderData = [
  {
    _id: 1,
    title: 'Male.',
  },
  {
    _id: 2,
    title: 'Female.',
  },
  {
    _id: 3,
    title: 'Others.',
  },
];

const InputPatientDetailsScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  const uId = useSelector(state => state.authStatusR.uId);
  const [bookingFor, setbookingFor] = useState({
    _id: 2,
    title: 'Booking Appointment for others.',
  });
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [pNumber, setPNumber] = useState('');
  const [issues, setIssues] = useState([]);
  const [issueDescription, setissueDescription] = useState('');
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [loadingStatus, setloadingStatus] = useState({status: 2, msg: ''});
  const [data, setdata] = useState({});
  var patientInfo = {};

  const onChangeBookingFor = bookingFor => {
    setbookingFor(bookingFor);
  };

  const onChangeGender = gender => {
    setGender(gender.title);
  };

  const updateSlotsAvailabilityStatus_Doc = value => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      axios
        .post('https://fornaxbackend.herokuapp.com/slotD/updateSlotStatusD', {
          authID: props?.route?.params?.pInfo?.authID,
          id: props?.route?.params?.pInfo?.sdId,
          subId: props?.route?.params?.pInfo?.stId,
          slotType: props?.route?.params?.pInfo?.type,
          value: value,
        })
        .then(response => {
          if (response.data.status === 'success') {
            if (response.data?.code === 203) {
            } else {
              // props.navigation.goBack();
            }
          } else {
          }
        })
        .catch(error => {
          console.log('Axios error (updateSlotsAvailabilityStatus_Doc)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during doctor profile data fetching.',
      );
      console.log('Error is (fetchData): ', error);
    }
  };

  const updateSlotsAvailabilityStatus_Therapist = value => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      axios
        .post('https://fornaxbackend.herokuapp.com/slotT/updateSlotStatusT', {
          authID: props?.route?.params?.pInfo?.authID,
          id: props?.route?.params?.pInfo?.sdId,
          subId: props?.route?.params?.pInfo?.stId,
          slotType: props?.route?.params?.pInfo?.type,
          value: value,
        })
        .then(response => {
          if (response.data.status === 'success') {
            if (response.data?.code === 203) {
            } else {
              // props.navigation.goBack();
            }
          } else {
          }
        })
        .catch(error => {
          console.log(
            'Axios error (updateSlotsAvailabilityStatus_Therapist)',
            error,
          );
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during doctor profile data fetching.',
      );
      console.log(
        'Error is (updateSlotsAvailabilityStatus_Therapist): ',
        error,
      );
    }
  };

  const updateSlotsAvailabilityStatus = () => {
    if (props.route.params === 'Therapist') {
      updateSlotsAvailabilityStatus_Therapist('PO');
    } else {
      updateSlotsAvailabilityStatus_Doc('PO');
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
        updateSlotsAvailabilityStatus('A');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      console.log('Killing the app!');
      subscription.remove();
    };
  }, []);

  const fetchData = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
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
            setdata(response.data.data);
          } else {
            setloadingStatus({status: 3, msg: 'No Data Found.'});
            SimpleToast.show((message = 'No Data Found!'), (duration = 5000));
          }
        })
        .catch(error => {
          setloadingStatus({status: 3, msg: 'No Data Found.'});
          console.log('Axios error (fetchData)', error);
        });
    } catch (error) {
      console.log('Uexpected error occured during user profile data fetching.');
      console.log('Error is (fetchData): ', error);
      setloadingStatus({status: 3, msg: 'No Data Found.'});
    }
  };

  useEffect(() => {
    if (bookingFor._id === 1) {
      fetchData();
    }
  }, [bookingFor]);

  function validate() {
    try {
      if (bookingFor._id === 1) {
        if (data?.gender?.length <= 0 && gender?.length <= 0) {
          return 'Select yout gender.';
        } else if (data?.age === 0 && age.length <= 0) {
          return 'Enter your age.';
        } else if (issues.length <= 0) {
          return 'Select issues from list.';
        } else {
          patientInfo = {
            name: data.name,
            age: data?.age === 0 ? age : data?.age,
            gender: data?.gender?.length <= 0 ? gender : data?.gender,
            phoneNumber: data?.phone_number,
          };
          return true;
        }
      } else {
        if (gender?.length <= 0) {
          return 'Select patient gender.';
        } else if (age.length <= 0) {
          return 'Enter patient age.';
        } else if (name.length <= 0) {
          return 'Enter patient name.';
        } else if (pNumber.length !== 10) {
          return 'Enter valid phone number.';
        } else if (issues.length <= 0) {
          return 'Select issues from list.';
        } else {
          patientInfo = {
            name: name,
            age: age,
            gender: gender,
            phoneNumber: pNumber,
          };
          return true;
        }
      }
    } catch (error) {
      console.log('Error(validate) : ', error);
    }
  }

  const handleBookAppointment = () => {
    res = validate();
    if (res === true) {
      props.navigation.navigate('reviewAppointment', {
        authID: props?.route?.params?.pInfo?.authID,
        type: props?.route?.params?.type,
        appointments: {
          ref: {
            userId: uId,
            spId: props?.route?.params?.pInfo?.authID,
            sdId: props?.route?.params?.pInfo?.sdId,
            stId: props?.route?.params?.pInfo?.stId,
          },
          appointmentInfo: {
            time: props?.route?.params?.pInfo?.time,
            format: props?.route?.params?.pInfo?.format,
            date: props?.route?.params?.pInfo?.date,
            date_show: props?.route?.params?.pInfo?.date_show,
            mode: props?.route?.params?.pInfo?.mode,
            status: 'Upcoming',
            slotType: props?.route?.params?.pInfo?.type,
          },
          patientInfo: {
            name: patientInfo.name,
            age: patientInfo.age,
            gender: patientInfo.gender,
            phoneNumber: patientInfo.phoneNumber,
          },
          currentIssue: {
            issues: issues,
            issuesDescription: issueDescription,
          },
        },
      });
    } else {
      Alert.alert(
        'Validation Error !!',
        res,
        [
          {
            text: 'Ok',
            onPress: () => {},
          },
        ],
        {cancelable: false},
      );
    }
  };

  const floatingBtnSection = () => {
    return (
      <View
        style={[
          inputDetailsScreenStyles.submitAndResetbtncontainer,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <TouchableOpacity
          // onPress={() => resetInputField()}
          style={inputDetailsScreenStyles.resetBtn}>
          <Text style={inputDetailsScreenStyles.btnTitle}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={inputDetailsScreenStyles.bookAppoiment}
          onPress={() => handleBookAppointment()}>
          <Text style={inputDetailsScreenStyles.btnTitle}>Next ...</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onReload = () => {
    fetchData();
  };

  const handleCloseLS = () => {
    setloadingStatus({status: 2, msg: ''});
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
        headerTitle="Patient Details"
        isHome={false}
        navigation={props.navigation}
      />
      <KeyboardAvoidingView
        style={[
          inputDetailsScreenStyles.container,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView style={inputDetailsScreenStyles.contentContainer}>
          <View style={inputDetailsScreenStyles.headerContainer}>
            <Text
              style={[
                inputDetailsScreenStyles.headerTitle,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Assessment Details
            </Text>
          </View>
          <View style={inputDetailsScreenStyles.container2}>
            <Text
              style={[
                inputDetailsScreenStyles.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Appoinment Slot Type
            </Text>
            <DropdownMenuComponent
              style={[
                inputDetailsScreenStyles.container3,
                status
                  ? darkMode.containerbackgroundColor
                  : lightMode.containerbackgroundColor,
                {
                  borderColor: status
                    ? darkMode.screenBackgroundColors.backgroundColor
                    : lightMode.screenBackgroundColors.backgroundColor,
                },
              ]}
              data={bookingForData}
              value={bookingFor}
              setValue={onChangeBookingFor}
              labelField="_id"
              valueField="title"
              placeholder={bookingFor.title}
              maxHeight={widthToDp(20)}
              selectedItemContainerStyle={inputDetailsScreenStyles.container4}
              placeholderStyle={[
                inputDetailsScreenStyles.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
              selectedTextStyle={[
                inputDetailsScreenStyles.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
              rightIconStyle={[
                inputDetailsScreenStyles.rightIconStyle,
                status ? darkMode.tintColors : lightMode.tintColors,
              ]}
            />
          </View>
          <View style={inputDetailsScreenStyles.container2}>
            <Text
              numberOfLines={1}
              style={[
                inputDetailsScreenStyles.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Patient Name
            </Text>
            {bookingFor._id === 2 ? (
              <InputComponent
                value={name}
                onChangeText={setName}
                numberOfLines={1}
                editable
                maxLength={30}
                keyboardType="default"
                placeholder="Enter patient full name"
                leftIcon
                leftIconSize={widthToDp(4.5)}
                iconName="pencil"
                iconType="material-community"
                placeholderTextColor={status ? '#bfbfbf' : '#737373'}
                inputContainerStyle={inputDetailsScreenStyles.container5}
                inputStyle={[
                  inputDetailsScreenStyles.input1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}
              />
            ) : (
              <View
                style={[
                  inputDetailsScreenStyles.container13,
                  {
                    flexDirection: 'row',
                    backgroundColor: status
                      ? darkMode.containerbackgroundColor1.backgroundColor
                      : lightMode.containerbackgroundColor1.backgroundColor,
                    borderColor: status
                      ? darkMode.screenBackgroundColors.backgroundColor
                      : lightMode.screenBackgroundColors.backgroundColor,
                  },
                ]}>
                <Icon
                  type="material-community"
                  name="pencil"
                  size={widthToDp(4.5)}
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                />
                <Text
                  style={[
                    inputDetailsScreenStyles.title6,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {data?.name}
                </Text>
              </View>
            )}
          </View>
          <View style={inputDetailsScreenStyles.container6}>
            <View style={inputDetailsScreenStyles.container7}>
              <Text
                style={[
                  inputDetailsScreenStyles.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Gender
              </Text>
              {bookingFor._id === 2 || data?.gender?.length <= 0 ? (
                <DropdownMenuComponent
                  style={[
                    inputDetailsScreenStyles.container3,
                    status
                      ? darkMode.containerbackgroundColor
                      : lightMode.containerbackgroundColor,
                    {
                      borderColor: status
                        ? darkMode.screenBackgroundColors.backgroundColor
                        : lightMode.screenBackgroundColors.backgroundColor,
                    },
                  ]}
                  data={genderData}
                  value={gender}
                  setValue={onChangeGender}
                  labelField="title"
                  valueField="_id"
                  placeholder={gender.length <= 0 ? 'Select Gender' : gender}
                  maxHeight={widthToDp(20)}
                  selectedItemContainerStyle={
                    inputDetailsScreenStyles.container4
                  }
                  placeholderStyle={[
                    inputDetailsScreenStyles.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}
                  selectedTextStyle={[
                    inputDetailsScreenStyles.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}
                  rightIconStyle={[
                    inputDetailsScreenStyles.rightIconStyle,
                    status ? darkMode.tintColors : lightMode.tintColors,
                  ]}
                />
              ) : (
                <View
                  style={[
                    inputDetailsScreenStyles.container13,
                    {
                      flexDirection: 'row',
                      backgroundColor: status
                        ? darkMode.containerbackgroundColor1.backgroundColor
                        : lightMode.containerbackgroundColor1.backgroundColor,
                      borderColor: status
                        ? darkMode.screenBackgroundColors.backgroundColor
                        : lightMode.screenBackgroundColors.backgroundColor,
                    },
                  ]}>
                  <Icon
                    type="material-community"
                    name="pencil"
                    size={widthToDp(4.5)}
                    color={
                      status
                        ? darkMode.tintColors.tintColor
                        : lightMode.tintColors.tintColor
                    }
                  />
                  <Text
                    style={[
                      inputDetailsScreenStyles.title6,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {data?.gender}
                  </Text>
                </View>
              )}
            </View>
            <View style={inputDetailsScreenStyles.container8}>
              <Text
                numberOfLines={1}
                style={[
                  inputDetailsScreenStyles.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Age
              </Text>
              {bookingFor._id === 2 || data?.age === 0 ? (
                <InputComponent
                  value={age}
                  onChangeText={setAge}
                  numberOfLines={1}
                  editable
                  maxLength={3}
                  keyboardType="numeric"
                  placeholder="Enter age.."
                  leftIcon
                  leftIconSize={widthToDp(4.5)}
                  iconName="pencil"
                  iconType="material-community"
                  placeholderTextColor={status ? '#bfbfbf' : '#737373'}
                  inputContainerStyle={inputDetailsScreenStyles.container5}
                  inputStyle={[
                    inputDetailsScreenStyles.input1,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}
                />
              ) : (
                <View
                  style={[
                    inputDetailsScreenStyles.container13,
                    {
                      flexDirection: 'row',
                      backgroundColor: status
                        ? darkMode.containerbackgroundColor1.backgroundColor
                        : lightMode.containerbackgroundColor1.backgroundColor,
                      borderColor: status
                        ? darkMode.screenBackgroundColors.backgroundColor
                        : lightMode.screenBackgroundColors.backgroundColor,
                    },
                  ]}>
                  <Icon
                    type="material-community"
                    name="pencil"
                    size={widthToDp(4.5)}
                    color={
                      status
                        ? darkMode.tintColors.tintColor
                        : lightMode.tintColors.tintColor
                    }
                  />
                  <Text
                    style={[
                      inputDetailsScreenStyles.title6,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {data?.age}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={inputDetailsScreenStyles.container2}>
            <Text
              numberOfLines={1}
              style={[
                inputDetailsScreenStyles.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Patient Contact Number
            </Text>
            {bookingFor._id === 2 ? (
              <InputComponent
                value={pNumber}
                onChangeText={setPNumber}
                numberOfLines={1}
                editable
                maxLength={10}
                keyboardType="numeric"
                placeholder="Enter contact details"
                leftIcon
                leftIconSize={widthToDp(4.5)}
                iconName="pencil"
                iconType="material-community"
                placeholderTextColor={status ? '#bfbfbf' : '#737373'}
                inputContainerStyle={inputDetailsScreenStyles.container5}
                inputStyle={[
                  inputDetailsScreenStyles.input1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}
              />
            ) : (
              <View
                style={[
                  inputDetailsScreenStyles.container13,
                  {
                    flexDirection: 'row',
                    backgroundColor: status
                      ? darkMode.containerbackgroundColor1.backgroundColor
                      : lightMode.containerbackgroundColor1.backgroundColor,
                    borderColor: status
                      ? darkMode.screenBackgroundColors.backgroundColor
                      : lightMode.screenBackgroundColors.backgroundColor,
                  },
                ]}>
                <Icon
                  type="material-community"
                  name="pencil"
                  size={widthToDp(4.5)}
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                />
                <Text
                  style={[
                    inputDetailsScreenStyles.title6,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {data?.phone_number}
                </Text>
              </View>
            )}
          </View>
          <View style={inputDetailsScreenStyles.container2}>
            <Text
              style={[
                inputDetailsScreenStyles.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Select current issues
            </Text>
            <MultiSelectDropDownMenuComponent
              setData={setIssues}
              data={dummData}
              isDetailsScreen={true}
              title="Select multiple from list..."
              id={props.id}
              label={props.label}
              rootContainerStyles={inputDetailsScreenStyles.container10}
              touchableAreaStyles={[
                inputDetailsScreenStyles.container11,
                status
                  ? darkMode.containerbackgroundColor
                  : lightMode.containerbackgroundColor,
                {
                  borderColor: status
                    ? darkMode.screenBackgroundColors.backgroundColor
                    : lightMode.screenBackgroundColors.backgroundColor,
                },
              ]}
              iconSize={widthToDp(5.6)}
              iconColor={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
              touchableAreaTextStyles={[
                inputDetailsScreenStyles.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
              selectedContentContainerStyle={
                inputDetailsScreenStyles.container12
              }
              selectedItemStyles={inputDetailsScreenStyles.btn1}
              selectedItemTextStyle={inputDetailsScreenStyles.title5}
            />
          </View>
          <View style={inputDetailsScreenStyles.container2}>
            <Text
              numberOfLines={1}
              style={[
                inputDetailsScreenStyles.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Describe patient current issues
            </Text>
            <InputComponent
              value={issueDescription}
              onChangeText={setissueDescription}
              numberOfLines={5}
              multiline
              editable
              maxLength={1000}
              keyboardType="default"
              placeholder="Enter contact details"
              leftIcon
              leftIconSize={widthToDp(4.5)}
              iconName="pencil"
              iconType="material-community"
              placeholderTextColor={status ? '#bfbfbf' : '#737373'}
              inputContainerStyle={inputDetailsScreenStyles.container5}
              inputStyle={[
                inputDetailsScreenStyles.input2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
            />
          </View>
          <CustomLoadingComponent1
            loadingStatus={loadingStatus}
            onReload={onReload}
            onClose={handleCloseLS}
          />
        </ScrollView>
        {floatingBtnSection()}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default InputPatientDetailsScreen;
