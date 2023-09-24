import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

const Loader = props => {
  const isLoading = false;

  return (
    <>
      {isLoading ? (
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator
              // color={'#ffffff'}
              color={'red'}
              size={'large'}
              animating={true}
            />
          </View>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'absolute',
    backgroundColor: '#00000000',
  },
  activityIndicatorWrapper: {
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
