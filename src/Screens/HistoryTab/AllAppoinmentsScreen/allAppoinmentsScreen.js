import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {styles} from './style';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';
import {CustomLoading2} from '../../../Components/Molecules/CustomLoadings/customLoading';
import {darkMode, lightMode} from '../../../Utils/Colors';

const Tab = createMaterialTopTabNavigator();

const AllAppoinmentsScreen = props => {
  const status = useSelector(state => state.themeR.status);
  const uId = useSelector(state => state.authStatusR.uId);
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});

  const isFocused = useIsFocused();
  const fetchData1 = async () => {
    try {
      axios
        .get('https://fornaxbackend.onrender.com/uBA/getAllBA', {
          params: {
            id: uId,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            if (response.data.code === 200) {
              setdata1(response.data.data);
              setloadingStatus({status: 2, msg: 'Fetched Successfully.'});
            } else {
              setdata1([]);
              setloadingStatus({status: 2, msg: 'Fetched Successfully.'});
            }
          } else {
            setloadingStatus({status: 3, msg: 'Internet Connection Lost.'});
          }
        })
        .catch(error => {
          setloadingStatus({status: 3, msg: 'Internet Connection Lost.'});
          console.log('Axios error (fetchData1)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during all upcoming and ongoing appointment data fetching.',
      );
      console.log('Error is (fetchData1): ', error);
      setloadingStatus({status: 3, msg: 'Internet Connection Lost.'});
    }
  };

  const fetchData2 = async () => {
    try {
      axios
        .get('https://fornaxbackend.onrender.com/uCC/getAllCC', {
          params: {
            id: uId,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            if (response.data.code === 200) {
              setdata2(response.data.data);
              setloadingStatus({status: 2, msg: 'Fetched Successfully.'});
            } else {
              setdata2([]);
              setloadingStatus({status: 2, msg: 'Fetched Successfully.'});
            }
          } else {
            setloadingStatus({status: 3, msg: 'Internet Connection Lost.'});
          }
        })
        .catch(error => {
          setloadingStatus({status: 3, msg: 'Internet Connection Lost.'});
          console.log('Axios error (fetchData)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during user all completed or canceled appointmnet and sessions data fetching.',
      );
      console.log('Error is (fetchData2): ', error);
      setloadingStatus({status: 3, msg: 'Internet Connection Lost.'});
    }
  };

  useEffect(() => {
    isFocused && fetchData1();
    isFocused && fetchData2();
  }, [isFocused]);

  const onReload1 = () => {
    isFocused && fetchData1();
  };

  const onReload2 = () => {
    isFocused && fetchData2();
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
        msgAndNotification
        notificationRoute="notification"
        isHome
        navigation={props.navigation}
      />
      <View
        style={[
          {flex: 1},
          status
            ? darkMode.screenBackgroundColors.backgroundColor
            : lightMode.screenBackgroundColors.backgroundColor,
        ]}>
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
            },
            tabBarItemStyle: {height: widthToDp(13), width: widthToDp(50)},
            tabBarScrollEnabled: true,
          }}
          initialRouteName="Details">
          <Tab.Screen
            name="Upcoming"
            children={() => (
              <AppointmentListComponent
                navigation={props.navigation}
                data={data1}
                loadingStatus={loadingStatus}
                onReload={onReload1}
              />
            )}
          />
          <Tab.Screen
            name="History"
            children={() => (
              <AppointmentListComponent
                navigation={props.navigation}
                data={data2}
                loadingStatus={loadingStatus}
                onReload={onReload2}
                searchField
              />
            )}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const AppointmentListComponent = props => {
  const status = useSelector(state => state.themeR.status);

  function onCardClick(title, type, id, spId = null) {
    try {
      if (type === 'Doctor') {
        if (title === 'Upcoming') {
          props.navigation.navigate('upcomingAppoinmentDetails', {
            id: id,
            type: 1,
          });
        } else if (title === 'Completed' || title === 'Canceled') {
          props.navigation.navigate('pastAppoinmentDetails', {id: id, type: 1});
        }
      } else if (type === 'Therapist') {
        if (title === 'Upcoming') {
          props.navigation.navigate('upcomingAppoinmentDetails', {
            id: id,
            spId: spId,
            type: 2,
          });
        } else if (title === 'On-Going') {
          props.navigation.navigate('therapistOngoingAndCompleted', {
            id: id,
            spId: spId,
            type: 1,
          });
        } else if (title === 'Terminated' || title === 'Completed') {
          // props.navigation.navigate('pastTherapistAppoinDetails');
          props.navigation.navigate('therapistOngoingAndCompleted', {
            id: id,
            spId: spId,
            type: 2,
          });
        } else if (title === 'Canceled') {
          props.navigation.navigate('pastAppoinmentDetails', {id: id, type: 2});
        }
      } else {
        if (title === 'On-Going') {
          props.navigation.navigate('differentOnGoingCaringService', {
            appoinStatus: title,
            id: id,
            spId: spId,
            type: 1,
          });
        } else if (title === 'Completed' || title === 'Terminated') {
          props.navigation.navigate('differentCaringServiceHistory', {
            appoinStatus: title,
            id: id,
            spId: spId,
            type: 1,
          });
        }
      }
    } catch (error) {
      console.error('Error : ', error);
    }
  }

  const renderCardComponent = ({item, index}) => {
    if (item?.type === 'Doctor') {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          style={[
            styles.container5,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}
          onPress={() =>
            onCardClick(
              item?.appointmentInfo?.status,
              item?.appointmentInfo?.spType,
              item?._id,
            )
          }>
          <View style={styles.container6}>
            <Image
              source={{uri: item?.spInfo?.profilePic}}
              style={styles.image1}
            />
          </View>
          <View style={styles.container7}>
            <View style={styles.container8}>
              <Text
                style={[
                  styles.title1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {item?.patientInfo?.name}
              </Text>
            </View>
            <View style={styles.container9}>
              <View style={styles.container10}>
                <Icon
                  type="material-community"
                  name="calendar-clock"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  size={widthToDp(4)}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.appointmentInfo?.date_show +
                    ' ' +
                    item?.appointmentInfo?.time}
                </Text>
              </View>
              <View style={styles.container11}>
                <Icon
                  type="ionicon"
                  name="checkmark-done"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  size={widthToDp(4)}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.appointmentInfo?.status}
                </Text>
              </View>
            </View>
            <View style={styles.container9}>
              <View style={styles.container10}>
                <Icon
                  type="font-awesome"
                  name="rupee"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  size={widthToDp(4)}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.appointmentInfo?.spType}
                </Text>
              </View>
              <View style={styles.container11}>
                <Icon
                  type="ionicon"
                  name="videocam-outline"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  size={widthToDp(4)}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {/* {item?.type !== 'Doctor' && item?.type !== 'Therapy'
                    ? item?.duration
                    : item?.mode} */}

                  {item?.appointmentInfo?.mode}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else if (item?.type === 'Therapist') {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          style={[
            styles.container5,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}
          onPress={() =>
            onCardClick(
              item?.status === undefined
                ? item?.appointmentInfo?.status
                : item?.status,
              item?.spInfo?.specialities,
              item?.sId === undefined ? item?._id : item?.sId,
              item?.spId,
            )
          }>
          <View style={styles.container6}>
            <Image
              source={{uri: item?.spInfo?.profilePic}}
              style={styles.image1}
            />
          </View>
          <View style={styles.container7}>
            <View style={styles.container8}>
              <Text
                style={[
                  styles.title1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {item?.spInfo?.name}
              </Text>
            </View>
            <View style={styles.container9}>
              <View style={styles.container10}>
                <Icon
                  type="material-community"
                  name="calendar-clock"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  size={widthToDp(4)}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.timing === undefined
                    ? item?.appointmentInfo?.time
                    : item?.timing}
                </Text>
              </View>
              <View style={styles.container11}>
                <Icon
                  type="ionicon"
                  name="checkmark-done"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  size={widthToDp(4)}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.status === undefined
                    ? item?.appointmentInfo?.status
                    : item?.status}
                </Text>
              </View>
            </View>
            <View style={styles.container9}>
              <View style={styles.container10}>
                <Icon
                  type="font-awesome"
                  name="rupee"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  size={widthToDp(4)}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.spInfo?.specialities}
                </Text>
              </View>
              <View style={styles.container11}>
                <Icon
                  type="ionicon"
                  name="videocam-outline"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  size={widthToDp(4)}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.therapy_At === undefined
                    ? item?.appointmentInfo?.mode
                    : 'At ' + item?.therapy_At}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          style={[
            styles.container5,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}
          onPress={() =>
            onCardClick(item?.status, 'Patient Care', item?.sId, item?.cId)
          }>
          <View style={styles.container6}>
            <Image
              source={{uri: item?.spInfo?.profilePic}}
              style={styles.image1}
            />
          </View>
          <View style={styles.container7}>
            <View style={styles.container8}>
              <Text
                style={[
                  styles.title1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {item?.spInfo?.name}
              </Text>
            </View>
            <View style={styles.container9}>
              <View style={styles.container10}>
                <Icon
                  type="material-community"
                  name="clock-outline"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  size={widthToDp(4)}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.workingHr_from?.title +
                    ' to ' +
                    item?.workingHr_till?.title}
                </Text>
              </View>
              <View style={styles.container11}>
                <Icon
                  type="ionicon"
                  name="checkmark-done"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  size={widthToDp(4)}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.status}
                </Text>
              </View>
            </View>
            <View style={styles.container9}>
              <View style={styles.container10}>
                <Icon
                  type="fontisto"
                  name="person"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  size={widthToDp(4)}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.spInfo?.role}
                </Text>
              </View>
              <View style={styles.container11}>
                <Icon
                  type="font-awesome"
                  name="rupee"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                  size={widthToDp(4)}
                />
                <Text
                  numberOfLines={1}
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.fees?.title}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View
      style={[
        styles.container1,
        status
          ? darkMode.screenBackgroundColors
          : lightMode.screenBackgroundColors,
      ]}>
      {props.loadingStatus.status === 2 ? (
        props.data?.length > 0 ? (
          <>
            <FlatList
              data={props?.data}
              renderItem={renderCardComponent}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.container4}
              ItemSeparatorComponent={() => <View style={styles.seprator} />}
            />
          </>
        ) : (
          <View style={styles.container12}>
            <View
              style={[
                styles.container13,
                status
                  ? darkMode.containerbackgroundColor
                  : lightMode.containerbackgroundColor,
              ]}>
              <Text
                style={[
                  styles.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                No Data Available
              </Text>
            </View>
          </View>
        )
      ) : (
        <CustomLoading2
          loadingStatus={props.loadingStatus}
          setloadingStatus={props.onReload}
        />
      )}
    </View>
  );
};

export default AllAppoinmentsScreen;
