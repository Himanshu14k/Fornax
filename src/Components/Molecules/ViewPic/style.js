import {Platform, StatusBar, StyleSheet} from 'react-native';
import {heightToDp, widthToDp} from '../../../Utils/dimensionsInPixel';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404040aa',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  btn: {
    // backgroundColor: 'red',
    position: 'absolute',
    right: widthToDp(2),
    top:
      Platform.OS === 'ios'
        ? StatusBar.currentHeight + heightToDp(5)
        : StatusBar.currentHeight + heightToDp(1),
  },
});

export {styles};
