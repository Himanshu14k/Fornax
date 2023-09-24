import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import {Menu, MenuItem} from 'react-native-material-menu';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {darkMode, lightMode} from '../../../Utils/Colors';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {CustomLoading2} from '../../../Components/Molecules/CustomLoadings/customLoading';
import {styles} from './styles';
import { widthToDp } from '../../../Utils/dimensionsInPixel';

const NotificationScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  
  const uId = useSelector(state => state.authenticationReducer.uId);
  const [data, setdata] = useState({});
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});

  const fetchData = async () => {
    try {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.onrender.com/uSR/getAllReqDCSP', {
          params: {
            id: uId,
          },
        })
        .then(response => {
          if (response.data.status === 'success') {
            setloadingStatus({status: 2, msg: 'Completed'});
            setdata(response.data.data);
          } else {
            setloadingStatus({status: 3, msg: 'No Data Found.'});
            SimpleToast.show((message = 'No Data Found!'), (duration = 5000));
          }
        })
        .catch(error => {
          setloadingStatus({status: 3, msg: 'No Data Found.'});
          console.log('Axios error (fetchData)', error);
        });
      // setloadingStatus(3);
    } catch (error) {
      console.log(
        'Uexpected error occured during all requested DiffCaringSP data fetching.',
      );
      console.log('Error is (fetchData): ', error);
      setloadingStatus({status: 3, msg: 'No Data Found.'});
    }
  };

  useEffect(() => {
    fetchData();
    return;
  }, []);

  const onReload = () => {
    fetchData();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader isHome navigation={props.navigation} />
      {loadingStatus.status === 2 ? (
        data?.spInfo !== undefined ? (
          <NotificationsComponent
            data={data?.spInfo}
            navigation={props.navigation}
          />
        ) : (
          <View style={styles.container7}>
            <View
              style={[
                styles.container8,
                status
                  ? darkMode.containerbackgroundColor
                  : lightMode.containerbackgroundColor,
              ]}>
              <Text
                style={[
                  styles.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                No Data Available
              </Text>
            </View>
          </View>
        )
      ) : (
        <CustomLoading2
          loadingStatus={loadingStatus}
          setloadingStatus={onReload}
        />
      )}
    </View>
  );
};

const NotificationsComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(!visible);
  return (
    <View style={styles.container1}>
      <FlatList
        data={props?.data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.container2,
          status
            ? darkMode.screenBackgroundColors
            : lightMode.screenBackgroundColors,
        ]}
        renderItem={({item, id}) => (
          <TouchableOpacity
            key={id}
            onPress={() =>
              props.navigation.navigate('requestedDCSPService', {id: item?._id})
            }
            activeOpacity={0.7}
            style={[
              styles.container3,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
            ]}>
            <View style={styles.container4}>
              <Image
                style={styles.image}
                source={{uri: item?.info?.profilePic}}
              />
            </View>
            <View style={styles.container5}>
              <Text
                style={[
                  styles.title1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {item?.info?.name}
              </Text>
              <Text
                style={[
                  styles.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {item?.info?.role}
              </Text>
            </View>
            <View style={styles.container6}>
              <CustomPopMenu
                btnSize={widthToDp(7)}
                btnColor={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
                btnStyle={styles.btn1}
                menuContainerStyle={[
                  status
                    ? darkMode.containerbackgroundColor
                    : lightMode.containerbackgroundColor,
                ]}
                menuItemStyle={[
                  status ? darkMode.textColor : lightMode.textColor,
                ]}
              />
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.seprator} />}
      />
    </View>
  );
};

const CustomPopMenu = ({
  menuItem = [
    {
      title: 'Item 1',
    },
    {
      title: 'Item 2',
    },
  ],
  type = 'Btn',
  btnType = 'material-community',
  btnName = 'dots-vertical',
  btnSize = widthToDp(5),
  btnColor = '#FFFFFF',
  textStyle = {},
  btnStyle = {},
  menuContainerStyle = {},
  menuItemStyle = {},
  onMenuItemClick = () => {},
}) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(!visible);
  return (
    <Menu
      visible={visible}
      onRequestClose={openMenu}
      style={{flex: 1}}
      anchor={
        <TouchableOpacity onPress={openMenu} style={btnStyle}>
          {type === 'Btn' ? (
            <Icon
              type={btnType}
              name={btnName}
              size={btnSize}
              color={btnColor}
            />
          ) : (
            <Text style={textStyle}>Prees me</Text>
          )}
        </TouchableOpacity>
      }>
      {menuItem.map((item, id) => (
        <MenuItem
          key={id}
          style={menuContainerStyle}
          textStyle={menuItemStyle}
          onPress={() => onMenuItemClick()}>
          {item.title}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default NotificationScreen;
