import React, {useState, useEffect} from 'react';
import {
  Modal,
  SafeAreaView,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Icon} from '@rneui/themed';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {styles1, styles3, styles2} from './style';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import ImagePicker from 'react-native-image-crop-picker';
import SwitchComponent from '../../../Components/Molecules/Switch/switchComponent';
import {setAuthStatus} from '../../../States/Actions/AuthStatusActions/actions';
import {MediaSelectionOptionModal} from '../../../Components/Molecules/MediaSelectionOptions/mediaSelectionOptionModal';
import {androidCameraPermission} from '../../../Utils/DifferentPermissionAccess';

const ProfileScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  const uId = useSelector(state => state.authenticationReducer.uId);
  const [ms1, setms1] = useState(false);
  const [ms2, setms2] = useState(false);
  const [file, setnewPP] = useState('');
  const [data, setData] = useState({});

  const fetchdata = () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      // setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.onrender.com/uGD/getPN', {
          params: {
            id: uId,
          },
        })
        .then(response => {
          // console.log('getting data from axios');
          if (response.data.status === 'success') {
            setData(response.data.data);
            // setloadingStatus({status: 2, msg: 'Completed'});
          } else {
            // setloadingStatus({status: 3, msg: 'No Specialities Found.'});
            SimpleToast.show(
              (message = 'No Profile Details Found!'),
              (duration = 5000),
            );
          }
        })
        .catch(error => {
          // setloadingStatus({status: 3, msg: 'No Profile Details Found.'});
          console.log('Axios error (fetchData)', error);
        });
    } catch (error) {
      console.log(
        'Uexpected error occured during Profile details data fetching.',
      );
      console.log('Error is (fetchData): ', error);
      // setloadingStatus({status: 3, msg: 'No Specialities Found.'});
      // handleAxiosError(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const onChangeModalStatus = () => {
    setms2(!ms2);
  };

  function onPicChange() {
    if (file?.uri !== undefined) {
      return {uri: file?.uri};
    } else {
      if (data?.profilePic === undefined) {
        return require('../../../Assets/Images/profilePic.png');
      } else {
        return {uri: data?.profilePic};
      }
    }
  }

  const onConfimPP = async () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));

      const formData = new FormData();
      formData.append('id', uId);
      formData.append('image', file);

      // var files = [
      //   {
      //     name: '4d30db69-3f00-4228-b98a-b6a7602af1d9',
      //     filename: file.filename,
      //     filepath: file.uri,
      //     filetype: file.type,
      //   },
      // ];

      // // upload files
      // RNFS.uploadFiles({
      //   toUrl: 'https://fornaxbackend.onrender.com/uGD/updateP',
      //   binaryStreamOnly: true,
      //   files: files,
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //   },
      //   fields: {
      //     hello: 'world',
      //   },
      //   // begin: uploadBegin,
      //   // progress: uploadProgress,
      // })
      //   .promise.then(response => {
      //     if (response.code === 200) {
      //       console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
      //     } else {
      //       console.log('SERVER ERROR');
      //     }
      //   })
      //   .catch(err => {
      //     if (err.description === 'cancelled') {
      //       // cancelled by user
      //     }
      //     console.log(err);
      //   });

      axios
        .post('https://fornaxbackend.onrender.com/uGD/updateP', {
          headers: {'Content-Type': 'multipart/form-data'},
          data: formData,
          id: uId,
        })
        .then(response => {
          // console.log('getting data from axios');
          if (response.data.status === 'success') {
            // setData(response.data.data);
            // setloadingStatus({status: 2, msg: 'Completed'});
            console.log('Profile Pic Updated Successfull.');
          } else {
            // setloadingStatus({status: 3, msg: 'No Specialities Found.'});
            SimpleToast.show(
              (message = 'No Profile Details Found!'),
              (duration = 5000),
            );
          }
        })
        .catch(error => {
          // setloadingStatus({status: 3, msg: 'No Profile Details Found.'});
          console.log('Axios error (fetchData)', error);
        });
      console.log('Ending');
    } catch (error) {
      console.log(
        'Uexpected error occured during Profile details data fetching.',
      );
      console.log('Error is (fetchData): ', error);
      // setloadingStatus({status: 3, msg: 'No Specialities Found.'});
      // handleAxiosError(error);
    }
  };

  const onChangeProfileSetting = () => {};

  const onChangeProfilePic = () => {
    setms1(!ms1);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <TopAreaContainerComponent />
      <BottomAreaContainerComponent
        navigation={props.navigation}
        onPressLeftBtn={onChangeProfileSetting}
        onPressRightBtn={onChangeProfilePic}
        profilePic={onPicChange}
        // profilePic={require('../../../Assets/Images/Himanshu.jpeg')}
      />
      <ChangeProfilePicModal
        modalStatus={ms1}
        setModalStatus={setms1}
        onChangeMediaModal={onChangeModalStatus}
        bgImage={onPicChange}
        setProfilePicPath={setnewPP}
        confirmPP={onConfimPP}
      />
      <MediaSelectionOptionModal
        modalStatus={ms2}
        onChangeModalStatus={onChangeModalStatus}
        title="Media Options"
        camera
        gallery
        // document
        setmediaPath={setnewPP}
      />
    </View>
  );
};

