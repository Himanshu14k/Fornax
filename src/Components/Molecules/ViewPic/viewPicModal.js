import {View, Modal, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {styles} from './style';
import {widthToDp} from '../../../Utils/dimensionsInPixel';

const ViewPicModal = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalStatus}
      onRequestClose={() => props.setModalStatus(!props.modalStatus)}>
      <View style={styles.container1}>
        <Image style={styles.image} source={props.image} />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btn}
          onPress={() => props.setModalStatus(!props.modalStatus)}>
          <Icon type="ionicon" name="close" color="#fff" size={widthToDp(8)} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export {ViewPicModal};
