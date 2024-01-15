import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const styles1 = StyleSheet.create({
  container1: {
    flex: 1,
    // margin: widthToDp(1),
  },
  container2: {
    // marginHorizontal: widthToDp(1),
    paddingHorizontal: widthToDp(5),
    paddingVertical: widthToDp(2.5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: widthToDp(3),
    paddingRight: widthToDp(3),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  input: {
    height: widthToDp(9),
    flex: 1,
    paddingLeft: widthToDp(2),
  },
  btn1: {
    borderRadius: 40,
  },
  btn2: {
    marginLeft: widthToDp(4),
    padding: widthToDp(1),
  },

  container4: {
    flexGrow: 1,
    alignItems: 'center',
  },
});

const styles2 = StyleSheet.create({
  container1: {
    backgroundColor: 'white',
    width: widthToDp(47),
    // maxWidth: widthToDp(46),
    // paddingHorizontal: widthToDp(1),
    maxHeight: widthToDp(70),
    margin: widthToDp(1),
    borderRadius: 10,
    elevation: 5,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: widthToDp(46),
    height: widthToDp(30),
    resizeMode: 'cover',
  },
  container3: {
    paddingBottom: widthToDp(3),
    paddingTop: widthToDp(3),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container4: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: widthToDp(2),
    paddingHorizontal: widthToDp(1),
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
    paddingBottom: widthToDp(2),
  },
  title3: {
    fontSize: adjustedFontSize(10.5),
    fontWeight: '400',
  },
  btn1: {
    backgroundColor: '#00d9ff',
    alignSelf: 'center',
    paddingHorizontal: widthToDp(8),
    paddingVertical: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title4: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
    color: '#000',
  },
});

export {styles1, styles2};
