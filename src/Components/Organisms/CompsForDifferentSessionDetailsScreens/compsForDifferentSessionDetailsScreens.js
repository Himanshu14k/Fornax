import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import {
  styles2,
  styles1,
  styles3,
  styles4,
  styles5,
  style6,
  styles7,
  styles8,
} from './style';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';
import {darkMode, lightMode} from '../../../Utils/Colors';
import CustomTextInput from '../../Atoms/TextInput/customTextInput';
import {DropdownMenuComponent} from '../../Molecules/DropdownMenu/DropDownMenuComponent';
import {ViewPicModal} from '../../Molecules/ViewPic/viewPicModal';

const PrescriptionComponent = () => {
  const status = useSelector(state => state.themeR.status);
  return (
    <View
      style={[
        styles2.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <Text
        style={[
          styles2.title1,
          status ? darkMode.textColor : lightMode.textColor,
        ]}>
        Prescription
      </Text>
      <View
        style={[
          styles2.container2,
          status
            ? darkMode.screenBackgroundColors
            : lightMode.screenBackgroundColors,
        ]}>
        <Text
          style={[
            styles2.title2,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          This information is used to create The Pantone Color of the Year and
          the Pantone Fashion Color Report with the top fashion colors for the
          year:
        </Text>
      </View>
      <View style={styles2.container3}>
        <TouchableOpacity activeOpacity={0.6} style={styles2.btn1}>
          <Icon
            type="feather"
            name="download"
            size={widthToDp(5)}
            color={'#00d9ff'}
          />
          <Text
            style={[
              styles2.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Download Prescription
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileSectionComponent2 = props => {
  const status = useSelector(state => state.themeR.status);

  return (
    <View
      style={[
        styles1.container,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={styles1.container1}>
        <View style={styles1.container2}>
          <Image
            source={{uri: props?.data?.profilePic}}
            style={styles1.image1}
          />
        </View>
        <View style={styles1.container3}>
          <View style={styles1.container4}>
            <Text
              numberOfLines={1}
              style={[
                styles1.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.name}
            </Text>
          </View>
          <View style={styles1.container5}>
            <Text
              numberOfLines={2}
              style={[
                styles1.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.role}
            </Text>
          </View>
        </View>
      </View>
      {props?.noHistory && (
        <View style={styles1.container6}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles1.btn1,
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
                styles1.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Call
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles1.btn1,
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
                styles1.title3,
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

const ServiceOverviewComponent = props => {
  const status = useSelector(state => state.themeR.status);
  return (
    <View
      style={[
        styles3.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={styles3.container2}>
        <Text
          style={[
            styles3.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          On-Going Session Details
        </Text>
        {props.noHistory && (
          <TouchableOpacity
            onPress={() => props.onChangeEditSessionModalStatus(true)}
            style={[
              styles3.btn1,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Icon
              type="material-community"
              name="pencil"
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
              size={widthToDp(5.5)}
            />
            <Text
              style={[
                styles3.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}></Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={[
          styles3.container,
          {
            borderColor: status
              ? darkMode.screenBackgroundColors.backgroundColor
              : lightMode.screenBackgroundColors.backgroundColor,
          },
        ]}>
        <View style={styles3.container3}>
          <View style={styles3.container4}>
            <Text
              numberOfLines={1}
              style={[
                styles3.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Total Session
            </Text>
          </View>
          <View style={styles3.container5}>
            <Text
              numberOfLines={1}
              style={[
                styles3.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.total_session} Session
            </Text>
          </View>
        </View>
        <View style={styles3.container3}>
          <View style={styles3.container4}>
            <Text
              numberOfLines={1}
              style={[
                styles3.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Visit Duration
            </Text>
          </View>
          <View style={styles3.container5}>
            <Text
              numberOfLines={1}
              style={[
                styles3.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {
                props?.data?.workingHr_duration[
                  props.data?.workingHr_duration.length - 1
                ]?.title
              }{' '}
              Hours
            </Text>
          </View>
        </View>
        <View style={styles3.container3}>
          <View style={styles3.container4}>
            <Text
              numberOfLines={1}
              style={[
                styles3.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Visiting Hours
            </Text>
          </View>
          <View style={styles3.container5}>
            <Text
              numberOfLines={1}
              style={[
                styles3.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.workingHr_from[
                props?.data?.workingHr_from.length - 1
              ]?.title +
                ' to ' +
                props?.data?.workingHr_till[
                  props?.data?.workingHr_till.length - 1
                ]?.title}
            </Text>
          </View>
        </View>
        <View style={styles3.container3}>
          <View style={styles3.container4}>
            <Text
              numberOfLines={1}
              style={[
                styles3.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Visiting Fees/h
            </Text>
          </View>
          <View style={styles3.container5}>
            <Text
              numberOfLines={1}
              style={[
                styles3.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.fees[props?.data?.fees.length - 1]?.title}
            </Text>
          </View>
        </View>
        <View style={styles3.container3}>
          <View style={styles3.container4}>
            <Text
              numberOfLines={1}
              style={[
                styles3.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Total Amount
            </Text>
          </View>
          <View style={styles3.container5}>
            <Text
              numberOfLines={1}
              style={[
                styles3.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props?.data?.fees[props?.data?.fees.length - 1]?.title *
                props?.data?.workingHr_duration[
                  props?.data?.workingHr_duration.length - 1
                ]?.title *
                props?.data?.total_session}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const HomeVistSessionRecordsComponent = props => {
  const status = useSelector(state => state.themeR.status);
  const [onItemClickId, setonItemClickId] = useState('');

  const onClickSessionCancel = id => {
    Alert.alert(
      'Alert !!',
      'Are you sure you want to cancel this session ?',
      [
        {
          text: 'No',
          onPress: () => props.reset(),
        },
        {
          text: 'Yes',
          onPress: () => {
            props.setcsId(id), props.onChangeModalStatus(true);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const onClickSessionComplete = id => {
    Alert.alert(
      'Alert !!',
      'Is this session completed ?',
      [
        {
          text: 'No',
          onPress: () => props.reset(),
        },
        {
          text: 'Yes',
          onPress: () => props.handleCompleteDS(id),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles4.container1,
        status
          ? darkMode.screenBackgroundColors
          : lightMode.screenBackgroundColors,
      ]}>
      <View
        style={[
          styles4.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            styles4.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          General Overview
        </Text>
        <View style={styles4.container3}>
          <Text
            style={[
              styles4.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Total Session
          </Text>
          <Text
            style={[
              styles4.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {props?.data1?.total_session % 7 !== 0
              ? Math.trunc(props?.data1?.total_session / 7) +
                ' to ' +
                (Math.trunc(props?.data1?.total_session / 7) + 1) +
                ' Weeks'
              : props?.data1?.total_session / 7 + ' Weeks'}
          </Text>
        </View>
        <View style={styles4.container3}>
          <Text
            style={[
              styles4.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Completed Session
          </Text>
          <Text
            style={[
              styles4.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {props?.data1?.completed_sessions} Days
          </Text>
        </View>
        <View style={styles4.container3}>
          <Text
            style={[
              styles4.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Remaining Session
          </Text>
          <Text
            style={[
              styles4.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {props?.data1?.total_session - props?.data1?.completed_sessions}{' '}
            Days
          </Text>
        </View>
        <View style={styles4.container3}>
          <Text
            style={[
              styles4.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Canceled Session
          </Text>
          <Text
            style={[
              styles4.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {props?.data1?.canceled_sessions} Days
          </Text>
        </View>
        <View style={styles4.container3}>
          <Text
            style={[
              styles4.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Fees Paid
          </Text>
          <Text
            style={[
              styles4.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Rs. {props?.data1?.paid_fees}
          </Text>
        </View>
        <View style={styles4.container3}>
          <Text
            style={[
              styles4.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Fees Remains
          </Text>
          <Text
            style={[
              styles4.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Rs. {props?.data1?.total_fees - props?.data1?.paid_fees}
          </Text>
        </View>
      </View>
      <View style={styles4.container4}>
        {props?.data2?.map((item, id) =>
          item?.status === 'Upcoming' ? (
            <View
              key={id}
              style={[
                styles4.container5,
                status
                  ? darkMode.containerbackgroundColor
                  : lightMode.containerbackgroundColor,
              ]}>
              <TouchableOpacity
                key={id}
                activeOpacity={0.7}
                style={styles4.container6}
                onPress={() =>
                  item?._id === onItemClickId
                    ? setonItemClickId('')
                    : setonItemClickId(item?._id)
                }>
                <Icon
                  type="feather"
                  name="square"
                  size={widthToDp(4)}
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                />
                <View style={styles4.container7}>
                  <Text
                    style={[
                      styles4.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {item.date}
                  </Text>
                </View>
                <View style={styles4.container8}>
                  <Text
                    style={[
                      styles4.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {item?.status}
                  </Text>
                </View>
                <View style={styles4.container9}>
                  <Text style={styles4.title5}>
                    {item?.status === 'Completed' ? props?.data1?.fees : '---'}
                  </Text>
                </View>
              </TouchableOpacity>
              {onItemClickId === item?._id && (
                <View
                  style={[
                    styles4.container10,
                    {
                      borderTopColor: status
                        ? darkMode.borderColorPrimary.borderColor
                        : lightMode.borderColorPrimary.borderColor,
                    },
                  ]}>
                  <TouchableOpacity
                    onPress={() => onClickSessionCancel(onItemClickId)}
                    style={styles4.btn1}
                    activeOpacity={0.6}>
                    <Text style={[styles4.title4, {color: '#ff0000'}]}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={[
                      styles4.seprator,
                      status
                        ? darkMode.screenBackgroundColors
                        : lightMode.screenBackgroundColors,
                    ]}
                  />
                  <TouchableOpacity
                    onPress={() => onClickSessionComplete(onItemClickId)}
                    style={styles4.btn1}
                    activeOpacity={0.6}>
                    <Text style={[styles4.title4, {color: '#00e600'}]}>
                      Completed
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ) : (
            <View
              key={id}
              style={[
                styles4.container5,
                styles4.container6,
                status
                  ? darkMode.containerbackgroundColor
                  : lightMode.containerbackgroundColor,
              ]}>
              {item?.status === 'Completed' ? (
                <Icon
                  type="feather"
                  name="check-square"
                  size={widthToDp(4)}
                  color="#00d9ff"
                />
              ) : (
                <Icon
                  type="feather"
                  name="x-square"
                  size={widthToDp(4)}
                  color="#ff0000"
                />
              )}
              <View style={styles4.container7}>
                <Text
                  style={[
                    styles4.title4,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item.date}
                </Text>
              </View>
              <View style={styles4.container8}>
                <Text
                  style={[
                    styles4.title4,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.status}
                </Text>
              </View>
              <View style={styles4.container9}>
                <Text style={styles4.title5}>
                  {item?.status === 'Completed'
                    ? props?.data1?.fees[props?.data1?.fees.length - 1]?.title
                    : '---'}
                </Text>
              </View>
            </View>
          ),
        )}
      </View>
    </ScrollView>
  );
};

const hoursData = [
  {
    id: 1,
    title: '1 Hours',
    value: 1,
  },
  {
    id: 2,
    title: '2 Hours',
    value: 2,
  },
  {
    id: 3,
    title: '3 Hours',
    value: 3,
  },
  {
    id: 4,
    title: '4 Hours',
    value: 4,
  },
  {
    id: 5,
    title: '5 Hours',
    value: 5,
  },
  {
    id: 6,
    title: '6 Hours',
    value: 6,
  },
  {
    id: 7,
    title: '7 Hours',
    value: 7,
  },
  {
    id: 8,
    title: '8 Hours',
    value: 8,
  },
  {
    id: 9,
    title: '9 Hours',
    value: 9,
  },
  {
    id: 10,
    title: '10 Hours',
    value: 10,
  },
  {
    id: 11,
    title: '11 Hours',
    value: 11,
  },
  {
    id: 12,
    title: '12 Hours',
    value: 12,
  },
  {
    id: 13,
    title: '13 Hours',
    value: 13,
  },
  {
    id: 14,
    title: '14 Hours',
    value: 14,
  },
  {
    id: 15,
    title: '15 Hours',
    value: 15,
  },
  {
    id: 16,
    title: '16 Hours',
    value: 16,
  },
  {
    id: 17,
    title: '17 Hours',
    value: 17,
  },
  {
    id: 18,
    title: '18 Hours',
    value: 18,
  },
  {
    id: 19,
    title: '19 Hours',
    value: 19,
  },
  {
    id: 20,
    title: '20 Hours',
    value: 20,
  },
  {
    id: 21,
    title: '21 Hours',
    value: 21,
  },
  {
    id: 22,
    title: '22 Hours',
    value: 22,
  },
  {
    id: 23,
    title: '23 Hours',
    value: 23,
  },
  {
    id: 24,
    title: '24 Hours',
    value: 24,
  },
];

const EditServiceModal = props => {
  const status = useSelector(state => state.themeR.status);

  const changeHrIntoDD = val => {
    if (val.length == 1) {
      props.setnewSessionHr('0' + val.toString());
    } else {
      props.setnewSessionHr(val);
    }
  };

  const changeMinIntoDD = val => {
    if (val.length == 1) {
      props.setnewSessionMin('0' + val.toString());
    } else {
      props.setnewSessionMin(val);
    }
  };

  const onChangeHr = type => {
    if (type == 1) {
      if (props.newSessionHr == '12') {
        changeHrIntoDD('01');
      } else {
        changeHrIntoDD((parseInt(props.newSessionHr) + 1).toString());
      }
    } else {
      if (props.newSessionHr == '01') {
        props.setnewSessionHr('12');
      } else {
        // console.log(parseInt(props.newSessionHr) - 1)
        // console
        // console.log('0' + (parseInt(props.newSessionHr) - 1).toString());
        props.setnewSessionHr(
          (parseInt(props.newSessionHr) - 1).length == 2
            ? (parseInt(props.newSessionHr) - 1).toString()
            : '0' + (parseInt(props.newSessionHr) - 1).toString(),
        );
      }
    }
  };

  const onChangeMin = type => {
    if (type == 1) {
      if (props.newSessionMin == '59') {
        onChangeHr(1);
        changeMinIntoDD('00');
      } else {
        changeMinIntoDD((parseInt(props.newSessionMin) + 1).toString());
      }
    } else {
      if (props.newSessionMin == '01') {
        onChangeHr(2);
        changeMinIntoDD('59');
      } else {
        changeMinIntoDD((parseInt(props.newSessionMin) - 1).toString());
      }
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={props.modalStatus}
      onRequestClose={() => props.onchangeModal()}>
      <View style={styles5.container1}>
        <View
          style={[
            styles5.container2,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}>
          <View style={styles5.container3}>
            <Text
              style={[
                styles5.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Edit Session
            </Text>
          </View>
          <View style={styles5.container4}>
            <View style={styles5.container5}>
              <Text
                style={[
                  styles5.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                How Many Sessions
              </Text>
              <View style={styles5.container6}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    styles5.btn1,
                    status
                      ? darkMode.borderColorPrimary
                      : lightMode.borderColorPrimary,
                  ]}
                  onPress={() =>
                    props.setmodifiedSessions(
                      (parseInt(props.modifiedSessions) + 1).toString(),
                    )
                  }>
                  <Icon name="plus" color={'#00d9ff'} type="feather" />
                </TouchableOpacity>
                <CustomTextInput
                  value={props.modifiedSessions}
                  onChangeText={props.setmodifiedSessions}
                  numberOfLines={1}
                  editable
                  maxLength={3}
                  keyboardType="numeric"
                  placeholder={'0'}
                  placeholderTextColor={
                    status
                      ? darkMode.textColor.color
                      : lightMode.textColor.color
                  }
                  inputContainerStyle={[
                    styles5.container7,
                    {width: widthToDp(20), paddingHorizontal: widthToDp(7)},
                  ]}
                  inputStyle={[
                    styles5.inputStyle1,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    styles5.btn1,
                    status
                      ? darkMode.borderColorPrimary
                      : lightMode.borderColorPrimary,
                  ]}
                  onPress={() =>
                    props.modifiedSessions != '0' &&
                    props.setmodifiedSessions(
                      (parseInt(props.modifiedSessions) - 1).toString(),
                    )
                  }>
                  <Icon name="minus" color={'#00d9ff'} type="feather" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles5.container5}>
              <Text
                style={[
                  styles5.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Session Time
              </Text>
              <View style={styles5.container8}>
                {props.sameTime == false ? (
                  <View style={styles5.container9}>
                    <View style={styles5.container10}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={[
                          styles5.btn1,
                          status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                        ]}
                        onPress={() => onChangeHr(1)}>
                        <Icon name="plus" color={'#00d9ff'} type="feather" />
                      </TouchableOpacity>
                      <CustomTextInput
                        value={props.newSessionHr}
                        onChangeText={props.setnewSessionHr}
                        numberOfLines={1}
                        editable
                        maxLength={2}
                        keyboardType="numeric"
                        placeholder={'0'}
                        placeholderTextColor={
                          status
                            ? darkMode.textColor.color
                            : lightMode.textColor.color
                        }
                        inputContainerStyle={[
                          styles5.container7,
                          styles5.inputStyle2,
                          {
                            width: widthToDp(15),
                            borderRadius: 10,
                            paddingHorizontal: widthToDp(5),
                          },
                        ]}
                        inputStyle={[
                          styles5.inputStyle1,
                          status ? darkMode.textColor : lightMode.textColor,
                        ]}
                      />
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={[
                          styles5.btn1,
                          status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                        ]}
                        onPress={() => onChangeHr(2)}>
                        <Icon name="minus" color={'#00d9ff'} type="feather" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles5.container11}>
                      <Icon
                        type="entypo"
                        name="dots-two-vertical"
                        color={
                          status
                            ? darkMode.tintColors.tintColor
                            : lightMode.tintColors.tintColor
                        }
                      />
                    </View>
                    <View style={styles5.container10}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={[
                          styles5.btn1,
                          status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                        ]}
                        onPress={() => onChangeMin(1)}>
                        <Icon name="plus" color={'#00d9ff'} type="feather" />
                      </TouchableOpacity>
                      <CustomTextInput
                        value={props.newSessionMin}
                        onChangeText={props.setnewSessionMin}
                        numberOfLines={1}
                        editable
                        maxLength={2}
                        keyboardType="numeric"
                        placeholder={'0'}
                        placeholderTextColor={
                          status
                            ? darkMode.textColor.color
                            : lightMode.textColor.color
                        }
                        inputContainerStyle={[
                          styles5.container7,
                          styles5.inputStyle2,
                          {
                            width: widthToDp(15),
                            borderRadius: 10,
                            paddingHorizontal: widthToDp(5),
                          },
                        ]}
                        inputStyle={[
                          styles5.inputStyle1,
                          status ? darkMode.textColor : lightMode.textColor,
                        ]}
                      />
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={[
                          styles5.btn1,
                          status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                        ]}
                        onPress={() => onChangeMin(2)}>
                        <Icon name="minus" color={'#00d9ff'} type="feather" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <View style={styles5.container9}>
                    <View style={styles5.container10}>
                      <View
                        style={[
                          styles5.btn1,
                          status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                        ]}>
                        <Icon name="plus" color={'#00d9ff'} type="feather" />
                      </View>
                      <View
                        style={[
                          styles5.container7,
                          styles5.inputStyle2,
                          status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                          {width: widthToDp(15)},
                        ]}>
                        <Text
                          style={[
                            status ? darkMode.textColor : lightMode.textColor,
                          ]}>
                          {props.newSessionHr}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles5.btn1,
                          status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                        ]}>
                        <Icon name="minus" color={'#00d9ff'} type="feather" />
                      </View>
                    </View>
                    <View style={styles5.container11}>
                      <Icon
                        type="entypo"
                        name="dots-two-vertical"
                        color={
                          status
                            ? darkMode.tintColors.tintColor
                            : lightMode.tintColors.tintColor
                        }
                      />
                    </View>
                    <View style={styles5.container10}>
                      <View
                        style={[
                          styles5.btn1,
                          status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                        ]}>
                        <Icon name="plus" color={'#00d9ff'} type="feather" />
                      </View>
                      <View
                        style={[
                          styles5.container7,
                          styles5.inputStyle2,
                          status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                          {width: widthToDp(15)},
                        ]}>
                        <Text
                          style={[
                            status ? darkMode.textColor : lightMode.textColor,
                          ]}>
                          {props.newSessionHr}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles5.btn1,
                          status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                        ]}>
                        <Icon name="minus" color={'#00d9ff'} type="feather" />
                      </View>
                    </View>
                  </View>
                )}
                <View style={styles5.container12}>
                  <View style={styles5.container13}>
                    <Text
                      style={[
                        styles5.title3,
                        status ? darkMode.textColor : lightMode.textColor,
                      ]}>
                      Same Time
                    </Text>
                    <TouchableOpacity
                      onPress={() => props.setsameTime(!props.sameTime)}>
                      {props.sameTime == false ? (
                        <Icon
                          name="toggle-switch-off-outline"
                          type="material-community"
                          color={'#00d9ff'}
                          size={widthToDp(10)}
                        />
                      ) : (
                        <Icon
                          name="toggle-switch"
                          type="material-community"
                          color={'#00d9ff'}
                          size={widthToDp(10)}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  {props.sameTime == false ? (
                    <View style={styles5.container14}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => props.setnewSessionTimeType('AM')}
                        style={[
                          styles5.btn2,
                          props.newSessionTimeType == 'AM'
                            ? {borderColor: '#1aff1a'}
                            : status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                        ]}>
                        <Text
                          style={[
                            styles5.title2,
                            status ? darkMode.textColor : lightMode.textColor,
                          ]}>
                          AM
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => props.setnewSessionTimeType('PM')}
                        style={[
                          styles5.btn2,
                          props.newSessionTimeType == 'PM'
                            ? {borderColor: '#1aff1a'}
                            : status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                        ]}>
                        <Text
                          style={[
                            styles5.title2,
                            status ? darkMode.textColor : lightMode.textColor,
                          ]}>
                          PM
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={styles5.container14}>
                      <View
                        style={[
                          styles5.btn2,
                          status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                        ]}>
                        <Text
                          style={[
                            styles5.title2,
                            status ? darkMode.textColor : lightMode.textColor,
                          ]}>
                          AM
                        </Text>
                      </View>
                      <View
                        style={[
                          styles5.btn2,
                          status
                            ? darkMode.borderColorPrimary
                            : lightMode.borderColorPrimary,
                        ]}>
                        <Text
                          style={[
                            styles5.title2,
                            status ? darkMode.textColor : lightMode.textColor,
                          ]}>
                          PM
                        </Text>
                      </View>
                    </View>
                  )}
                  <View style={styles5.container15}>
                    <Text
                      style={[
                        styles5.title5,
                        status ? darkMode.textColor : lightMode.textColor,
                      ]}>
                      Service in Hours
                    </Text>
                    <DropdownMenuComponent
                      style={[
                        styles5.container16,
                        status
                          ? darkMode.containerbackgroundColor
                          : lightMode.containerbackgroundColor,
                        status
                          ? darkMode.borderColorPrimary
                          : lightMode.borderColorPrimary,
                      ]}
                      data={hoursData}
                      value={props.hours}
                      setValue={props.setHours}
                      labelField="title"
                      valueField="value"
                      placeholder={
                        props.hours?.title === undefined
                          ? 'Select Time'
                          : props.hours.title
                      }
                      maxHeight={widthToDp(50)}
                      placeholderStyle={[
                        styles5.title4,
                        status ? darkMode.textColor : lightMode.textColor,
                      ]}
                      selectedTextStyle={[
                        styles5.title4,
                        status ? darkMode.textColor : lightMode.textColor,
                      ]}
                      rightIconStyle={[
                        styles5.rightIconStyle,
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
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles5.container18}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.onchangeModal()}
            style={[
              styles5.btn,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
            ]}>
            <Text
              style={[
                {fontSize: adjustedFontSize(12), fontWeight: '500'},
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.handleSessionModification()}
            style={styles5.btnn}>
            <Text
              style={{
                color: 'black',
                fontSize: adjustedFontSize(12),
                fontWeight: '500',
              }}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const dummyData = [
  {
    id: 1,
    title: 'Patient Details',
  },
  {
    id: 2,
    title: 'Appointment Details',
  },
  {
    id: 3,
    title: 'Prescription',
  },
  {
    id: 4,
    title: 'Session Details',
  },
];

const ReviewAppoinmentComponent = props => {
  const status = useSelector(state => state.themeR.status);
  const [selectedItem, setSelectedItem] = useState(1);
  const [viewPicModalStatus, setviewPicModalStatus] = useState(false);
  const [modalImage, setmodalImage] = useState(null);

  const onPicClick = img => {
    setmodalImage(img);
    setviewPicModalStatus(!viewPicModalStatus);
  };

  return (
    <View
      style={[
        style6.container,
        props.isDark
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <ScrollView
        horizontal
        style={style6.container1}
        showsHorizontalScrollIndicator={false}>
        {dummyData.map(item =>
          item.title === 'Prescription' || item.title === 'Session Details' ? (
            props.extraMenu && (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item.id}
                style={[
                  style6.header,
                  status
                    ? darkMode.borderColorPrimary
                    : lightMode.borderColorPrimary,
                  selectedItem === item.id && {backgroundColor: '#00d9fff2'},
                ]}
                onPress={() => setSelectedItem(item.id)}>
                <Text
                  style={[
                    style6.title,
                    selectedItem !== item.id && status
                      ? darkMode.textColor
                      : lightMode.textColor,
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item.id}
              style={[
                style6.header,
                status
                  ? darkMode.borderColorPrimary
                  : lightMode.borderColorPrimary,
                selectedItem === item.id && {backgroundColor: '#00d9fff2'},
              ]}
              onPress={() => setSelectedItem(item.id)}>
              <Text
                style={[
                  style6.title,
                  selectedItem !== item.id && status
                    ? darkMode.textColor
                    : lightMode.textColor,
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ),
        )}
      </ScrollView>
      {selectedItem === 1 ? (
        <View style={style6.container2}>
          <View style={style6.container3}>
            <View style={style6.container4}>
              <Text
                numberOfLines={1}
                style={[
                  style6.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Name :
              </Text>
            </View>
            <View style={style6.container5}>
              <Text
                style={[
                  style6.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {props?.data?.patientInfo?.name}
              </Text>
            </View>
          </View>
          <View style={style6.container3}>
            <View style={style6.container4}>
              <Text
                numberOfLines={1}
                style={[
                  style6.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Gender :
              </Text>
            </View>
            <View style={style6.container5}>
              <Text
                style={[
                  style6.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {props?.data?.patientInfo?.gender}
              </Text>
            </View>
          </View>
          <View style={style6.container3}>
            <View style={style6.container4}>
              <Text
                numberOfLines={1}
                style={[
                  style6.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Age :
              </Text>
            </View>
            <View style={style6.container5}>
              <Text
                style={[
                  style6.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {props?.data?.patientInfo?.age}
              </Text>
            </View>
          </View>
          <View style={style6.container3}>
            <View style={style6.container4}>
              <Text
                numberOfLines={1}
                style={[
                  style6.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Phone Number :
              </Text>
            </View>
            <View style={style6.container5}>
              <Text
                style={[
                  style6.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {props?.data?.patientInfo?.phoneNumber}
              </Text>
            </View>
          </View>
          <View style={style6.container6}>
            <View style={style6.container7}>
              <Text
                numberOfLines={1}
                style={[
                  style6.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Current Issues
              </Text>
            </View>
            <View style={style6.container8}>
              {props?.data?.currentIssue?.issues?.map((item, id) => (
                <View key={id} style={style6.container9}>
                  <Text
                    style={[
                      style6.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    --> {item?.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={style6.container3}>
            <View style={style6.container4}>
              <Text
                numberOfLines={1}
                style={[
                  style6.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient issue description :
              </Text>
            </View>
            <View style={style6.container5}>
              <Text
                style={[
                  style6.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {props?.data?.currentIssue?.issuesDescription}
              </Text>
            </View>
          </View>
        </View>
      ) : selectedItem === 2 ? (
        <View style={style6.container2}>
          <View style={style6.container3}>
            <View style={style6.container4}>
              <Text
                numberOfLines={1}
                style={[
                  style6.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Appoinment Date :
              </Text>
            </View>
            <View style={style6.container5}>
              <Text
                style={[
                  style6.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {props?.data?.appointmentInfo?.date}
              </Text>
            </View>
          </View>
          <View style={style6.container3}>
            <View style={style6.container4}>
              <Text
                numberOfLines={1}
                style={[
                  style6.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Appoinment Time :
              </Text>
            </View>
            <View style={style6.container5}>
              <Text
                style={[
                  style6.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {props?.data?.appointmentInfo?.time}
              </Text>
            </View>
          </View>
          <View style={style6.container3}>
            <View style={style6.container4}>
              <Text
                numberOfLines={1}
                style={[
                  style6.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Appoinment Time :
              </Text>
            </View>
            <View style={style6.container5}>
              <Text
                style={[
                  style6.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {props?.data?.appointmentInfo?.mode}
              </Text>
            </View>
          </View>
        </View>
      ) : selectedItem === 3 ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onPicClick(props.data?.prescription)}
          style={style6.container10}>
          <Image
            style={style6.image}
            source={{uri: props.data?.prescription}}
          />
        </TouchableOpacity>
      ) : (
        selectedItem === 4 && (
          <View style={style6.container2}>
            <View style={style6.container3}>
              <View style={style6.container4}>
                <Text
                  numberOfLines={1}
                  style={[
                    style6.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Total Session :
                </Text>
              </View>
              <View style={style6.container5}>
                <Text
                  style={[
                    style6.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {props?.data?.sessionInfo?.total_session} Session
                </Text>
              </View>
            </View>
            <View style={style6.container3}>
              <View style={style6.container4}>
                <Text
                  numberOfLines={1}
                  style={[
                    style6.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Session Duration :
                </Text>
              </View>
              <View style={style6.container5}>
                <Text
                  style={[
                    style6.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {props?.data?.sessionInfo?.duration} Minutes
                </Text>
              </View>
            </View>
            <View style={style6.container3}>
              <View style={style6.container4}>
                <Text
                  numberOfLines={1}
                  style={[
                    style6.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Session Timing :
                </Text>
              </View>
              <View style={style6.container5}>
                <Text
                  style={[
                    style6.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {props?.data?.sessionInfo?.timing}
                </Text>
              </View>
            </View>
            <View style={style6.container3}>
              <View style={style6.container4}>
                <Text
                  numberOfLines={1}
                  style={[
                    style6.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Session fees :
                </Text>
              </View>
              <View style={style6.container5}>
                <Text
                  style={[
                    style6.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Rs. {props?.data?.sessionInfo?.fees}
                </Text>
              </View>
            </View>
            <View style={style6.container3}>
              <View style={style6.container4}>
                <Text
                  numberOfLines={1}
                  style={[
                    style6.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Total Amount :
                </Text>
              </View>
              <View style={style6.container5}>
                <Text
                  style={[
                    style6.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Rs. {props?.data?.sessionInfo?.total_fees}
                </Text>
              </View>
            </View>
          </View>
        )
      )}
      <ViewPicModal
        image={modalImage}
        modalStatus={viewPicModalStatus}
        setModalStatus={setviewPicModalStatus}
      />
    </View>
  );
};

const PaymentDetailsComponent = props => {
  const status = useSelector(state => state.themeR.status);
  return (
    <View
      style={[
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
        styles7.container1,
      ]}>
      <View
        style={[
          styles7.container2,
          {
            borderBottomColor: status
              ? darkMode.screenBackgroundColors.backgroundColor
              : lightMode.screenBackgroundColors.backgroundColor,
          },
        ]}>
        <Text
          style={[
            styles7.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Payment Details
        </Text>
        <View style={styles7.container3}>
          <Text
            style={[
              styles7.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Consultation Fee
          </Text>
          <Text
            style={[
              styles7.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            ₹ 400
          </Text>
        </View>
        <View style={styles7.container3}>
          <Text
            style={[
              styles7.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            HealthCash
          </Text>
          <Text style={[styles7.title2, {color: '#00ff00'}]}>- ₹ 40</Text>
        </View>
      </View>
      <View style={styles7.container4}>
        <Text
          style={[
            styles7.title4,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Paid Amount
        </Text>
        <Text
          style={[
            styles7.title4,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          ₹ 360
        </Text>
      </View>
    </View>
  );
};

const TwoBtnContentComponent = ({
  btnTitle1 = 'Title1',
  btnTitle2 = 'Title2',
  btn1IconType = 'ionicon',
  btn2IconType = 'ionicon',
  btn1IconName = 'close',
  btn2IconName = 'close',
  extraBtn = false,
  extraBtnTitle = 'extraBtn',
  extraBtnIconType = 'ionicon',
  extraBtnIconName = 'close',
  btn1Color = '#fff',
  btn2Color = '#fff',
  extraBtnColor = '#fff',
  onExtraBtnPress = () => {},
  onBtn1Press = () => {},
  onBtn2Press = () => {},
}) => {
  const status = useSelector(state => state.themeR.status);
  return (
    <View
      style={[
        styles8.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      {extraBtn && (
        <View
          activeOpacity={0.7}
          style={[
            styles8.container2,
            {
              borderBottomColor: status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor,
            },
          ]}
          onPress={() => onExtraBtnPress()}>
          <View style={styles8.container3}>
            <Icon
              type={extraBtnIconType}
              name={extraBtnIconName}
              size={widthToDp(5)}
              color={extraBtnColor}
            />
            <Text
              numberOfLines={1}
              style={[styles8.title1, {color: extraBtnColor}]}>
              {extraBtnTitle}
            </Text>
          </View>
          <TouchableOpacity style={styles8.btn1}>
            <Icon
              type="material-community"
              name="pencil"
              size={widthToDp(5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles8.container4}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles8.btn2,
            {
              borderRightColor: status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor,
            },
          ]}
          onPress={() => onBtn1Press()}>
          <Icon
            type={btn1IconType}
            name={btn1IconName}
            size={widthToDp(5)}
            color={btn1Color}
          />
          <Text numberOfLines={1} style={[styles8.title1, {color: btn1Color}]}>
            {btnTitle1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles8.btn3,
            {
              borderLeftColor: status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor,
            },
          ]}
          onPress={() => onBtn2Press()}>
          <Icon
            type={btn2IconType}
            name={btn2IconName}
            size={widthToDp(5)}
            color={btn2Color}
          />
          <Text numberOfLines={1} style={[styles8.title1, {color: btn2Color}]}>
            {btnTitle2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {
  PrescriptionComponent,
  ProfileSectionComponent2,
  ServiceOverviewComponent,
  HomeVistSessionRecordsComponent,
  EditServiceModal,
  ReviewAppoinmentComponent,
  PaymentDetailsComponent,
  TwoBtnContentComponent,
  hoursData,
};
