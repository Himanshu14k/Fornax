import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Modal,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import CustomHeader from '../../../Components/Molecules/CustomHeader/CustomHeader';
import {CustomLoading1} from '../../../Components/Molecules/CustomLoadings/customLoading';
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from '../../../Utils/DifferentValidationFunctions';
import {styles1, styles2} from './style';

const SignAndSecurityScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [settingsModalStatus, setSettingsModalStatus] = useState(false);
  const [modalID, setmodalID] = useState('');
  const [loadingStatus1, setloadingStatus1] = useState({
    status: 2,
    msg: '',
  });
  const [password, setpassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [confirmNewPassword, setconfirmNewPassword] = useState('');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader navigation={props.navigation} />
      <DifferentSecuritySettingsComponent
        settingsModalStatus={settingsModalStatus}
        setSettingsModalStatus={setSettingsModalStatus}
        setmodalID={setmodalID}
      />
      <SettingModal
        settingsModalStatus={settingsModalStatus}
        setSettingsModalStatus={setSettingsModalStatus}
        modalID={modalID}
        password={password}
        setpassword={setpassword}
        setnewPassword={setnewPassword}
        newPassword={newPassword}
        setconfirmNewPassword={setconfirmNewPassword}
        confirmNewPassword={confirmNewPassword}
        navigation={props.navigation}
        // saveChangesPassword={handlePasswordChange}
      />
    </View>
  );
};

const securityOptions = [
  {
    id: 1,
    title: 'Phone Numbers',
    description: 'Add or remove phone number on your account',
  },
  {
    id: 1,
    title: 'Email Adresses',
    description: 'Add or remove emsil addresses on your account',
  },
  {
    id: 1,
    title: 'Change Password',
    description: 'Choose unique password for your account',
  },
  {
    id: 1,
    title: 'Two-factor Authentication',
    description: 'Make your account more secure by enabling this feature',
  },

  ,
  ,
];

