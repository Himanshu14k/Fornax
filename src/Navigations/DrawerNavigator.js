import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStack} from './StackNavigator';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {darkMode, lightMode} from '../Utils/Colors';
import {adjustedFontSize, widthToDp} from '../Utils/dimensionsInPixel';
import AuthenticationStack from './AuthStatckNavigator';

const drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  return (
    <drawer.Navigator
      initialRouteName={props?.data}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <drawer.Screen
        name="auth"
        component={AuthenticationStack}
        options={{headerShown: false}}
      />
      <drawer.Screen
        name="home"
        component={MainStack}
        options={{headerShown: false}}
      />
    </drawer.Navigator>
  );
};

const drawerItemData = [
  {
    title: 'All Appoinments',
    iconType: 'ionicon',
    iconName: 'close',
  },
  {
    title: 'Doctor Appoinments',
    iconType: 'ionicon',
    iconName: 'close',
  },
  {
    title: 'Therapist Appoinments',
    iconType: 'ionicon',
    iconName: 'close',
  },
  {
    title: 'Gym Trainer Session',
    iconType: 'ionicon',
    iconName: 'close',
  },
  {
    title: 'Yoga Trainer Session',
    iconType: 'ionicon',
    iconName: 'close',
  },
  {
    title: 'Settings',
    iconType: 'ionicon',
    iconName: 'close',
  },
];

const CustomDrawerContent = props => {
  const status = useSelector(state => state.otherReducer.status);
  const OnDrawerItemClick = item => {
    if (item === 'All Appoinments') {
      props.navigation.navigate('allAppoinments');
    } else if (item === 'Doctor Appoinments') {
      props.navigation.navigate('currentAndPastDoctorAppoinment');
    } else if (item === 'Therapist Appoinments') {
      props.navigation.navigate('currentAndPastTherapistAppoinment');
    } else if (item === 'Gym Trainer Session') {
      props.navigation.navigate('fitnessCareSessionManagement');
    }
  };

  return (
    <View
      style={[
        styles.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <ScrollView contentContainerStyle={styles.container2}>
        <TouchableOpacity activeOpacity={0.7} style={styles.container3}>
          <View
            style={[
              styles.container4,
              {
                borderColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <Image
              style={styles.image1}
              source={require('../Assets/Images/Himanshu.jpeg')}
            />
          </View>
          <View style={styles.container5}>
            <Text
              style={[
                styles.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Himanshu Kumar Jha
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.container6}>
          {drawerItemData.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              style={styles.container7}
              onPress={() => OnDrawerItemClick(item.title)}>
              <Icon
                type={item?.iconType}
                name={item?.iconName}
                size={widthToDp(6)}
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
              <View style={styles.container8}>
                <Text
                  style={[
                    styles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container9}>
          <TouchableOpacity activeOpacity={0.7} style={styles.container7}>
            <Icon
              type={'material'}
              name={'logout'}
              size={widthToDp(6)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
            <View style={styles.container8}>
              <Text
                style={[
                  styles.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Sign out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flexGrow: 1,
    paddingTop: widthToDp(10),
  },
  container2: {
    flexGrow: 1,
  },
  container3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container4: {
    marginVertical: widthToDp(2),
    borderWidth: widthToDp(1),
    borderRadius: 100,
  },
  image1: {
    backgroundColor: '#00d9ff',
    width: widthToDp(20),
    height: widthToDp(20),
    borderRadius: widthToDp(22) / 2,
  },
  container5: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(2),
  },
  title1: {
    fontSize: adjustedFontSize(16),
    fontWeight: 'bold',
  },
  container6: {
    flex: 1,
    paddingTop: widthToDp(10),
  },
  container7: {
    flexDirection: 'row',
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(5),
    alignItems: 'center',
  },
  container8: {
    paddingLeft: widthToDp(5),
  },
  title2: {
    fontSize: adjustedFontSize(13),
    fontWeight: '600',
  },
  container9: {
    paddingHorizontal: widthToDp(3),
  },
});

export default DrawerNavigator;
