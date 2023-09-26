import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {darkMode, lightMode} from '../../Constants/Colors';
import {adjustedFontSize, widthToDp} from '../../Constants/dimensionsInPixel';
import CustomHeader from '../../Navigators/CustomHeader';
import {
  PatientCareProviderDetailsComponent,
  BookServiceComponent,
} from '../../Components/DoctorTabs/PatientCareProviderDetailsScreenComponents/PatientCareProviderDetailsScreenComponent';
import {RatingAndReviewComponent} from '../../Components/CommonComponent/RatingAndReviewComponent';
import {ProfileSectionComponent} from '../../Components/CommonComponent/ServiceProviderProfileSectionComponent';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import moment from 'moment';
import {CustomLoadingComponent1} from '../../Components/CommonComponent/CustomLoadingComponents';

const Tab = createMaterialTopTabNavigator();

const PatientCareProviderDetailsScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
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
        .get('https://fornaxbackend.herokuapp.com/pd/getCSProfile', {
          params: {
            id: props.route.params.id,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus({status: 2, msg: 'Completed'});
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
        .post('https://fornaxbackend.herokuapp.com/uSR/insert', {
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
        ref: {
          uId: uId,
          spId: props.route.params.id,
        },
        userInfo: {
          name: userData?.name,
          profilePic: userData?.profilePic,
        },
        spInfo: {
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
      <CustomHeader navigation={props.navigation} />
      <ProfileSectionComponent
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
      <CustomLoadingComponent1
        loadingStatus={loadingStatus1}
        onReload={onReload1}
        onClose={handleCloseLS}
      />
    </SafeAreaView>
  );
};

export default PatientCareProviderDetailsScreen;
