import React, {useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {styles} from './style';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {
  PaymentDetailsComponent,
  ProfileSectionComponent2,
  ReviewAppoinmentComponent,
  TwoBtnContentComponent,
} from '../../../Components/Organisms/CompsForDifferentSessionDetailsScreens/compsForDifferentSessionDetailsScreens';
import {
  CustomLoading1,
  CustomLoading2,
} from '../../../Components/Molecules/CustomLoadings/customLoading';

const UpcomingAppoinmentDetailsScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  const uId = useSelector(state => state.authenticationReducer.uId);
  const [data, setdata] = useState({});
  const [cancelationReason, setcancelationReason] = useState('');
  const [loadingStatus, setloadingStatus] = useState({
    status: 1,
    msg: '',
  });
  const [loadingStatus1, setloadingStatus1] = useState({
    status: 2,
    msg: '',
  });
  const [modalStatus, setmodalStatus] = useState(false);

  const fetchData = async () => {
    try {
      axios
        .get('https://fornaxbackend.onrender.com/uBA/getBAbyID', {
          params: {
            authID: uId,
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

  const insertData_Doc = async () => {
    try {
      setloadingStatus1({status: 1, msg: 'Canceling...'});
      axios
        .post('https://fornaxbackend.onrender.com/uBA/canceledDA', {
          authID: uId,
          item: data,
          reason: cancelationReason,
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus1({
              status: 2,
              msg: 'Appointment Canceled Successfully.',
            });
            Alert.alert(
              'Success !!',
              'Appointment Canceled successfully!.',
              [
                {
                  text: 'Ok',
                  onPress: () => props.navigation.goBack(),
                },
              ],
              {
                cancelable: false,
              },
            );
          } else {
            setloadingStatus1({status: 3, msg: 'Internet Connection Lost.'});
          }
        })
        .catch(error => {
          setloadingStatus1({status: 3, msg: 'Internet Connection Lost.'});
          console.log('Axios error (insertData)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during doctor appointment cancelation.',
      );
      console.log('Error is (insertData): ', error);
      setloadingStatus1({status: 3, msg: 'Internet Connection Lost.'});
    }
  };

  const insertData_Therapist = async () => {
    try {
      setloadingStatus1({status: 1, msg: 'Canceling...'});
      axios
        .post('https://fornaxbackend.onrender.com/uBA/canceledTA', {
          authID: uId,
          item: data,
          reason: cancelationReason,
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus1({
              status: 2,
              msg: 'Appointment Canceled Successfully.',
            });
            Alert.alert(
              'Success !!',
              'Appointment Canceled successfully!.',
              [
                {
                  text: 'Ok',
                  onPress: () => props.navigation.goBack(),
                },
              ],
              {
                cancelable: false,
              },
            );
          } else {
            setloadingStatus1({status: 3, msg: 'Internet Connection Lost.'});
          }
        })
        .catch(error => {
          setloadingStatus1({status: 3, msg: 'Internet Connection Lost.'});
          console.log('Axios error (insertData_Therapist)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during therapist appointment cancelation.',
      );
      console.log('Error is (insertData_Therapist): ', error);
      setloadingStatus1({status: 3, msg: 'Internet Connection Lost.'});
    }
  };

  const insertData = () => {
    if (data?.spInfo?.specialities === 'Therapist') {
      insertData_Therapist();
    } else {
      insertData_Doc();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const alertOnCancel = () => {
    Alert.alert(
      'Alert !!',
      'Are you sure want to cancel this appointment ?',
      [
        {
          text: 'Cancel',
        },
        {text: 'Yes', onPress: () => setmodalStatus(true)},
      ],
      {
        cancelable: false,
      },
    );
  };

  const onChangeModalStatus = () => {
    setmodalStatus(false);
  };

  const handleAppoinmentCancelation = () => {
    if (cancelationReason.length > 0) {
      setmodalStatus(false);
      insertData();
    } else {
      Alert.alert(
        'Error !!',
        'Give reason for cancelation !!.',
        [
          {
            text: 'Ok',
          },
        ],
        {
          cancelable: false,
        },
      );
    }
  };

  const onCancel = () => {
    setcancelationReason('');
    setmodalStatus(false);
  };

  const onReload = () => {
    handleAppoinmentCancelation();
  };

  const handleCloseLS = () => {
    setloadingStatus1({status: 2, msg: ''});
    onCancel();
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
        headerTitle="Booked Appointment"
        navigation={props.navigation}
      />
      {loadingStatus.status === 2 ? (
        <ScrollView>
          <ProfileSectionComponent2
            data={data?.spInfo}
            navigation={props.navigation}
            id={data?.ref?.spId}
          />
          <TwoBtnContentComponent
            editBtn
            extraBtn
            extraBtnTitle={
              data?.appointmentInfo?.date_show +
              '  ' +
              data?.appointmentInfo?.time
            }
            extraBtnIconType="material-community"
            extraBtnIconName="calendar-clock"
            btnTitle1="Upcoming"
            btnTitle2="Message"
            btn1IconType="entypo"
            btn2IconType="ant-design"
            btn1IconName="dots-three-horizontal"
            btn2IconName="message1"
            extraBtnColor={
              status ? darkMode.textColor.color : lightMode.textColor.color
            }
            btn1Color={
              status ? darkMode.textColor.color : lightMode.textColor.color
            }
            btn2Color={
              status ? darkMode.textColor.color : lightMode.textColor.color
            }
            onBtn1Press={() => {}}
            onBtn2Press={() => {}}
          />
          <PaymentDetailsComponent />
          <TwoBtnContentComponent
            btnTitle1="Cancel Appoin."
            btnTitle2="Need help"
            btn1IconType="material-community"
            btn1IconName="cancel"
            btn2IconType="material-community"
            btn2IconName="help"
            btn1Color={
              status ? darkMode.textColor.color : lightMode.textColor.color
            }
            btn2Color={
              status ? darkMode.textColor.color : lightMode.textColor.color
            }
            onBtn1Press={() => alertOnCancel()}
            onBtn2Press={() => {}}
          />

          <ReviewAppoinmentComponent data={data} isDark={status} />
        </ScrollView>
      ) : (
        <CustomLoading2
          loadingStatus={loadingStatus}
          setloadingStatus={setloadingStatus}
        />
      )}
      <CancelationModal
        modalStatus={modalStatus}
        onChangeModalStatus={onChangeModalStatus}
        onChangeText={setcancelationReason}
        value={cancelationReason}
        handleAppoinmentCancelation={handleAppoinmentCancelation}
        onCancel={onCancel}
      />
      <CustomLoading1
        loadingStatus={loadingStatus1}
        loadingTitle="Canceling Appointment..."
        onReload={onReload}
        onClose={handleCloseLS}
      />
    </View>
  );
};

const CancelationModal = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalStatus}
      onRequestClose={() => props.onChangeModalStatus()}>
      <View style={styles.container1}>
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
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => props.onCancel()}
              style={styles.btn1}>
              <Text style={styles.title2}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => props.handleAppoinmentCancelation()}
              style={styles.btn2}>
              <Text style={styles.title2}>Cancel Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UpcomingAppoinmentDetailsScreen;
