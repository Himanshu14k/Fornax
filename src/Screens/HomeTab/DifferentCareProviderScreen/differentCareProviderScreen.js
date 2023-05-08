import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  RefreshControl,
  Image,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';
import {darkMode, lightMode} from '../../../Utils/Colors';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {styles1, styles2} from './styles';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {CustomLoading2} from '../../../Components/Molecules/CustomLoadings/customLoading';

const DifferentCareProviderScreen = props => {
  const status = useSelector(state => state.themeR.status);
  const [data, setData] = useState([]);
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});
  const [refreshing, setRefreshing] = useState(false);

  const fetchdata = isRefreshing => {
    try {
      isRefreshing && setRefreshing(true);
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.onrender.com/pd/getAll', {
          params: {
            id: props?.route?.params?.id,
          },
        })
        .then(response => {
          isRefreshing && setRefreshing(false);
          if (response.data.status === 'success') {
            setData(response.data.data);
            setloadingStatus({status: 2, msg: 'Completed'});
          } else {
            setloadingStatus({
              status: 2,
              msg: 'No ' + props.route.params.title + ' Found.',
            });
            SimpleToast.show(
              (message = 'No ' + props.route.params.title + ' Found.'),
              (duration = 3000),
            );
          }
        })
        .catch(error => {
          isRefreshing && setRefreshing(false);
          setloadingStatus({
            status: 3,
            msg: 'No ' + props.route.params.title + ' Found.',
          });
          console.log('Axios error (fetchData)', error);
        });
    } catch (error) {
      isRefreshing && setRefreshing(false);
      console.log('Uexpected error occured during CS list data fetching.');
      console.log('Error is (fetchData): ', error);
      setloadingStatus({
        status: 3,
        msg: 'No ' + props.route.params.title + ' Found.',
      });
    }
  };

  useEffect(() => {
    fetchdata(false);
    return;
  }, []);

  const onRefresh = useCallback(() => {
    fetchdata(true);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader
        headerTitle={props.route.params.title}
        navigation={props.navigation}
      />
      {loadingStatus.status === 2 ? (
        <ProviderListComponent
          data={data}
          title={props.route.params.title}
          navigation={props.navigation}
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
      ) : (
        <CustomLoading2
          loadingStatus={loadingStatus}
          setloadingStatus={setloadingStatus}
        />
      )}
    </SafeAreaView>
  );
};

const ProviderListComponent = props => {
  const status = useSelector(state => state.themeR.status);
  const [seacrhItem, setseacrhItem] = useState('');

  const onCancelSearch = () => {
    setseacrhItem('');
  };

  return (
    <View
      style={[
        styles1.container1,
        status
          ? darkMode.screenBackgroundColors
          : lightMode.screenBackgroundColors,
      ]}>
      {props.data.length > 0 ? (
        <>
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
                status
                  ? darkMode.screenBackgroundColors
                  : lightMode.screenBackgroundColors,
              ]}>
              <Icon
                type="ionicon"
                name="search"
                size={widthToDp(5)}
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
              <TextInput
                style={[
                  styles1.input,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}
                placeholder="Search here..."
                placeholderTextColor={
                  status ? darkMode.textColor.color : lightMode.textColor.color
                }
                value={seacrhItem}
                onChangeText={setseacrhItem}
              />
              {seacrhItem.length > 0 && (
                <TouchableOpacity
                  style={styles1.btn1}
                  onPress={() => onCancelSearch()}>
                  <Icon
                    type="ionicon"
                    name="close"
                    size={widthToDp(5)}
                    color={
                      status
                        ? darkMode.tintColors.tintColor
                        : lightMode.tintColors.tintColor
                    }
                  />
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity style={styles1.btn2}>
              <Icon
                type="ionicon"
                name="filter"
                size={widthToDp(6)}
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            </TouchableOpacity>
          </View>
          <FlatList
            numColumns={2}
            refreshControl={
              <RefreshControl
                refreshing={props.refreshing}
                onRefresh={props.onRefresh}
              />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              styles1.container4,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
            ]}
            data={props?.data}
            renderItem={({item, id}) => (
              <ProviderComponent
                navigation={props.navigation}
                id={id}
                item={item}
              />
            )}
          />
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={[
              {
                fontWeight: 'bold',
                fontSize: adjustedFontSize(15),
              },
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {props.title} data not found.
          </Text>
        </View>
      )}
    </View>
  );
};

const ProviderComponent = props => {
  const status = useSelector(state => state.themeR.status);

  return (
    <TouchableOpacity
      key={props.id}
      activeOpacity={0.7}
      style={styles2.container1}
      onPress={() =>
        props.navigation.navigate('diffCaringSPDetails', {
          id: props.item.ref.authID,
          name: props.item.general_Info.name,
        })
      }>
      <View style={styles2.container2}>
        <Image
          style={styles2.image1}
          source={{uri: props.item.general_Info.profilePic}}
        />
      </View>
      <View
        style={[
          styles2.container3,
          status
            ? darkMode.contentbackgroundColor
            : lightMode.contentbackgroundColor,
        ]}>
        <View style={styles2.container4}>
          <Text
            numberOfLines={1}
            style={[
              styles2.title2,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {props.item.general_Info.name}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              styles2.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {props.item.professional_Info.role}
          </Text>
        </View>
        <TouchableOpacity style={styles2.btn1}>
          <Text numberOfLines={1} style={styles2.title4}>
            Book {'  '} 500/h
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default DifferentCareProviderScreen;
