import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Alert, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import moment from 'moment';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {ProfileSectionComponent1} from '../../../Components/Organisms/ProfileSection/profileSection';
import {RatingAndReviewComponent} from '../../../Components/Organisms/RatingAndReviewComponent/ratingAndReviewComponent';
import {Icon} from '@rneui/themed';
import {
  CustomDatePicker,
  CustomTimePicker,
} from '../../../Components/Molecules/CustomDateTimePicker/customDateTimePicker';
import {DropdownMenuComponent} from '../../../Components/Molecules/DropdownMenu/DropDownMenuComponent';
import CustomTextInput from '../../../Components/Atoms/TextInput/customTextInput';
import {
  CustomLoading1,
  TextWithAnimatedDots_Loading,
} from '../../../Components/Molecules/CustomLoadings/customLoading';
import {FloatingBtnSection} from '../../../Components/Molecules/FloatingBtn/floatingBtnSection';
import MultiSelectDropDownMenuComponent from '../../../Components/Molecules/MultiSelectDropDownMenu/multiSelectDropDownMenu';
import {styles1, styles2, styles3} from './styles';

const Tab = createMaterialTopTabNavigator();

const DiffCaringSPDetailsScreen = props => {
  const status = useSelector(state => state.themeR.status);
  const uId = useSelector(state => state.authStatusR.uId);
  const [data, setdata] = useState({});
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});
  const [day, setDay] = useState('');
  const [hours, setHours] = useState({});
  const [date, setDate] = useState(new Date(Date.now()));
  const [time, setTime] = useState(new Date());
  const [fees, setfees] = useState('');
  const [address, setaddress] = useState('');
  const [services, setservices] = useState([]);
  const [userData, setuserData] = useState({});
  const [loadingStatus1, setloadingStatus1] = useState({status: 2, msg: ''});

  const fetchData = async () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.onrender.com/pd/getCSProfile', {
          params: {
            id: props.route.params.id,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus({status: 2, msg: 'Completed'});
            console.log('(fetchData)', response.data.data);
            setdata(response.data.data);
          } else {
            setloadingStatus({status: 3, msg: 'No Details Found.'});
            SimpleToast.show(
              (message = 'No Details Found!'),
              (duration = 5000),
            );
          }
        })
        .catch(error => {
          setloadingStatus({status: 3, msg: 'No Details Found.'});
          console.log('Axios error (fetchData)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during doctor profile data fetching.',
      );
      console.log('Error is (fetchData): ', error);
      setloadingStatus({status: 3, msg: 'No Details Found.'});
    }
  };

  const fetchUserData = async () => {
    try {
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.onrender.com/user/getUserGD', {
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

  useEffect(() => {
    fetchData();
    fetchUserData();
    return;
  }, []);

  const reset = () => {
    setDay('');
    setHours({});
    setDate(new Date(Date.now()));
    setTime(new Date());
    setfees('');
    setservices([]);
  };

  const insertData = async reqServices => {
    try {
      setloadingStatus1({status: 1, msg: 'Requesting Services...'});
      axios
        .post('https://fornaxbackend.onrender.com/uSR/insert', {
          spId: props.route.params.id,
          uId: uId,
          reqServices: reqServices,
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus1({status: 2, msg: 'Completed'});
            Alert.alert(
              'Success !!',
              'Service requested successfully !!',
              [
                {
                  text: 'Ok',
                  onPress: () => reset(),
                },
              ],
              {cancelable: false},
            );
          } else {
            setloadingStatus1({status: 3, msg: 'Service Request failed.'});
            Alert.alert(
              'Failed !!',
              'Service Request failed?',
              [
                ,
                {
                  text: 'Ok',
                },
              ],
              {cancelable: false},
            );
          }
        })
        .catch(error => {
          setloadingStatus1({status: 3, msg: 'Service Request failed.'});
          console.log('Axios error (insertData)', error);
          Alert.alert(
            'Failed !!',
            'Service Request failed?',
            [
              ,
              {
                text: 'Ok',
              },
            ],
            {cancelable: false},
          );
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during DiffCaringSP service request data insertion.',
      );
      console.log('Error is (insertData): ', error);
      setloadingStatus1({status: 3, msg: 'Service Request failed.'});
      Alert.alert(
        'Failed !!',
        'Service Request failed?',
        [
          ,
          {
            text: 'Ok',
          },
        ],
        {cancelable: false},
      );
    }
  };

  const handleServiceBooking = () => {
    try {
      let temp = {
        ref: {},
        userInfo: {
          uId: uId,
          name: userData?.name,
          profilePic: userData?.profilePic,
        },
        spInfo: {
          spId: props.route.params.id,
          name: data?.general_Info?.name,
          profilePic: data?.general_Info?.profilePic,
          role: data?.professional_Info?.role,
        },
        services: services,
        address: address,
        requests: [
          {
            date: {
              start: moment(date).format('DD/MM/YYYY'),
              end: moment(date)
                .add(parseInt(day) - 1, 'days')
                .format('DD/MM/YYYY'),
              duration: parseInt(day),
            },
            time: {
              start: moment(time).format('hh:mm A'),
              end: moment(time)
                .add(parseInt(hours?.value), 'hours')
                .format('hh:mm A'),
              duration: parseInt(hours?.value),
            },
            fees: parseInt(fees),
            requestedBy: 'User',
          },
        ],
      };

      Alert.alert(
        'Alert !!',
        'Everything ok ?',
        [
          {
            text: 'No',
            onPress: () => {},
          },
          {
            text: 'Yes',
            onPress: () => insertData(temp),
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      console.log(
        'Error (handleServiceBooking): Error occured during request sending.',
      );
      console.log('Error : ', error);
    }
  };

  const onReload1 = () => {
    handleServiceBooking();
  };

  const handleCloseLS = () => {
    Alert.alert(
      'Alert !!',
      'Are you sure want to cancel booking ?',
      [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          onPress: () =>
            setloadingStatus1({
              status: 2,
              msg: 'Service Booked Failed.',
            }),
        },
      ],
      {cancelable: false},
    );
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
        headerTitle="Profile Details"
        navigation={props.navigation}
      />
      <ProfileSectionComponent1
        name={props?.route?.params?.name}
        data={data?.general_Info}
      />
      <View
        style={{
          flex: 1,
          marginHorizontal: widthToDp(1),
          borderRadius: 10,
          marginBottom: widthToDp(1),
          backgroundColor: status
            ? darkMode.screenBackgroundColors.backgroundColor
            : lightMode.screenBackgroundColors.backgroundColor,
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
            tabBarItemStyle: {height: widthToDp(12), width: widthToDp(35)},
            tabBarScrollEnabled: true,
          }}
          initialRouteName="Details">
          <Tab.Screen
            name="Details"
            children={() => (
              <PatientCareProviderDetailsComponent
                data={data}
                name={props?.route?.params?.name}
                loadingStatus={loadingStatus}
                setloadingStatus={setloadingStatus}
                navigation={props.navigation}
              />
            )}
          />
          <Tab.Screen
            name="Book Service"
            children={() => (
              <BookServiceComponent
                date={date}
                address={address}
                setaddress={setaddress}
                day={day}
                hours={hours}
                time={time}
                fees={fees}
                data={data?.professional_Info?.services}
                setDate={setDate}
                setDay={setDay}
                setTime={setTime}
                setHours={setHours}
                setfees={setfees}
                services={services}
                setservices={setservices}
                handleServiceBooking={handleServiceBooking}
                reset={reset}
                dayShift={data?.professional_Info?.dayShiftFees}
                nightShift={data?.professional_Info?.nightShiftFees}
                navigation={props.navigation}
              />
            )}
          />
          <Tab.Screen
            name="Review"
            children={() => (
              <RatingAndReviewComponent navigation={props.navigation} />
            )}
          />
        </Tab.Navigator>
      </View>
      <CustomLoading1
        loadingStatus={loadingStatus1}
        onReload={onReload1}
        onClose={handleCloseLS}
      />
    </SafeAreaView>
  );
};

const hoursData = [
  {
    id: 1,
    title: '1 Hours',
    value: 1,
  },
  {
    id: 2,
    title: '2 Hours',
    value: 2,
  },
  {
    id: 3,
    title: '3 Hours',
    value: 3,
  },
  {
    id: 4,
    title: '4 Hours',
    value: 4,
  },
  {
    id: 5,
    title: '5 Hours',
    value: 5,
  },
  {
    id: 6,
    title: '6 Hours',
    value: 6,
  },
  {
    id: 7,
    title: '7 Hours',
    value: 7,
  },
  {
    id: 8,
    title: '8 Hours',
    value: 8,
  },
  {
    id: 9,
    title: '9 Hours',
    value: 9,
  },
  {
    id: 10,
    title: '10 Hours',
    value: 10,
  },
  {
    id: 11,
    title: '11 Hours',
    value: 11,
  },
  {
    id: 12,
    title: '12 Hours',
    value: 12,
  },
  {
    id: 13,
    title: '13 Hours',
    value: 13,
  },
  {
    id: 14,
    title: '14 Hours',
    value: 14,
  },
  {
    id: 15,
    title: '15 Hours',
    value: 15,
  },
  {
    id: 16,
    title: '16 Hours',
    value: 16,
  },
  {
    id: 17,
    title: '17 Hours',
    value: 17,
  },
  {
    id: 18,
    title: '18 Hours',
    value: 18,
  },
  {
    id: 19,
    title: '19 Hours',
    value: 19,
  },
  {
    id: 20,
    title: '20 Hours',
    value: 20,
  },
  {
    id: 21,
    title: '21 Hours',
    value: 21,
  },
  {
    id: 22,
    title: '22 Hours',
    value: 22,
  },
  {
    id: 23,
    title: '23 Hours',
    value: 23,
  },
  {
    id: 24,
    title: '24 Hours',
    value: 24,
  },
];

const BookServiceComponent = props => {
  const status = useSelector(state => state.themeR.status);

  const calConsultaionFee = () => {
    return props.hours?.value * parseInt(props.fees) * props.day;
  };

  const calHealthCash = () => {
    if (props.day == 1) {
      return 0;
    } else if (props.day > 1 && props.day <= 10) {
      return props.hours?.value * props.day * (10 / 100) * 120;
    } else if (props.day > 10 && props.day <= 30) {
      return props.hours?.value * props.day * (15 / 100) * 120;
    } else if (props.day > 30) {
      return props.hours?.value * props.day * (20 / 100) * 120;
    }
  };

  const calTotalPayableFees = () => {
    return parseInt(calConsultaionFee()) - parseInt(calHealthCash());
  };

  return (
    <ScrollView
      style={[
        styles3.container1,
        status
          ? darkMode.screenBackgroundColors
          : lightMode.screenBackgroundColors,
      ]}>
      <View
        style={[
          styles3.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <View style={styles3.container3}>
          <Text
            style={[
              styles3.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Book Service
          </Text>
        </View>
        <View style={styles3.container4}>
          <View style={styles3.container5}>
            <Text
              style={[
                styles3.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Select Date
            </Text>
            <CustomDatePicker
              value={props.date}
              onChange={props.setDate}
              defaultDate="1995-01-01"
              display="calendar"
              mode="date"
              leftIcon
              rightIcon
              leftIconSize={widthToDp(4)}
              rightIconSize={widthToDp(4)}
              iconColor={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
              maximumDate={
                new Date(moment().add(120, 'days').format('YYYY-MM-DD'))
              }
              minimumDate={new Date(moment().format('YYYY-MM-DD'))}
              containerStyle={[
                styles3.container11,
                status
                  ? darkMode.containerbackgroundColor
                  : lightMode.containerbackgroundColor,
                {
                  borderColor: status
                    ? darkMode.screenBackgroundColors.backgroundColor
                    : lightMode.screenBackgroundColors.backgroundColor,
                },
              ]}
              textStyle={[
                styles3.title5,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
            />
          </View>
          <View style={styles3.container5}>
            <Text
              style={[
                styles3.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              How many Days ?
            </Text>
            <CustomTextInput
              value={props.day}
              onChangeText={props.setDay}
              numberOfLines={1}
              editable
              maxLength={2}
              keyboardType="numeric"
              placeholder="Enter Days..."
              placeholderTextColor={
                status ? darkMode.textColor.color : lightMode.textColor.color
              }
              inputContainerStyle={styles3.container7}
              inputStyle={[
                styles3.inputStyles,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
              rightIcon
              rightIconSize={widthToDp(4)}
            />
          </View>
        </View>
        <View style={styles3.container4}>
          <View style={styles3.container5}>
            <Text
              style={[
                styles3.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Select Time
            </Text>
            <CustomTimePicker
              value={props.time}
              onChange={props.setTime}
              display="spinner"
              mode="time"
              leftIcon
              rightIcon
              leftIconSize={widthToDp(4)}
              rightIconSize={widthToDp(4)}
              iconColor={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
              containerStyle={[
                styles3.container11,
                status
                  ? darkMode.containerbackgroundColor
                  : lightMode.containerbackgroundColor,
                {
                  borderColor: status
                    ? darkMode.screenBackgroundColors.backgroundColor
                    : lightMode.screenBackgroundColors.backgroundColor,
                },
              ]}
              textStyle={[
                styles3.title5,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
            />
          </View>
          <View style={styles3.container5}>
            <Text
              style={[
                styles3.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Service in Hours
            </Text>
            <DropdownMenuComponent
              style={[
                styles3.container6,
                status
                  ? darkMode.containerbackgroundColor
                  : lightMode.containerbackgroundColor,
                {
                  borderColor: status
                    ? darkMode.screenBackgroundColors.backgroundColor
                    : lightMode.screenBackgroundColors.backgroundColor,
                },
              ]}
              data={hoursData}
              value={props.hours}
              setValue={props.setHours}
              labelField="title"
              valueField="value"
              placeholder={
                props.hours?.title === undefined
                  ? 'Select Time'
                  : props.hours.title
              }
              maxHeight={widthToDp(50)}
              placeholderStyle={[
                styles3.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
              selectedTextStyle={[
                styles3.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
              rightIconStyle={[
                styles3.rightIconStyle,
                status ? darkMode.tintColors : lightMode.tintColors,
              ]}
              renderLeftIcon={() => (
                <Icon
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  name="time"
                  type="ionicon"
                  size={widthToDp(4)}
                />
              )}
            />
          </View>
        </View>
        <View style={styles3.container12}>
          <Text
            style={[
              styles3.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Offer your fees/hour ?
          </Text>
          <CustomTextInput
            value={props.fees}
            onChangeText={props.setfees}
            numberOfLines={1}
            editable
            maxLength={4}
            keyboardType="numeric"
            placeholder={'Day shift fare: ' + props.dayShift + '/hr'}
            placeholderTextColor={
              status ? darkMode.textColor.color : lightMode.textColor.color
            }
            inputContainerStyle={styles3.container13}
            inputStyle={[
              styles3.inputStyles2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}
            rightIcon
            rightIconSize={widthToDp(4)}
          />
        </View>
        <View style={styles3.container12}>
          <Text
            style={[
              styles3.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Choose services you want
          </Text>
          <MultiSelectDropDownMenuComponent
            setData={props.setservices}
            data={props.data}
            isDetailsScreen={true}
            title="Select multiple from list..."
            id={props.id}
            label={props.label}
            rootContainerStyles={styles3.container14}
            touchableAreaStyles={[
              styles3.container15,
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
              styles3.title6,
              status ? darkMode.textColor : lightMode.textColor,
            ]}
            selectedContentContainerStyle={styles3.container16}
            selectedItemStyles={styles3.btn1}
            selectedItemTextStyle={styles3.title7}
          />
        </View>
        <View style={styles3.container12}>
          <Text
            style={[
              styles3.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Address where you want this service
          </Text>
          <CustomTextInput
            value={props.address}
            onChangeText={props.setaddress}
            numberOfLines={1}
            editable
            keyboardType="default"
            placeholder={
              props?.address.length > 0
                ? props?.address
                : 'E.g :- Garden Colony, Kharar, Punjab'
            }
            placeholderTextColor={
              status ? darkMode.textColor.color : lightMode.textColor.color
            }
            inputContainerStyle={styles3.container13}
            inputStyle={[
              styles3.inputStyles2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}
            rightIcon
            rightIconSize={widthToDp(4)}
          />
        </View>
      </View>
      {props.day.length > 0 &&
        props.hours?.value != undefined &&
        props.fees.length > 0 &&
        props.services.length > 0 &&
        props.address.length > 0 && (
          <>
            <View
              style={[
                status
                  ? darkMode.containerbackgroundColor
                  : lightMode.containerbackgroundColor,
                styles3.container8,
              ]}>
              <View
                style={[
                  styles3.container9,
                  {borderBottomColor: status ? '#666' : '#595959'},
                ]}>
                <Text
                  style={[
                    styles3.title1,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Bill Details
                </Text>
                <View style={styles3.container10}>
                  <Text
                    style={[
                      styles3.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    Total Service Fees
                  </Text>
                  <Text
                    style={[
                      styles3.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    ₹ {calConsultaionFee()}
                  </Text>
                </View>
                <View style={styles3.container10}>
                  <Text
                    style={[
                      styles3.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    HealthCash
                  </Text>
                  <Text style={[styles3.title4, {color: '#00ff00'}]}>
                    - ₹ {parseInt(calHealthCash())}
                  </Text>
                </View>
              </View>
              <View style={styles3.container10}>
                <Text>Total Payable</Text>
                <Text>₹ {parseInt(calTotalPayableFees())}</Text>
              </View>
            </View>
            <FloatingBtnSection
              btnTitle1="Reset"
              btnTitle2="Send Service Request"
              onBtn1ClickEvent={props.reset}
              onBtn2ClickEvent={props.handleServiceBooking}
            />
          </>
        )}
    </ScrollView>
  );
};

const PatientCareProviderDetailsComponent = props => {
  const status = useSelector(state => state.themeR.status);

  return (
    <View
      style={[
        {flex: 1},
        status
          ? darkMode.screenBackgroundColors
          : lightMode.screenBackgroundColors,
      ]}>
      <GeneralAndProfessionalDetailsComponent
        data={props?.data}
        name={props.name}
        loadingStatus={props.loadingStatus}
        setloadingStatus={props.setloadingStatus}
      />
      <PatientCareServiceComponent
        name={props.name}
        data={props?.data?.professional_Info?.services}
        loadingStatus={props.loadingStatus}
        setloadingStatus={props.setloadingStatus}
      />
    </View>
  );
};

const PatientCareServiceComponent = props => {
  const status = useSelector(state => state.themeR.status);

  return (
    <View
      style={[
        styles2.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <Text
        style={[
          styles2.headerTitle,
          status ? darkMode.textColor : lightMode.textColor,
        ]}>
        Service offered by {props.name}
      </Text>
      {props.loadingStatus.status === 2 ? (
        props?.data?.map((item, id) => (
          <View
            key={id}
            style={[
              styles2.container2,
              {
                borderBottomColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles2.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              ---> {'  ' + item.title}
            </Text>
          </View>
        ))
      ) : (
        <View style={{flex: 1, paddingVertical: widthToDp(5)}}>
          <TextWithAnimatedDots_Loading
            text="Loading"
            loadingStatus={props.loadingStatus}
            setloadingStatus={props.setloadingStatus}
          />
        </View>
      )}
    </View>
  );
};

const GeneralAndProfessionalDetailsComponent = props => {
  const status = useSelector(state => state.themeR.status);

  return (
    <View
      style={[
        styles1.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <Text
        style={[
          styles1.headerTitle,
          status ? darkMode.textColor : lightMode.textColor,
        ]}>
        General Details of {props.name}
      </Text>
      {props.loadingStatus.status === 2 ? (
        <>
          <View
            style={[
              styles1.container2,
              {
                borderBottomColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles1.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Name
            </Text>
            <Text
              style={[
                styles1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.general_Info?.name}
            </Text>
          </View>
          <View
            style={[
              styles1.container2,
              {
                borderBottomColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles1.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Educations
            </Text>
            <Text
              style={[
                styles1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.professional_Info?.educations?.length <= 0
                ? 'None'
                : props?.data?.professional_Info?.educations?.map(
                    (item, id) => {
                      return item.title;
                    },
                  )}
            </Text>
          </View>
          <View
            style={[
              styles1.container2,
              {
                borderBottomColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles1.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Experiences
            </Text>
            <Text
              style={[
                styles1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.professional_Info?.we?.length <= 0
                ? 'None'
                : props?.data?.professional_Info?.we?.map((item, id) => {
                    return item.title;
                  })}
            </Text>
          </View>
          <View
            style={[
              styles1.container2,
              {
                borderBottomColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles1.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Working hours
            </Text>
            <Text
              style={[
                styles1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.professional_Info?.nightShift === true
                ? 24 + ' hours'
                : '06:00 AM - 07:00 PM'}
            </Text>
          </View>
          <View
            style={[
              styles1.container2,
              {
                borderBottomColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles1.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Fees
            </Text>
            <Text
              style={[
                styles1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              06:00 AM - 07:00 PM {'   '}--->{' '}
              {'   ' + props?.data?.professional_Info?.dayShiftFees}/hr {'\n\n'}
              10:00 PM - 06:00 AM{'   '} --->{' '}
              {'   ' + props?.data?.professional_Info?.nightShiftFees}/hr{' '}
            </Text>
          </View>
        </>
      ) : (
        <TextWithAnimatedDots_Loading
          text="Loading"
          loadingStatus={props.loadingStatus}
          setloadingStatus={props.setloadingStatus}
        />
      )}
    </View>
  );
};

export default DiffCaringSPDetailsScreen;
