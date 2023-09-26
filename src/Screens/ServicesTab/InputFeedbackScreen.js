import React from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {FeedbackComponent} from '../../Components/DoctorTabs/InputFeedbackScreenComponents/InputFeedbackScreenComponent';
import {darkMode, lightMode} from '../../Constants/Colors';
import CustomHeader from '../../Navigators/CustomHeader';

const InputFeedbackScreen = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader navigation={props.navigation} />
      <FeedbackComponent />
    </SafeAreaView>
  );
};

export default InputFeedbackScreen;
