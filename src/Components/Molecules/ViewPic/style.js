import {StyleSheet} from 'react-native';
import {widthToDp} from '../../../Utils/dimensionsInPixel';

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
    position: 'absolute',
    right: widthToDp(2),
    top: widthToDp(2),
  },
});

export {styles};
