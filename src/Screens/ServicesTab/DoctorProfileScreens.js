import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import CustomHeader from '../../Navigators/CustomHeader';
import {useSelector} from 'react-redux';
import {darkMode, lightMode} from '../../Constants/Colors';
import {adjustedFontSize, widthToDp} from '../../Constants/dimensionsInPixel';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  DoctorDetailsComponent,
  SlotsComponent,
} from '../../Components/DoctorTabs/DoctorProfileScreenComponent/DoctorProfileScreenComponent';
import {ProfileSectionComponent} from '../../Components/CommonComponent/ServiceProviderProfileSectionComponent';
import {RatingAndReviewComponent} from '../../Components/CommonComponent/RatingAndReviewComponent';
import {PostAndArtcileListComponent} from '../../Components/CommonComponent/PostAndArtcileListComponent';
import axios from 'axios';
import SimpleToast from 'react-native-simple-toast';
import {handleAxiosError} from '../../Constants/AxiosFunctions';
import {CustomLoadingComponent2} from '../../Components/CommonComponent/CustomLoadingComponents';

const Tab = createMaterialTopTabNavigator();

const DoctorProfileScreens = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [data, setdata] = useState({});
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});

  const fetchDSData = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/pd/getDocProfile', {
          params: {
            id: props.route.params.id,
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
          console.log('Axios error (fetchData)', error);
        });
      // setloadingStatus(3);
    } catch (error) {
      console.log(
        'Uexpected error occured during doctor profile data fetching.',
      );
      console.log('Error is (fetchData): ', error);
      setloadingStatus({status: 3, msg: 'No Details Found.'});
      handleAxiosError(error);
    }
  };

  const fetchTherapistData = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/pd/getTherapistProfile', {
          params: {
            id: props.route.params.id,
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
          console.log('Axios error (fetchTherapistData)', error);
        });
      // setloadingStatus(3);
    } catch (error) {
      console.log(
        'Uexpected error occured during therapist profile data fetching.',
      );
      console.log('Error is (fetchTherapistData): ', error);
      setloadingStatus({status: 3, msg: 'No Details Found.'});
      handleAxiosError(error);
    }
  };

  useEffect(() => {
    if (props?.route?.params?.prevRouteName === 'Doctor') {
      fetchDSData();
    } else {
      fetchTherapistData();
    }
    return;
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
        navigation={props.navigation}
        headerTitle={props?.route?.params?.prevRouteName + ' Profile'}
      />
      <ProfileSectionComponent
        name={props?.route?.params?.name}
        data={data?.general_Info}
      />
      <View
        style={{
          flex: 1,
          marginHorizontal: widthToDp(1),
          borderRadius: 10,
        }}>
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
              borderRadius: 10,
            },
            tabBarItemStyle: {height: widthToDp(12), width: widthToDp(33)},
            tabBarScrollEnabled: true,
          }}
          initialRouteName="Details">
          <Tab.Screen
            name="Details"
            children={() => (
              <DoctorDetailsComponent
                data={data}
                name={props?.route?.params?.name}
                loadingStatus={loadingStatus}
                setloadingStatus={setloadingStatus}
                navigation={props.navigation}
              />
            )}
          />
          <Tab.Screen
            name="Slots"
            children={() => (
              <SlotsComponent
                id={props.route.params.id}
                navigation={props.navigation}
              />
            )}
          />
          {/* <Tab.Screen
            name="Activity"
            children={() => (
              <PostAndArtcileListComponent navigation={props.navigation} />
            )}
          /> */}
          <Tab.Screen
            name="Review"
            children={() => (
              <RatingAndReviewComponent navigation={props.navigation} />
            )}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default DoctorProfileScreens;
