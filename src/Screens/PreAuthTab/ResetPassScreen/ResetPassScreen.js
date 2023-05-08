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
import {connect} from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {styles} from './style';

const ResetPassScreen = props => {
  const [email, setemail] = useState('');
  const [otp, setotp] = useState('');
  const [isUserRegistered, setisUserRegistered] = useState(false);

  function onSendOtp() {
    SimpleToast.show((message = 'Loading...'), (duration = 5000));
    axios
      .post('https://fornaxbackend.onrender.com/user/resetPassword', {
        email: email,
      })
      .then(response => {
        console.log('getting data from axios', response.data);
        if (response.data.status === 'failed') {
          Alert.alert('Error!', response.data.msg, [{text: 'OK'}]);
        } else {
          SimpleToast.show((message = 'OTP Successfully Send.'));
          setisUserRegistered(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  function onConfirmOTP(navigation) {
    SimpleToast.show((message = 'Loading...'), (duration = 5000));
    axios
      .post('https://fornaxbackend.onrender.com/user/validateOtp', {
        otp: otp,
      })
      .then(response => {
        console.log('getting data from axios', response.data);
        if (response.data.status === 'failed') {
          Alert.alert('Error!', response.data.msg, [{text: 'OK'}]);
        } else {
          SimpleToast.show((message = response.data.msg));
          navigation.navigate('newPassword');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.carView}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingTitle}>Reset your password</Text>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.titleHeaderContainer}>
                  <Text style={styles.titleHeader}>User E-mail *</Text>
                </View>
                <TextInput
                  style={styles.input}
                  onChangeText={inputText => setemail(inputText)}
                  value={email}
                  label="Enter your registered e-mail"
                  mode="outlined"
                  outlineColor="#00d9ff"
                />
              </View>
              {isUserRegistered && (
                <View style={styles.inputContainer}>
                  <View style={styles.titleHeaderContainer}>
                    <Text style={styles.titleHeader}>Enter OTP</Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={inputText => setotp(inputText)}
                    value={otp}
                    label="Enter password again"
                    mode="outlined"
                    outlineColor="#00d9ff"
                  />
                </View>
              )}
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={
                  !isUserRegistered
                    ? () => onSendOtp()
                    : () => onConfirmOTP(props.navigation)
                }
                style={styles.submitButton}>
                <Text style={styles.submitButtontitle}>
                  {isUserRegistered ? 'Confirm' : 'Send'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.4}
                style={styles.backToSign}
                onPress={() => props.navigation.navigate('login')}>
                <Text style={styles.backToSignTitle}>Back to Sign In.</Text>
              </TouchableOpacity>
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

export default connect(mapStateToProps)(ResetPassScreen);
