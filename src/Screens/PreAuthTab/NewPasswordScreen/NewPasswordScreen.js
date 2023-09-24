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
import { useDispatch } from 'react-redux';
import { newPasswordAction } from '../../../redux/actions/authActions';
import { ShowAlertMessage } from '../../../helper/showAlertMessage';
import { popupType } from '../../../Constants/appConstants';

const NewPasswordScreen = props => {
  const dispatch = useDispatch();

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

  const saveNewPassword = () => {
    const res = validatePass();
    if (res === true) {
      dispatch(
        newPasswordAction({
          password: password,
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
    </View>
  );
};

export default NewPasswordScreen;
