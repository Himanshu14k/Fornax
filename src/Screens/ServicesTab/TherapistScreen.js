import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
} from 'react-native';
import CustomHeader from '../../Navigators/CustomHeader';
import {useSelector} from 'react-redux';
import {darkMode, lightMode} from '../../Constants/Colors';
import SwiperComponent from '../../Components/CommonComponent/SwiperComponent';
import {specialitiesState} from '../../Constants/allStates';
import {adjustedFontSize, widthToDp} from '../../Constants/dimensionsInPixel';
import OneFloatingBtnComponent from '../../Components/CommonComponent/OneFloatingBtnComponent';
import {SpecialitiesSectionComponent} from '../../Components/DoctorTabs/SpecialitiesScreenComponent/SpecialitiesSectionComponent';
import axios from 'axios';
import SimpleToast from 'react-native-simple-toast';

const TherapistScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [data, setData] = useState([]);
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});

  const fetchdata = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/ts/getAOS')
        .then(response => {
          console.log('getting data from axios');
          if (response.data.status === 'Success') {
            setData(response.data.data);
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
          console.log('Axios error (fetchData)', error);
        });
    } catch (error) {
      console.log('Uexpected error occured during Specialities data fetching.');
      console.log('Error is (fetchData): ', error);
      setloadingStatus({status: 3, msg: 'No Specialities Found.'});
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader navigation={props.navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <SwiperComponent State={specialitiesState} />
        <SpecialitiesSectionComponent
          navigation={props.navigation}
          data={data}
          headerTitle="Specialities (Therapy)"
          nextRoute={'doctorList'}
          preRN="Therapist"
          loadingStatus={loadingStatus}
          setloadingStatus={setloadingStatus}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TherapistScreen;
