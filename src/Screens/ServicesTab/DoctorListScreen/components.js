import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import {style1, style2, style3} from './style';
import {navigate} from '../../../Navigations/navigationServices';

const SortingModal = props => {
  const status = useSelector(state => state.otherReducer.status);

  const [sortBy, setsortBy] = useState(1);

  const onModalClose = () => {
    props.setsortingModalStatus(!props.sortingModalStatus);
  };
  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={props.sortingModalStatus}
      onRequestClose={() => onModalClose()}>
      <TouchableOpacity
        style={style1.container1}
        activeOpacity={0.5}
        onPress={() => onModalClose()}
      />
      <View
        style={[
          style1.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            style1.title1,
            status ? darkMode.textColor : lightMode.textColor,
            {
              borderBottomColor: status
                ? lightMode.screenBackgroundColors.backgroundColor
                : darkMode.screenBackgroundColors.backgroundColor,
            },
          ]}>
          Sort by
        </Text>
        <View style={style1.container4}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={style1.container5}
            onPress={() => setsortBy(1)}>
            <Text
              style={[
                style1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Popularity
            </Text>
            {sortBy === 1 ? (
              <Icon type="font-awesome" name="dot-circle-o" color="#00d9ff" />
            ) : (
              <Icon
                type="font-awesome"
                name="circle-o"
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={style1.container5}
            onPress={() => setsortBy(2)}>
            <Text
              style={[
                style1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Newest First
            </Text>
            {sortBy === 2 ? (
              <Icon type="font-awesome" name="dot-circle-o" color="#00d9ff" />
            ) : (
              <Icon
                type="font-awesome"
                name="circle-o"
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={style1.container5}
            onPress={() => setsortBy(3)}>
            <Text
              style={[
                style1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Fees -- Low to High
            </Text>
            {sortBy === 3 ? (
              <Icon type="font-awesome" name="dot-circle-o" color="#00d9ff" />
            ) : (
              <Icon
                type="font-awesome"
                name="circle-o"
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={style1.container5}
            onPress={() => setsortBy(4)}>
            <Text
              style={[
                style1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Fees -- High to Low
            </Text>
            {sortBy === 4 ? (
              <Icon type="font-awesome" name="dot-circle-o" color="#00d9ff" />
            ) : (
              <Icon
                type="font-awesome"
                name="circle-o"
                color={
                  props.isDark
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const SortAndFilterBtnComponent = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <View style={[style2.container1]}>
      <TouchableOpacity
        style={[
          style2.container2,
          status
            ? darkMode.contentbackgroundColor
            : lightMode.contentbackgroundColor,
        ]}
        activeOpacity={0.5}
        onPress={() => props.setsortingModalStatus(!props.sortingModalStatus)}>
        <Icon
          type="material-community"
          name="sort"
          size={widthToDp(5)}
          color={
            status
              ? darkMode.tintColors.tintColor
              : lightMode.tintColors.tintColor
          }
        />
        <Text
          style={[
            style2.title,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Sort
        </Text>
      </TouchableOpacity>
      <View
        style={[
          style2.seprator,
          status
            ? lightMode.contentbackgroundColor
            : darkMode.contentbackgroundColor,
        ]}
      />
      <TouchableOpacity
        style={[
          style2.container2,
          status
            ? darkMode.contentbackgroundColor
            : lightMode.contentbackgroundColor,
        ]}
        activeOpacity={0.5}>
        <Icon
          type="material-community"
          name="filter-variant"
          size={widthToDp(5)}
          color={
            status
              ? darkMode.tintColors.tintColor
              : lightMode.tintColors.tintColor
          }
        />
        <Text
          style={[
            style2.title,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Filter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const dummData = [1, 2, 3, 4, 5, 6, 7, 8];

const ListOfDoctorsComponent = props => {
  const status = useSelector(state => state.otherReducer.status);

  const renderItem = ({item, id}) => {
    return (
      <TouchableOpacity
        key={id}
        activeOpacity={0.7}
        style={[
          style3.container3,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}
        onPress={() =>
          // props.navigation.navigate('doctorProfile', {
          //   id: item.ref.authID,
          //   name: item.general_Info.name,
          //   prevRouteName: props.prevRouteName,
          // })
          navigate('doctorProfile')
        }>
        <View style={style3.container4}>
          <View style={style3.imageContainer}>
            <Image
              style={style3.image}
              // source={{uri: item?.general_Info?.profilePic}}
              source={require('../../../Assets/Images/InstantDC.jpg')}
            />
          </View>
          <View style={style3.container5}>
            <Text
              numberOfLines={1}
              style={[
                style3.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {/* {item?.general_Info?.name} */}
              {'Jhon Doe'}
            </Text>
          </View>
          <View style={style3.container5}>
            <Text
              numberOfLines={1}
              style={[
                style3.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {/* {item?.professional_Info?.specialities} */}
              {'Cardiologist'}
            </Text>
          </View>
          <View style={style3.container5}>
            <Text
              numberOfLines={1}
              style={[
                style3.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {/* {item?.professional_Info?.yoe} years of experiences */}
              {'3'} years of experiences
            </Text>
          </View>
        </View>
        <View style={style3.container6}>
          <View style={style3.container7}>
            <Text
              numberOfLines={1}
              style={[
                style3.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {/* {item?.professional_Info?.about} */}
              {
                'item?.professional_Info?.about hdfjhfj sufjhjf fds fdjfhds fds dijfdhfdfhdsjf'
              }
            </Text>
          </View>
          <View style={style3.container8}>
            <Text
              numberOfLines={1}
              style={[
                style3.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {/* {item?.contact_Info?.address} */}
              {
                'item?.contact_Info?.address item?.contact_Info?.address item?.contact_Info?.address item?.contact_Info?.address'
              }
            </Text>
          </View>
          <View style={style3.container9}>
            <View style={style3.container10}>
              {/* {item?.professional_Info?.avail_video_slots > 0 ? ( */}
              {true ? (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[style3.btn1, {backgroundColor: '#009900'}]}
                  onPress={() =>
                    // props.navigation.navigate('viewAllSlots', {
                    //   tabName: 'Teli Consultation',
                    //   data: {
                    //     id: item?.ref?.authID,
                    //     name: item?.general_Info?.name,
                    //     specialities: item?.professional_Info?.specialities,
                    //     profilePic: item?.general_Info?.profilePic,
                    //   },
                    // })
                    navigate('viewAllSlots')
                  }>
                  <View style={style3.container11}>
                    <Icon
                      name="video"
                      type="font-awesome-5"
                      size={widthToDp(4)}
                      color="#00d9ff"
                    />
                    <Text style={style3.title4}>Video Consultation</Text>
                  </View>
                  <View style={style3.container11}>
                    <Icon
                      name="rupee-sign"
                      type="font-awesome-5"
                      size={widthToDp(4)}
                      color="#00d9ff"
                    />
                    <Text style={style3.title4}>
                      {/* {item?.professional_Info?.vFees} */}
                      {'500'}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View
                  activeOpacity={0.7}
                  style={[
                    style3.btn2,
                    status
                      ? (darkMode.borderColorPrimary,
                        darkMode.transparentBackgroundColorPrimary)
                      : lightMode.borderColorPrimary,
                    lightMode.transparentBackgroundColorPrimary,
                  ]}>
                  <View style={style3.container11}>
                    <Icon
                      name="video"
                      type="font-awesome-5"
                      size={widthToDp(4)}
                      color={
                        status
                          ? darkMode.tintColors.tintColor
                          : lightMode.tintColors.tintColor
                      }
                    />
                    <Text
                      style={[
                        style3.title3,
                        status ? darkMode.textColor : lightMode.textColor,
                      ]}>
                      Video Consultation
                    </Text>
                  </View>
                  <View style={style3.container11}>
                    <Icon
                      name="rupee-sign"
                      type="font-awesome-5"
                      size={widthToDp(4)}
                      color={
                        status
                          ? darkMode.tintColors.tintColor
                          : lightMode.tintColors.tintColor
                      }
                    />
                    <Text
                      style={[
                        style3.title3,
                        status ? darkMode.textColor : lightMode.textColor,
                      ]}>
                      {/* {item?.professional_Info?.vFees} */}
                      {'300'}
                    </Text>
                  </View>
                </View>
              )}
            </View>
            <View style={style3.container10}>
              {/* {item?.professional_Info?.avail_inClinic_slots > 0 ? ( */}
              {true ? (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[style3.btn1, {backgroundColor: '#cc33ff'}]}
                  onPress={() =>
                    // props.navigation.navigate('viewAllSlots', {
                    //   tabName: 'Teli Consultation',
                    //   data: {
                    //     id: item?.ref?.authID,
                    //     name: item?.general_Info?.name,
                    //     specialities: item?.professional_Info?.specialities,
                    //     profilePic: item?.general_Info?.profilePic,
                    //   },
                    // })
                    navigate('viewAllSlots')
                  }>
                  <View style={style3.container11}>
                    <Icon
                      name="video"
                      type="font-awesome-5"
                      size={widthToDp(4)}
                      color="#00d9ff"
                    />
                    <Text style={style3.title4}>Video Consultation</Text>
                  </View>
                  <View style={style3.container11}>
                    <Icon
                      name="rupee-sign"
                      type="font-awesome-5"
                      size={widthToDp(4)}
                      color="#00d9ff"
                    />
                    <Text style={style3.title4}>
                      {/* {item?.professional_Info?.cFees} */}
                      {'400'}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View
                  activeOpacity={0.7}
                  style={[
                    style3.btn2,
                    status
                      ? (darkMode.borderColorPrimary,
                        darkMode.transparentBackgroundColorPrimary)
                      : lightMode.borderColorPrimary,
                    lightMode.transparentBackgroundColorPrimary,
                  ]}>
                  <View style={style3.container11}>
                    <Icon
                      name="video"
                      type="font-awesome-5"
                      size={widthToDp(4)}
                      color={
                        status
                          ? darkMode.tintColors.tintColor
                          : lightMode.tintColors.tintColor
                      }
                    />
                    <Text
                      style={[
                        style3.title3,
                        status ? darkMode.textColor : lightMode.textColor,
                      ]}>
                      Video Consultation
                    </Text>
                  </View>
                  <View style={style3.container11}>
                    <Icon
                      name="rupee-sign"
                      type="font-awesome-5"
                      size={widthToDp(4)}
                      color={
                        status
                          ? darkMode.tintColors.tintColor
                          : lightMode.tintColors.tintColor
                      }
                    />
                    <Text
                      style={[
                        style3.title3,
                        status ? darkMode.textColor : lightMode.textColor,
                      ]}>
                      {/* {item?.professional_Info?.cFees} */}
                      {'600'}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        style3.container1,
        status
          ? darkMode.screenBackgroundColors
          : lightMode.screenBackgroundColors,
      ]}>
      <FlatList
        contentContainerStyle={style3.container2}
        data={dummData}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />

      <SortAndFilterBtnComponent
        sortingModalStatus={props.sortingModalStatus}
        setsortingModalStatus={props.setsortingModalStatus}
      />

      <SortingModal
        sortingModalStatus={props.sortingModalStatus}
        setsortingModalStatus={props.setsortingModalStatus}
      />
    </View>
  );
};

export {SortingModal, ListOfDoctorsComponent, SortAndFilterBtnComponent};
