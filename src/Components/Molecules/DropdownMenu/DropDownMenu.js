import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Icon} from '@rneui/themed';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {styles} from './style';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';

const DropDownMenu = props => {
  const status = useSelector(state => state.themeR.status);
  const [searchItem, setSearchItem] = useState('');
  const [filteredData, setfilteredData] = useState(props.data);

  useEffect(() => {
    setfilteredData(
      props.data.filter(item =>
        item.toLowerCase().includes(searchItem.toLowerCase()),
      ),
    );
  }, [searchItem]);

  const onSelectionFromList = item => {
    props.setSelectedItem(item);
    props.setDropDownMenuStatus(!props.dropDownMenuStatus);
  };
  return (
    <View
      style={[
        styles.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      {props.searchOption && (
        <View
          style={[
            styles.inputContainer1,
            status
              ? darkMode.screenBackgroundColors
              : lightMode.screenBackgroundColors,
          ]}>
          <Icon
            type
            type="ionicon"
            name="search"
            size={widthToDp(4.5)}
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
          />
          <TextInput
            style={[
              styles.input1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}
            onChangeText={setSearchItem}
            value={searchItem}
            editable
            placeholder="e.g:- Dermatology"
            placeholderTextColor={status ? '#e5e5e5' : '#737373'}
          />
          {searchItem.length > 0 && (
            <TouchableOpacity
              style={[
                styles.btn1,
                status
                  ? darkMode.containerbackgroundColor
                  : lightMode.containerbackgroundColor,
              ]}
              onPress={() => setSearchItem('')}>
              <Icon
                type
                type="ionicon"
                name="close"
                size={widthToDp(5)}
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            </TouchableOpacity>
          )}
        </View>
      )}
      <ScrollView contentContainerStyle={styles.container2}>
        {filteredData.map((item, id) => (
          <TouchableOpacity
            key={id}
            activeOpacity={0.7}
            style={[
              styles.container3,
              {
                borderBottomColor: status
                  ? lightMode.screenBackgroundColors.backgroundColor
                  : darkMode.screenBackgroundColors.backgroundColor,
              },
            ]}
            onPress={() => onSelectionFromList(item)}>
            <Text
              style={[
                styles.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export {DropDownMenu};
