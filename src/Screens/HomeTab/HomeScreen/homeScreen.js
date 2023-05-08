import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {doctorState, homeState} from '../../../Constants/allStates';
import SwiperComponent from '../../../Components/Molecules/Swiper/swiper';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {
  setDocCacheData,
  setTherapistCacheData,
} from '../../../States/Actions/CachesDataActions/actions';
import {styles1, styles2} from './style';

const HomeScreen = props => {
  const status = useSelector(state => state.themeR.status);
  const dispatch = useDispatch();
  const docData = useSelector(state => state.hsCachesDocR.docData);
  const therapistData = useSelector(
    state => state.hsCachesTheraistR.therapistData,
  );
  // const [docData, setdocData] = useState([]);
  // const [therapistData, settherapistData] = useState([]);
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});

  const fetchData_Doc = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.onrender.com/ds/getLimitedSpe')
        .then(response => {
          if (response.data.status === 'Success') {
            dispatch(setDocCacheData((data = response.data.data)));
            setloadingStatus({status: 2, msg: 'Completed'});
          } else {
            setloadingStatus({status: 3, msg: 'No Specialities Found.'});
            SimpleToast.show(
              (message = 'No Specialities Found!'),
              (duration = 5000),
            );
          }
        })
        .catch(error => {
          setloadingStatus({status: 3, msg: 'No Specialities Found.'});
          console.log('Axios error (fetchData_Doc)', error);
        });
    } catch (error) {
      console.log('Uexpected error occured during Specialities data fetching.');
      console.log('Error is (fetchData_Doc): ', error);
      setloadingStatus({status: 3, msg: 'No Specialities Found.'});
      // handleAxiosError(error);
    }
  };

  const fetchData_Therapist = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.onrender.com/ts/getAOS')
        .then(response => {
          console.log('getting data from axios');
          if (response.data.status === 'Success') {
            dispatch(setTherapistCacheData((data = response.data.data)));
            setloadingStatus({status: 2, msg: 'Completed'});
          } else {
            setloadingStatus({status: 3, msg: 'No Specialities Found.'});
            SimpleToast.show(
              (message = 'No Specialities Found!'),
              (duration = 5000),
            );
          }
        })
        .catch(error => {
          setloadingStatus({status: 3, msg: 'No Specialities Found.'});
          console.log('Axios error (fetchData_Therapist)', error);
        });
    } catch (error) {
      console.log('Uexpected error occured during Specialities data fetching.');
      console.log('Error is (fetchData_Therapist): ', error);
      setloadingStatus({status: 3, msg: 'No Specialities Found.'});
    }
  };

  useEffect(() => {
    fetchData_Doc();
    fetchData_Therapist();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader
        isHome
        navigation={props.navigation}
        msgAndNotification
        notificationRoute="notification"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SwiperComponent State={homeState} />
        <ServicesComponenet
          isDark={status}
          doctorState={doctorState}
          navigation={props.navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const BoxComponenet = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles2.container1}
      onPress={() =>
        props.navigation.navigate(props.routeName, {
          id: props.id,
          title: props.title,
        })
      }>
      <View style={styles2.imageContainer}>
        <Image style={styles2.image1} source={props.image} />
      </View>
      <Text style={styles2.title1}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const ServicesComponenet = props => {
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
          styles1.title1,
          status ? darkMode.textColor : lightMode.textColor,
        ]}>
        {props.doctorState.headers.serviceHeader}
      </Text>
      <View style={styles1.container2}>
        <BoxComponenet
          title="Nursing Care"
          image={doctorState.images.nurses}
          routeName="differentCareProvider"
          navigation={props.navigation}
          id="dc593839ba914817a88fad40aee7d01d"
        />
        <BoxComponenet
          title="Patient Care"
          image={doctorState.images.patientCare}
          routeName="differentCareProvider"
          navigation={props.navigation}
          id="eaa1faa2d95c4872887bb0807df9e6a4"
        />
        <BoxComponenet
          title="Baby Care"
          image={doctorState.images.babyCare}
          routeName="differentCareProvider"
          navigation={props.navigation}
          id="fbe7ad0629194e4283ceadd500764be3"
        />
        <BoxComponenet
          title="Old Age Care"
          image={doctorState.images.oldAge}
          routeName="differentCareProvider"
          navigation={props.navigation}
          id="8e1b821028fe4aa0ad045767881ae101"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
