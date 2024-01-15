import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import axios from 'axios';
import {darkMode, lightMode} from '../../../Utils/Colors';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {ProfileSectionComponent2} from '../../../Components/Organisms/ProfileSection/profileSection';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';
import {
  PaymentDetailsComponent,
  AppoinmentFeedbackComponent,
  ServiceOverviewComponent,
  HomeVistSessionRecordsComponent,
} from '../../../Components/Organisms/CompsForDifferentSessionDetailsScreens/compsForDifferentSessionDetailsScreens';
import {CustomLoading2} from '../../../Components/Molecules/CustomLoadings/customLoading';

const Tab = createMaterialTopTabNavigator();
const DifferentCaringServiceHistoryScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [data, setdata] = useState({});
  const [loadingStatus, setloadingStatus] = useState({
    status: 1,
    msg: 'Loading...',
  });

  // To get data about sessions
  const fetchData = async () => {
    try {
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.onrender.com/rASCC/getDetailsAS', {
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
      console.log(
        'Uexpected error occured during DiffcaringSp Session data fetching.',
      );
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
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader
        headerTitle="Caring Services"
        navigation={props.navigation}
      />
      {loadingStatus.status === 2 ? (
        <>
          <ProfileSectionComponent2 data={data?.spInfo} />
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
                  />
                )}
              />
            </Tab.Navigator>
          </View>
        </>
      ) : (
        <CustomLoading2 loadingStatus={loadingStatus} onReload={onReload} />
      )}
    </View>
  );
};

const ServiceDetailsSectionComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <ServiceOverviewComponent data={props?.data} />
      <PaymentDetailsComponent />
      <AppoinmentFeedbackComponent />
    </ScrollView>
  );
};

export default DifferentCaringServiceHistoryScreen;
