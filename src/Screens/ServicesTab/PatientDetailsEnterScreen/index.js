import React, {useEffect, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  AppState,
  Platform,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {DropdownMenuComponent} from '../../../Components/Molecules/DropdownMenu/DropDownMenuComponent';
import CustomTextInput from '../../../Components/Atoms/TextInput/customTextInput';
import MultiSelectDropDownMenuComponent from '../../../Components/Molecules/MultiSelectDropDownMenu/multiSelectDropDownMenu';
import styles from './style';
import Spacer from '../../../Components/Atoms/Spacer';
import {navigate} from '../../../Navigations/navigationServices';

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

const PatientDetailsEnterScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
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

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     if (
  //       appState.current.match(/inactive|background/) &&
  //       nextAppState === 'active'
  //     ) {
  //       console.log('App has come to the foreground!');
  //     } else {
  //       console.log('Closing this screen and all running tasks');
  //       // updateSlotsAvailabilityStatus('A');
  //     }

  //     appState.current = nextAppState;
  //     setAppStateVisible(appState.current);
  //   });

  //   return () => {
  //     console.log('Killing the app!');
  //     subscription.remove();
  //   };
  // }, []);

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
    // let res = validate();
    // if (res === true) {
    //   props.navigation.navigate('reviewAppointment', {
    //     authID: props?.route?.params?.pInfo?.authID,
    //     type: props?.route?.params?.type,
    //     appointments: {
    //       ref: {
    //         userId: uId,
    //         spId: props?.route?.params?.pInfo?.authID,
    //         sdId: props?.route?.params?.pInfo?.sdId,
    //         stId: props?.route?.params?.pInfo?.stId,
    //       },
    //       appointmentInfo: {
    //         time: props?.route?.params?.pInfo?.time,
    //         format: props?.route?.params?.pInfo?.format,
    //         date: props?.route?.params?.pInfo?.date,
    //         date_show: props?.route?.params?.pInfo?.date_show,
    //         mode: props?.route?.params?.pInfo?.mode,
    //         status: 'Upcoming',
    //         slotType: props?.route?.params?.pInfo?.type,
    //       },
    //       patientInfo: {
    //         name: patientInfo.name,
    //         age: patientInfo.age,
    //         gender: patientInfo.gender,
    //         phoneNumber: patientInfo.phoneNumber,
    //       },
    //       currentIssue: {
    //         issues: issues,
    //         issuesDescription: issueDescription,
    //       },
    //     },
    //   });
    // } else {
    //   Alert.alert(
    //     'Validation Error !!',
    //     res,
    //     [
    //       {
    //         text: 'Ok',
    //         onPress: () => {},
    //       },
    //     ],
    //     {cancelable: false},
    //   );
    // }
    navigate('reviewAppointment');
  };

  const floatingBtnSection = () => {
    return (
      <View
        style={[
          styles.submitAndResetbtncontainer,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <TouchableOpacity
          // onPress={() => resetInputField()}
          style={styles.resetBtn}>
          <Text style={styles.btnTitle}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.bookAppoiment}
          onPress={() => handleBookAppointment()}>
          <Text style={styles.btnTitle}>Next ...</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
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
          styles.container,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text
              style={[
                styles.headerTitle,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Assessment Details
            </Text>
          </View>
          {/* <View style={styles.container2}>
            <Text
              style={[
                styles.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Appoinment Slot Type
            </Text>
            <DropdownMenuComponent
              style={[
                styles.container3,
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
              maxHeight={heightToDp(20)}
              selectedItemContainerStyle={styles.container4}
              placeholderStyle={[
                styles.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
              selectedTextStyle={[
                styles.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
              rightIconStyle={[
                styles.rightIconStyle,
                status ? darkMode.tintColors : lightMode.tintColors,
              ]}
            />
          </View> */}
          <View style={styles.container2}>
            <Text
              numberOfLines={1}
              style={[
                styles.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Patient Name
            </Text>
            {bookingFor._id === 2 ? (
              <CustomTextInput
                value={name}
                onChangeText={setName}
                numberOfLines={1}
                editable
                maxLength={30}
                keyboardType="default"
                placeholder="Enter patient full name"
                placeholderTextColor={status ? '#bfbfbf' : '#737373'}
                inputContainerStyle={styles.container5}
                inputStyle={[
                  styles.input1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}
              />
            ) : (
              <View
                style={[
                  styles.container13,
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
                    styles.title6,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {data?.name}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.container6}>
            <View style={styles.container7}>
              <Text
                style={[
                  styles.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Gender
              </Text>
              {bookingFor._id === 2 || data?.gender?.length <= 0 ? (
                <DropdownMenuComponent
                  style={[
                    styles.container3,
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
                  selectedItemContainerStyle={styles.container4}
                  placeholderStyle={[
                    styles.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}
                  selectedTextStyle={[
                    styles.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}
                  rightIconStyle={[
                    styles.rightIconStyle,
                    status ? darkMode.tintColors : lightMode.tintColors,
                  ]}
                />
              ) : (
                <View
                  style={[
                    styles.container13,
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
                      styles.title6,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {data?.gender}
                  </Text>
                </View>
              )}
            </View>
            <Spacer width={widthToDp(3)} />
            <View style={styles.container8}>
              <Text
                numberOfLines={1}
                style={[
                  styles.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Age
              </Text>
              {bookingFor._id === 2 || data?.age === 0 ? (
                <CustomTextInput
                  value={age}
                  onChangeText={setAge}
                  numberOfLines={1}
                  editable
                  maxLength={3}
                  keyboardType="numeric"
                  placeholder="Enter age.."
                  placeholderTextColor={status ? '#bfbfbf' : '#737373'}
                  inputContainerStyle={styles.container5}
                  inputStyle={[
                    styles.input1,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}
                />
              ) : (
                <View
                  style={[
                    styles.container13,
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
                      styles.title6,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {data?.age}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.container2}>
            <Text
              numberOfLines={1}
              style={[
                styles.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Patient Contact Number
            </Text>
            {bookingFor._id === 2 ? (
              <CustomTextInput
                value={pNumber}
                onChangeText={setPNumber}
                numberOfLines={1}
                editable
                maxLength={10}
                keyboardType="numeric"
                placeholder="Enter contact details"
                placeholderTextColor={status ? '#bfbfbf' : '#737373'}
                inputContainerStyle={styles.container5}
                inputStyle={[
                  styles.input1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}
              />
            ) : (
              <View
                style={[
                  styles.container13,
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
                    styles.title6,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {data?.phone_number}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.container2}>
            <Text
              style={[
                styles.title2,
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
              rootContainerStyles={styles.container10}
              touchableAreaStyles={[
                styles.container11,
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
                styles.title4,
                // status ? darkMode.textColor : lightMode.textColor,
              ]}
              selectedContentContainerStyle={styles.container12}
              selectedItemStyles={styles.btn1}
              selectedItemTextStyle={styles.title5}
            />
          </View>
          <View style={styles.container2}>
            <Text
              numberOfLines={1}
              style={[
                styles.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Describe patient current issues
            </Text>
            <CustomTextInput
              value={issueDescription}
              onChangeText={setissueDescription}
              numberOfLines={5}
              multiline
              editable
              maxLength={1000}
              keyboardType="default"
              placeholder="Describe patient current issues"
              placeholderTextColor={status ? '#bfbfbf' : '#737373'}
              inputContainerStyle={[styles.container5, styles.container14]}
              inputStyle={[
                styles.input2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
            />
          </View>
        </ScrollView>
        {floatingBtnSection()}
      </KeyboardAvoidingView>
    </View>
  );
};

export default PatientDetailsEnterScreen;
