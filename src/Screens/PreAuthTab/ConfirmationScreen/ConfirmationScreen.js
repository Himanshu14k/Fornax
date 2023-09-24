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
import {styles} from './style';
import {confirmSignUpOtpAction} from '../../../redux/actions/authActions';
import {ShowAlertMessage} from '../../../helper/showAlertMessage';
import {popupType} from '../../../Constants/appConstants';
import {navigate} from '../../../Navigations/navigationServices';

const ConfirmationScreen = ({route}) => {
  const dispatch = useDispatch();
  const [cCode, setcCode] = useState('');
  console.log('cCode', route?.params);
  const onSubmit = () => {
    if (cCode?.length === 4) {
      dispatch(
        confirmSignUpOtpAction({
          otp: cCode,
          signUpData: route?.params,
        }),
      );
    } else {
      ShowAlertMessage('Please enter 4-digits otp.', popupType.error);
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
              <Text style={styles.headingTitle}>Confirm Sign Up</Text>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.titleHeaderContainer}>
                <Text style={styles.titleHeader}>User E-Mail</Text>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>hk1974@protonmail.com</Text>
              </View>
              <View style={styles.titleHeaderContainer}>
                <Text style={styles.titleHeader}>Phone Number</Text>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>9162404753</Text>
              </View>
              <View style={styles.inputContainer}>
                <View style={styles.titleHeaderContainer}>
                  <Text style={styles.titleHeader}>Confirmation Code *</Text>
                </View>
                <TextInput
                  style={styles.input}
                  onChangeText={text => setcCode(text)}
                  value={cCode}
                  label="Enter your confirmation code"
                  mode="outlined"
                  outlineColor="#00d9ff"
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => onSubmit()}
                style={styles.submitButton}>
                <Text style={styles.submitButtontitle}>Confirm</Text>
              </TouchableOpacity>
              <View style={styles.touchableContainer}>
                <TouchableOpacity activeOpacity={0.4} style={styles.touchable}>
                  <Text style={styles.touchableTitle}>Resend Code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={styles.touchable}
                  onPress={() => navigate('login')}>
                  <Text style={styles.touchableTitle}>Back to Sign In.</Text>
                </TouchableOpacity>
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

export default connect(mapStateToProps)(ConfirmationScreen);
