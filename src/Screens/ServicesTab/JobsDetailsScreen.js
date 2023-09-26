import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {FloatingBtnSection} from '../../Components/CommonComponent/FloatingBtnComponent';
import {JobsDetailsComponent} from '../../Components/DoctorTabs/JobDetailsScreenComponents/JobDetailsScreenComponent';
import {darkMode, lightMode} from '../../Constants/Colors';
import CustomHeader from '../../Navigators/CustomHeader';

const JobsDetailsScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [scrollPostion, setscrollPostion] = useState(0);
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
        onScroll={event => {
          setscrollPostion(event.nativeEvent.contentOffset.y);
        }}>
        <JobsDetailsComponent navigation={props.navigation} />
      </ScrollView>
      {scrollPostion > 170 && (
        <FloatingBtnSection
          btnTitle1="Save"
          btnTitle2="Apply"
          status={status}
          navigation={props.navigation}
        />
      )}
    </SafeAreaView>
  );
};

export default JobsDetailsScreen;
