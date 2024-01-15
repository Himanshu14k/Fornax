import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import CustomTextInput from '../../../Components/Atoms/TextInput/customTextInput';
import {DropdownMenuComponent} from '../../../Components/Molecules/DropdownMenu/DropDownMenuComponent';
import {FloatingBtnSection} from '../../../Components/Molecules/FloatingBtn/floatingBtnSection';
import {MediaSelectionOptionModal} from '../../../Components/Molecules/MediaSelectionOptions/mediaSelectionOptionModal';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {styles} from './style';

const AccountSettingScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader navigation={props.navigation} />
      <DoctorProfileSettingComponent />
    </View>
  );
};

const SpeciliatiesData = [
  'Anaesthesiology',
  'Dermatology',
  'Family Medicine',
  'Forensic Medicine',
  'General Medicine',
  'Microbiology',
  'Paediatrics',
  'Palliative Medicine',
  'Pathology',
  'Skin and Venereal diseases',
  'Pharmacology',
  'Physical Medicine and Rehabilitation',
  'Physiology',
  'Preventive and Social Medicine',
  'Psychiatry',
  'Radio-Diagnosis',
  'Ear, Nose and Throat',
  'General Surgery',
  'Ophthalmology',
  'Orthopaedics',
  'Obstetrics and Gynaecology',
  'Allergy and immunology',
  'Anesthesiology',
  'Cardiology',
  'Cardiothoracic surgery',
  'Clinical neurophysiology',
  'Endocrinology',
  'Hematology',
];
const data = [
  {
    id: 1,
    label: '1 Hours',
    value: 1,
  },
  {
    id: 2,
    label: '2 Hours',
    value: 2,
  },
  {
    id: 3,
    label: '3 Hours',
    value: 3,
  },
  {
    id: 4,
    label: '4 Hours',
    value: 4,
  },
  {
    id: 5,
    label: '5 Hours',
    value: 5,
  },
  {
    id: 6,
    label: '6 Hours',
    value: 6,
  },
  {
    id: 7,
    label: '7 Hours',
    value: 7,
  },
  {
    id: 8,
    label: '8 Hours',
    value: 8,
  },
  {
    id: 9,
    label: '9 Hours',
    value: 9,
  },
  {
    id: 10,
    label: '10 Hours',
    value: 10,
  },
  {
    id: 11,
    label: '11 Hours',
    value: 11,
  },
  {
    id: 12,
    label: '12 Hours',
    value: 12,
  },
  {
    id: 13,
    label: '13 Hours',
    value: 13,
  },
  {
    id: 14,
    label: '14 Hours',
    value: 14,
  },
  {
    id: 15,
    label: '15 Hours',
    value: 15,
  },
  {
    id: 16,
    label: '16 Hours',
    value: 16,
  },
  {
    id: 17,
    label: '17 Hours',
    value: 17,
  },
  {
    id: 18,
    label: '18 Hours',
    value: 18,
  },
  {
    id: 19,
    label: '19 Hours',
    value: 19,
  },
  {
    id: 20,
    label: '20 Hours',
    value: 20,
  },
  {
    id: 21,
    label: '21 Hours',
    value: 21,
  },
  {
    id: 22,
    label: '22 Hours',
    value: 22,
  },
  {
    id: 23,
    label: '23 Hours',
    value: 23,
  },
  {
    id: 24,
    label: '24 Hours',
    value: 24,
  },
];

