import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
// import CustomHeader from '../../Navigators/CustomHeader';
import {darkMode, lightMode} from '../../Constants/Colors';
import {useSelector} from 'react-redux';
import {ProviderListComponent} from '../../Components/DoctorTabs/DifferentCareProviderScreenComponents/DifferentCareProviderScreenComponent';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {CustomLoadingComponent2} from '../../Components/CommonComponent/CustomLoadingComponents';
import CustomHeader from '../../Components/Molecules/CustomHeader/CustomHeader';

const DifferentCareProviderScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [data, setData] = useState([]);
  const [loadingStatus, setloadingStatus] = useState({status: 1, msg: ''});
  const [refreshing, setRefreshing] = useState(false);

  const fetchdata = isRefreshing => {
    try {
      isRefreshing && setRefreshing(true);
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      setloadingStatus({status: 1, msg: 'Loading...'});
      axios
        .get('https://fornaxbackend.herokuapp.com/pd/getAll', {
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
        <CustomLoadingComponent2
          loadingStatus={loadingStatus}
          setloadingStatus={setloadingStatus}
        />
      )}
    </SafeAreaView>
  );
};

export default DifferentCareProviderScreen;
