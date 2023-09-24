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
import {connect, useDispatch} from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {Icon} from '@rneui/themed';
import {styles} from './style';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import { signUpAction } from '../../../redux/actions/authActions';
import { ShowAlertMessage } from '../../../helper/showAlertMessage';
import { popupType } from '../../../Constants/appConstants';

const SignUpScreen = props => {
  const dispatch = useDispatch();
  const [fName, onChangeFName] = useState('');
  const [lName, onChangeLName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [pNumber, onChangeNumber] = useState('');
  const [password, onChangePassword] = useState('');
  const [cPassword, onConfirmChangePassword] = useState('');
  const [pVisible, passwordVisibilityStatus] = useState(false);
  const [cpVisible, confirmPasswordVisibilityStatus] = useState(false);
  const [tc, setTc] = useState(false);
  const fullNameValidation = /^[a-zA-Z]{3,40}( [a-zA-Z]{1,40})+$/;
  const emailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const phoneValidation = /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/;
  const passwordValidation =
    /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/;

  function finalValidation() {
    if (fullNameValidation.test(fName + ' ' + lName) === false) {
      return 'Full and Last name is Invalid!';
    } else if (passwordValidation.test(password) === false) {
      return 'Not a valid password!';
    } else if (password !== cPassword) {
      return 'Password are not same!';
    } else if (isPhoneValid() === false) {
      return 'Not a valid phone number!';
    } else if (isEmailValid() === false) {
      return 'Not a valid email!';
    } else if (tc === false) {
      return 'Accept Terms and Conditions & Privacy Policy!';
    } else {
      return true;
    }
  }

  function isPhoneValid() {
    if (pNumber.length !== 10) {
      return false;
    } else {
      return phoneValidation.test(pNumber);
    }
  }

  function isEmailValid() {
    return emailValidation.test(email);
  }

  const registerUser = () => {
    const res = finalValidation();
    if (res === true) {
      dispatch(
        signUpAction({
          name: fName + ' ' + lName,
          email: email,
          phone_number: '+91' + pNumber,
          password: password,
          fcmToken: '',
          type: 'User',
          tc: tc,
        }),
      );
    } else {
      ShowAlertMessage(res, popupType.error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.cardView}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingTitle}>Create New Account</Text>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.inputAreaContainer}>
                <View style={styles.nameInputAreaContainer}>
                  <View style={styles.nameInputContainer}>
                    <TextInput
                      style={styles.input}
                      onChangeText={inputText => onChangeFName(inputText)}
                      value={fName}
                      label="First Name"
                      mode="outlined"
                      outlineColor="#00d9ff"
                    />
                  </View>
                  <View style={styles.nameInputContainer}>
                    <TextInput
                      style={styles.input}
                      onChangeText={inputText => onChangeLName(inputText)}
                      value={lName}
                      label="Last Name"
                      mode="outlined"
                      outlineColor="#00d9ff"
                    />
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    left={
                      <TextInput.Icon
                        name="email"
                        type="fontisto"
                        color="#005266"
                        style={{
                          alignSelf: 'center',
                          marginTop: widthToDp(5),
                          backgroundColor: '#cff4fc',
                        }}
                        size={widthToDp(4.5)}
                      />
                    }
                    right={
                      email.length !== 0 ? (
                        isEmailValid() ? (
                          <TextInput.Icon
                            name="check"
                            type="feather "
                            color="#00d9ff"
                            style={{
                              alignSelf: 'center',
                              marginTop: widthToDp(4.5),
                            }}
                            size={widthToDp(4.5)}
                          />
                        ) : (
                          <TextInput.Icon
                            name="close"
                            type="ionicon "
                            color="red"
                            style={{
                              alignSelf: 'center',
                              marginTop: widthToDp(4.5),
                            }}
                            size={widthToDp(4.5)}
                          />
                        )
                      ) : null
                    }
                    style={styles.input}
                    onChangeText={inputText => onChangeEmail(inputText)}
                    value={email}
                    label="Email"
                    mode="outlined"
                    outlineColor="#00d9ff"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    left={
                      <TextInput.Icon
                        name="phone"
                        type="feather"
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
                      pNumber.length !== 0 ? (
                        isPhoneValid() ? (
                          <TextInput.Icon
                            name="check"
                            type="feather "
                            color="#00d9ff"
                            style={{
                              alignSelf: 'center',
                              marginTop: widthToDp(4.5),
                            }}
                            size={widthToDp(4.5)}
                          />
                        ) : (
                          <TextInput.Icon
                            name="close"
                            type="ionicon "
                            color="red"
                            style={{
                              alignSelf: 'center',
                              marginTop: widthToDp(4.5),
                            }}
                            size={widthToDp(4.5)}
                          />
                        )
                      ) : null
                    }
                    style={styles.input}
                    onChangeText={inputNumber => onChangeNumber(inputNumber)}
                    value={pNumber}
                    label="Phone No."
                    mode="outlined"
                    outlineColor="#00d9ff"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.passwordInputAreaContainer}>
                  <View style={styles.passwordInputContainer}>
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
                      onChangeText={inputPass => onChangePassword(inputPass)}
                      value={password}
                      label="Password"
                      mode="outlined"
                      outlin="#00d9ff"
                      outlineColor="#00d9ff"
                      secureTextEntry={pVisible ? true : false}
                    />
                  </View>
                  <View style={styles.passwordInputContainer}>
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
                      onChangeText={inputPass =>
                        onConfirmChangePassword(inputPass)
                      }
                      value={cPassword}
                      label="Confirm Password"
                      mode="outlined"
                      outlin="#00d9ff"
                      outlineColor="#00d9ff"
                      secureTextEntry={cpVisible ? true : false}
                    />
                  </View>
                </View>
                <View style={styles.container2}>
                  <TouchableOpacity
                    activeOpacity={0.4}
                    style={styles.btn1}
                    onPress={() => setTc(!tc)}>
                    {tc ? (
                      <Icon
                        type="feather"
                        name="check-square"
                        size={widthToDp(4)}
                        color="#00d9ff"
                      />
                    ) : (
                      <Icon
                        type="ionicon"
                        name="square-outline"
                        size={widthToDp(4)}
                        color="#00d9ff"
                      />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.title1}>Agree to our </Text>
                  <TouchableOpacity activeOpacity={0.5} style={styles.btn2}>
                    <Text style={styles.title2}>Terms and Conditions</Text>
                  </TouchableOpacity>
                  <Text style={styles.title1}> & </Text>
                  <TouchableOpacity activeOpacity={0.5} style={styles.btn2}>
                    <Text style={styles.title2}>Privacy Policy</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.loginTitleContainer}
                  onPress={() => registerUser(props.navigation)}>
                  <Text style={styles.loginTitle}>Register</Text>
                </TouchableOpacity>
                <View style={styles.registerationTitleContainer}>
                  <Text style={styles.title}>Already have an account ?</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.registerTouchableArea}
                    onPress={() => props.navigation.navigate('login')}>
                    <Text style={styles.touchableTitle}>Login Now!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    status: state.otherReducer.status,
  };
};

export default connect(mapStateToProps)(SignUpScreen);
