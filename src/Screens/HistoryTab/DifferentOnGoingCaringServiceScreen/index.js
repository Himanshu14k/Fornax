import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Alert,
  TextInput,
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import axios from 'axios';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {
  EditServiceModal,
  ProfileSectionComponent2,
  PaymentDetailsComponent,
  AppoinmentFeedbackComponent,
  TwoBtnContentComponent,
  ServiceOverviewComponent,
  HomeVistSessionRecordsComponent,
} from '../../../Components/Organisms/CompsForDifferentSessionDetailsScreens/compsForDifferentSessionDetailsScreens';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';
import {
  CustomLoading1,
  CustomLoading2,
} from '../../../Components/Molecules/CustomLoadings/customLoading';
import {styles} from './style';

const Tab = createMaterialTopTabNavigator();
const DifferentOnGoingCaringServiceScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [data, setdata] = useState({});
  const [loadingStatus, setloadingStatus] = useState({
    status: 1,
    msg: 'Loading...',
  });
  const [loadingStatus1, setloadingStatus1] = useState({
    status: 2,
    msg: '',
    type: 0,
  });
  const [isSessionTerminating, setisSessionTerminating] = useState(false);
  const [modalStatus, setmodalStatus] = useState(false);
  const [cReason, setcReason] = useState('');
  const [csId, setcsId] = useState('');
  const [editSessionModal, seteditSessionModal] = useState(false);
  const [modifiedSessions, setmodifiedSessions] = useState('0');
  const [newSessionHr, setnewSessionHr] = useState('01');
  const [newSessionMin, setnewSessionMin] = useState('01');
  const [newSessionTimeType, setnewSessionTimeType] = useState('PM');
  const [sameTime, setsameTime] = useState(false);
  const [hours, setHours] = useState({});

  // To get data about sessions
  const fetchData = async () => {
    try {
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.onrender.com/rASOU/getDetailsAS', {
          params: {
            id: props?.route?.params?.id,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            if (response.data.code === 200) {
              setdata(response.data.data);
              setloadingStatus({status: 2, msg: 'Fetched Successfully.'});
            } else {
              setdata({});
              setloadingStatus({status: 2, msg: 'Data not exists.'});
            }
          } else {
            setloadingStatus({status: 3, msg: 'Only Get nethod allowed.'});
          }
        })
        .catch(error => {
          setloadingStatus({status: 3, msg: 'Internet Connection Lost.'});
          console.log('Axios error (fetchData)', error);
        });
    } catch (error) {
      console.log('Uexpected error occured during user profile data fetching.');
      console.log('Error is (fetchData): ', error);
      setloadingStatus({status: 3, msg: 'Internet Connection Lost.'});
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onReload = () => {
    fetchData();
  };
  // Till here

  // To cancel particular session
  const cancelDS = async (period, last_session, amount, canceledBy, id, cs) => {
    try {
      setloadingStatus1({status: 1, msg: 'Service Canceling ...', type: 1});
      axios
        .post('https://fornaxbackend.onrender.com/rASOU/updateDS', {
          period: period,
          last_date: last_session,
          amount: amount,
          csId: [csId],
          cReason: cReason,
          canceledBy: canceledBy,
          status: 'Canceled',
          id: id,
          cs: cs,
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus1({
              status: 2,
              msg: 'Session Canceled Successfully.',
              type: 1,
            });
            Alert.alert(
              'Success !!',
              'Session Canceled Successfully. !!',
              [
                {
                  text: 'Ok',
                  onPress: () => {
                    fetchData(), reset();
                  },
                },
              ],
              {cancelable: false},
            );
          } else {
            setloadingStatus1({
              status: 3,
              msg: 'Session Cancelation Failed.',
              type: 1,
            });
            Alert.alert(
              'Failed !!',
              'Session Cancelation Failed.',
              [
                ,
                {
                  text: 'Ok',
                  onPress: () => reset(),
                },
              ],
              {cancelable: false},
            );
          }
        })
        .catch(error => {
          setloadingStatus1({status: 3, msg: 'Network Error.', type: 1});
          console.log('Axios error (cancelDS)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during DiffCaringSP service cancelation.',
      );
      console.log('Error is (cancelDS): ', error);
      setloadingStatus1({status: 3, msg: 'Network Error.', type: 1});
    }
  };

  const handleCancelDS = () => {
    setmodalStatus(false);
    cancelDS(
      (period = 1),
      (last_session = data?.sessionInfo?.last_session),
      (amount = data?.sessionInfo?.fees),
      (canceledBy = data?.userInfo?.name),
      (id = data?._id),
      (cs = data?.sessionInfo?.canceled_sessions + 1),
    );
  };
  // Till here

  // To Complete particular session
  const completeDS = async (subId, total_fees, attended_By, id, cs) => {
    try {
      setloadingStatus1({status: 1, msg: 'Completing Session...', type: 2});
      axios
        .post('https://fornaxbackend.onrender.com/rASOU/updateDS', {
          attended_By: attended_By,
          total_fees: total_fees,
          cs: cs,
          status: 'Completed',
          id: id,
          subId: subId,
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus1({
              status: 2,
              msg: 'Session Completed Successfully.',
              type: 2,
            });
            Alert.alert(
              'Success !!',
              'Session Completed Successfully.',
              [
                {
                  text: 'Ok',
                  onPress: () => {
                    fetchData(), reset();
                  },
                },
              ],
              {cancelable: false},
            );
          } else {
            setloadingStatus1({
              status: 3,
              msg: 'Session Completion failed',
              type: 2,
            });
            Alert.alert(
              'Failed !!',
              'Session Completion failed',
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
          setloadingStatus1({status: 3, msg: 'Network Error.', type: 2});
          console.log('Axios error (completeDS)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during DiffCaringSP session completion',
      );
      console.log('Error is (completeDS): ', error);
      setloadingStatus1({status: 3, msg: 'Network Error.', type: 2});
    }
  };

  const handleCompleteDS = subId => {
    setmodalStatus(false);
    completeDS(
      (subId = subId),
      (total_fees = data?.sessionInfo?.total_fees + data?.sessionInfo?.fees),
      (attended_By = data?.userInfo?.name),
      (id = data?._id),
      (cs = data?.sessionInfo?.completed_sessions + 1),
    );
  };
  // Till here

  // To Terminate Whole Sessions
  const TerminateSession = async (canceledBy, id) => {
    try {
      setloadingStatus1({status: 1, msg: 'Terminating Sessions ...', type: 3});
      axios
        .post('https://fornaxbackend.onrender.com/rASOU/terminateS', {
          cReason: cReason,
          canceledBy: canceledBy,
          id: id,
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus1({
              status: 2,
              msg: 'Session Terminated Successfully.',
              type: 3,
            });
            Alert.alert(
              'Success !!',
              'Session Terminated Successfully.',
              [
                {
                  text: 'Ok',
                  onPress: () =>
                    props.navigation.reset({
                      index: 0,
                      routes: [
                        {
                          name: 'allAppoinments',
                        },
                      ],
                    }),
                },
              ],
              {cancelable: false},
            );
          } else {
            setloadingStatus1({
              status: 3,
              msg: 'Session Termination Failed.',
              type: 3,
            });
            Alert.alert(
              'Failed !!',
              'Session Termination Failed.',
              [
                ,
                {
                  text: 'Ok',
                  onPress: () => reset(),
                },
              ],
              {cancelable: false},
            );
          }
        })
        .catch(error => {
          setloadingStatus1({status: 3, msg: 'Network Error.', type: 3});
          console.log('Axios error (TerminateSession)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during DiffCaringSP session Termination.',
      );
      console.log('Error is (TerminateSession): ', error);
      setloadingStatus1({status: 3, msg: 'Network Error.', type: 3});
    }
  };

  const handleSessionTermination = () => {
    setmodalStatus(false);
    TerminateSession((canceledBy = data?.userInfo?.name), (id = data?._id));
  };

  // Till here

  const onReload1 = () => {
    if (loadingStatus1.type === 1) {
      cancelDS(
        (period = 1),
        (last_session = data?.sessionInfo?.last_session),
        (amount = data?.sessionInfo?.fees),
        (canceledBy = data?.userInfo?.name),
        (authID = data?.ref?.spId),
        (id = data?._id),
        (cs = data?.sessionInfo?.canceled_sessions + 1),
      );
    } else if (loadingStatus1.type === 2) {
      completeDS(
        (total_fees = data?.sessionInfo?.total_fees + data?.sessionInfo?.fees),
        (attended_By = data?.userInfo?.name),
        (authID = data?.ref?.spId),
        (id = data?._id),
      );
    } else if (loadingStatus1.type === 3) {
      TerminateSession(
        (canceledBy = data?.userInfo?.name),
        (authID = data?.ref?.spId),
        (id = data?._id),
      );
    } else if (loadingStatus1.type === 4) {
      handleSessionModification();
    }
  };

  const handleCloseLS1 = () => {
    if (loadingStatus1.type === 1) {
      Alert.alert(
        'Alert !!',
        'Are you sure want to terminate this process ?',
        [
          {
            text: 'No',
          },
          {
            text: 'Yes',
            onPress: () => {
              setloadingStatus1({
                status: 2,
                msg: 'Process Terminated.',
                type: 1,
              }),
                reset();
            },
          },
        ],
        {cancelable: false},
      );
    } else if (loadingStatus1.type === 2) {
      Alert.alert(
        'Alert !!',
        'Are you sure want to terminate this process ?',
        [
          {
            text: 'No',
          },
          {
            text: 'Yes',
            onPress: () => {
              setloadingStatus1({
                status: 2,
                msg: 'Process Terminated.',
                type: 2,
              }),
                reset();
            },
          },
        ],
        {cancelable: false},
      );
    } else if (loadingStatus1.type === 3) {
      Alert.alert(
        'Alert !!',
        'Are you sure want to terminate this process ?',
        [
          {
            text: 'No',
          },
          {
            text: 'Yes',
            onPress: () => {
              setloadingStatus1({
                status: 2,
                msg: 'Process Terminated.',
                type: 3,
              }),
                reset();
            },
          },
        ],
        {cancelable: false},
      );
    } else if (loadingStatus1.type === 4) {
      Alert.alert(
        'Alert !!',
        'Are you sure want to terminate this process ?',
        [
          {
            text: 'No',
          },
          {
            text: 'Yes',
            onPress: () => {
              setloadingStatus1({
                status: 2,
                msg: 'Process Terminated.',
                type: 4,
              }),
                reset();
            },
          },
        ],
        {cancelable: false},
      );
    }
  };

  const reset = () => {
    setmodalStatus(false);
    setcReason('');
    setcsId('');
  };

  const resetModifySession = () => {
    setmodifiedSessions('0');
    setnewSessionHr('01');
    setnewSessionMin('01');
    setnewSessionTimeType('PM');
    setsameTime(false);
    setHours({});
  };

  const onchangeModal = () => {
    seteditSessionModal(!editSessionModal);
    resetModifySession();
  };

  const modifySession = item => {
    try {
      setloadingStatus1({status: 1, msg: 'Modifying Session...', type: 4});
      axios
        .post('https://fornaxbackend.onrender.com/rASOU/modifyS', {
          id: data?._id,
          item: item,
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus1({
              status: 2,
              msg: 'Session Modified Successfully.',
              type: 4,
            });
            Alert.alert(
              'Success !!',
              'Session Modified Successfully.',
              [
                {
                  text: 'Ok',
                  onPress: () => {
                    fetchData(), resetModifySession();
                  },
                },
              ],
              {cancelable: false},
            );
          } else {
            setloadingStatus1({
              status: 3,
              msg: 'Session Modification Failed.',
              type: 3,
            });
            Alert.alert(
              'Failed !!',
              'Session Modification Failed.',
              [
                ,
                {
                  text: 'Ok',
                  onPress: () => reset(),
                },
              ],
              {cancelable: false},
            );
          }
        })
        .catch(error => {
          setloadingStatus1({status: 3, msg: 'Network Error.', type: 4});
          console.log('Axios error (Modification)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during DiffCaringSP session Modification.',
      );
      console.log('Error is (modifySession): ', error);
      setloadingStatus1({status: 3, msg: 'Network Error.', type: 4});
    }
  };
  const handleSessionModification = () => {
    seteditSessionModal(false);
    if (sameTime === false) {
      modifySession({
        ts: modifiedSessions,
        tHr: newSessionHr,
        tMin: newSessionMin,
        tType: newSessionTimeType,
        hours: hours?.value === undefined ? false : hours?.value,
        st: sameTime,
        ls: data?.sessionInfo?.last_session,
        fees: data?.sessionInfo?.fees[data?.sessionInfo?.fees.length - 1]
          ?.title,
      });
    } else {
      modifySession({
        ts: modifiedSessions,
        hours: hours?.value === undefined ? false : hours?.value,
        st: sameTime,
        ls: data?.sessionInfo?.last_session,
        fees: data?.sessionInfo?.fees[data?.sessionInfo?.fees.length - 1]
          ?.title,
      });
    }
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
        headerTitle="On-Going Session"
        navigation={props.navigation}
      />
      {loadingStatus.status === 2 ? (
        <>
          <ProfileSectionComponent2 noHistory data={data?.spInfo} />
          <View
            style={[
              {
                flex: 1,
                marginTop: widthToDp(1),
              },
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

                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                },
                tabBarItemStyle: {height: widthToDp(13), width: widthToDp(50)},
                tabBarScrollEnabled: true,
              }}
              initialRouteName="Details">
              <Tab.Screen
                name="Session Details"
                children={() => (
                  <ServiceDetailsSectionComponent
                    navigation={props.navigation}
                    data={data?.sessionInfo}
                    editSessionModal={editSessionModal}
                    onChangeEditSessionModalStatus={seteditSessionModal}
                    setisSessionTerminating={setisSessionTerminating}
                    onChangeModalStatus={setmodalStatus}
                  />
                )}
              />
              <Tab.Screen
                name="Session Record"
                children={() => (
                  <HomeVistSessionRecordsComponent
                    navigation={props.navigation}
                    data1={data?.sessionInfo}
                    data2={data?.sessions}
                    setcsId={setcsId}
                    reset={reset}
                    handleCompleteDS={handleCompleteDS}
                    onChangeModalStatus={setmodalStatus}
                  />
                )}
              />
            </Tab.Navigator>
          </View>
        </>
      ) : (
        <CustomLoading2 loadingStatus={loadingStatus} onReload={onReload} />
      )}
      <CustomLoading1
        loadingStatus={loadingStatus1}
        onReload={onReload1}
        onClose={handleCloseLS1}
      />
      <SessionCancelationModal
        modalStatus={modalStatus}
        value={cReason}
        reset={reset}
        onChangeText={setcReason}
        onChangeModalStatus={setmodalStatus}
        handleSessionCancelation={
          isSessionTerminating === true
            ? handleSessionTermination
            : handleCancelDS
        }
      />
      <EditServiceModal
        data={{
          date: {start: '24/03/2023', end: '30/03/2023'},
          time: {start: '06:40 PM', end: '08:40 PM'},
        }}
        modalStatus={editSessionModal}
        onchangeModal={onchangeModal}
        modifiedSessions={modifiedSessions}
        setmodifiedSessions={setmodifiedSessions}
        newSessionHr={newSessionHr}
        setnewSessionHr={setnewSessionHr}
        newSessionMin={newSessionMin}
        setnewSessionMin={setnewSessionMin}
        newSessionTimeType={newSessionTimeType}
        setnewSessionTimeType={setnewSessionTimeType}
        sameTime={sameTime}
        setsameTime={setsameTime}
        hours={hours}
        setHours={setHours}
        handleSessionModification={handleSessionModification}
      />
    </View>
  );
};

const ServiceDetailsSectionComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  const onClickSessionTerminate = () => {
    Alert.alert(
      'Alert !!',
      'Are you sure you want to terminate whole sessions ?',
      [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          onPress: () => {
            props.setisSessionTerminating(true),
              props.onChangeModalStatus(true);
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <ServiceOverviewComponent
        editSessionModal={props.editSessionModal}
        onChangeEditSessionModalStatus={props.onChangeEditSessionModalStatus}
        noHistory
        data={props?.data}
      />
      <PaymentDetailsComponent />
      <TwoBtnContentComponent
        btnTitle1="Terminate"
        btnTitle2="Need help"
        btn1IconType="material-community"
        btn1IconName="cancel"
        btn2IconType="material-community"
        btn2IconName="help"
        btn1Color={'#ff0000'}
        btn2Color={
          status ? darkMode.textColor.color : lightMode.textColor.color
        }
        onBtn1Press={() => onClickSessionTerminate()}
        onBtn2Press={() => {}}
      />
      <View style={{marginTop: -widthToDp(1)}} />
      <AppoinmentFeedbackComponent />
    </ScrollView>
  );
};

const SessionCancelationModal = props => {
  const status = useSelector(state => state.otherReducer.status);

  const onModalClose = () => {
    props.onChangeModalStatus(false);
    props.reset();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalStatus}
      onRequestClose={() => onModalClose()}>
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.blankSpace}
          onPress={() => onModalClose()}
        />
        <View
          style={[
            styles.container2,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}>
          <View style={styles.container3}>
            <Text
              style={[
                styles.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Reason for cancelation.
            </Text>
          </View>
          <View
            style={[
              styles.container4,
              status
                ? darkMode.borderColorPrimary
                : lightMode.borderColorPrimary,
            ]}>
            <TextInput
              style={[
                styles.input,
                status ? darkMode.textColor : lightMode.textColor,
              ]}
              onChangeText={props.onChangeText}
              value={props.value}
              multiline
              placeholder="Type reason for cancelation..."
              keyboardType="default"
            />
          </View>
          <View style={styles.container5}>
            {props.value.length > 0 ? (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  props.handleSessionCancelation(), props.reset();
                }}
                style={styles.btn1}>
                <Text style={styles.title2}>Ok</Text>
              </TouchableOpacity>
            ) : (
              <View
                activeOpacity={0.7}
                style={[
                  styles.btn2,
                  status
                    ? darkMode.borderColorPrimary
                    : lightMode.borderColorPrimary,
                ]}>
                <Text style={styles.title2}>Ok</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DifferentOnGoingCaringServiceScreen;
