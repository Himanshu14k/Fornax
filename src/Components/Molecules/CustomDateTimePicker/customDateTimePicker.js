import React, {useState} from 'react';
import {Modal, Platform, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Icon} from '@rneui/themed';
import {styles} from './style';

const CustomDatePicker = props => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChangeForIOS = (e, selectedDate) => {
    setDate(moment(selectedDate));
    props.onChange(selectedDate);
  };

  const onChangeForAndroid = (e, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(moment(selectedDate));
      props.onChange(selectedDate);
    }
  };

  const onCancelPress = () => {
    setDate(moment(props.defaultDate));
    setShow(!show);
  };

  const onDonePress = () => {
    props.onDateChange(date);
    setShow(!show);
  };
  const renderDatePicker = () => {
    return (
      <DateTimePicker
        timeZoneOffsetInMinutes={0}
        value={props.value}
        mode={props.mode}
        minimumDate={props.minimumDate}
        maximumDate={props.maximumDate}
        onChange={Platform.OS === 'ios' ? onChangeForIOS : onChangeForAndroid}
        display={props.display}
      />
    );
  };

  return (
    <TouchableOpacity
      style={props.containerStyle}
      activeOpacity={0.7}
      onPress={() => setShow(!show)}>
      <View style={{flexDirection: 'row'}}>
        {props.leftIcon && (
          <Icon
            name="calendar"
            type="ionicon"
            size={props.rightIconSize}
            color={props.iconColor}
          />
        )}
        <Text style={props.textStyle}>{moment(date).format('DD-MM-YYYY')}</Text>
        {props.rightIcon && (
          <Icon
            name="select-arrows"
            type="entypo"
            size={props.rightIconSize}
            color={props.iconColor}
          />
        )}
        {Platform.OS !== 'ios' && show && renderDatePicker()}
        {Platform.OS === 'ios' && (
          <Modal
            transparent={true}
            animationType="fade"
            visible={show}
            onRequestClose={() => setShow(false)}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                }}
                onPress={() => setShow(false)}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    flex: 1,
                    borderTopColor: '#e9e9e9',
                    borderTopWidth: 1,
                  }}
                  onPress={() => console.log('date picker clicked')}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      height: 250,
                      overflow: 'hidden',
                    }}>
                    <View style={{marginTop: 20}}>{renderDatePicker()}</View>
                    <TouchableOpacity
                      style={[styles.btnText, styles.btnCancel]}
                      onPress={() => onCancelPress()}>
                      <Text>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.btnText, styles.btnDone]}
                      onPress={() => onDonePress()}>
                      <Text>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
      </View>
    </TouchableOpacity>
  );
};

const CustomTimePicker = props => {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChangeForIOS = (e, selectedTime) => {
    setTime(moment(selectedTime));
    props.onChange(selectedTime);
  };

  const onChangeForAndroid = (e, selectedTime) => {
    setShow(false);
    if (selectedTime) {
      setTime(moment(selectedTime));
      props.onChange(selectedTime);
    }
  };

  const onCancelPress = () => {
    setTime(moment(props.defaultDate));
    setShow(!show);
  };

  const onDonePress = () => {
    props.onDateChange(date);
    setShow(!show);
  };
  const renderTimePicker = () => {
    return (
      <DateTimePicker
        is24Hour={props.is24Hour}
        value={props.value}
        mode={props.mode}
        onChange={Platform.OS === 'ios' ? onChangeForIOS : onChangeForAndroid}
        display={props.display}
      />
    );
  };

  return (
    <TouchableOpacity
      style={props.containerStyle}
      activeOpacity={0.7}
      onPress={() => setShow(!show)}>
      <View style={{flexDirection: 'row'}}>
        {props.leftIcon && (
          <Icon
            name="time"
            type="ionicon"
            size={props.leftIconSize}
            color={props.iconColor}
          />
        )}
        <Text style={props.textStyle}>
          {moment(time).utcOffset('+05:30').format('hh:mm A')}
        </Text>
        {props.rightIcon && (
          <Icon
            name="select-arrows"
            type="entypo"
            size={props.rightIconSize}
            color={props.iconColor}
          />
        )}
        {Platform.OS !== 'ios' && show && renderTimePicker()}
        {Platform.OS === 'ios' && (
          <Modal
            transparent={true}
            animationType="fade"
            visible={show}
            onRequestClose={() => setShow(false)}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                }}
                onPress={() => setShow(false)}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    flex: 1,
                    borderTopColor: '#e9e9e9',
                    borderTopWidth: 1,
                  }}
                  onPress={() => console.log('time picker clicked')}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      height: 250,
                      overflow: 'hidden',
                    }}>
                    <View style={{marginTop: 20}}>{renderTimePicker()}</View>
                    <TouchableOpacity
                      style={[styles.btnText, styles.btnCancel]}
                      onPress={() => onCancelPress()}>
                      <Text>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.btnText, styles.btnDone]}
                      onPress={() => onDonePress()}>
                      <Text>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
      </View>
    </TouchableOpacity>
  );
};

export {CustomDatePicker, CustomTimePicker};
