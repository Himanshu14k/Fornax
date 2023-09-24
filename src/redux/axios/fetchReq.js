import {DataManager} from '../../helper/dataManager';
import { getInternetStatus } from '../../helper/globalFunctions';
import {url} from './apikit';

// let internetStatus = true;

const FetchApi = {
  //method to set token

  uploadFileFetchApi(data) {
    const newUrl = url + data?.path;
    console.log('newUrl', newUrl, data);
    return Method.postMethod(data?.media, newUrl);
  },
};

const Method = {
  async postMethod(body, newurl) {
    let accessToken = await DataManager.getAccessToken();
    const url = newurl;
    var data = {
      method: 'POST',
      headers: {
        // "Content-Type": 'multipart/form-data',
        Accept: 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      body: body,
    };
    const internetStatus = getInternetStatus;
    return new Promise(async (resolve, reject) => {
      await fetch(url, data)
        .then(responseData => {
          if (internetStatus === true) {
            console.log('====================================');
            console.log('data', responseData);
            console.log('====================================');
            if (responseData.status == 200) {
              return responseData.json().then(result => {
                if (result) {
                  return resolve({
                    status: 1,
                    result: result,
                  });
                } else {
                  return reject({
                    status: 0,
                    result: 'Something went wrong.',
                  });
                }
              });
            } else if (responseData.status == 400) {
              return responseData.json().then(result => {
                if (result) {
                  return resolve({
                    status: 2,
                    result: result,
                  });
                } else {
                  return reject({
                    status: 0,
                    result: 'Something went wrong.',
                  });
                }
              });
            } else if (responseData.status == 401) {
              return responseData.json().then(result => {
                if (result) {
                  return resolve({
                    status: 3,
                    result: result,
                  });
                } else {
                  return reject({
                    status: 0,
                    result: 'Something went wrong.',
                  });
                }
              });
            } else if (responseData.status == 403) {
              return responseData.json().then(result => {
                if (result) {
                  return resolve({
                    status: 4,
                    result: result,
                  });
                } else {
                  return reject({
                    status: 0,
                    result: 'Something went wrong.',
                  });
                }
              });
            } else if (
              responseData.status == 500 ||
              responseData.status === 504
            ) {
              return responseData.json().then(result => {
                if (result) {
                  return resolve({
                    status: 5,
                    result: result,
                  });
                } else {
                  return reject({
                    status: 0,
                    result: 'Something went wrong.',
                  });
                }
              });
            } else if (responseData.status === 409) {
              return responseData.json().then(result => {
                if (result) {
                  return resolve({
                    status: 6,
                    result: result,
                  });
                } else {
                  return reject({
                    status: 0,
                    result: 'Something went wrong.',
                  });
                }
              });
            }
          } else {
            return reject({
              result: 'Please check your internet connection.  2',
              status: 0,
            });
          }
        })
        .catch(error => {
          console.log('fgg', error, internetStatus);
          if (internetStatus == true) {
            console.log('1');
            return reject({
              result: 'Something went wrong.',
              status: 0,
            });
          } else {
            console.log('2');
            return reject({
              result: 'Please check your internet connection. 3',
              status: 0,
            });
          }
        });
    });
  },
};

export default FetchApi;
// module.exports = FetchApi;
