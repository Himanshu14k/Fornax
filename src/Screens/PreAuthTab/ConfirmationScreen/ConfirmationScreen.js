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

const ConfirmationScreen = props => {
  const [cCode, setcCode] = useState('');

  function onSubmit(navigation) {
    SimpleToast.show((message = 'Loading...'), (duration = 5000));
    axios
      .post('https://fornaxbackend.onrender.com/user/validateOtpAndInsert', {
        otp: cCode,
      })
      .then(response => {
        console.log('getting data from axios', response.data);
        if (response.data.status === 'failed') {
          Alert.alert('Error!', response.data.msg, [{text: 'OK'}]);
        } else {
          SimpleToast.show((message = 'Registered Successfully!'));
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
  }

  return (
    <SafeAreaView style={{flex: 1}}>
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
                onPress={() => onSubmit(props.navigation)}
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
                  onPress={() => props.navigation.navigate('login')}>
                  <Text style={styles.touchableTitle}>Back to Sign In.</Text>
                </TouchableOpacity>
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

export default connect(mapStateToProps)(ConfirmationScreen);
