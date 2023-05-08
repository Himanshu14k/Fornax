import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import {useSelector} from 'react-redux';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {styles1, styles2, styles3} from './style';

const PaymentDetailScreen = props => {
  const status = useSelector(state => state.themeR.status);
  const [monthsListModalStatus, setmonthsListModalStatus] = useState(false);
  const [yearsListModalStatus, setyearsListModalStatus] = useState(false);
  const [paymentDetailModalStatus, setpaymentDetailModalStatus] =
    useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader navigation={props.navigation} />
      <PaymentListComponent
        monthsListModalStatus={monthsListModalStatus}
        setmonthsListModalStatus={setmonthsListModalStatus}
        yearsListModalStatus={yearsListModalStatus}
        setyearsListModalStatus={setyearsListModalStatus}
        paymentDetailModalStatus={paymentDetailModalStatus}
        setpaymentDetailModalStatus={setpaymentDetailModalStatus}
      />
      <MonthsListModal
        monthsListModalStatus={monthsListModalStatus}
        setmonthsListModalStatus={setmonthsListModalStatus}
      />
      <YearListModal
        yearsListModalStatus={yearsListModalStatus}
        setyearsListModalStatus={setyearsListModalStatus}
      />
      <PaymentDetailModal
        paymentDetailModalStatus={paymentDetailModalStatus}
        setpaymentDetailModalStatus={setpaymentDetailModalStatus}
      />
    </SafeAreaView>
  );
};

