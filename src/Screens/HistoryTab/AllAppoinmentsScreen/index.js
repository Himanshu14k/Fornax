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
  const status = useSelector(state => state.otherReducer.status);
  const uId = useSelector(state => state.authenticationReducer.uId);
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});

  return (
    <View
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
            name="On-Going"
            children={() => (
              <AppointmentListComponent
                navigation={props.navigation}
                data={data1}
                type="Therapist"
                loadingStatus={loadingStatus}
                // onReload={onReload1}
              />
            )}
          />
          <Tab.Screen
            name="Upcoming"
            children={() => (
              <AppointmentListComponent
                navigation={props.navigation}
                data={data1}
                type="Doctor"
                loadingStatus={loadingStatus}
                // onReload={onReload1}
              />
            )}
          />
          <Tab.Screen
            name="History"
            children={() => (
              <AppointmentListComponent
                navigation={props.navigation}
                data={data2}
                type="Therapists"
                loadingStatus={loadingStatus}
                // onReload={onReload2}
                searchField
              />
            )}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

const AppointmentListComponent = props => {
  const status = useSelector(state => state.otherReducer.status);

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
    if (props?.type === 'Doctor') {
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
              // source={{uri: item?.spInfo?.profilePic}}
              source={require('../../../Assets/Images/Himanshu.jpeg')}
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
                {'item?.patientInfo?.name'}
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
                  {/* {item?.appointmentInfo?.date_show +
                    ' ' +
                    item?.appointmentInfo?.time} */}
                  20 Feb, 09:30 AM
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
                  {/* {item?.appointmentInfo?.status} */}
                  {'Upcoming'}
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
                  {/* {item?.appointmentInfo?.spType} */}
                  {'500'}
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

                  {/* {item?.appointmentInfo?.mode} */}
                  {'Online'}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else if (props?.type === 'Therapist') {
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
              // source={{uri: item?.spInfo?.profilePic}}
              source={require('../../../Assets/Images/Himanshu.jpeg')}
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
                {'item?.spInfo?.name'}
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
                  {/* {item?.timing === undefined
                    ? item?.appointmentInfo?.time
                    : item?.timing} */}
                  09:30 AM
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
                  {/* {item?.status === undefined
                    ? item?.appointmentInfo?.status
                    : item?.status} */}
                  On-Going
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
                  {/* {item?.spInfo?.specialities} */}
                  {'Physio'}
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
                  {/* {item?.therapy_At === undefined
                    ? item?.appointmentInfo?.mode
                    : 'At ' + item?.therapy_At} */}
                  At Home
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
              // source={{uri: item?.spInfo?.profilePic}}
              source={require('../../../Assets/Images/Himanshu.jpeg')}
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
                {'item?.spInfo?.name'}
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
                  {/* {item?.workingHr_from?.title +
                    ' to ' +
                    item?.workingHr_till?.title} */}
                  09 AM to 10 AM
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
                  {/* {item?.status} */}
                  {'Completed'}
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
                  {'item?.spInfo?.role'}
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
                  {'500'}
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
      <FlatList
        data={[1, 1, 1, 1, 1, 1, 1, 1]}
        renderItem={renderCardComponent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container4}
        ItemSeparatorComponent={() => <View style={styles.seprator} />}
      />
    </View>
  );
};

export default AllAppoinmentsScreen;
