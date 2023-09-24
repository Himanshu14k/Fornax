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
import {connect, useDispatch, useSelector} from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
import axios from 'axios';
import {styles} from './style';
import {
  forgetPasswordAction,
  verifyOtpAction,
} from '../../../redux/actions/authActions';
import {ShowAlertMessage} from '../../../helper/showAlertMessage';
import {popupType} from '../../../Constants/appConstants';

const ResetPassScreen = props => {
  const [email, setemail] = useState('');
  const [otp, setotp] = useState('');
  const [isUserRegistered, setisUserRegistered] = useState(false);

  const dispatch = useDispatch();
  const receivedOtpStatus = useSelector(
    state => state.authenticationReducer.receivedOtpStatus,
  );
  const onSendOtp = () => {
    if (email?.length > 4) {
      dispatch(
        forgetPasswordAction({
          email: email,
        }),
      );
    } else {
      ShowAlertMessage('Please enter valid e-mail ID.', popupType.error);
    }
  };

  const onConfirmOTP = () => {
    if (otp?.length == 4) {
      dispatch(
        verifyOtpAction({
          otp: otp,
        }),
      );
    } else {
      ShowAlertMessage('Please enter valid e-mail ID.', popupType.error);
    }
  };

  return (
    <View style={{flex: 1}}>
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
              {receivedOtpStatus && (
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
                  !receivedOtpStatus
                    ? () => onSendOtp()
                    : () => onConfirmOTP(props.navigation)
                }
                style={styles.submitButton}>
                <Text style={styles.submitButtontitle}>
                  {receivedOtpStatus ? 'Confirm' : 'Send'}
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
    </View>
  );
};

const mapStateToProps = state => {
  return {
    status: state.otherReducer.status,
  };
};

export default connect(mapStateToProps)(ResetPassScreen);
