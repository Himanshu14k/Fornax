import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Icon} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect, useDispatch} from 'react-redux';
import axios from 'axios';
import {styles} from './style';
import {setAuthStatus} from '../../../States/Actions/AuthStatusActions/actions';
import SimpleToast from 'react-native-simple-toast';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [visible, onChangeVisibilityStatus] = useState(false);

  const loginUser = async () => {
    SimpleToast.show((message = 'Loading...'), (duration = 5000));
    axios
      .post('https://fornaxbackend.onrender.com/user/login', {
        email: email,
        password: password,
      })
      .then(response => {
        if (response.data.status === 'failed') {
          Alert.alert('Error!', response.data.msg, [{text: 'OK'}]);
        } else {
          SimpleToast.show((message = 'Welcome...'));
          dispatch(
            setAuthStatus(
              (authStatus = true),
              (authToken = response.data.token),
              (uId = response.data.uId),
            ),
          );
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.carView}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingTitle}>Login to your account</Text>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.googleAndAppleIconContainer}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => props.navigation.navigate('newPassword')}
                  style={styles.googleIconContainer}>
                  <Icon type="antdesign" name="google" color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('confirmation')}
                  activeOpacity={0.6}
                  style={styles.appleIconContainer}>
                  <Icon type="antdesign" name="apple1" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.inputAreaTitle}>
                <Text style={styles.title}>or use your email account</Text>
              </View>
              <View style={styles.inputAreaContainer}>
                <View style={styles.inputContainer}>
                  <TextInput
                    left={
                      <TextInput.Icon
                        name="email"
                        type="fontisto"
                        color="#000"
                        style={{
                          alignSelf: 'center',
                          marginTop: 17,
                          backgroundColor: '#e5e5e5',
                        }}
                        size={20}
                      />
                    }
                    right={
                      <TextInput.Icon
                        name="check-circle"
                        type="feather "
                        color="#00d9ff"
                        style={{
                          alignSelf: 'center',
                          marginTop: 15,
                        }}
                        size={22}
                      />
                    }
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    label="Email or Phone No."
                    mode="outlined"
                    outlineColor="#00d9ff"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    left={
                      <TextInput.Icon
                        name="lock"
                        type="material"
                        color="#000"
                        style={{
                          alignSelf: 'center',
                          marginTop: 17,
                          backgroundColor: '#e5e5e5',
                        }}
                        size={20}
                      />
                    }
                    right={
                      visible ? (
                        <TextInput.Icon
                          onPress={() => onChangeVisibilityStatus(!visible)}
                          name="eye-off"
                          type="feather"
                          color="#00d9ff"
                          style={{
                            alignSelf: 'center',
                            marginTop: 17,
                          }}
                          size={22}
                        />
                      ) : (
                        <TextInput.Icon
                          onPress={() => onChangeVisibilityStatus(!visible)}
                          name="eye"
                          type="feather"
                          color="#00d9ff"
                          style={{
                            alignSelf: 'center',
                            marginTop: 17,
                          }}
                          size={22}
                        />
                      )
                    }
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    label="Password"
                    mode="outlined"
                    outlin="#00d9ff"
                    outlineColor="#00d9ff"
                    secureTextEntry={visible ? true : false}
                  />
                </View>

                <TouchableOpacity
                  activeOpacity={0.4}
                  style={styles.forgetPassTitleContainer}
                  onPress={() => props.navigation.navigate('reset')}>
                  <Text style={styles.touchableTitle}>Forget Password ?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.loginTitleContainer}
                  //onPress={() => props.navigation.navigate('home')}
                  onPress={loginUser}>
                  <Text style={styles.loginTitle}>Login</Text>
                </TouchableOpacity>
                <View style={styles.registerationTitleContainer}>
                  <Text style={styles.title}>Don't have an account ?</Text>
                  <TouchableOpacity
                    activeOpacity={0.4}
                    style={styles.registerTouchableArea}
                    onPress={() => props.navigation.navigate('register')}>
                    <Text style={styles.touchableTitle}>Register Now!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    status: state.themeR.status,
  };
};

export default connect(mapStateToProps)(LoginScreen);