const DoctorProfileSettingComponent = () => {
  const status = useSelector(state => state.otherReducer.status);
  const [name, setname] = useState('Himanshu Kumar Jha');
  const [location, setlocation] = useState('Chandigarh');
  const [specilization, setspecilization] = useState('Data Scientist');
  const [dropDownMenuStatus, setDropDownMenuStatus] = useState(false);

  const [viewPicModalStatus, setViewPicModalStatus] = useState(false);
  const [optionOnModalStatus, setoptionOnModalStatus] = useState(false);
  const [modalImage, setmodalImage] = useState(null);
  const [optionModalTitle, setOptionModalTitle] = useState('');
  const [coverImagePath, setcoverImagePath] = useState('');
  const [profileImagePath, setprofileImagePath] = useState('');
  const onChangeModalStatus = () => {
    setoptionOnModalStatus(!optionOnModalStatus);
  };

  const onPicClick = (img, title) => {
    setOptionModalTitle(title);
    setoptionOnModalStatus(!optionOnModalStatus);
    setmodalImage(img);
  };
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <ScrollView
        contentContainerStyle={[
          styles.container1,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container2}
            onPress={() =>
              onPicClick(
                coverImagePath.length < 2
                  ? require('../../../Assets/Images/Therapist.jpg')
                  : {uri: coverImagePath},
                'Add Cover Pic',
              )
            }>
            <Image
              style={styles.cover}
              source={
                coverImagePath.length < 2
                  ? require('../../../Assets/Images/Therapist.jpg')
                  : {uri: coverImagePath}
              }
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.container3,
            status
              ? darkMode.screenBackgroundColors
              : lightMode.screenBackgroundColors,
          ]}
          onPress={() =>
            onPicClick(
              profileImagePath.length < 2
                ? require('../../../Assets/Images/Physcians.jpg')
                : {uri: profileImagePath},
              'Add Profile Pic',
            )
          }>
          <Image
            style={styles.profileImage}
            source={
              profileImagePath.length < 2
                ? require('../../../Assets/Images/Physcians.jpg')
                : {uri: profileImagePath}
            }
          />
        </TouchableOpacity>
        <View style={styles.container4}>
          <Text
            style={[
              styles.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Name*
          </Text>
          <CustomTextInput
            value={name}
            onChangeText={setname}
            multiline
            numberOfLines={1}
            editable
            maxLength={50}
            keyboardType="default"
            placeholder="Enter Full Name..."
            leftIcon
            leftIconSize={widthToDp(4.5)}
            iconName="pencil"
            iconType="material-community"
            placeholderTextColor={status ? '#bfbfbf' : '#737373'}
            inputContainerStyle={[styles.container5]}
            inputStyle={[
              styles.input1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}
          />
        </View>
        <View style={styles.container4}>
          <Text
            style={[
              styles.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Location (City/State)*
          </Text>
          <CustomTextInput
            value={location}
            onChangeText={setlocation}
            numberOfLines={1}
            editable
            maxLength={50}
            keyboardType="default"
            placeholder="Enter Location..."
            leftIcon
            leftIconSize={widthToDp(4.5)}
            iconName="pencil"
            iconType="material-community"
            placeholderTextColor={status ? '#bfbfbf' : '#737373'}
            inputContainerStyle={[styles.container5]}
            inputStyle={[
              styles.input1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}
          />
        </View>
        <View style={styles.container4}>
          <Text
            style={[
              styles.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Speciliaties
          </Text>
          <DropdownMenuComponent
            style={[
              styles.container6,
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
            value={specilization}
            setValue={setspecilization}
            labelField="label"
            valueField="value"
            placeholder="Select from List"
            maxHeight={widthToDp(50)}
            placeholderStyle={[
              styles.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}
            selectedTextStyle={[
              styles.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}
            rightIconStyle={[
              styles.rightIconStyle,
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
        </View>
      </ScrollView>
      <FloatingBtnSection firstBtnTitle="Cancel" secondBtnTitle="Save" />
      <MediaSelectionOptionModal
        modalStatus={optionOnModalStatus}
        onChangeModalStatus={onChangeModalStatus}
        title={optionModalTitle}
        camera
        viewPic
        gallery
        setmediaPath={
          optionModalTitle === 'Add Cover Pic'
            ? setcoverImagePath
            : setprofileImagePath
        }
      />
    </KeyboardAvoidingView>
  );
};

export default AccountSettingScreen;
