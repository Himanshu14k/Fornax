import React, {useEffect, useState} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import CustomHeader from '../../Navigators/CustomHeader';
import {specialitiesState} from '../../Constants/allStates';
import {SpecialitiesSectionComponent} from '../../Components/DoctorTabs/SpecialitiesScreenComponent/SpecialitiesSectionComponent';
import SwiperComponent from '../../Components/CommonComponent/SwiperComponent';
import {darkMode, lightMode} from '../../Constants/Colors';
import {useSelector} from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';

const SpecialitiesScreend = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [data, setData] = useState([]);
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});

  const fetchdata = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/ds/getAll')
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
      handleAxiosError(error);
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
      <CustomHeader navigation={props.navigation} headerTitle="Specialities" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <SwiperComponent State={specialitiesState} />
        <SpecialitiesSectionComponent
          navigation={props.navigation}
          data={data}
          headerTitle="Specialities (Physions & Surgeons)"
          nextRoute={'doctorList'}
          preRN="Doctors"
          loadingStatus={loadingStatus}
          setloadingStatus={setloadingStatus}
          specialitiesState={specialitiesState}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecialitiesScreend;
