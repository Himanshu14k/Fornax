import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {styles} from './style';

const FloatingBtnSection = ({
  firstBtnTitle = 'Back',
  secondBtnTitle = 'Done',
  onFirstBtnPress = () => {},
  onSecondBtnPress = () => {},
  firstBtnActiveStatus = true,
  secondBtnActiveStatus = true,
  containerStyle = styles.container,
  btnStyle = styles.btn,
  btnTitleStyle = styles.btnTitle,
}) => {
  const status = useSelector(state => state.themeR.status);
  return (
    <View
      style={[
        containerStyle,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      {firstBtnActiveStatus ? (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => onFirstBtnPress()}
          style={[btnStyle, {backgroundColor: '#00d9ff'}]}>
          <Text numberOfLines={1} style={[btnTitleStyle, {color: '#000'}]}>
            {firstBtnTitle}
          </Text>
        </TouchableOpacity>
      ) : (
        <View
          style={[
            btnStyle,
            {
              backgroundColor: status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor,
            },
          ]}>
          <Text
            numberOfLines={1}
            style={[
              btnTitleStyle,
              {
                color: status
                  ? darkMode.textColor.color
                  : lightMode.textColor.color,
              },
            ]}>
            {firstBtnTitle}
          </Text>
        </View>
      )}
      {secondBtnActiveStatus ? (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[btnStyle, {backgroundColor: '#00d9ff'}]}
          onPress={() => onSecondBtnPress()}>
          <Text numberOfLines={1} style={[btnTitleStyle, {color: '#000'}]}>
            {secondBtnTitle}
          </Text>
        </TouchableOpacity>
      ) : (
        <View
          style={[
            btnStyle,

            status
              ? darkMode.screenBackgroundColors
              : lightMode.screenBackgroundColors,
          ]}>
          <Text
            numberOfLines={1}
            style={[
              btnTitleStyle,
              {
                color: status
                  ? darkMode.textColor.color
                  : lightMode.textColor.color,
              },
            ]}>
            {secondBtnTitle}
          </Text>
        </View>
      )}
    </View>
  );
};

export {FloatingBtnSection};