const ChangeProfilePicModal = props => {
  const status = useSelector(state => state.otherReducer.status);

  const onChangeModalStatus = () => {
    props.setModalStatus(!props.modalStatus);
  };

  const onSubmit = () => {
    props.confirmPP();
    onChangeModalStatus();
  };

  const onCancel = () => {
    props.setProfilePicPath('');
    onChangeModalStatus();
  };

  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={props.modalStatus}
      onRequestClose={() => onChangeModalStatus()}>
      <ImageBackground
        style={styles1.bgimage}
        resizeMode="contain"
        source={props.bgImage()}>
        <View style={styles1.container1}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles1.btn2}
            onPress={() => onCancel()}>
            <Icon
              type="antdesign"
              name="close"
              size={widthToDp(12)}
              color="#ff3300"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles1.btn3}
            onPress={() => onSubmit()}>
            <Icon
              type="antdesign"
              name="check"
              size={widthToDp(12)}
              color="#00ff00"
            />
          </TouchableOpacity>
          <View
            style={[
              styles1.container2,
              status
                ? darkMode.transparentBackgroundColor
                : lightMode.transparentBackgroundColor,
            ]}>
            <TouchableOpacity
              style={styles1.btn1}
              onPress={() => props.onChangeMediaModal()}>
              <Icon
                type="antdesign"
                name="plus"
                size={widthToDp(15)}
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
};

const TopAreaContainerComponent = () => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <View style={styles2.container1}>
      <View style={styles2.container2}>
        <Text
          style={[
            styles2.title,
            {
              color: status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor,
            },
          ]}>
          Profile
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles2.btn,
            status
              ? darkMode.screenBackgroundColors
              : lightMode.screenBackgroundColors,
          ]}>
          <Icon
            type="font-awesome"
            name="sliders"
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const dummyData = [
  // 'Health & Fitness Dashboard',
  'Appointments Records',
  'All Appoinments',
  'Payments History',
  'Bookmarks',
  'Sign and Security',
  'Help Center',
  'Privacy Policy',
  'Terms & Conditions',
  'About Us',
];

const BottomAreaContainerComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  const name = useSelector(state => state.authenticationReducer.name);

  const dispatch = useDispatch();

  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS == 'ios') {
      Alert.alert('Profile Picture', 'Choose an option', [
        {text: 'Camera', onPress: onCamera},
        {text: 'Gallery', onPress: onGallery},
        {text: 'Cancel', onPress: () => {}},
      ]);
    }
  };

  const onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      imageUpload();
      console.log('process ended');
    });
  };

  const onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('selected Image', image);
      imageUpload(image.path);
    });
  };

  const imageUpload = imagePath => {
    const imageData = new FormData();
    imageData.append('file', {
      uri: imagePath,
      name: 'image.png',
      fileName: 'image',
      type: 'image/png',
    });
    console.log('form data', imageData);
    try {
      axios({
        method: 'post',
        url: 'https://fornaxbackend.onrender.com/uGD/updateP',
        data: imageData,
      })
        .then(function (response) {
          console.log('image upload successfully', response.data);
        })
        .catch(error => {
          console.log('error riased', error);
        });
    } catch (error) {
      console.log('error in try block ', error);
    }
  };

  const onClickEvent = title => {
    // if (title === 'Health & Fitness Dashboard') {
    //   props.navigation.navigate('healthAndFitnessDashboard');
    // }
    if (title === 'Appointments Records') {
      props.navigation.navigate('healthCareAppoinManagement');
    }
    // else if (title === 'All Appoinments') {
    //   props.navigation.navigate('allAppoinments');
    // }
    else if (title === 'Payments History') {
      props.navigation.navigate('paymentHistory');
    } else if (title === 'Bookmarks') {
      //props.navigation.navigate('bookmark');
    } else if (title === 'Sign and Security') {
      //props.navigation.navigate('signAndSecurity');
    } else if (title === 'Help Center') {
      //props.navigation.navigate('helpCenter');
      onSelectImage();
    } else if (title === 'Privacy Policy') {
      //props.navigation.navigate('privacyPolicy');
    } else if (title === 'Terms & Conditions') {
      //props.navigation.navigate('termsAndCondition');
    } else if (title === 'About Us') {
      //props.navigation.navigate('aboutUs');
    }
  };

  const onSignOut = () => {
    dispatch(setAuthStatus(false, ''));
  };

  return (
    <View
      style={[
        styles3.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View
        style={[
          styles3.container2,
          {borderBottomColor: status ? '#666666' : '#bfbfbf'},
        ]}>
        <View style={styles3.container3}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles3.btn1,
              status
                ? darkMode.screenBackgroundColors
                : lightMode.screenBackgroundColors,
            ]}
            onPress={() => props.onPressLeftBtn()}>
            <Icon
              type="material-community"
              name="account-cog"
              size={widthToDp(6)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
          </TouchableOpacity>
          <View style={styles3.container4}></View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles3.btn1,
              status
                ? darkMode.screenBackgroundColors
                : lightMode.screenBackgroundColors,
            ]}
            onPress={() => props.onPressRightBtn()}>
            <Icon
              type="material"
              name="edit"
              size={widthToDp(6)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles3.container6}>
          <Text
            style={[
              styles3.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {name}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles3.container5,
          {
            borderColor: status
              ? darkMode.screenBackgroundColors.backgroundColor
              : lightMode.screenBackgroundColors.backgroundColor,
          },
        ]}>
        <Image style={styles3.image} source={props.profilePic()} />
      </View>
      <View
        style={[
          styles3.container7,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <ScrollView
          contentContainerStyle={styles3.container8}
          showsVerticalScrollIndicator={false}>
          {dummyData.map((item, id) => (
            <TouchableOpacity
              key={id}
              style={[
                styles3.btn2,
                {
                  borderBottomColor: status
                    ? darkMode.screenBackgroundColors.backgroundColor
                    : lightMode.screenBackgroundColors.backgroundColor,
                },
              ]}
              activeOpacity={0.6}
              onPress={() => onClickEvent(item)}>
              <Text
                style={[
                  styles3.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {item}
              </Text>
              <Icon
                type="antdesign"
                name="right"
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            </TouchableOpacity>
          ))}
          <View
            style={[
              styles3.btn3,
              {
                borderBottomColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles3.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Dark Theme
            </Text>
            <SwitchComponent />
          </View>
          <TouchableOpacity
            style={[
              styles3.btn4,
              {
                borderBottomColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}
            activeOpacity={0.6}
            onPress={() => onSignOut()}>
            <Text
              style={[
                styles3.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Sign out
            </Text>
            <Icon
              type="material"
              name="logout"
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileScreen;
