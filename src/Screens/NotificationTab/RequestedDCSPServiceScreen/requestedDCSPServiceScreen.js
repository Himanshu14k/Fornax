import {
  Alert,
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {Icon} from '@rneui/themed';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {lightMode, darkMode} from '../../../Utils/Colors';
import {
  adjustedFontSize,
  widthToDp,
  windowWidth,
} from '../../../Utils/dimensionsInPixel';
import {
  CustomDatePicker,
  CustomTimePicker,
} from '../../../Components/Molecules/CustomDateTimePicker/customDateTimePicker';
import {DropdownMenuComponent} from '../../../Components/Molecules/DropdownMenu/DropDownMenuComponent';
import CustomTextInput from '../../../Components/Atoms/TextInput/customTextInput';
import {
  CustomLoading1,
  CustomLoading2,
} from '../../../Components/Molecules/CustomLoadings/customLoading';
import {styles1, styles2} from './styles';
import {hoursData} from '../../../Components/Organisms/CompsForDifferentSessionDetailsScreens/compsForDifferentSessionDetailsScreens';

const RequestedDCSPServiceScreen = props => {
  const status = useSelector(state => state.themeR.status);
  const uId = useSelector(state => state.authStatusR.uId);
  const [data, setdata] = useState({});
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});
  const [modalStatus, setmodalStatus] = useState(false);
  const [editFromDate, seteditFromDate] = useState(false);
  const [fromDate, setfromDate] = useState(new Date());
  const [editDateDuraion, seteditDateDuraion] = useState(false);
  const [dateDuration, setdateDuration] = useState('');
  const [editFromTime, seteditFromTime] = useState(false);
  const [fromTime, setfromTime] = useState(new Date());
  const [editTimeDuraion, seteditTimeDuraion] = useState(false);
  const [timeDuration, settimeDuration] = useState({});
  const [editFees, seteditFees] = useState(false);
  const [fees, setfees] = useState('');
  const [loadingStatus1, setloadingStatus1] = useState({status: 2, msg: ''});
  const [loadingStatus2, setloadingStatus2] = useState({status: 2, msg: ''});

  const fetchData = async () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.onrender.com/uSR/getAllReqMsg', {
          params: {
            authId: uId,
            id: props?.route?.params?.id,
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
          setloadingStatus({status: 3, msg: 'Network Error.'});
          console.log('Axios error (fetchData)', error);
        });
      // setloadingStatus(3);
    } catch (error) {
      console.log(
        'Uexpected error occured during all requested DiffCaringSP data fetching.',
      );
      console.log('Error is (fetchData): ', error);
      setloadingStatus({status: 3, msg: 'Network Error.'});
    }
  };

  useEffect(() => {
    fetchData();
    return;
  }, []);

  const onReload = () => {
    fetchData();
  };

  const onChangeModalStatus = () => {
    setmodalStatus(!modalStatus);
  };

  const closeModal = () => {
    setmodalStatus(false);
    reset();
  };

  const insertNewMsg = async reqMsg => {
    try {
      setloadingStatus1({status: 1, msg: 'Requesting Services...'});
      axios
        .post('https://fornaxbackend.onrender.com/uSR/updateMsg', {
          spId: data?.spInfo?.spId,
          uId: uId,
          id1: data?._id,
          id2: data?.ref?.reqId_sp,
          reqMsg: reqMsg,
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus1({status: 2, msg: 'Completed'});
            Alert.alert(
              'Success !!',
              'Msg Sended successfully !!',
              [
                {
                  text: 'Ok',
                  onPress: () => fetchData(),
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
          setloadingStatus1({status: 3, msg: 'Network Error.'});
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
      setloadingStatus1({status: 3, msg: 'Network Error.'});
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

  const validate = () => {
    try {
      if (editDateDuraion === true && dateDuration.length <= 0) {
        return "You haven't entered date duration.";
      } else if (editTimeDuraion === true && timeDuration.length <= 0) {
        return "You haven't entered time duration.";
      } else if (editFees === true && fees.length <= 0) {
        return "You haven't entered fees.";
      } else {
        return true;
      }
    } catch (error) {}
  };

  const handleSendRequest = (
    fromDateL,
    dateDuraionL,
    endDateL,
    fromTimeL,
    timeDuraionL,
    endTimeL,
    feesL,
  ) => {
    let res = validate();
    if (res === true) {
      let temp = {
        date: {
          start:
            editFromDate === true
              ? moment(fromDate).format('DD/MM/YYYY')
              : moment(fromDateL).format('DD/MM/YYYY'),
          end:
            editFromDate === true && editDateDuraion === true
              ? moment(fromDate)
                  .add(parseInt(dateDuration) - 1, 'days')
                  .format('DD/MM/YYYY')
              : editFromDate === true
              ? moment(fromDate)
                  .add(parseInt(dateDuraionL) - 1, 'days')
                  .format('DD/MM/YYYY')
              : editDateDuraion === true
              ? moment(fromDateL)
                  .add(parseInt(dateDuration) - 1, 'days')
                  .format('DD/MM/YYYY')
              : endDateL,
          duration:
            editDateDuraion === true
              ? parseInt(dateDuration)
              : parseInt(dateDuraionL),
        },
        time: {
          start:
            editFromTime === true
              ? moment(fromTime).format('hh:mm A')
              : moment(fromTimeL).format('hh:mm A'),
          end:
            editFromTime === true && editTimeDuraion === true
              ? moment(fromTime)
                  .add(parseInt(timeDuration?.value), 'hours')
                  .format('hh:mm A')
              : editFromTime === true
              ? moment(fromTime)
                  .add(parseInt(timeDuraionL), 'hours')
                  .format('hh:mm A')
              : editTimeDuraion === true
              ? moment(fromTimeL)
                  .add(parseInt(timeDuration?.value), 'hours')
                  .format('hh:mm A')
              : endTimeL,
          duration:
            editTimeDuraion === true
              ? parseInt(timeDuration?.value)
              : parseInt(timeDuraionL),
        },
        fees: editFees === true ? parseInt(fees) : parseInt(feesL),
        requestedBy: 'User',
      };
      setmodalStatus(false);
      insertNewMsg(temp);
      reset();
    } else {
      Alert.alert(
        'Failed !!',
        "Request couldn't sended.",
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

  const reset = () => {
    seteditFromDate(false);
    setfromDate(new Date());
    seteditDateDuraion(false);
    setdateDuration('');
    seteditFromTime(false);
    setfromTime(new Date());
    seteditTimeDuraion(false);
    settimeDuration({});
    seteditFees(false);
    setfees('');
  };

  const onReload1 = () => {
    handleSendRequest();
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
          onPress: () => {
            setloadingStatus1({
              status: 2,
              msg: 'Service Request failed.',
            }),
              reset();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const insertInOnGoing = async item => {
    try {
      setloadingStatus2({status: 1, msg: 'Confirming Deal...'});
      axios
        .post('https://fornaxbackend.onrender.com/uSR/delete', {
          spId: data?.spInfo?.spId,
          uId: uId,
          id1: data?._id,
          id2: data?.ref?.reqId_sp,
          item: {
            ref: data?.ref,
            userInfo: data?.userInfo,
            spInfo: data?.spInfo,
            service: data?.services,
            dealInfo: item,
            address: data?.address,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus2({status: 2, msg: 'Deal Confirmed!'});
            Alert.alert(
              'Success !!',
              'Deal Successfully Confirmed !!',
              [
                {
                  text: 'Ok',
                  onPress: () =>
                    props.navigation.reset({
                      index: 0,
                      routes: [
                        {
                          name: 'home',
                        },
                      ],
                    }),
                },
              ],
              {cancelable: false},
            );
          } else {
            setloadingStatus1({status: 3, msg: 'Deal Confirmation failed.'});
            Alert.alert(
              'Failed !!',
              'Deal Confirmation failed.',
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
          setloadingStatus2({status: 3, msg: 'Network Error.'});
          console.log('Axios error (insertData)', error);
          Alert.alert(
            'Failed !!',
            'Deal Confirmation failed.',
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
        'Uexpected error occured during DiffCaringSP Deal Confirmation data insertion.',
      );
      console.log('Error is (insertInOnGoing): ', error);
      setloadingStatus2({status: 3, msg: 'Network Error.'});
      Alert.alert(
        'Failed !!',
        'Deal Confirmation failed.',
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

  const handleConfirmDeal = item => {
    insertInOnGoing(item);
  };

  const onReload2 = () => {
    handleConfirmDeal();
  };

  const handleCloseLS2 = () => {
    Alert.alert(
      'Alert !!',
      'Are you sure want to cancel deal Confirmation ?',
      [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          onPress: () =>
            setloadingStatus2({
              status: 2,
              msg: 'Deal Confirmation failed.',
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
        headerTitle="Requested Services"
        navigation={props.navigation}
      />
      {loadingStatus.status === 2 ? (
        <View style={{flex: 1}}>
          <FlatList
            inverted
            showsVerticalScrollIndicator={false}
            data={data?.requests}
            contentContainerStyle={{flexGrow: 1, padding: widthToDp(1)}}
            renderItem={({item, id}) =>
              item?.requestedBy !== 'User' ? (
                <>
                  <ReceiverComponent
                    key={id}
                    data={item}
                    optionBtn={
                      item?._id === data?.requests[0]?._id ? true : false
                    }
                    onChangeModalStatus={onChangeModalStatus}
                    handleConfirmDeal={handleConfirmDeal}
                  />
                  <EditRequeuestedServiceModal
                    data={item}
                    modalStatus={modalStatus}
                    onChangeModalStatus={setmodalStatus}
                    dateDuration={dateDuration}
                    setdateDuration={setdateDuration}
                    editFromDate={editFromDate}
                    seteditFromDate={seteditFromDate}
                    fromDate={fromDate}
                    setfromDate={setfromDate}
                    editDateDuraion={editDateDuraion}
                    seteditDateDuraion={seteditDateDuraion}
                    editFees={editFees}
                    seteditFees={seteditFees}
                    fees={fees}
                    setfees={setfees}
                    editFromTime={editFromTime}
                    seteditFromTime={seteditFromTime}
                    fromTime={fromTime}
                    setfromTime={setfromTime}
                    editTimeDuraion={editTimeDuraion}
                    seteditTimeDuraion={seteditTimeDuraion}
                    timeDuration={timeDuration}
                    settimeDuration={settimeDuration}
                    handleSendRequest={handleSendRequest}
                    closeModal={closeModal}
                  />
                </>
              ) : (
                <SenderComponent
                  key={id}
                  data={item}
                  onChangeModalStatus={onChangeModalStatus}
                  handleConfirmDeal={handleConfirmDeal}
                />
              )
            }
          />
        </View>
      ) : (
        <CustomLoading2
          loadingStatus={loadingStatus}
          setloadingStatus={onReload}
        />
      )}
      <CustomLoading1
        loadingStatus={loadingStatus1}
        onReload={onReload1}
        onClose={handleCloseLS}
      />
      <CustomLoading1
        loadingStatus={loadingStatus2}
        onReload={onReload2}
        onClose={handleCloseLS2}
      />
    </SafeAreaView>
  );
};

const ReceiverComponent = props => {
  const status = useSelector(state => state.themeR.status);

  return (
    <View
      style={[
        styles1.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={styles1.container2}>
        <Text
          style={[
            styles1.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Service Provider
        </Text>
      </View>
      <View
        style={[
          styles1.container3,
          status ? darkMode.borderColorPrimary : lightMode.borderColorPrimary,
        ]}>
        <Text
          style={[
            styles1.title2,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Date
        </Text>
        <View style={styles1.container4}>
          <Text
            style={[
              styles1.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            From
          </Text>
          <View
            style={[
              styles1.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              name="calendar"
              type="ionicon"
              size={widthToDp(3.5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              style={[
                styles1.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.date?.start}
            </Text>
          </View>
        </View>
        <View style={styles1.container4}>
          <Text
            style={[
              styles1.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Till
          </Text>

          <View
            style={[
              styles1.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              name="calendar"
              type="ionicon"
              size={widthToDp(3.5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              style={[
                styles1.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.date?.end}
            </Text>
          </View>
        </View>
        <View style={styles1.container4}>
          <Text
            style={[
              styles1.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Duration
          </Text>

          <View
            style={[
              styles1.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              name="calendar"
              type="ionicon"
              size={widthToDp(3.5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              style={[
                styles1.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.date?.duration} Days
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles1.container3,
          status ? darkMode.borderColorPrimary : lightMode.borderColorPrimary,
        ]}>
        <Text
          style={[
            styles1.title2,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Time
        </Text>
        <View style={styles1.container4}>
          <Text
            style={[
              styles1.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            From
          </Text>
          <View
            style={[
              styles1.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              name="time"
              type="ionicon"
              size={widthToDp(3.5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              style={[
                styles1.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.time?.start}
            </Text>
          </View>
        </View>
        <View style={styles1.container4}>
          <Text
            style={[
              styles1.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Till
          </Text>

          <View
            style={[
              styles1.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              name="time"
              type="ionicon"
              size={widthToDp(3.5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              style={[
                styles1.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.time?.end}
            </Text>
          </View>
        </View>
        <View style={styles1.container4}>
          <Text
            style={[
              styles1.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Duration
          </Text>

          <View
            style={[
              styles1.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              name="time"
              type="ionicon"
              size={widthToDp(3.5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              style={[
                styles1.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.time?.duration} Hours
            </Text>
          </View>
        </View>
      </View>
      <View style={styles1.container4}>
        <Text
          style={[
            styles1.title2,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Fees
        </Text>

        <View
          style={[
            styles1.container5,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
            {
              borderColor: status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor,
            },
          ]}>
          <Icon
            name="calendar"
            type="ionicon"
            size={widthToDp(3.5)}
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
          />
          <Text
            style={[
              styles1.title4,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {props?.data?.fees} / hr
          </Text>
        </View>
      </View>
      {props.optionBtn === true && (
        <View
          style={[
            styles1.container6,
            {
              borderTopColor: status
                ? darkMode.borderColorPrimary.borderColor
                : lightMode.borderColorPrimary.borderColor,
            },
          ]}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.onChangeModalStatus()}
            style={[
              styles1.btn1,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
            ]}>
            <Text
              style={[
                status ? darkMode.textColor : lightMode.textColor,
                {fontWeight: '500'},
              ]}>
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles1.btn2}
            onPress={() => props.handleConfirmDeal(props?.data)}>
            <Text style={{color: 'black', fontWeight: '500'}}>Done</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const SenderComponent = props => {
  const status = useSelector(state => state.themeR.status);

  return (
    <View
      key={props.key}
      style={[
        styles1.container1,
        {alignSelf: 'flex-end'},
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={styles1.container2}>
        <Text
          style={[
            styles1.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          You
        </Text>
      </View>
      <View
        style={[
          styles1.container3,
          status ? darkMode.borderColorPrimary : lightMode.borderColorPrimary,
        ]}>
        <Text
          style={[
            styles1.title2,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Date
        </Text>
        <View style={styles1.container4}>
          <Text
            style={[
              styles1.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            From
          </Text>
          <View
            style={[
              styles1.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              name="calendar"
              type="ionicon"
              size={widthToDp(3.5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              style={[
                styles1.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.date?.start}
            </Text>
          </View>
        </View>
        <View style={styles1.container4}>
          <Text
            style={[
              styles1.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Till
          </Text>

          <View
            style={[
              styles1.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              name="calendar"
              type="ionicon"
              size={widthToDp(3.5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              style={[
                styles1.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.date?.end}
            </Text>
          </View>
        </View>
        <View style={styles1.container4}>
          <Text
            style={[
              styles1.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Duration
          </Text>

          <View
            style={[
              styles1.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              name="calendar"
              type="ionicon"
              size={widthToDp(3.5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              style={[
                styles1.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.date?.duration} Days
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles1.container3,
          status ? darkMode.borderColorPrimary : lightMode.borderColorPrimary,
        ]}>
        <Text
          style={[
            styles1.title2,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Time
        </Text>
        <View style={styles1.container4}>
          <Text
            style={[
              styles1.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            From
          </Text>
          <View
            style={[
              styles1.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              name="time"
              type="ionicon"
              size={widthToDp(3.5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              style={[
                styles1.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.time?.start}
            </Text>
          </View>
        </View>
        <View style={styles1.container4}>
          <Text
            style={[
              styles1.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Till
          </Text>

          <View
            style={[
              styles1.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              name="time"
              type="ionicon"
              size={widthToDp(3.5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              style={[
                styles1.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.time?.end}
            </Text>
          </View>
        </View>
        <View style={styles1.container4}>
          <Text
            style={[
              styles1.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Duration
          </Text>

          <View
            style={[
              styles1.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              name="time"
              type="ionicon"
              size={widthToDp(3.5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              style={[
                styles1.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.time?.duration} Hours
            </Text>
          </View>
        </View>
      </View>
      <View style={styles1.container4}>
        <Text
          style={[
            styles1.title2,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Fees
        </Text>

        <View
          style={[
            styles1.container5,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
            {
              borderColor: status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor,
            },
          ]}>
          <Icon
            name="calendar"
            type="ionicon"
            size={widthToDp(3.5)}
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
          />
          <Text
            style={[
              styles1.title4,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {props?.data?.fees} / hr
          </Text>
        </View>
      </View>
    </View>
  );
};

const EditRequeuestedServiceModal = props => {
  const status = useSelector(state => state.themeR.status);

  let d1 = props?.data?.date?.start.split('/');
  let t1 = props?.data?.time?.start.split(/[:\s]+/);
  let newTime = new Date(
    parseInt(d1[2]),
    parseInt(d1[1]),
    parseInt(d1[0]),
    parseInt(t1[0]),
    parseInt(t1[1]),
  );
  let newDate = new Date(
    parseInt(d1[2]),
    parseInt(d1[1]) - 1,
    parseInt(d1[0]),
    parseInt(t1[0]),
    parseInt(t1[1]),
  );

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={props.modalStatus}
      onRequestClose={() => props.closeModal()}>
      <View style={styles2.container1}>
        <View
          style={[
            styles2.container2,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}>
          <View style={styles1.container2}>
            <Text
              style={[
                styles1.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Edit Service Request
            </Text>
          </View>
          <View
            style={[
              styles1.container3,
              status
                ? darkMode.borderColorPrimary
                : lightMode.borderColorPrimary,
            ]}>
            <Text
              style={[
                styles1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Date
            </Text>
            <View style={styles1.container4}>
              <Text
                style={[
                  styles1.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                From
              </Text>
              {props.editFromDate === false ? (
                <View
                  style={[
                    styles1.container5,
                    status
                      ? darkMode.containerbackgroundColor
                      : lightMode.containerbackgroundColor,
                    {
                      borderColor: status
                        ? darkMode.screenBackgroundColors.backgroundColor
                        : lightMode.screenBackgroundColors.backgroundColor,
                    },
                  ]}>
                  <Icon
                    name="calendar"
                    type="ionicon"
                    size={widthToDp(3.5)}
                    color={
                      status
                        ? darkMode.tintColors.tintColor
                        : lightMode.tintColors.tintColor
                    }
                  />
                  <Text
                    style={[
                      styles1.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {props?.data?.date?.start}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => props.seteditFromDate(true)}
                    style={styles1.btn3}>
                    <Icon
                      name="pencil-outline"
                      type="material-community"
                      size={widthToDp(3.5)}
                      color={'#00d9ff'}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <CustomDatePicker
                  value={props.fromDate}
                  onChange={props.setfromDate}
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
                    styles2.container3,
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
                    styles2.title1,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}
                />
              )}
            </View>
            <View style={styles1.container4}>
              <Text
                style={[
                  styles1.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Till
              </Text>

              <View
                style={[
                  styles1.container5,
                  status
                    ? darkMode.containerbackgroundColor
                    : lightMode.containerbackgroundColor,
                  {
                    borderColor: status
                      ? darkMode.screenBackgroundColors.backgroundColor
                      : lightMode.screenBackgroundColors.backgroundColor,
                  },
                ]}>
                <Icon
                  name="calendar"
                  type="ionicon"
                  size={widthToDp(3.5)}
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                />
                <Text
                  style={[
                    styles1.title4,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {props.editFromDate === true && props.editDateDuraion === true
                    ? moment(props.fromDate)
                        .add(parseInt(props.dateDuration) - 1, 'days')
                        .format('DD/MM/YYYY')
                    : props.editFromDate === true
                    ? moment(props.fromDate)
                        .add(parseInt(props?.data?.date?.duration) - 1, 'days')
                        .format('DD/MM/YYYY')
                    : props.editDateDuraion === true
                    ? moment(newDate)
                        .add(parseInt(props.dateDuration) - 1, 'days')
                        .format('DD/MM/YYYY')
                    : props?.data?.date?.end}
                </Text>
              </View>
            </View>
            <View style={styles1.container4}>
              <Text
                style={[
                  styles1.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Duration
              </Text>

              {props.editDateDuraion === false ? (
                <View
                  style={[
                    styles1.container5,
                    status
                      ? darkMode.containerbackgroundColor
                      : lightMode.containerbackgroundColor,
                    {
                      borderColor: status
                        ? darkMode.screenBackgroundColors.backgroundColor
                        : lightMode.screenBackgroundColors.backgroundColor,
                    },
                  ]}>
                  <Icon
                    name="calendar"
                    type="ionicon"
                    size={widthToDp(3.5)}
                    color={
                      status
                        ? darkMode.tintColors.tintColor
                        : lightMode.tintColors.tintColor
                    }
                  />
                  <Text
                    style={[
                      styles1.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {props?.data?.date?.duration} Days
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => props.seteditDateDuraion(true)}
                    style={styles1.btn3}>
                    <Icon
                      name="pencil-outline"
                      type="material-community"
                      size={widthToDp(3.5)}
                      color={'#00d9ff'}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <CustomTextInput
                  value={props.dateDuration}
                  onChangeText={props.setdateDuration}
                  numberOfLines={1}
                  editable
                  maxLength={2}
                  keyboardType="numeric"
                  placeholder="Enter Days..."
                  placeholderTextColor={
                    status
                      ? darkMode.textColor.color
                      : lightMode.textColor.color
                  }
                  inputContainerStyle={styles2.container4}
                  inputStyle={[
                    styles2.inputStyles,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}
                  rightIcon
                  rightIconSize={widthToDp(4)}
                />
              )}
            </View>
          </View>
          <View
            style={[
              styles1.container3,
              status
                ? darkMode.borderColorPrimary
                : lightMode.borderColorPrimary,
            ]}>
            <Text
              style={[
                styles1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Time
            </Text>
            <View style={styles1.container4}>
              <Text
                style={[
                  styles1.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                From
              </Text>
              {props.editFromTime === false ? (
                <View
                  style={[
                    styles1.container5,
                    status
                      ? darkMode.containerbackgroundColor
                      : lightMode.containerbackgroundColor,
                    {
                      borderColor: status
                        ? darkMode.screenBackgroundColors.backgroundColor
                        : lightMode.screenBackgroundColors.backgroundColor,
                    },
                  ]}>
                  <Icon
                    name="time"
                    type="ionicon"
                    size={widthToDp(3.5)}
                    color={
                      status
                        ? darkMode.tintColors.tintColor
                        : lightMode.tintColors.tintColor
                    }
                  />
                  <Text
                    style={[
                      styles1.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {props?.data?.time?.start}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => props.seteditFromTime(true)}
                    style={styles1.btn3}>
                    <Icon
                      name="pencil-outline"
                      type="material-community"
                      size={widthToDp(3.5)}
                      color={'#00d9ff'}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <CustomTimePicker
                  value={props.fromTime}
                  onChange={props.setfromTime}
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
                    styles2.container3,
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
                    styles2.title1,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}
                />
              )}
            </View>
            <View style={styles1.container4}>
              <Text
                style={[
                  styles1.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Till
              </Text>

              <View
                style={[
                  styles1.container5,
                  status
                    ? darkMode.containerbackgroundColor
                    : lightMode.containerbackgroundColor,
                  {
                    borderColor: status
                      ? darkMode.screenBackgroundColors.backgroundColor
                      : lightMode.screenBackgroundColors.backgroundColor,
                  },
                ]}>
                <Icon
                  name="time"
                  type="ionicon"
                  size={widthToDp(3.5)}
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                />
                <Text
                  style={[
                    styles1.title4,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {props.editFromTime === true && props.editTimeDuraion === true
                    ? moment(props.fromTime)
                        .add(parseInt(props.timeDuration?.value), 'hours')
                        .format('hh:mm A')
                    : props.editFromTime === true
                    ? moment(props.fromTime)
                        .add(parseInt(props?.data?.time?.duration), 'hours')
                        .format('hh:mm A')
                    : props.editTimeDuraion === true
                    ? moment(newTime)
                        .add(parseInt(props.timeDuration?.value), 'hours')
                        .format('hh:mm A')
                    : props?.data?.time?.end}
                </Text>
              </View>
            </View>
            <View style={styles1.container4}>
              <Text
                style={[
                  styles1.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Duration
              </Text>

              {props.editTimeDuraion === false ? (
                <View
                  style={[
                    styles1.container5,
                    status
                      ? darkMode.containerbackgroundColor
                      : lightMode.containerbackgroundColor,
                    {
                      borderColor: status
                        ? darkMode.screenBackgroundColors.backgroundColor
                        : lightMode.screenBackgroundColors.backgroundColor,
                    },
                  ]}>
                  <Icon
                    name="time"
                    type="ionicon"
                    size={widthToDp(3.5)}
                    color={
                      status
                        ? darkMode.tintColors.tintColor
                        : lightMode.tintColors.tintColor
                    }
                  />
                  <Text
                    style={[
                      styles1.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {props?.data?.time?.duration} Hours
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => props.seteditTimeDuraion(true)}
                    style={styles1.btn3}>
                    <Icon
                      name="pencil-outline"
                      type="material-community"
                      size={widthToDp(3.5)}
                      color={'#00d9ff'}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <DropdownMenuComponent
                  style={[
                    styles2.container5,
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
                  value={props.timeDuration}
                  setValue={props.settimeDuration}
                  labelField="title"
                  valueField="value"
                  placeholder={
                    props.timeDuration?.title === undefined
                      ? 'Select Time'
                      : props.timeDuration.title
                  }
                  maxHeight={widthToDp(50)}
                  placeholderStyle={[
                    styles2.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}
                  selectedTextStyle={[
                    styles2.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}
                  rightIconStyle={[
                    styles2.rightIconStyle,
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
              )}
            </View>
          </View>
          <View style={styles1.container4}>
            <Text
              style={[
                styles1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Fees
            </Text>

            {props.editFees === false ? (
              <View
                style={[
                  styles1.container5,
                  status
                    ? darkMode.containerbackgroundColor
                    : lightMode.containerbackgroundColor,
                  {
                    borderColor: status
                      ? darkMode.screenBackgroundColors.backgroundColor
                      : lightMode.screenBackgroundColors.backgroundColor,
                  },
                ]}>
                <Icon
                  name="calendar"
                  type="ionicon"
                  size={widthToDp(3.5)}
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                />
                <Text
                  style={[
                    styles1.title4,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {props?.data?.fees} / hr
                </Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => props.seteditFees(true)}
                  style={styles1.btn3}>
                  <Icon
                    name="pencil-outline"
                    type="material-community"
                    size={widthToDp(3.5)}
                    color={'#00d9ff'}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <CustomTextInput
                value={props.fees}
                onChangeText={props.setfees}
                numberOfLines={1}
                editable
                maxLength={4}
                keyboardType="numeric"
                placeholder={'Day shift fare: ' + 150 + '/hr'}
                placeholderTextColor={
                  status ? darkMode.textColor.color : lightMode.textColor.color
                }
                inputContainerStyle={styles2.container6}
                inputStyle={[
                  styles2.inputStyles2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}
                rightIcon
                rightIconSize={widthToDp(4)}
              />
            )}
          </View>
        </View>
        <View style={styles1.container7}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.closeModal()}
            style={[
              styles2.btn1,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
            ]}>
            <Text
              style={[
                {fontSize: adjustedFontSize(12), fontWeight: '500'},
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              props.handleSendRequest(
                newDate,
                props?.data?.date?.duration,
                props?.data?.date?.end,
                newTime,
                props?.data?.time?.duration,
                props?.data?.time?.end,
                props?.data?.fees,
              )
            }
            style={styles2.btn2}>
            <Text
              style={{
                color: 'black',
                fontSize: adjustedFontSize(12),
                fontWeight: '500',
              }}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RequestedDCSPServiceScreen;
