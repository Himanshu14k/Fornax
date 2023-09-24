import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Image} from 'react-native';
import {Icon} from '@rneui/themed';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {MediaSelectionOptionModal} from '../../Molecules/MediaSelectionOptions/mediaSelectionOptionModal';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import CustomTextInput from '../../Atoms/TextInput/customTextInput';
import MultiSelectDropDownMenuComponent from '../../Molecules/MultiSelectDropDownMenu/multiSelectDropDownMenu';
import {
  profileAndCoverPicSectionStyles,
  progressStatusSectionStyles,
  differentUserInputComponetStyles,
  multiSelectDropdownWithTitleStyles,
  customMultiSelectDropdownWithTitleComponentStyles,
} from './style';
import {
  DropdownMenuComponent,
  MultiSelectComponent,
} from '../../Molecules/DropdownMenu/DropDownMenuComponent';

const ProfileAndCoverPicSection = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <View style={profileAndCoverPicSectionStyles.container1}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={profileAndCoverPicSectionStyles.container2}
        onPress={() =>
          props.onPicClick(
            props.coverImagePath.length < 2
              ? require('../../../Assets/Images/Therapist.jpg')
              : {uri: props.coverImagePath},
            'Add Cover Pic',
          )
        }>
        <Image
          style={profileAndCoverPicSectionStyles.cover}
          source={
            props.coverImagePath.length < 2
              ? require('../../../Assets/Images/Therapist.jpg')
              : {uri: props.coverImagePath}
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          profileAndCoverPicSectionStyles.container3,
          status
            ? darkMode.screenBackgroundColors
            : lightMode.screenBackgroundColors,
        ]}
        onPress={() =>
          props.onPicClick(
            props.profileImagePath.length < 2
              ? require('../../../Assets/Images/Physcians.jpg')
              : {uri: props.profileImagePath},
            'Add Profile Pic',
          )
        }>
        <Image
          style={profileAndCoverPicSectionStyles.profileImage}
          source={
            props.profileImagePath.length < 2
              ? require('../../../Assets/Images/Physcians.jpg')
              : {uri: props.profileImagePath}
          }
        />
      </TouchableOpacity>
      <MediaSelectionOptionModal
        modalStatus={props.optionOnModalStatus}
        onChangeModalStatus={props.onChangeModalStatus}
        title={props.optionModalTitle}
        camera
        gallery
        setmediaPath={
          props.optionModalTitle === 'Add Cover Pic'
            ? props.setcoverImagePath
            : props.setprofileImagePath
        }
      />
    </View>
  );
};

const ProgressStatusSection = props => {
  return (
    <View style={progressStatusSectionStyles.container1}>
      <View
        style={[
          progressStatusSectionStyles.container2,
          props.stageStatus > 1
            ? progressStatusSectionStyles.completedStep
            : progressStatusSectionStyles.notCompletedStep,
        ]}>
        <Text style={progressStatusSectionStyles.title1}>{props.title1}</Text>
      </View>
      <View
        style={[
          progressStatusSectionStyles.container3,
          props.stageStatus > 1 && {backgroundColor: '#00d9ff'},
        ]}
      />
      <View
        style={[
          progressStatusSectionStyles.container2,
          props.stageStatus > 2
            ? progressStatusSectionStyles.completedStep
            : progressStatusSectionStyles.notCompletedStep,
        ]}>
        <Text style={progressStatusSectionStyles.title1}>{props.title2}</Text>
      </View>
      <View
        style={[
          progressStatusSectionStyles.container3,
          props.stageStatus > 2 && {backgroundColor: '#00d9ff'},
        ]}
      />
      <View
        style={[
          progressStatusSectionStyles.container2,
          props.stageStatus > 3
            ? progressStatusSectionStyles.completedStep
            : progressStatusSectionStyles.notCompletedStep,
        ]}>
        <Text style={progressStatusSectionStyles.title1}>{props.title3}</Text>
      </View>
    </View>
  );
};

