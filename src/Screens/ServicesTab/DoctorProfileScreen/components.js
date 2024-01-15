import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import uuid from 'react-native-uuid';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {Icon} from '@rneui/themed';
import {
  AboutSection,
  ContactDetailsSection,
  GeneralInfoSection,
  ServicesSection,
} from '../../../Components/Organisms/ServiceProviderDetails/ServiceProviderDetailsComponent';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import {ViewPicModal} from '../../../Components/Molecules/ViewPic/viewPicModal';
import {FloatingBtnSection} from '../../../Components/Molecules/FloatingBtn/floatingBtnSection';
import {style6, style7, style8} from './style';
import { navigate } from '../../../Navigations/navigationServices';

const DoctorDetailsComponent = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <GeneralInfoSection
        name={'props?.name'}
        speciality={'props.data?.professional_Info?.specialities'}
        about={'props.data?.professional_Info?.about'}
        loadingStatus={props.loadingStatus}
        setloadingStatus={props.setloadingStatus}
      />
      <ServicesSection
        name={'props?.name'}
        services={'props.data?.professional_Info?.services'}
        loadingStatus={props.loadingStatus}
        setloadingStatus={props.setloadingStatus}
      />
      <AboutSection
        name={'props?.name'}
        data={props.data?.professional_Info}
        loadingStatus={props.loadingStatus}
        setloadingStatus={props.setloadingStatus}
      />
      {/* <AssociatedOrganizationSection
        headerTitle="Clinics Or Hospitals"
        navigation={props.navigation}
        routeName={'clinicOrHospitalProfile'}
      /> */}
      <ContactDetailsSection
        name={props?.name}
        data={props.data?.contact_Info}
        loadingStatus={props.loadingStatus}
        setloadingStatus={props.setloadingStatus}
      />
    </ScrollView>
  );
};

const SlotsComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [day, setDay] = useState('Today');
  const [time, settime] = useState('');
  const [id, setid] = useState(uuid.v4());
  const [data, setdata] = useState({});
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});

  const fetchData = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/slotD/getTodaySlot', {
          params: {
            id: props.id,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus({status: 2, msg: 'Completed'});
            setdata(response.data.data);
          } else {
            setloadingStatus({status: 3, msg: 'No Slots Found.'});
            SimpleToast.show((message = 'No Slots Found!'), (duration = 5000));
          }
        })
        .catch(error => {
          setloadingStatus({status: 3, msg: 'No Slots Found.'});
          console.log('Axios error (fetchData)', error);
        });
      // setloadingStatus(3);
    } catch (error) {
      console.log(
        'Uexpected error occured during doctor today appoinment slots.',
      );
      console.log('Error is (fetchData): ', error);
      setloadingStatus({status: 3, msg: 'No Slots Found.'});
      //   handleAxiosError(error);
    }
  };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  // const resetSelection = () => {
  //   settime('');
  //   dispatch(removeAppoinment(1));
  // };

  // const bookAppoinment = () => {
  //   dispatch(setAppoinmentData(user, 1));
  //   props.navigation.navigate('inputPatientsDetails');
  // };

  return (
    <View
      style={[
        style6.container1,
        status
          ? darkMode.screenBackgroundColors
          : lightMode.screenBackgroundColors,
      ]}>
      <View
        style={[
          style6.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            style6.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Today Availaible slots
        </Text>
      </View>
      <ScrollableCardsComponent
        data={data}
        time={time}
        settime={settime}
        status={status}
        id={1}
      />
      <FloatingBtnSection
        btnTitle1="Reset"
        btnTitle2="Book Appointment"
        // onBtn1ClickEvent={resetSelection}
        // onBtn2ClickEvent={bookAppoinment}
      />
    </View>
  );
};

const ProfileSectionComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [viewPicModalStatus, setviewPicModalStatus] = useState(false);
  // const [modalImage, setmodalImage] = useState(null);
  const [modalImage, setmodalImage] = useState(null);

  const onPicClick = img => {
    setmodalImage(img);
    setviewPicModalStatus(!viewPicModalStatus);
  };
  return (
    <View
      style={[
        style8.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style8.container2}
          // onPress={() => onPicClick(props.data?.coverPic)}>
          onPress={() =>
            onPicClick(require('../../../Assets/Images/DiagnosticCenter.jpg'))
          }>
          <Image
            style={style8.cover}
            // source={{uri: props.data?.coverPic}}
            source={require('../../../Assets/Images/DiagnosticCenter.jpg')}
          />
        </TouchableOpacity>
      </View>
      <View style={style8.container3}>
        <View
          style={[
            style8.container4,
            status
              ? darkMode.screenBackgroundColors
              : lightMode.screenBackgroundColors,
          ]}>
          <Text
            numberOfLines={1}
            style={[
              style8.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {'props.name'}
          </Text>
        </View>
        <View
          style={[
            style8.container5,
            status
              ? darkMode.screenBackgroundColors
              : lightMode.screenBackgroundColors,
          ]}>
          {props.data?.status !== 1 ? (
            <Image
              style={style8.image3}
              source={require('../../../Assets/Icons/processing.png')}
            />
          ) : props.data?.status === 2 ? (
            <Icon
              type="material"
              name="verified"
              size={widthToDp(6)}
              color={'#00d9ff'}
            />
          ) : (
            props.data?.status === 3 && (
              <Icon
                type="octicon"
                name="unverified"
                size={widthToDp(6)}
                color={'#00d9ff'}
              />
            )
          )}
        </View>
      </View>
      <TouchableOpacity
        style={[
          props.profilePicSquare ? style8.container7 : style8.container6,
          status
            ? darkMode.screenBackgroundColors
            : lightMode.screenBackgroundColors,
        ]}
        // onPress={() => onPicClick(props.data?.profilePic)}>
        onPress={() =>
          onPicClick(require('../../../Assets/Images/GymBanner3.jpg'))
        }>
        <Image
          style={props.profilePicSquare ? style8.image2 : style8.image1}
          // source={{uri: props.data?.profilePic}}
          source={require('../../../Assets/Images/GymBanner3.jpg')}
        />
      </TouchableOpacity>
      <ViewPicModal
        image={modalImage}
        modalStatus={viewPicModalStatus}
        setModalStatus={setviewPicModalStatus}
      />
    </View>
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
    navigate('patientDetailsEnter')
  };

  // return data?.morningSlots?.length > 0 ||
  //   data?.afternoonSlots?.length > 0 ||
  //   data?.eveningSlots?.length > 0 ? (
  return true ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={style7.container1}>
      <View
        style={[
          style7.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            style7.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Morning
        </Text>
        <View style={style7.container3}>
          {/* {data?.morningSlots?.length > 0 ? ( */}
          {true ? (
            // data?.morningSlots?.map((item, id) =>
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((item, id) =>
              // item?.status == 'A' ? (
              'A' == 'A' ? (
                <TouchableOpacity
                  key={id}
                  activeOpacity={0.7}
                  style={[
                    style7.btn2,
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
                      style7.title2,
                      patientAndSlotInfo?.stId === item?._id
                        ? {color: '#000'}
                        : status
                        ? darkMode.textColor
                        : lightMode.textColor,
                    ]}>
                    {/* {item.time} */}
                    {'12:30 PM'}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View
                  key={id}
                  style={[
                    style7.btn2,
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
                      style7.title2,
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
                style7.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              No Morning Slots Available on this day.
            </Text>
          )}
        </View>
      </View>
      <View
        style={[
          style7.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            style7.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Afternoon
        </Text>
        <View style={style7.container3}>
          {/* {data?.afternoonSlots?.length > 0 ? ( */}
          {true ? (
            // data?.afternoonSlots?.map((item, id) =>
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((item, id) =>
              // item?.status == 'A' ? (
              'A' == 'A' ? (
                <TouchableOpacity
                  key={id}
                  activeOpacity={0.7}
                  style={[
                    style7.btn2,
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
                      style7.title2,
                      patientAndSlotInfo?.stId === item?._id
                        ? {color: '#000'}
                        : status
                        ? darkMode.textColor
                        : lightMode.textColor,
                    ]}>
                    {/* {item.time} */}
                    {'12:30 PM'}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View
                  key={id}
                  style={[
                    style7.btn2,
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
                      style7.title2,
                      patientAndSlotInfo?.stId === item?._id
                        ? {color: '#000'}
                        : status
                        ? darkMode.textColor
                        : lightMode.textColor,
                    ]}>
                    {item?.time}
                  </Text>
                </View>
              ),
            )
          ) : (
            <Text
              style={[
                style7.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              No Afternoon Slots Available on this day.
            </Text>
          )}
        </View>
      </View>
      <View
        style={[
          style7.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            style7.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Evening
        </Text>
        <View style={style7.container3}>
          {/* {data?.eveningSlots?.length > 0 ? ( */}
          {true ? (
            // data?.eveningSlots?.map((item, id) =>
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((item, id) =>
              // item?.status == 'A' ? (
              'A' == 'A' ? (
                <TouchableOpacity
                  key={id}
                  activeOpacity={0.7}
                  style={[
                    style7.btn2,
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
                      style7.title2,
                      patientAndSlotInfo?.stId === item?._id
                        ? {color: '#000'}
                        : status
                        ? darkMode.textColor
                        : lightMode.textColor,
                    ]}>
                    {/* {item.time} */}
                    {'12:30 PM'}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View
                  key={id}
                  style={[
                    style7.btn2,
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
                      style7.title2,
                      patientAndSlotInfo?.stId === item?._id
                        ? {color: '#000'}
                        : status
                        ? darkMode.textColor
                        : lightMode.textColor,
                    ]}>
                    {item?.time}
                  </Text>
                </View>
              ),
            )
          ) : (
            <Text
              style={[
                style7.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              No Evening Slots Available on this day.
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  ) : (
    <View style={style7.container4}>
      <View
        style={[
          style7.container5,
          status
            ? darkMode.contentbackgroundColor
            : lightMode.contentbackgroundColor,
        ]}>
        <Text
          style={[
            style7.title3,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          No Slots Available on this day.
        </Text>
      </View>
    </View>
  );
};

export {
  DoctorDetailsComponent,
  SlotsComponent,
  ProfileSectionComponent,
  ScrollableCardsComponent,
};
