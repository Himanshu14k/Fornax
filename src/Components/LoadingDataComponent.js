import {View, StyleSheet, Modal, ActivityIndicator} from 'react-native';
import React from 'react';

const LoadingDataComponent = props => {
  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={props.modalStatus}
      //   onRequestClose={() => props.setChangeModalStatus(!props.modalStatus)}
    >
      <View style={loadingDataComponentStyles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    </Modal>
  );
};

const loadingDataComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006880aa',
  },
});

export default LoadingDataComponent;