const InputWithTitleComponent = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <View style={differentUserInputComponetStyles.contentContainer1}>
      <View style={differentUserInputComponetStyles.contentTitleContainer}>
        <Text
          style={[
            differentUserInputComponetStyles.contentTitle,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {props.title}
        </Text>
      </View>
      <View style={differentUserInputComponetStyles.inputContainer}>
        <CustomTextInput
          value={props.value}
          onChangeText={props.onChangeValue}
          numberOfLines={props.numberOfLines}
          editable
          maxLength={props.maxLength}
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          leftIcon
          leftIconSize={widthToDp(4)}
          iconName="pencil"
          iconType="material-community"
          placeholderTextColor={status ? '#bfbfbf' : '#737373'}
          inputContainerStyle={differentUserInputComponetStyles.input}
          inputStyle={[
            differentUserInputComponetStyles.inputTitle,
            status ? darkMode.textColor : lightMode.textColor,
          ]}
        />
      </View>
    </View>
  );
};

const DropdownMenuWithTitleComponent = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <View style={differentUserInputComponetStyles.contentContainer1}>
      <View style={differentUserInputComponetStyles.contentTitleContainer}>
        <Text
          style={[
            differentUserInputComponetStyles.contentTitle,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {props.title}
        </Text>
      </View>
      <View style={differentUserInputComponetStyles.dropdownMenuContainer}>
        <DropdownMenuComponent
          data={props.data}
          value={props.value}
          setValue={props.onChangeValue}
          valueField="_id"
          labelField="title"
          placeholder={
            props.placeholder === 'undefined'
              ? 'Select from List'
              : props.placeholder
          }
          maxHeight={props.menuHeight}
          style={[
            differentUserInputComponetStyles.dropdownMenu,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
            {
              borderColor: status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor,
            },
          ]}
          placeholderStyle={[
            differentUserInputComponetStyles.title2,
            status ? darkMode.textColor : lightMode.textColor,
          ]}
          selectedTextStyle={[
            differentUserInputComponetStyles.title2,
            status ? darkMode.textColor : lightMode.textColor,
          ]}
          rightIconStyle={[
            differentUserInputComponetStyles.rightIconStyle,
            status ? darkMode.tintColors : lightMode.tintColors,
          ]}
        />
      </View>
    </View>
  );
};

const RadioBtnWithTitleComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <View style={differentUserInputComponetStyles.contentContainer1}>
      <View style={differentUserInputComponetStyles.contentTitleContainer}>
        <Text
          style={[
            differentUserInputComponetStyles.contentTitle,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {props.title}
        </Text>
      </View>
      <View style={differentUserInputComponetStyles.radioBtnContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={differentUserInputComponetStyles.radioBtn}
          onPress={() => props.onChangeValue(props.radioBtnTitle1)}>
          {props.value === props.radioBtnTitle1 ? (
            <Icon
              type="material"
              name="radio-button-on"
              size={widthToDp(5)}
              color={'#00d9ff'}
            />
          ) : (
            <Icon
              type="material"
              name="radio-button-off"
              size={widthToDp(5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
          )}
          <Text
            style={[
              differentUserInputComponetStyles.radioBtnTitle,
              props.value === props.radioBtnTitle1
                ? {color: '#00d9ff'}
                : status
                ? darkMode.textColor
                : lightMode.textColor,
            ]}>
            {props.radioBtnTitle1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={differentUserInputComponetStyles.radioBtn}
          onPress={() => props.onChangeValue(props.radioBtnTitle2)}>
          {props.value === props.radioBtnTitle2 ? (
            <Icon
              type="material"
              name="radio-button-on"
              size={widthToDp(5)}
              color={'#00d9ff'}
            />
          ) : (
            <Icon
              type="material"
              name="radio-button-off"
              size={widthToDp(5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
          )}
          <Text
            style={[
              differentUserInputComponetStyles.radioBtnTitle,
              props.value === props.radioBtnTitle2
                ? {color: '#00d9ff'}
                : status
                ? darkMode.textColor
                : lightMode.textColor,
            ]}>
            {props.radioBtnTitle2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MultiSelectDropdownWithTitleComponent = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <View style={multiSelectDropdownWithTitleStyles.container1}>
      <Text
        style={[
          multiSelectDropdownWithTitleStyles.title1,
          status ? darkMode.textColor : lightMode.textColor,
        ]}>
        {props.title}
      </Text>
      <MultiSelectComponent
        style={[
          multiSelectDropdownWithTitleStyles.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
          {
            borderColor: status
              ? darkMode.screenBackgroundColors.backgroundColor
              : lightMode.screenBackgroundColors.backgroundColor,
          },
        ]}
        search={props.search}
        data={props.data}
        value={props.value}
        setValue={props.onChangeValue}
        valueField="_id"
        labelField="title"
        placeholder="Select from List"
        selectedItemContainerStyle={
          multiSelectDropdownWithTitleStyles.container3
        }
        placeholderStyle={[
          multiSelectDropdownWithTitleStyles.title3,
          status ? darkMode.textColor : lightMode.textColor,
        ]}
        selectedTextStyle={[
          multiSelectDropdownWithTitleStyles.title3,
          status ? darkMode.textColor : lightMode.textColor,
        ]}
        rightIconStyle={[
          multiSelectDropdownWithTitleStyles.rightIconStyle,
          status ? darkMode.tintColors : lightMode.tintColors,
        ]}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity
            activeOpacity={0.6}
            style={multiSelectDropdownWithTitleStyles.container4}
            onPress={() => unSelect && unSelect(item)}>
            <Text style={multiSelectDropdownWithTitleStyles.title2}>
              {item.title}
            </Text>
            <Icon
              color="black"
              type="ionicon"
              name="close"
              size={widthToDp(4)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const CustomMultiSelectDropdownWithTitleComponent = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <View style={customMultiSelectDropdownWithTitleComponentStyles.container1}>
      <Text
        style={[
          customMultiSelectDropdownWithTitleComponentStyles.title1,
          status ? darkMode.textColor : lightMode.textColor,
        ]}>
        {props.title}
      </Text>
      <MultiSelectDropDownMenuComponent
        addMore={props.addMore}
        setData={props.setData}
        data={props.data}
        isDetailsScreen={true}
        title="Select multiple from list..."
        id={props.id}
        label={props.label}
        rootContainerStyles={
          customMultiSelectDropdownWithTitleComponentStyles.container2
        }
        touchableAreaStyles={[
          customMultiSelectDropdownWithTitleComponentStyles.container3,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
          {
            borderColor: status
              ? darkMode.screenBackgroundColors.backgroundColor
              : lightMode.screenBackgroundColors.backgroundColor,
          },
        ]}
        iconSize={widthToDp(5.6)}
        iconColor={
          status
            ? darkMode.tintColors.tintColor
            : lightMode.tintColors.tintColor
        }
        touchableAreaTextStyles={[
          customMultiSelectDropdownWithTitleComponentStyles.title2,
          status ? darkMode.textColor : lightMode.textColor,
        ]}
        selectedContentContainerStyle={
          customMultiSelectDropdownWithTitleComponentStyles.container4
        }
        selectedItemStyles={
          customMultiSelectDropdownWithTitleComponentStyles.btn1
        }
        selectedItemTextStyle={
          customMultiSelectDropdownWithTitleComponentStyles.title3
        }
      />
    </View>
  );
};

export {
  ProfileAndCoverPicSection,
  ProgressStatusSection,
  InputWithTitleComponent,
  DropdownMenuWithTitleComponent,
  RadioBtnWithTitleComponent,
  MultiSelectDropdownWithTitleComponent,
  CustomMultiSelectDropdownWithTitleComponent,
};
