import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import axios from 'axios';
import SimpleToast from 'react-native-simple-toast';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';
import {ListOfDoctorsComponent} from './components';
import {
  getDocsListAction,
  getTherapistListAction,
} from '../../../redux/actions/serviceActions';

const Tab = createMaterialTopTabNavigator();

const DoctorListScreen = ({route}) => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.otherReducer.status);
  const {doctorList, therapistList} = useSelector(
    state => state.servicesReducer,
  );
  const [typingStatus, setTypingStatus] = useState(false);
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);
  const [loadingStatus1, setloadingStatus1] = useState({status: 1, msg: ''});
  const [loadingStatus2, setloadingStatus2] = useState({status: 1, msg: ''});
  const [loadingStatus3, setloadingStatus3] = useState({status: 1, msg: ''});
  const [sortingModalStatus, setsortingModalStatus] = useState(false);
  // {console.log("id is : ", props?.route?.params?.sId)}
  const fetchPhyscian = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      // setloadingStatus1({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/pd/listPhyDoc', {
          params: {
            id: props?.route?.params?.sId,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus1({status: 2, msg: 'Completed'});
            setdata1(response.data.data);
            // console.log('Fetching of physcians data completed!');
          } else {
            setloadingStatus1({status: 3, msg: 'No Physcians Found.'});
            SimpleToast.show(
              (message = 'No Physcians Found!'),
              (duration = 5000),
            );
          }
        })
        .catch(error => {
          setloadingStatus1({status: 3, msg: 'No Physcians Found.'});
          console.log('Axios error (fetchData)', error);
        });
    } catch (error) {
      console.log('Uexpected error occured during physcians data fetching.');
      console.log('Error is (fetchPhyscian): ', error);
      setloadingStatus1({status: 3, msg: 'No Physcians Found.'});
    }
  };

  const fetchSurgeon = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus2({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/pd/listSurDoc', {
          params: {
            id: props?.route?.params?.sId,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus2({status: 2, msg: 'Completed'});
            setdata2(response.data.data);
            // console.log('Fetching surgeons data completed!');
          } else {
            setloadingStatus2({status: 3, msg: 'No Surgeon Found.'});
          }
        })
        .catch(error => {
          setloadingStatus2({status: 3, msg: 'No Surgeon Found.'});
          console.log('Axios error (fetchData)', error);
        });
    } catch (error) {
      console.log('Uexpected error occured during surgeons data fetching.');
      console.log('Error is (fetchSurgeon): ', error);
      setloadingStatus2({status: 3, msg: 'No Surgeon Found.'});
    }
  };

  const fetchTherapist = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus3({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/pd/listTherapist', {
          params: {
            id: props?.route?.params?.sId,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus3({status: 2, msg: 'Completed'});
            setdata3(response.data.data);
            // console.log('Fetching Therapist data completed!');
          } else {
            setloadingStatus3({status: 3, msg: 'Therapist Not Found.'});
            setdata3([]);
          }
        })
        .catch(error => {
          setloadingStatus3({status: 3, msg: 'Therapist Not Found.'});
          console.log('Axios error (fetchData)', error);
        });
      // setloadingStatus(3);
    } catch (error) {
      console.log('Uexpected error occured during therapist data fetching.');
      console.log('Error is (fetchTherapist): ', error);
      setloadingStatus3({status: 3, msg: 'Therapist Not Found.'});
    }
  };
  console.log('docLis', doctorList, route?.params?.sId);
  useEffect(() => {
    if (route?.params?.prevRouteName === 'Doctors') {
      dispatch(
        getDocsListAction({
          id: route?.params?.sId,
          offset: 0,
          limit: 10,
        }),
      );
    } else {
      dispatch(
        getTherapistListAction({
          id: route?.params?.sId,
          offset: 0,
          limit: 10,
        }),
      );
    }
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
        headerTitle={route?.params?.prevRouteName}
        searchIcon
        typingStatus={typingStatus}
        setTypingStatus={setTypingStatus}
      />
      {route?.params?.prevRouteName === 'Doctors' ? (
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: adjustedFontSize(12),
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
            tabBarItemStyle: {height: widthToDp(12), width: widthToDp(50)},
            tabBarScrollEnabled: true,
          }}
          initialRouteName="Physicians">
          <Tab.Screen
            name="Physicians"
            children={() => (
              <ListOfDoctorsComponent
                data={doctorList?.physicians}
                sortingModalStatus={sortingModalStatus}
                setsortingModalStatus={setsortingModalStatus}
                prevRouteName="Doctor"
              />
            )}
          />
          <Tab.Screen
            name="Surgeon"
            children={() => (
              <ListOfDoctorsComponent
                data={doctorList?.surgeon}
                loadingStatus={loadingStatus2}
                setloadingStatus={setloadingStatus2}
                sortingModalStatus={sortingModalStatus}
                setsortingModalStatus={setsortingModalStatus}
                prevRouteName="Doctor"
              />
            )}
          />
          {/* <Tab.Screen
          name="Clinic & Hospitals"
          children={() => (
            <ListOfDoctorsComponent
              data={dummyData1}
              navigation={props.navigation}
            />
          )}
        /> */}
        </Tab.Navigator>
      ) : (
        <ListOfDoctorsComponent
          data={data3}
          loadingStatus={loadingStatus3}
          setloadingStatus={setloadingStatus3}
          sortingModalStatus={sortingModalStatus}
          setsortingModalStatus={setsortingModalStatus}
          prevRouteName="Therapist"
        />
      )}
      {/* <SortAndFilterBtnComponent
        sortingModalStatus={sortingModalStatus}
        setsortingModalStatus={setsortingModalStatus}
      />
      <SortingModal
        sortingModalStatus={sortingModalStatus}
        setsortingModalStatus={setsortingModalStatus}
      /> */}
    </SafeAreaView>
  );
};

export default DoctorListScreen;