const monthData = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const MonthsListModal = props => {
  const status = useSelector(state => state.themeR.status);
  const [selectedMonth, setselectedMonth] = useState('');

  const onModalClose = () => {
    setselectedMonth('');
    props.setmonthsListModalStatus(!props.monthsListModalStatus);
  };

  const submitSelection = () => {
    props.setmonthsListModalStatus(!props.monthsListModalStatus);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.monthsListModalStatus}
      onRequestClose={() => onModalClose()}>
      <View style={styles1.container1}>
        <View
          style={[
            styles1.container2,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}>
          <View
            style={[
              styles1.container3,
              {
                borderBottomColor: status
                  ? lightMode.screenBackgroundColors.backgroundColor
                  : darkMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <View style={styles1.container4}>
              <TouchableOpacity
                style={styles1.btn1}
                onPress={() => onModalClose()}>
                <Icon
                  type="ionicon"
                  name="close"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles1.title1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Choose Month
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles1.btn1}
              onPress={() => setselectedMonth('')}>
              <Text style={styles1.title2}>Clear</Text>
            </TouchableOpacity>
          </View>
          <View style={styles1.container5}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles1.container6}>
              {monthData.map((month, id) => (
                <TouchableOpacity
                  key={id}
                  activeOpacity={0.7}
                  style={styles1.container7}
                  onPress={() => setselectedMonth(month)}>
                  <Text
                    style={[
                      styles1.title3,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {month}-2021
                  </Text>
                  {selectedMonth === month ? (
                    <Icon
                      type="feather"
                      name="check-square"
                      size={widthToDp(5)}
                      color="#00d9ff"
                    />
                  ) : (
                    <Icon
                      type="feather"
                      name="square"
                      size={widthToDp(5)}
                      color={
                        status
                          ? darkMode.tintColors.tintColor
                          : lightMode.tintColors.tintColor
                      }
                    />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
            {selectedMonth.length > 0 ? (
              <TouchableOpacity
                style={[
                  styles1.btn3,
                  {
                    backgroundColor: '#00d9ff',
                  },
                ]}
                onPress={() => submitSelection()}>
                <Text style={styles1.title3}>Apply</Text>
              </TouchableOpacity>
            ) : (
              <View
                style={[
                  styles1.btn3,
                  status
                    ? darkMode.screenBackgroundColors
                    : lightMode.screenBackgroundColors,
                ]}>
                <Text style={styles1.title4}>Apply</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const yearData = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

const YearListModal = props => {
  const status = useSelector(state => state.themeR.status);
  const [selectedYears, setselectedYears] = useState(null);

  const onModalClose = () => {
    setselectedYears(null);
    props.setyearsListModalStatus(!props.yearsListModalStatus);
  };

  const submitSelection = () => {
    props.setyearsListModalStatus(!props.yearsListModalStatus);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.yearsListModalStatus}
      onRequestClose={() => onModalClose()}>
      <View style={styles1.container1}>
        <View
          style={[
            styles1.container2,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}>
          <View
            style={[
              styles1.container3,
              {
                borderBottomColor: status
                  ? lightMode.screenBackgroundColors.backgroundColor
                  : darkMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <View style={styles1.container4}>
              <TouchableOpacity
                style={styles1.btn1}
                onPress={() => onModalClose()}>
                <Icon
                  type="ionicon"
                  name="close"
                  color={
                    status
                      ? darkMode.tintColors.tintColor
                      : lightMode.tintColors.tintColor
                  }
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles1.title1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Choose Month
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles1.btn1}
              onPress={() => setselectedYears(null)}>
              <Text style={styles1.title2}>Clear</Text>
            </TouchableOpacity>
          </View>
          <View style={styles1.container5}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles1.container6}>
              {yearData.map((year, id) => (
                <TouchableOpacity
                  key={id}
                  activeOpacity={0.7}
                  style={styles1.container7}
                  onPress={() => setselectedYears(year)}>
                  <Text
                    style={[
                      styles1.title3,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {year}
                  </Text>
                  {selectedYears === year ? (
                    <Icon
                      type="feather"
                      name="check-square"
                      size={widthToDp(5)}
                      color="#00d9ff"
                    />
                  ) : (
                    <Icon
                      type="feather"
                      name="square"
                      size={widthToDp(5)}
                      color={
                        status
                          ? darkMode.tintColors.tintColor
                          : lightMode.tintColors.tintColor
                      }
                    />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
            {selectedYears !== null ? (
              <TouchableOpacity
                style={[
                  styles1.btn3,
                  {
                    backgroundColor: '#00d9ff',
                  },
                ]}
                onPress={() => submitSelection()}>
                <Text style={styles1.title3}>Apply</Text>
              </TouchableOpacity>
            ) : (
              <View
                style={[
                  styles1.btn3,
                  status
                    ? darkMode.screenBackgroundColors
                    : lightMode.screenBackgroundColors,
                ]}>
                <Text style={styles1.title4}>Apply</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const PaymentDetailModal = props => {
  const status = useSelector(state => state.themeR.status);
  const onModalClose = () => {
    props.setpaymentDetailModalStatus(!props.paymentDetailModalStatus);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.paymentDetailModalStatus}
      onRequestClose={() => onModalClose()}>
      <View style={styles3.container1}>
        <View
          style={[
            styles3.container2,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}>
          <Text
            style={[
              styles3.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Transaction ID
          </Text>
          <Text
            style={[
              styles3.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            FZ82784237827874271
          </Text>
        </View>
        <View
          style={[
            styles3.container2,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}>
          <Text
            style={[
              styles3.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Received from
          </Text>
          <View style={styles3.container3}>
            <View style={styles3.container4}>
              <Image style={styles3.image1} />
              <View style={styles3.container5}>
                <Text
                  style={[
                    styles3.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Rishikesh Raju Dhoot
                </Text>
                <Text
                  style={[
                    styles3.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  rishikesh.r.dhoot@oksbi
                </Text>
              </View>
            </View>
            <Text
              style={[
                styles3.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              700
            </Text>
          </View>
        </View>
        <View
          style={[
            styles3.container2,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}>
          <Text
            style={[
              styles3.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Credited to
          </Text>
          <View style={styles3.container3}>
            <View style={styles3.container4}>
              <Image style={styles3.image2} />
              <View style={styles3.container5}>
                <Text
                  style={[
                    styles3.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  **********4595
                </Text>
                <Text
                  style={[
                    styles3.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  FZ:1243764398274
                </Text>
              </View>
            </View>
            <Text
              style={[
                styles3.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              700
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles3.btn1} onPress={() => onModalClose()}>
          <Icon type="ionicon" name="close" size={widthToDp(10)} color="#fff" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const paymentsData = [
  {
    id: 1,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 2,
    name: 'Himasnhu Kumar Jha',
    amount: 580,
  },
  {
    id: 3,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 4,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 5,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 6,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 7,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 8,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 9,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 10,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 11,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 12,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 13,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 14,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 15,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 16,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 17,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 18,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 19,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 20,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 21,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 22,
    name: 'Himasnhu Kumar Jha',
    amount: 780,
  },
  {
    id: 23,
    name: 'Himasnhu Kumar Jha',
    amount: 1780,
  },
];

const PaymentListComponent = props => {
  const status = useSelector(state => state.themeR.status);
  return (
    <View
      style={[
        styles2.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={styles2.container2}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            props.setmonthsListModalStatus(!props.monthsListModalStatus)
          }
          style={[
            styles2.btn1,
            {
              borderColor: status
                ? lightMode.screenBackgroundColors.backgroundColor
                : darkMode.screenBackgroundColors.backgroundColor,
            },
          ]}>
          <Text
            style={[
              styles2.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Month
          </Text>
          <Icon
            type="ionicon"
            name="caret-down"
            size={widthToDp(4)}
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            props.setyearsListModalStatus(!props.yearsListModalStatus)
          }
          style={[
            styles2.btn2,
            {
              borderColor: status
                ? lightMode.screenBackgroundColors.backgroundColor
                : darkMode.screenBackgroundColors.backgroundColor,
            },
          ]}>
          <Text
            style={[
              styles2.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Year
          </Text>
          <Icon
            type="ionicon"
            name="caret-down"
            size={widthToDp(4)}
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles2.container3}>
        <FlatList
          style={styles2.container4}
          data={paymentsData}
          renderItem={(payment, id) => (
            <TouchableOpacity
              key={id}
              activeOpacity={0.7}
              style={styles2.container5}
              onPress={() =>
                props.setpaymentDetailModalStatus(
                  !props.paymentDetailModalStatus,
                )
              }>
              <View style={styles2.container6}>
                <View style={styles2.container7}>
                  <Text
                    style={[
                      styles2.title2,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    Received from
                  </Text>
                  <Text
                    style={[
                      styles2.title3,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {payment.item.name}
                  </Text>
                </View>
                <Text
                  style={[
                    styles2.title4,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {payment.item.amount}
                </Text>
              </View>
              <View style={styles2.container6}>
                <Text
                  style={[
                    styles2.title5,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  5 days ago
                </Text>
                <View style={styles2.container9}>
                  <Text
                    style={[
                      styles2.title6,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    Credited to
                  </Text>
                  <Image
                    source={require('../../../Assets/Images/Hospitals.jpeg')}
                    style={styles2.image1}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={[
                styles2.seprator,
                status
                  ? darkMode.screenBackgroundColors
                  : lightMode.screenBackgroundColors,
              ]}
            />
          )}
        />
      </View>
    </View>
  );
};

export default PaymentDetailScreen;
