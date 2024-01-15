import React from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {homeState} from '../../../Constants/allStates';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import SwiperComponent from '../../../Components/Molecules/Swiper/swiper';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import {SlideableContentComponent2, SlideableContentComponent4} from '../../../Components/Organisms/SlideableContent';

const dummyDataH = [
  {
    id: 1,
    val: 'Video Consultaion',
    img: require('../../../Assets/Images/InstantDC.jpg'),
  },
  {
    id: 2,
    val: 'Book Appoinment',
    img: require('../../../Assets/Images/PhysianAndSurgeon.jpg'),
  },
  {
    id: 3,
    val: 'Patient Care',
    img: require('../../../Assets/Images/PatientCare.jpg'),
  },
];

const HomeScreen = props => {
  const status = useSelector(state => state.otherReducer.status);

  const onContentClick = item => {
    props.navigation.navigate('specialities');
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
        isHome
        navigation={props.navigation}
        msgAndNotification
        notificationRoute="notification"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SwiperComponent State={homeState} />
        <SlideableContentComponent2
          headerTitle="Healthcare Services"
          onContentClick={onContentClick}
          data={dummyDataH}
        />
        <SlideableContentComponent4 />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
