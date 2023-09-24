import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {useSelector} from 'react-redux';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const CustomTextInput = ({
  leftIcon = false,
  leftIconSize = 0,
  rightIcon = false,
  rightIconSize = 0,
  iconType = 'ionicon',
  iconName = 'search',
  multiline = false,
  numberOfLines,
  editable = true,
  maxLength,
  keyboardType = 'default',
  placeholder = '',
  placeholderTextColor = '#e5e5e5',
  value,
  onChangeText,
  inputContainerStyle = {},
  inputStyle = {},
}) => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          backgroundColor: status
            ? darkMode.containerbackgroundColor.backgroundColor
            : lightMode.containerbackgroundColor.backgroundColor,
          borderColor: status
            ? darkMode.screenBackgroundColors.backgroundColor
            : lightMode.screenBackgroundColors.backgroundColor,
        },
        inputContainerStyle,
      ]}>
      {leftIcon && (
        <Icon
          type={iconType}
          name={iconName}
          size={leftIconSize}
          color={
            status
              ? darkMode.tintColors.tintColor
              : lightMode.tintColors.tintColor
          }
        />
      )}
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={[
          {
            flex: 1,
          },
          inputStyle,
        ]}
        editable={editable}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
      />
      {rightIcon && value?.length > 0 && (
        <TouchableOpacity
          style={[
            {
              backgroundColor: '#e5e5e5',
              borderRadius: 30,
            },
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}
          onPress={() => onChangeText(null)}>
          <Icon
            type="ionicon"
            name="close"
            size={rightIconSize}
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;

{
  /*
    <CustomTextInput
  value={day}
  onChangeText={setDay}
  numberOfLines={2}
  //leftIcon
  //rightIcon
  leftIconSize={widthToDp(4.5)}
  rightIconSize={widthToDp(5)}
  multiline
  numberOfLines={4}
  editable
  maxLength={40}
  keyboardType="numeric"
  placeholder="useless placeholder"
  placeholderTextColor={
    status ? darkMode.textColor.color : lightMode.textColor.color
  }
  inputContainerStyle={{
    paddingHorizontal: widthToDp(2),
    borderWidth: widthToDp(0.1),
    justifyContent: 'center',
    alignItems: 'center',
    //borderRadius: 20,
    backgroundColor: status
      ? darkMode.screenBackgroundColors.backgroundColor
      : lightMode.screenBackgroundColors.backgroundColor,
  }}
  inputStyle={{
    backgroundColor: 'pink',
    fontSize: adjustedFontSize(10),
    height: widthToDp(9),
    width: widthToDp(50),
    justifyContent: 'center',
    alignItems: 'center',
  }}
/>;
    */
}

const TitleWithInputComponent = ({
  showTitle,
  title = 'Header Title',
  value,
  onChangeText = {},
  keyboardType = 'default',
  placeholder = 'Enter ....',
  leftIcon = true,
  leftIconName = 'pencil',
  leftIconType = 'material-community',
  inputContainerStyle = titleWithInputComponentStyles.container2,
  inputStyle = titleWithInputComponentStyles.input1,
  titleStyle = titleWithInputComponentStyles.title1,
  mainContainerStyle = titleWithInputComponentStyles.container1,
}) => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <View style={mainContainerStyle}>
      {showTitle && (
        <Text
          style={[
            titleStyle,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {title}
        </Text>
      )}
      <InputComponent
        value={value}
        onChangeText={onChangeText}
        numberOfLines={1}
        editable
        maxLength={50}
        keyboardType={keyboardType}
        placeholder={placeholder}
        leftIcon={leftIcon}
        leftIconSize={widthToDp(4.5)}
        iconName={leftIconName}
        iconType={leftIconType}
        placeholderTextColor={status ? '#bfbfbf' : '#737373'}
        inputContainerStyle={inputContainerStyle}
        inputStyle={[
          inputStyle,
          status ? darkMode.textColor : lightMode.textColor,
        ]}
      />
    </View>
  );
};

const titleWithInputComponentStyles = StyleSheet.create({
  container1: {
    paddingTop: widthToDp(7),
    paddingHorizontal: widthToDp(3),
  },
  title1: {
    fontSize: adjustedFontSize(11),
    fontWeight: '600',
  },
  container2: {
    marginTop: widthToDp(3),
    marginLeft: widthToDp(3),
    paddingHorizontal: widthToDp(2),
    borderWidth: widthToDp(0.5),
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input1: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
    height: widthToDp(10),
    paddingLeft: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {TitleWithInputComponent};
