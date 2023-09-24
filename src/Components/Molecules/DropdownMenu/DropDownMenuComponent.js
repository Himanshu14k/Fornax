import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import {Icon} from '@rneui/themed';
import {useSelector} from 'react-redux';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';

const DropdownMenuComponent = ({
  value,
  setValue,
  placeholder,
  placeholderStyle,
  selectedTextStyle,
  rightIconStyle,
  data = [],
  suffix = '',
  maxHeight = 100,
  labelField,
  valueField,
  renderLeftIcon,
  style,
}) => {
  const status = useSelector(state => state.otherReducer.status);

  const renderMenuItem = item => {
    return (
      <View
        style={[
          styles.container1,
          status ? darkMode.borderColorPrimary : lightMode.borderColorPrimary,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            selectedTextStyle,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {item.title}
          {'  '} {suffix}
        </Text>
      </View>
    );
  };
  return (
    <Dropdown
      style={style}
      placeholderStyle={placeholderStyle}
      selectedTextStyle={selectedTextStyle}
      iconStyle={rightIconStyle}
      data={data}
      maxHeight={maxHeight}
      labelField={labelField}
      valueField={valueField}
      placeholder={placeholder}
      value={value}
      onChange={item => {
        setValue(item);
      }}
      renderLeftIcon={renderLeftIcon}
      renderItem={renderMenuItem}
    />
  );
};

const MultiSelectComponent = ({
  value,
  setValue,
  style,
  placeholderStyle,
  selectedTextStyle,
  rightIconStyle,
  search = false,
  searchPlaceholder = 'Search...',
  data = [],
  labelField,
  valueField,
  placeholder,
  renderLeftIcon,
  renderSelectedItem,
  selectedItemContainerStyle,
}) => {
  const status = useSelector(state => state.otherReducer.status);

  const checkSimilarity = id => {
    let tempValue = null;
    tempValue = value.filter(item => item === id);
    return tempValue.length > 0 ? true : false;
  };

  const renderMenuItem = item => {
    return (
      <View
        style={[
          styles.container1,
          status ? darkMode.borderColorPrimary : lightMode.borderColorPrimary,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            selectedTextStyle,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {item.value}
        </Text>
        {checkSimilarity(item.value) && (
          <Icon
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
            name="check"
            type="ant-desigin"
            size={widthToDp(4)}
          />
        )}
      </View>
    );
  };

  return (
    <MultiSelect
      style={style}
      placeholderStyle={placeholderStyle}
      selectedTextStyle={selectedTextStyle}
      iconStyle={rightIconStyle}
      data={data}
      search={search}
      labelField={labelField}
      searchPlaceholder={searchPlaceholder}
      valueField={valueField}
      placeholder={placeholder}
      selectedItemContainerStyle={selectedItemContainerStyle}
      value={value}
      onChange={item => {
        setValue(item);
      }}
      renderLeftIcon={renderLeftIcon}
      renderItem={renderMenuItem}
      renderSelectedItem={renderSelectedItem}
    />
  );
};

const styles = StyleSheet.create({
  container1: {
    padding: widthToDp(3),
    borderWidth: widthToDp(0.4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

{
  /*
  <DropdownMenuComponent
            style={[
              clinicAndHospitalDetailsComponentStyles.container5,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}
            data={data}
            value={hours}
            setValue={setHours}
            labelField="label"
            valueField="value"
            placeholder="Select from List"
            maxHeight={widthToDp(50)}
            placeholderStyle={[
              clinicAndHospitalDetailsComponentStyles.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}
            selectedTextStyle={[
              clinicAndHospitalDetailsComponentStyles.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}
            rightIconStyle={[
              clinicAndHospitalDetailsComponentStyles.rightIconStyle,
              status ? darkMode.tintColors : lightMode.tintColors,
            ]}
            renderLeftIcon={() => (
              <Icon
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
                name="time"
                type="ionicon"
                size={widthToDp(4)}
              />
            )}
          />
  */
}
export {DropdownMenuComponent, MultiSelectComponent};