const SettingModal = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [addField, setaddField] = useState(false);
  const [phone, setphone] = useState(null);
  const [email, setemail] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [confirmNewPassword, setconfirmNewPassword] = useState('');
  const [password, setpassword] = useState('');

  const onModalClose = () => {
    setaddField(false),
      setphone(null),
      setemail(''),
      props.setpassword(''),
      props.setnewPassword(''),
      props.setconfirmNewPassword(''),
      props.setSettingsModalStatus(!props.settingsModalStatus);
  };

  const sendCode = () => {
    validatePhone(phone) && validatePassword(password)
      ? (setphone(null),
        props.setpassword(''),
        setaddField(false),
        alert('Enter Otp'))
      : false;
  };

  const sendVarificationMail = () => {
    validateEmail(email) && validatePassword(password)
      ? (setemail(''),
        props.setpassword(''),
        setaddField(false),
        alert('Enter Verification Code'))
      : null;
  };

  const saveChangesPassword = () => {
    newPassword === confirmNewPassword
      ? validatePassword(password)
        ? (alert('Password chnage successfully!'),
          props.setpassword(''),
          setnewPassword(''),
          setconfirmNewPassword(''))
        : null
      : null;
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.settingsModalStatus}
      onRequestClose={() => onModalClose()}>
      <View style={styles1.container1}>
        {props.modalID === 'Phone Numbers' && (
          <View
            style={[
              styles1.container2,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
            ]}>
            {!addField && (
              <View>
                <View style={styles1.container3}>
                  <Text
                    style={[
                      styles1.title1,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    Added Phone Number
                  </Text>
                </View>
                <View style={styles1.container4}>
                  <Text
                    style={[
                      styles1.title2,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    +919162404753
                  </Text>
                  <Text
                    style={[
                      styles1.title3,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    Primary Number
                  </Text>
                  <Text
                    style={[
                      styles1.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    You primary number is the one with which we use to
                    communicate with you.
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles1.btn1, {backgroundColor: '#00d9ff'}]}
                  onPress={() => setaddField(!addField)}>
                  <Text style={styles1.title5}>Add Phone Number</Text>
                </TouchableOpacity>
              </View>
            )}
            {addField && (
              <View>
                <View style={styles1.container3}>
                  <Text
                    style={[
                      styles1.title1,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    Added Phone Number
                  </Text>
                  <Text
                    style={[
                      styles1.title6,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    Your phone number helps us keep your account safe by adding
                    an extra layer of authentication.
                  </Text>
                </View>
                <View style={styles1.inputContainer1}>
                  <TextInput
                    style={[
                      styles1.input1,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}
                    onChangeText={setphone}
                    value={phone}
                    editable
                    placeholder="Phone Number"
                    maxLength={10}
                    keyboardType="numeric"
                    placeholderTextColor={
                      status
                        ? darkMode.textColor.color
                        : lightMode.textColor.color
                    }
                  />
                </View>
                <View style={styles1.inputContainer1}>
                  <TextInput
                    style={[
                      styles1.input1,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}
                    onChangeText={setpassword}
                    value={password}
                    editable
                    placeholder="Password"
                    maxLength={10}
                    secureTextEntry
                    placeholderTextColor={
                      status
                        ? darkMode.textColor.color
                        : lightMode.textColor.color
                    }
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles1.btn1, {backgroundColor: '#00d9ff'}]}
                  onPress={() => sendCode()}>
                  <Text style={styles1.title5}>Send Verification code</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        {props.modalID === 'Email Adresses' && (
          <View
            style={[
              styles1.container2,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
            ]}>
            {!addField && (
              <View>
                <View style={styles1.container3}>
                  <Text
                    style={[
                      styles1.title1,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    Added Email
                  </Text>
                </View>
                <View style={styles1.container4}>
                  <Text
                    style={[
                      styles1.title2,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    hk1974@protonmail.com
                  </Text>
                  <Text
                    style={[
                      styles1.title3,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    Primary email
                  </Text>
                  <Text
                    style={[
                      styles1.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    You primary email is the one with which we use to
                    communicate with you.
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles1.btn1, {backgroundColor: '#00d9ff'}]}
                  onPress={() => setaddField(!addField)}>
                  <Text style={styles1.title5}>Add New Email</Text>
                </TouchableOpacity>
              </View>
            )}
            {addField && (
              <View>
                <View style={styles1.container3}>
                  <Text
                    style={[
                      styles1.title1,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    Add new email
                  </Text>
                  <Text
                    style={[
                      styles1.title6,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    Your extra email id helps you to keep your account safe in
                    case you lost your primary email.
                  </Text>
                </View>
                <View style={styles1.inputContainer1}>
                  <TextInput
                    style={[
                      styles1.input1,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}
                    onChangeText={setemail}
                    value={email}
                    editable
                    placeholder="Add Email"
                    placeholderTextColor={
                      status
                        ? darkMode.textColor.color
                        : lightMode.textColor.color
                    }
                  />
                </View>
                <View style={styles1.inputContainer1}>
                  <TextInput
                    style={[
                      styles1.input1,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}
                    onChangeText={setpassword}
                    value={password}
                    editable
                    placeholder="Password"
                    maxLength={10}
                    secureTextEntry
                    placeholderTextColor={
                      status
                        ? darkMode.textColor.color
                        : lightMode.textColor.color
                    }
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles1.btn1, {backgroundColor: '#00d9ff'}]}
                  onPress={() => sendVarificationMail()}>
                  <Text style={styles1.title5}>Send Verification code</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        {props.modalID === 'Change Password' && (
          <View
            style={[
              styles1.container2,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
            ]}>
            <View style={styles1.container3}>
              <Text
                style={[
                  styles1.title1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Change Password
              </Text>
              <Text
                style={[
                  styles1.title6,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                New password should at least 8 characters long (must include 1
                small and big letter, 1 number and 1 special character)
              </Text>
            </View>
            <View style={styles1.inputContainer1}>
              <TextInput
                style={[
                  styles1.input1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}
                onChangeText={props.setpassword}
                value={props.password}
                editable
                placeholder="Current Password"
                secureTextEntry
                placeholderTextColor={
                  status ? darkMode.textColor.color : lightMode.textColor.color
                }
              />
            </View>
            <TouchableOpacity activeOpacity={0.5} style={styles1.btn2}>
              <Text style={styles1.title7}>Forgot Password ?</Text>
            </TouchableOpacity>
            <View style={styles1.inputContainer1}>
              <TextInput
                style={[
                  styles1.input1,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}
                onChangeText={props.setnewPassword}
                value={props.newPassword}
                editable
                placeholder="New Password"
                secureTextEntry
                placeholderTextColor={
                  status ? darkMode.textColor.color : lightMode.textColor.color
                }
              />
            </View>
            <View style={styles1.inputContainer2}>
              <TextInput
                style={[
                  styles1.input2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}
                onChangeText={props.setconfirmNewPassword}
                value={props.confirmNewPassword}
                editable
                placeholder="Confirm New Password"
                secureTextEntry
                placeholderTextColor={
                  status ? darkMode.textColor.color : lightMode.textColor.color
                }
              />
              {(props.newPassword.length > 0 &&
                props.confirmNewPassword.length) > 0 ? (
                props.confirmNewPassword === props.newPassword ? (
                  <Icon
                    type="ionicon"
                    name="checkmark-done"
                    color="green"
                    size={widthToDp(5)}
                    style={styles1.icon}
                  />
                ) : (
                  <Icon
                    type="ionicon"
                    name="close"
                    color="red"
                    size={widthToDp(5)}
                    style={styles1.icon}
                  />
                )
              ) : null}
            </View>
            {props.newPassword.length > 7 &&
            props.confirmNewPassword === props.newPassword ? (
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles1.btn1, {backgroundColor: '#00d9ff'}]}
                onPress={() => props.saveChangesPassword()}>
                <Text style={styles1.title5}>Save</Text>
              </TouchableOpacity>
            ) : (
              <View
                style={[
                  styles1.btn1,
                  status
                    ? darkMode.screenBackgroundColors
                    : lightMode.screenBackgroundColors,
                ]}>
                <Text style={styles1.title5}>Save</Text>
              </View>
            )}
          </View>
        )}
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles1.btn3}
          onPress={() => onModalClose()}>
          <Icon
            type="ionicon"
            name="close"
            size={widthToDp(10)}
            color={'#fff'}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const DifferentSecuritySettingsComponent = props => {
  const status = useSelector(state => state.otherReducer.status);

  const onClickChange = title => {
    props.setSettingsModalStatus(!props.settingsModalStatus);
    props.setmodalID(title);
  };

  return (
    <View style={styles2.container1}>
      <View
        style={[
          styles2.container2,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <Text
          style={[
            styles2.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Security Settings
        </Text>
        <Text
          style={[
            styles2.title2,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Settings to help you keep your account secure
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={[
          styles2.container3,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        {securityOptions.map((item, id) => (
          <TouchableOpacity
            key={id}
            style={[
              styles2.container4,
              {
                borderBottomColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}
            onPress={() => onClickChange(item.title)}>
            <View style={styles2.container5}>
              <Text
                style={[
                  styles2.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {item.title}
              </Text>
              <Text
                style={[
                  styles2.title4,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {item.description}
              </Text>
            </View>
            <View style={styles2.container6}>
              <Icon
                type="ionicon"
                name="arrow-forward"
                size={widthToDp(5)}
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SignAndSecurityScreen;
