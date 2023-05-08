import {Alert} from 'react-native';
import SimpleToast from 'react-native-simple-toast';

const handleAxiosError = error => {
  let errorResponse;
  if (error.response && error.response.data) {
    // I expect the API to handle error responses in valid format
    Alert.alert('Error!', error.response.data.msg, [{text: 'OK'}]);
  } else if (error.request) {
    // TO Handle the default error response for Network failure or 404 etc.,
    SimpleToast.show('Internet Disconnected');
  } else {
    errorResponse = error.message;
  }
  // throw new Error(errorResponse);
};

export {handleAxiosError};
