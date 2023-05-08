import { adjustedFontSize, widthToDp } from '../../../Utils/dimensionsInPixel';

const {StyleSheet} = require('react-native');

const styles1 = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006880aa',
    paddingVertical: widthToDp(20),
    paddingHorizontal: widthToDp(15),
    borderRadius: 10,
    elevation: 1,
  },
  btn1: {
    marginTop: widthToDp(2),
    borderWidth: widthToDp(0.4),
    paddingHorizontal: widthToDp(5),
    paddingVertical: widthToDp(2),
    borderRadius: 10,
  },
  title1: {
    fontSize: adjustedFontSize(15),
    fontWeight: '500',
    paddingTop: widthToDp(2),
  },
  title2: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
    color: '#fff',
  },
  btn2: {
    position: 'absolute',
    left: 8,
    top: 8,
  },
});

const styles2 = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00d9ff99',
    paddingVertical: widthToDp(20),
    paddingHorizontal: widthToDp(15),
    borderRadius: 10,
    elevation: 1,
  },
  btn1: {
    marginTop: widthToDp(2),
    borderWidth: widthToDp(0.4),
    paddingHorizontal: widthToDp(5),
    paddingVertical: widthToDp(2),
    borderRadius: 10,
  },
  title1: {
    fontSize: adjustedFontSize(15),
    fontWeight: '500',
    color: '#fff',
    paddingTop: widthToDp(2),
  },
  title2: {
    fontSize: adjustedFontSize(12),
    color: '#fff',
    fontWeight: '500',
  },
});

export {styles1, styles2};
