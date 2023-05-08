import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';
import {styles} from './style';

const OneFloatingBtnComponent = ({
  iconType = 'ionicon',
  iconName = 'close',
  onPressBtn = () => console.log('Btn is pressed!'),
  containerStyle = styles.container1,
  btnStyle = styles.btn1,
  iconColor = '#000',
  iconSize = 25,
}) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={() => onPressBtn()}
        activeOpacity={0.7}
        style={btnStyle}>
        <Icon
          type={iconType}
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default OneFloatingBtnComponent;
