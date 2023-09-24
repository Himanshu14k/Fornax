import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {useSelector} from 'react-redux';
import {ViewPicModal} from '../../Molecules/ViewPic/viewPicModal';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import {styles1, styles2} from './style';

const ProfileSectionComponent1 = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [viewPicModalStatus, setviewPicModalStatus] = useState(false);
  const [modalImage, setmodalImage] = useState(null);

  const onPicClick = img => {
    setmodalImage(img);
    setviewPicModalStatus(!viewPicModalStatus);
  };
  return (
    <View
      style={[
        styles1.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles1.container2}
          onPress={() => onPicClick(props.data?.coverPic)}>
          <Image
            style={styles1.cover}
            source={{uri: props.data?.coverPic}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles1.container3}>
        <View
          style={[
            styles1.container4,
            status
              ? darkMode.screenBackgroundColors
              : lightMode.screenBackgroundColors,
          ]}>
          <Text
            numberOfLines={1}
            style={[
              styles1.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {props.name}
          </Text>
        </View>
        <View
          style={[
            styles1.container5,
            status
              ? darkMode.screenBackgroundColors
              : lightMode.screenBackgroundColors,
          ]}>
          {props.data?.status === 1 ? (
            <Image
              style={styles1.image3}
              source={require('../../../Assets/Icons/processing.png')}
            />
          ) : props.data?.status === 2 ? (
            <Icon
              type="material"
              name="verified"
              size={widthToDp(6)}
              color={'#00d9ff'}
            />
          ) : (
            props.data?.status === 3 && (
              <Icon
                type="octicon"
                name="unverified"
                size={widthToDp(6)}
                color={'#00d9ff'}
              />
            )
          )}
        </View>
      </View>
      <TouchableOpacity
        style={[
          props.profilePicSquare
            ? styles1.container7
            : styles1.container6,
          status
            ? darkMode.screenBackgroundColors
            : lightMode.screenBackgroundColors,
        ]}
        onPress={() => onPicClick(props.data?.profilePic)}>
        <Image
          style={
            props.profilePicSquare
              ? styles1.image2
              : styles1.image1
          }
          source={{uri: props.data?.profilePic}}
        />
      </TouchableOpacity>
      <ViewPicModal
        image={modalImage}
        modalStatus={viewPicModalStatus}
        setModalStatus={setviewPicModalStatus}
      />
    </View>
  );
};

const ProfileSectionComponent2 = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <View
      style={[
        styles2.container,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={styles2.container1}>
        <View style={styles2.container2}>
          <Image
            source={{uri: props?.data?.profilePic}}
            style={styles2.image1}
          />
        </View>
        <View style={styles2.container3}>
          <View style={styles2.container4}>
            <Text
              numberOfLines={1}
              style={[
                styles2.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.name}
            </Text>
          </View>
          <View style={styles2.container5}>
            <Text
              numberOfLines={2}
              style={[
                styles2.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.role}
            </Text>
          </View>
        </View>
      </View>
      {props?.noHistory && (
        <View style={styles2.container6}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles2.btn1,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}
            onPress={() => {}}>
            <Icon
              type={'ionicon'}
              name={'call'}
              size={widthToDp(3)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              numberOfLines={1}
              style={[
                styles2.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Call
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles2.btn1,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}
            onPress={() => {}}>
            <Icon
              type={'ant-design'}
              name={'message1'}
              size={widthToDp(3)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <Text
              numberOfLines={1}
              style={[
                styles2.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Chat
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export {ProfileSectionComponent1, ProfileSectionComponent2};
