import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useSelector} from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import moment from 'moment';
import {useIsFocused} from '@react-navigation/native';
import {style1, style2, style3} from './style';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import {FloatingBtnSection} from '../../../Components/Molecules/FloatingBtn/floatingBtnSection';
import {navigate} from '../../../Navigations/navigationServices';
import {dummtempData} from '../../../Components/Organisms/ServiceProviderDetails/ServiceProviderDetailsComponent';

const DoctorProfileComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        style1.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}
      onPress={() =>
        // props.navigation.navigate('doctorProfile', {
        //   id: props?.data?.id,
        //   name: props?.data?.name,
        // })
        navigate('doctorProfile')
      }>
      <View style={style1.imageContainer}>
        <Image
          style={style1.image}
          // source={{uri: props?.data?.profilePic}}
          source={require('../../../Assets/Images/doc.jpeg')}
        />
      </View>
      <View style={style1.container2}>
        <Text
          style={[
            style1.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {'props?.data?.name'}
        </Text>
        <Text
          style={[
            style1.title2,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {'props?.data?.specialities'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const ScrollableCardsComponent = ({
  data = {},
  patientAndSlotInfo,
  setpatientAndSlotInfo,
  status,
  authID,
  mode,
}) => {
  const handleOnTimeClick = (id, time, type, format) => {
    // setpatientAndSlotInfo({
    //   sdId: data?._id,
    //   stId: id,
    //   date: data?.day,
    //   date_show: data?.day_show,
    //   time: time,
    //   format: format,
    //   authID: authID,
    //   mode: mode,
    //   type: type,
    // });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={style3.container1}>
      <View
        style={[
          style3.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            style3.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Morning
        </Text>
        <View style={style3.container3}>
          {/* {data?.morningSlots?.length > 0 ? (
            data?.morningSlots?.map((item, id) =>
              item?.status == 'A' ? ( */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 1, 1, 1, 1]?.map((item, id) =>
            'A' == 'A' ? (
              <TouchableOpacity
                key={id}
                activeOpacity={0.7}
                style={[
                  style3.btn2,
                  {
                    borderColor: status
                      ? darkMode.screenBackgroundColors.backgroundColor
                      : lightMode.screenBackgroundColors.backgroundColor,
                  },
                  patientAndSlotInfo?.stId === item?._id && {
                    backgroundColor: '#99ccff',
                  },
                ]}
                onPress={() => handleOnTimeClick(item._id, item?.time, 1)}>
                <Text
                  style={[
                    style3.title2,
                    patientAndSlotInfo?.stId === item?._id
                      ? {color: '#000'}
                      : status
                      ? darkMode.textColor
                      : lightMode.textColor,
                  ]}>
                  12:45 PM
                </Text>
              </TouchableOpacity>
            ) : (
              <View
                key={id}
                style={[
                  style3.btn2,
                  {
                    borderColor: status
                      ? darkMode.screenBackgroundColors.backgroundColor
                      : lightMode.screenBackgroundColors.backgroundColor,
                  },
                  status
                    ? darkMode.containerbackgroundColor1
                    : lightMode.containerbackgroundColor1,
                ]}>
                <Text
                  style={[
                    style3.title2,
                    patientAndSlotInfo?.stId === item?._id
                      ? {color: '#000'}
                      : status
                      ? darkMode.textColor
                      : lightMode.textColor,
                  ]}>
                  {item.time}
                </Text>
              </View>
            ),
          )}
        </View>
      </View>
      <View
        style={[
          style3.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            style3.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Afternoon
        </Text>
        <View style={style3.container3}>
          {/* {data?.morningSlots?.length > 0 ? (
            data?.morningSlots?.map((item, id) =>
              item?.status == 'A' ? ( */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 1, 1, 1, 1]?.map((item, id) =>
            'A' == 'A' ? (
              <TouchableOpacity
                key={id}
                activeOpacity={0.7}
                style={[
                  style3.btn2,
                  {
                    borderColor: status
                      ? darkMode.screenBackgroundColors.backgroundColor
                      : lightMode.screenBackgroundColors.backgroundColor,
                  },
                  patientAndSlotInfo?.stId === item?._id && {
                    backgroundColor: '#99ccff',
                  },
                ]}
                onPress={() => handleOnTimeClick(item._id, item?.time, 1)}>
                <Text
                  style={[
                    style3.title2,
                    patientAndSlotInfo?.stId === item?._id
                      ? {color: '#000'}
                      : status
                      ? darkMode.textColor
                      : lightMode.textColor,
                  ]}>
                  12:45 PM
                </Text>
              </TouchableOpacity>
            ) : (
              <View
                key={id}
                style={[
                  style3.btn2,
                  {
                    borderColor: status
                      ? darkMode.screenBackgroundColors.backgroundColor
                      : lightMode.screenBackgroundColors.backgroundColor,
                  },
                  status
                    ? darkMode.containerbackgroundColor1
                    : lightMode.containerbackgroundColor1,
                ]}>
                <Text
                  style={[
                    style3.title2,
                    patientAndSlotInfo?.stId === item?._id
                      ? {color: '#000'}
                      : status
                      ? darkMode.textColor
                      : lightMode.textColor,
                  ]}>
                  {item.time}
                </Text>
              </View>
            ),
          )}
        </View>
      </View>
      <View
        style={[
          style3.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            style3.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Evening
        </Text>
        <View style={style3.container3}>
          {/* {data?.morningSlots?.length > 0 ? (
            data?.morningSlots?.map((item, id) =>
              item?.status == 'A' ? ( */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 1, 1, 1, 1]?.map((item, id) =>
            'A' == 'A' ? (
              <TouchableOpacity
                key={id}
                activeOpacity={0.7}
                style={[
                  style3.btn2,
                  {
                    borderColor: status
                      ? darkMode.screenBackgroundColors.backgroundColor
                      : lightMode.screenBackgroundColors.backgroundColor,
                  },
                  patientAndSlotInfo?.stId === item?._id && {
                    backgroundColor: '#99ccff',
                  },
                ]}
                onPress={() => handleOnTimeClick(item._id, item?.time, 1)}>
                <Text
                  style={[
                    style3.title2,
                    patientAndSlotInfo?.stId === item?._id
                      ? {color: '#000'}
                      : status
                      ? darkMode.textColor
                      : lightMode.textColor,
                  ]}>
                  12:45 PM
                </Text>
              </TouchableOpacity>
            ) : (
              <View
                key={id}
                style={[
                  style3.btn2,
                  {
                    borderColor: status
                      ? darkMode.screenBackgroundColors.backgroundColor
                      : lightMode.screenBackgroundColors.backgroundColor,
                  },
                  status
                    ? darkMode.containerbackgroundColor1
                    : lightMode.containerbackgroundColor1,
                ]}>
                <Text
                  style={[
                    style3.title2,
                    patientAndSlotInfo?.stId === item?._id
                      ? {color: '#000'}
                      : status
                      ? darkMode.textColor
                      : lightMode.textColor,
                  ]}>
                  {item.time}
                </Text>
              </View>
            ),
          )}
        </View>
      </View>
      {/* <View
        style={[
          style3.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            style3.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Afternoon
        </Text>
        <View style={style3.container3}>
          {data?.afternoonSlots?.length > 0 ? (
            data?.afternoonSlots?.map((item, id) =>
              item?.status == 'A' ? (
                <TouchableOpacity
                  key={id}
                  activeOpacity={0.7}
                  style={[
                    style3.btn2,
                    {
                      borderColor: status
                        ? darkMode.screenBackgroundColors.backgroundColor
                        : lightMode.screenBackgroundColors.backgroundColor,
                    },
                    patientAndSlotInfo?.stId === item?._id && {
                      backgroundColor: '#99ccff',
                    },
                  ]}
                  onPress={() => handleOnTimeClick(item._id, item?.time, 2)}>
                  <Text
                    style={[
                      style3.title2,
                      patientAndSlotInfo?.stId === item?._id
                        ? {color: '#000'}
                        : status
                        ? darkMode.textColor
                        : lightMode.textColor,
                    ]}>
                    {item.time}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View
                  key={id}
                  style={[
                    style3.btn2,
                    {
                      borderColor: status
                        ? darkMode.screenBackgroundColors.backgroundColor
                        : lightMode.screenBackgroundColors.backgroundColor,
                    },
                    status
                      ? darkMode.containerbackgroundColor1
                      : lightMode.containerbackgroundColor1,
                  ]}>
                  <Text
                    style={[
                      style3.title2,
                      patientAndSlotInfo?.stId === item?._id
                        ? {color: '#000'}
                        : status
                        ? darkMode.textColor
                        : lightMode.textColor,
                    ]}>
                    {item.time}
                  </Text>
                </View>
              ),
            )
          ) : (
            <Text
              style={[
                style3.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              No Afternoon Slots Available on this day.
            </Text>
          )}
        </View>
      </View>
      <View
        style={[
          style3.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            style3.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Evening
        </Text>
        <View style={style3.container3}>
          {data?.eveningSlots?.length > 0 ? (
            data?.eveningSlots?.map((item, id) =>
              item?.status == 'A' ? (
                <TouchableOpacity
                  key={id}
                  activeOpacity={0.7}
                  style={[
                    style3.btn2,
                    {
                      borderColor: status
                        ? darkMode.screenBackgroundColors.backgroundColor
                        : lightMode.screenBackgroundColors.backgroundColor,
                    },
                    patientAndSlotInfo?.stId === item?._id && {
                      backgroundColor: '#99ccff',
                    },
                  ]}
                  onPress={() => handleOnTimeClick(item._id, item?.time, 3)}>
                  <Text
                    style={[
                      style3.title2,
                      patientAndSlotInfo?.stId === item?._id
                        ? {color: '#000'}
                        : status
                        ? darkMode.textColor
                        : lightMode.textColor,
                    ]}>
                    {item.time}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View
                  key={id}
                  style={[
                    style3.btn2,
                    {
                      borderColor: status
                        ? darkMode.screenBackgroundColors.backgroundColor
                        : lightMode.screenBackgroundColors.backgroundColor,
                    },
                    status
                      ? darkMode.containerbackgroundColor1
                      : lightMode.containerbackgroundColor1,
                  ]}>
                  <Text
                    style={[
                      style3.title2,
                      patientAndSlotInfo?.stId === item?._id
                        ? {color: '#000'}
                        : status
                        ? darkMode.textColor
                        : lightMode.textColor,
                    ]}>
                    {item.time}
                  </Text>
                </View>
              ),
            )
          ) : (
            <Text
              style={[
                style3.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              No Evening Slots Available on this day.
            </Text>
          )}
        </View>
      </View> */}
    </ScrollView>
  );
  // : (
  //   <View style={style3.container4}>
  //     <View
  //       style={[
  //         style3.container5,
  //         status
  //           ? darkMode.contentbackgroundColor
  //           : lightMode.contentbackgroundColor,
  //       ]}>
  //       <Text
  //         style={[
  //           style3.title3,
  //           status ? darkMode.textColor : lightMode.textColor,
  //         ]}>
  //         No Slots Available on this day.
  //       </Text>
  //     </View>
  //   </View>
  // );
};

const SlotsListComponent_T = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [day, setDay] = useState(moment().utcOffset('+05:30').format('DD MMM'));
  const [patientAndSlotInfo, setpatientAndSlotInfo] = useState({
    authId: '',
    stId: '',
    sdId: '',
    time: '',
    format: '',
    date: '',
    date_show: '',
    authID: '',
    mode: '',
    type: 0,
  });
  const [data, setdata] = useState({});
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});
  const [loadingStatus2, setloadingStatus2] = useState({status: 2, msg: ''});
  const [isBack, setisBack] = useState(false);

  const fetchData_Doc = async () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/slotD/getAllVideoSlots', {
          params: {
            id: props?.data?.id,
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
          console.log('Axios error (fetchData_Doc)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during doctor Online(Video) appointment slots data fetching.',
      );
      console.log('Error is (fetchData_Doc): ', error);
      setloadingStatus({status: 3, msg: 'No Details Found.'});
      //handleAxiosError(error);
    }
  };

  const fetchData_Therapist = async () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/slotT/getAllVideoSlots', {
          params: {
            id: props?.data?.id,
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
          console.log('Axios error (fetchData_Therapist)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during therapist Online(Video) appointment slots data fetching.',
      );
      console.log('Error is (fetchData_Therapist): ', error);
      setloadingStatus({status: 3, msg: 'No Details Found.'});
      //handleAxiosError(error);
    }
  };

  const updateSlotsAvailabilityStatus_Doc = async val => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus2({status: 1, msg: 'Loading...'});
      axios
        .post('https://fornaxbackend.herokuapp.com/slotD/updateSlotStatusD', {
          authID: props?.data?.id,
          id: patientAndSlotInfo.sdId,
          subId: patientAndSlotInfo.stId,
          slotType: patientAndSlotInfo.type,
          value: val,
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus2({status: 2, msg: 'Completed'});
            if (response.data?.code === 203) {
              Alert.alert(
                'Alert !!',
                response.data?.msg,
                [
                  {
                    text: 'Ok',
                    onPress: () => {},
                  },
                ],
                {cancelable: false},
              );
            } else {
              setisBack(!isBack);
              {
                val === 'PO' &&
                  props.navigation.navigate('inputPatientsDetails', {
                    spImg: props?.data?.profilePic,
                    pInfo: patientAndSlotInfo,
                    type: 'Doctor',
                  });
              }
              {
                val === 'A' && reloadAppointSlot();
              }
            }
          } else {
            setloadingStatus2({status: 3, msg: 'No Details Found.'});
            SimpleToast.show(
              (message = 'No Details Found!'),
              (duration = 5000),
            );
          }
        })
        .catch(error => {
          setloadingStatus2({status: 3, msg: 'No Details Found.'});
          console.log('Axios error (updateSlotsAvailabilityStatus_Doc)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during updation of doctor teli(Online) appointment slot availability status.',
      );
      console.log('Error is (updateSlotsAvailabilityStatus_Doc): ', error);
      setloadingStatus2({status: 3, msg: 'No Details Found.'});
      //handleAxiosError(error);
    }
  };

  const updateSlotsAvailabilityStatus_Therapist = async val => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus2({status: 1, msg: 'Loading...'});
      axios
        .post('https://fornaxbackend.herokuapp.com/slotT/updateSlotStatusT', {
          authID: props?.data?.id,
          id: patientAndSlotInfo.sdId,
          subId: patientAndSlotInfo.stId,
          slotType: patientAndSlotInfo.type,
          value: val,
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus2({status: 2, msg: 'Completed'});
            if (response.data?.code === 203) {
              Alert.alert(
                'Alert !!',
                response.data?.msg,
                [
                  {
                    text: 'Ok',
                    onPress: () => {},
                  },
                ],
                {cancelable: false},
              );
            } else {
              setisBack(!isBack);
              {
                val === 'PO' &&
                  props.navigation.navigate('inputPatientsDetails', {
                    spImg: props?.data?.profilePic,
                    pInfo: patientAndSlotInfo,
                    type: 'Therapist',
                  });
              }
              {
                val === 'A' && reloadAppointSlot();
              }
            }
          } else {
            setloadingStatus2({status: 3, msg: 'No Details Found.'});
            SimpleToast.show(
              (message = 'No Details Found!'),
              (duration = 5000),
            );
          }
        })
        .catch(error => {
          setloadingStatus2({status: 3, msg: 'No Details Found.'});
          console.log(
            'Axios error (updateSlotsAvailabilityStatus_Therapist)',
            error,
          );
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during updation of therapist teli(Online) appointment slot availability status.',
      );
      console.log(
        'Error is (updateSlotsAvailabilityStatus_Therapist): ',
        error,
      );
      setloadingStatus2({status: 3, msg: 'No Details Found.'});
      //handleAxiosError(error);
    }
  };

  let isFocused = useIsFocused();

  //   useEffect(() => {
  //     reloadAppointSlot();
  //   }, []);

  //   useEffect(() => {
  //     if (props.data?.specialities === 'Therapist') {
  //       isBack && isFocused && updateSlotsAvailabilityStatus_Therapist('A');
  //     } else {
  //       isBack && isFocused && updateSlotsAvailabilityStatus_Doc('A');
  //     }
  //   }, [isFocused]);

  const resetSelection = () => {
    setpatientAndSlotInfo({
      sdId: '',
      stId: '',
      time: '',
      format: '',
      date: '',
      date_show: '',
      mode: '',
      type: 0,
    });
  };

  const handleAppointBooking = () => {
    // if (props.data?.specialities === 'Therapist') {
    //   updateSlotsAvailabilityStatus_Therapist('PO');
    // } else {
    //   updateSlotsAvailabilityStatus_Doc('PO');
    // }
    navigate('patientDetailsEnter')
  };

  const onReload = () => {
    handleAppointBooking();
  };

  const reloadAppointSlot = () => {
    if (props.data?.specialities === 'Therapist') {
      fetchData_Therapist();
    } else {
      fetchData_Doc();
    }
  };

  const handleCloseLS = () => {
    setloadingStatus2({status: 2, msg: ''});
    resetSelection();
  };

  return (
    <View
      style={[
        style2.container1,
        status
          ? darkMode.screenBackgroundColors
          : lightMode.screenBackgroundColors,
      ]}>
      <View
        style={[
          style2.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style2.container3}
          data={[1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          renderItem={({item, id}) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={id}
              style={[
                style2.btn1,
                {
                  borderColor: status
                    ? darkMode.screenBackgroundColors.backgroundColor
                    : lightMode.screenBackgroundColors.backgroundColor,
                },
                day === item?.day_show && {backgroundColor: '#00d9ff'},
              ]}
              onPress={() => setDay(item?.day_show)}>
              <Text
                style={[
                  style2.title1,
                  day === item?.day_show
                    ? {color: '#000'}
                    : status
                    ? darkMode.textColor
                    : lightMode.textColor,
                ]}>
                {/* {item?.day_show} */}
                {'20 Feb'}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={style2.container4}>
        <ScrollableCardsComponent
          patientAndSlotInfo={patientAndSlotInfo}
          setpatientAndSlotInfo={setpatientAndSlotInfo}
          mode="Online"
          authID={props?.data?.id}
          status={status}
        />
      </View>
      {/* ))} */}
      {/* <View style={style3.container4}>
        <View
          style={[
            style3.container5,
            status
              ? darkMode.contentbackgroundColor
              : lightMode.contentbackgroundColor,
          ]}>
          <Text
            style={[
              style3.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Appointment slots not available.
          </Text>
        </View>
      </View> */}
      {/* {patientAndSlotInfo.stId.length > 0 && ( */}
      <FloatingBtnSection
        firstBtnTitle="Reset"
        secondBtnTitle="Book Appointment"
        onFirstBtnPress={resetSelection}
        onSecondBtnPress={handleAppointBooking}
      />
      {/* )} */}
    </View>
  );
};

const SlotsListComponent_I = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [day, setDay] = useState(moment().utcOffset('+05:30').format('DD MMM'));
  const [patientAndSlotInfo, setpatientAndSlotInfo] = useState({
    authId: '',
    stId: '',
    sdId: '',
    time: '',
    format: '',
    date: '',
    date_show: '',
    authID: '',
    mode: '',
    type: 0,
  });
  const [data, setdata] = useState({});
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});
  const [loadingStatus2, setloadingStatus2] = useState({status: 2, msg: ''});
  const [isBack, setisBack] = useState(false);
  let isFocused = useIsFocused();

  const fetchData_Doc = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/slotD/getAllClinicSlots', {
          params: {
            id: props?.data?.id,
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
          console.log('Axios error (fetchData_Doc)', error);
        });
      // setloadingStatus(3);
    } catch (error) {
      console.log(
        'Uexpected error occured during doctor in-person appointment slots data fetching.',
      );
      console.log('Error is (fetchData_Doc): ', error);
      setloadingStatus({status: 3, msg: 'No Details Found.'});
      //handleAxiosError(error);
    }
  };

  const fetchData_Therapist = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/slotT/getAllClinicSlots', {
          params: {
            id: props?.data?.id,
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
          console.log('Axios error (fetchData_Therapist)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during therapist in-person appointment slots data fetching.',
      );
      console.log('Error is (fetchData_Therapist): ', error);
      setloadingStatus({status: 3, msg: 'No Details Found.'});
      //handleAxiosError(error);
    }
  };

  //   useEffect(() => {
  //     reloadAppointSlot();
  //   }, []);

  //   useEffect(() => {
  //     if (props.data?.specialities === 'Therapist') {
  //       isBack && isFocused && updateSlotsAvailabilityStatus_Therapist('A');
  //     } else {
  //       isBack && isFocused && updateSlotsAvailabilityStatus_Doc('A');
  //     }
  //   }, [isFocused]);

  const updateSlotsAvailabilityStatus_Doc = async val => {
    try {
      SimpleToast.show((message = 'Loasding...'), (duration = 5000));
      setloadingStatus2({status: 1, msg: 'Loading...'});
      axios
        .post('https://fornaxbackend.herokuapp.com/slotD/updateSlotStatusD', {
          authID: props?.data?.id,
          id: patientAndSlotInfo.sdId,
          subId: patientAndSlotInfo.stId,
          slotType: patientAndSlotInfo.type,
          value: val,
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus2({status: 2, msg: 'Completed'});
            if (response.data?.code === 203) {
              Alert.alert(
                'Alert !!',
                response.data?.msg,
                [
                  {
                    text: 'Ok',
                    onPress: () => {},
                  },
                ],
                {cancelable: false},
              );
            } else {
              setisBack(!isBack);
              {
                val === 'PO' &&
                  props.navigation.navigate('inputPatientsDetails', {
                    spImg: props?.data?.profilePic,
                    pInfo: patientAndSlotInfo,
                    type: 'Doctor',
                  });
              }
              {
                val === 'A' && reloadAppointSlot();
              }
            }
          } else {
            setloadingStatus2({status: 3, msg: 'No Details Found.'});
            SimpleToast.show(
              (message = 'No Details Found!'),
              (duration = 5000),
            );
          }
        })
        .catch(error => {
          setloadingStatus2({status: 3, msg: 'No Details Found.'});
          console.log('Axios error (updateSlotsAvailabilityStaus_Doc)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during updation of doctor In-Person(Offline) appointment slot availability status.',
      );
      console.log('Error is (updateSlotsAvailabilityStaus_Doc): ', error);
      setloadingStatus2({status: 3, msg: 'No Details Found.'});
      //handleAxiosError(error);
    }
  };

  const updateSlotsAvailabilityStatus_Therapist = async val => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus2({status: 1, msg: 'Loading...'});
      axios
        .post('https://fornaxbackend.herokuapp.com/slotT/updateSlotStatusT', {
          authID: props?.data?.id,
          id: patientAndSlotInfo.sdId,
          subId: patientAndSlotInfo.stId,
          slotType: patientAndSlotInfo.type,
          value: val,
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus2({status: 2, msg: 'Completed'});
            if (response.data?.code === 203) {
              Alert.alert(
                'Alert !!',
                response.data?.msg,
                [
                  {
                    text: 'Ok',
                    onPress: () => {},
                  },
                ],
                {cancelable: false},
              );
            } else {
              setisBack(!isBack);
              {
                val === 'PO' &&
                  props.navigation.navigate('inputPatientsDetails', {
                    spImg: props?.data?.profilePic,
                    pInfo: patientAndSlotInfo,
                    type: 'Therapist',
                  });
              }
              {
                val === 'A' && reloadAppointSlot();
              }
            }
          } else {
            setloadingStatus2({status: 3, msg: 'No Details Found.'});
            SimpleToast.show(
              (message = 'No Details Found!'),
              (duration = 5000),
            );
          }
        })
        .catch(error => {
          setloadingStatus2({status: 3, msg: 'No Details Found.'});
          console.log(
            'Axios error (updateSlotsAvailabilityStatus_Therapist)',
            error,
          );
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during updation of therapist In-Person(Offline) appointment slot availability status.',
      );
      console.log(
        'Error is (updateSlotsAvailabilityStatus_Therapist): ',
        error,
      );
      setloadingStatus2({status: 3, msg: 'No Details Found.'});
      //handleAxiosError(error);
    }
  };

  const resetSelection = () => {
    setpatientAndSlotInfo({
      sdId: '',
      stId: '',
      time: '',
      format: '',
      date: '',
      date_show: '',
      mode: '',
      type: 0,
    });
  };

  const handleAppointBooking = () => {
    if (props.data?.specialities === 'Therapist') {
      updateSlotsAvailabilityStatus_Therapist('PO');
    } else {
      updateSlotsAvailabilityStatus_Doc('PO');
    }
  };

  const onReload = () => {
    handleAppointBooking();
  };

  const reloadAppointSlot = () => {
    if (props.data?.specialities === 'Therapist') {
      fetchData_Therapist();
    } else {
      fetchData_Doc();
    }
  };

  const handleCloseLS = () => {
    setloadingStatus2({status: 2, msg: ''});
    resetSelection();
  };

  return (
    <View
      style={[
        style2.container1,
        status
          ? darkMode.screenBackgroundColors
          : lightMode.screenBackgroundColors,
      ]}>
      <View
        style={[
          style2.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style2.container3}
          data={[1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          renderItem={({item, id}) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={id}
              style={[
                style2.btn1,
                {
                  borderColor: status
                    ? darkMode.screenBackgroundColors.backgroundColor
                    : lightMode.screenBackgroundColors.backgroundColor,
                },
                day === item?.day_show && {backgroundColor: '#00d9ff'},
              ]}
              onPress={() => setDay(item?.day_show)}>
              <Text
                style={[
                  style2.title1,
                  day === item?.day_show
                    ? {color: '#000'}
                    : status
                    ? darkMode.textColor
                    : lightMode.textColor,
                ]}>
                {/* {item?.day_show} */}
                {'20 Feb'}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={style2.container4}>
        <ScrollableCardsComponent
          patientAndSlotInfo={patientAndSlotInfo}
          setpatientAndSlotInfo={setpatientAndSlotInfo}
          mode="Online"
          authID={props?.data?.id}
          status={status}
        />
      </View>
      {/* ))} */}
      {/* <View style={style3.container4}>
        <View
          style={[
            style3.container5,
            status
              ? darkMode.contentbackgroundColor
              : lightMode.contentbackgroundColor,
          ]}>
          <Text
            style={[
              style3.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Appointment slots not available.
          </Text>
        </View>
      </View> */}
      {/* {patientAndSlotInfo.stId.length > 0 && ( */}
      <FloatingBtnSection
        firstBtnTitle="Reset"
        secondBtnTitle="Book Appointment"
        onFirstBtnPress={resetSelection}
        onSecondBtnPress={handleAppointBooking}
      />
      {/* )} */}
    </View>
  );
};

export {
  DoctorProfileComponent,
  SlotsListComponent_T,
  SlotsListComponent_I,
  ScrollableCardsComponent,
};
