import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import {styles} from './styles';
import CustomTextInput from '../../Atoms/TextInput/customTextInput';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import {darkMode, lightMode} from '../../../Utils/Colors';

const CustomHeader = ({
  isHome,
  headerTitle = '',
  msgAndNotification,
  navigation = {},
  searchIcon,
  typingStatus = false,
  setTypingStatus = () => {},
}) => {
  const status = useSelector(state => state.themeR.status);
  const [searchItem, setsearchItem] = useState('');

  return (
    <View style={styles.container1}>
      {isHome ? (
        <View style={styles.container2}>
          <Text numberOfLines={1} style={styles.title1}>
            Fornax
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btn1}
          onPress={() => navigation.goBack()}>
          <Icon type="antdesign" name="arrowleft" size={widthToDp(6)} />
        </TouchableOpacity>
      )}
      {!typingStatus ? (
        <>
          <View style={styles.container3}>
            <Text numberOfLines={1} style={styles.title3}>
              {headerTitle}
            </Text>
          </View>
          {msgAndNotification && (
            <>
              <TouchableOpacity activeOpacity={0.7} style={styles.container5}>
                <Icon
                  type="antdesign"
                  name="message1"
                  size={widthToDp(5.5)}
                  color="#000"
                />
                <View
                  style={[
                    styles.badge1,
                    status
                      ? darkMode.screenBackgroundColors
                      : lightMode.screenBackgroundColors,
                  ]}>
                  <Text
                    style={[
                      styles.title2,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    +9
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={styles.container4}>
                <Icon
                  type="material-community"
                  name="bell-outline"
                  size={widthToDp(6.5)}
                  //color="#005266"
                  color="#000"
                />
                <View
                  style={[
                    styles.badge2,
                    status
                      ? darkMode.screenBackgroundColors
                      : lightMode.screenBackgroundColors,
                  ]}>
                  <Text
                    style={[
                      styles.title2,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    +9
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}
          {searchIcon && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.container5}
              onPress={() => setTypingStatus(true)}>
              <Icon
                type="fontisto"
                name="search"
                size={widthToDp(5.5)}
                color="#000"
              />
            </TouchableOpacity>
          )}
          {isHome && (
            <TouchableOpacity
              style={styles.container6}
              onPress={() => navigation.openDrawer()}
              activeOpacity={0.6}>
              <Image
                style={styles.image1}
                source={require('../../../Assets/Images/Himanshu.jpeg')}
              />
            </TouchableOpacity>
          )}
        </>
      ) : (
        <View style={styles.container7}>
          <CustomTextInput
            value={searchItem}
            onChangeText={setsearchItem}
            multiline
            numberOfLines={1}
            editable
            maxLength={50}
            keyboardType="default"
            placeholder="Enter Full Name..."
            leftIcon
            rightIcon
            rightIconSize={widthToDp(4)}
            leftIconSize={widthToDp(4.5)}
            iconName="pencil"
            iconType="material-community"
            placeholderTextColor={status ? '#bfbfbf' : '#737373'}
            inputContainerStyle={styles.container8}
            inputStyle={[
              styles.input1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}
          />
        </View>
      )}
    </View>
  );
};

export default CustomHeader;
