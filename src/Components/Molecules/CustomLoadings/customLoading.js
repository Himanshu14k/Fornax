import React from 'react';
import {useSelector} from 'react-redux';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {TextLoader} from 'react-native-indicator';
import {Icon} from '@rneui/themed';
import {styles1, styles2} from './style';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';
import {commonColorsStyle, darkMode, lightMode} from '../../../Utils/Colors';

const CustomLoading1 = props => {
  const status = useSelector(state => state.themeR.status);

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={props?.loadingStatus.status === 2 ? false : true}>
      {props.loadingStatus.status === 1 && (
        <View style={styles1.container1}>
          <ActivityIndicator size="large" color="#2b11d6" />
          <Text style={styles2.title1}>{props.loadingStatus.msg}</Text>
        </View>
      )}
      {props.loadingStatus.status === 3 && (
        <>
          <View style={styles1.container1}>
            <Text style={styles1.title2}>{props.loadingStatus.msg}</Text>
            <TouchableOpacity
              onPress={() => props.onReload()}
              activeOpacity={0.5}
              style={[
                styles1.btn1,
                commonColorsStyle.transparentBackgroundColor1,
                status ? darkMode.borderColor1 : lightMode.borderColor1,
              ]}>
              <Text style={styles1.title2}>Refresh ?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles1.btn2}
            onPress={() => props.onClose()}>
            <Icon
              type="ionicon"
              name="close"
              size={widthToDp(12)}
              color="red"
            />
          </TouchableOpacity>
        </>
      )}
    </Modal>
  );
};

const CustomLoading2 = props => {
  const status = useSelector(state => state.themeR.status);

  return (
    <View style={styles2.container1}>
      {props.loadingStatus.status === 1 && (
        <View style={styles2.container2}>
          <ActivityIndicator size="large" color="#2b11d6" />
          <Text style={styles2.title1}>Loading...</Text>
        </View>
      )}
      {props.loadingStatus.status === 3 && (
        <>
          <View style={styles2.container2}>
            <Text style={styles2.title2}>{props.loadingStatus.msg}</Text>
            <TouchableOpacity
              onPress={() => props.onRefresh()}
              activeOpacity={0.5}
              style={[
                styles2.btn1,
                commonColorsStyle.transparentBackgroundColor1,
                status ? darkMode.borderColor1 : lightMode.borderColor1,
              ]}>
              <Text style={styles2.title2}>Refresh ?</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const TextWithAnimatedDots_Loading = props => {
  const status = useSelector(state => state.themeR.status);

  return (
    <View style={styles2.container1}>
      {props.loadingStatus.status === 1 && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: widthToDp(15),
          }}>
          <TextLoader
            text={props.text}
            textStyle={{
              fontSize: adjustedFontSize(11),
              color: '#00d9ff',
            }}
          />
        </View>
      )}
      {props.loadingStatus.status === 3 && (
        <View style={styles2.container2}>
          <Text style={styles2.title2}>{props.loadingStatus.msg}</Text>
          <TouchableOpacity
            onPress={() => props.setloadingStatus({status: 1, msg: ''})}
            activeOpacity={0.5}
            style={[
              styles2.btn1,
              commonColorsStyle.transparentBackgroundColor1,
              status ? darkMode.borderColor1 : lightMode.borderColor1,
            ]}>
            <Text style={styles2.title2}>Refresh ?</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export {CustomLoading1, TextWithAnimatedDots_Loading, CustomLoading2};
