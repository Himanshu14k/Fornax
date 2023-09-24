import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';
import {useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import {
  requestCameraPermission,
  requestExternalWritePermission,
  requestInternalReadPermission,
} from '../../../Utils/DifferentPermissionAccess';
import {styles} from './style';

const ViewPicModal = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.viewPicModalStatus}
      onRequestClose={() =>
        props.setViewPicModalStatus(!props.viewPicModalStatus)
      }>
      <View style={showPicModalStyles.container1} onPress>
        <Image style={showPicModalStyles.image} source={props.image} />
        <TouchableOpacity
          activeOpacity={0.6}
          style={showPicModalStyles.btn}
          onPress={() =>
            props.setViewPicModalStatus(!props.viewPicModalStatus)
          }>
          <Icon type="ionicon" name="close" color="#fff" size={widthToDp(8)} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const MediaSelectionOptionModal = ({
  modalStatus = true,
  onChangeModalStatus = () => {},
  onViewPicClick = () => {},
  title = 'Media Options',
  camera,
  gallery,
  viewPic,
  document,
  audio,
  setmediaPath,
}) => {
  const status = useSelector(state => state.otherReducer.status);
  const [viewPicModalStatus, setviewPicModalStatus] = useState(false);

  const captureImage = async () => {
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      try {
        ImagePicker.openCamera({
          cropping: true,
        })
          .then(image => {
            setmediaPath(image.path);
            onChangeModalStatus();
          })
          .catch(err => {
            alert('File not selected.');
          });
      } catch (err) {
        console.log('Error is : ', err);
        alert('Error encountered during camera opening.', err);
      }
    }
  };

  const choosePhotoFromLibrary = async () => {
    let isStoragePermitted = await requestInternalReadPermission();
    if (isStoragePermitted) {
      try {
        ImagePicker.openPicker({
          cropping: true,
        })
          .then(image => {
            setmediaPath(image.path);
            onChangeModalStatus();
          })
          .catch(err => {
            alert('File not selected.');
          });
      } catch (err) {
        console.log(err);
        alert('Error encountered during gallery opening.', err);
      }
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalStatus}
      onRequestClose={() => onChangeModalStatus()}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.container1}
        onPress={() => onChangeModalStatus()}
      />
      <View
        style={[
          styles.container5,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            styles.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {title}
        </Text>
        <View style={styles.container2}>
          {viewPic && (
            <View style={styles.container3}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn1}
                onPress={() => onViewPicClick()}>
                <View style={styles.container4}>
                  <Icon
                    type="material-community"
                    name="eye"
                    size={widthToDp(5)}
                    color="#fff"
                  />
                </View>
                <Text
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  View
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {camera && (
            <View style={styles.container3}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn1}
                onPress={() => captureImage()}>
                <View style={styles.container4}>
                  <Icon
                    name="camera"
                    type="entypo"
                    size={widthToDp(5)}
                    color="#fff"
                  />
                </View>
                <Text
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Camera
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {gallery && (
            <View style={styles.container3}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn1}
                onPress={() => choosePhotoFromLibrary()}>
                <View style={styles.container4}>
                  <Icon
                    name="photo"
                    type="material"
                    size={widthToDp(5)}
                    color="#fff"
                  />
                </View>
                <Text
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Gallery
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {audio && (
            <View style={styles.container3}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn1}
                onPress={() => choosePhotoFromLibrary()}>
                <View style={styles.container4}>
                  <Icon
                    name="photo"
                    type="material"
                    size={widthToDp(5)}
                    color="#fff"
                  />
                </View>
                <Text
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Audio
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {document && (
            <View style={styles.container3}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn1}
                onPress={() => choosePhotoFromLibrary()}>
                <View style={styles.container4}>
                  <Icon
                    name="photo"
                    type="material"
                    size={widthToDp(5)}
                    color="#fff"
                  />
                </View>
                <Text
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Dcoument
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export {MediaSelectionOptionModal, ViewPicModal};
