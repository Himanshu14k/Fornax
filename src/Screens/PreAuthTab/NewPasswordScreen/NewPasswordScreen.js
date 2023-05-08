import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {styles} from './style';
import {widthToDp} from '../../../Utils/dimensionsInPixel';

const NewPasswordScreen = props => {
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');
  const [pVisible, passwordVisibilityStatus] = useState(false);
  const [cpVisible, confirmPasswordVisibilityStatus] = useState(false);

  const passwordValidation =
    /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/;

  function validatePass() {
    if (passwordValidation.test(password) === false) {
      return 'Not a valid password!';
    } else if (password !== cPassword) {
      return 'Password are not same!';
    } else {
      return true;
    }
  }

  const saveNewPassword = navigation => {
    const res = validatePass();
    if (res === true) {
      SimpleToast.show((message = 'Loading...'), (duration = 5000));
      axios
        .post('https://fornaxbackend.onrender.com/user/resetNewPassword', {
          password: password,
        })
        .then(response => {
          console.log('getting data from axios', response.data);
          if (response.data.status === 'failed') {
            Alert.alert('Error!', response.data.msg, [{text: 'OK'}]);
          } else {
            SimpleToast.show((message = response.data.msg));
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'login',
                },
              ],
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      Alert.alert('Error!', res, [{text: 'OK'}]);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.carView}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingTitle}>New Password</Text>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.titleHeaderContainer}>
                  <Text style={styles.titleHeader}>Password *</Text>
                </View>
                <TextInput
                  left={
                    <TextInput.Icon
                      name="lock"
                      type="material"
                      color="#005266"
                      style={{
                        alignSelf: 'center',
                        marginTop: widthToDp(4.5),
                        backgroundColor: '#cff4fc',
                      }}
                      size={widthToDp(4.5)}
                    />
                  }
                  right={
                    pVisible ? (
                      <TextInput.Icon
                        onPress={() => passwordVisibilityStatus(!pVisible)}
                        name="eye-off"
                        type="feather"
                        color="#00d9ff"
                        style={{
                          alignSelf: 'center',
                          marginTop: widthToDp(4.5),
                        }}
                        size={widthToDp(4.5)}
                      />
                    ) : (
                      <TextInput.Icon
                        onPress={() => passwordVisibilityStatus(!pVisible)}
                        name="eye"
                        type="feather"
                        color="#00d9ff"
                        style={{
                          alignSelf: 'center',
                          marginTop: widthToDp(4.5),
                        }}
                        size={widthToDp(4.5)}
                      />
                    )
                  }
                  style={styles.input}
                  onChangeText={inputPass => setPassword(inputPass)}
                  value={password}
                  label="Password"
                  mode="outlined"
                  outlin="#00d9ff"
                  outlineColor="#00d9ff"
                  secureTextEntry={pVisible ? true : false}
                />
              </View>
              <View style={styles.inputContainer}>
                <View style={styles.titleHeaderContainer}>
                  <Text style={styles.titleHeader}>Confirm Password *</Text>
                </View>
                <TextInput
                  left={
                    <TextInput.Icon
                      name="lock"
                      type="material"
                      color="#005266"
                      style={{
                        alignSelf: 'center',
                        marginTop: widthToDp(4.5),
                        backgroundColor: '#cff4fc',
                      }}
                      size={widthToDp(4.5)}
                    />
                  }
                  right={
                    cpVisible ? (
                      <TextInput.Icon
                        onPress={() =>
                          confirmPasswordVisibilityStatus(!cpVisible)
                        }
                        name="eye-off"
                        type="feather"
                        color="#00d9ff"
                        style={{
                          alignSelf: 'center',
                          marginTop: widthToDp(4.5),
                        }}
                        size={widthToDp(4.5)}
                      />
                    ) : (
                      <TextInput.Icon
                        onPress={() =>
                          confirmPasswordVisibilityStatus(!cpVisible)
                        }
                        name="eye"
                        type="feather"
                        color="#00d9ff"
                        style={{
                          alignSelf: 'center',
                          marginTop: widthToDp(4.5),
                        }}
                        size={widthToDp(4.5)}
                      />
                    )
                  }
                  style={styles.input}
                  onChangeText={inputPass => setCpassword(inputPass)}
                  value={cPassword}
                  label="Confirm Password"
                  mode="outlined"
                  outlin="#00d9ff"
                  outlineColor="#00d9ff"
                  secureTextEntry={cpVisible ? true : false}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.submitButton}
                onPress={() => saveNewPassword(props.navigation)}>
                <Text style={styles.submitButtontitle}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPasswordScreen;
