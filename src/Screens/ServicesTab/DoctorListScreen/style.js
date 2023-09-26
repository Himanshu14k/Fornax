import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const style1 = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#006880aa',
  },
  container2: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 1,
  },
  title1: {
    paddingVertical: widthToDp(2),
    paddingLeft: widthToDp(3),
    fontSize: adjustedFontSize(13),
    fontWeight: '600',
    borderBottomWidth: widthToDp(0.2),
  },
  container4: {
    paddingHorizontal: widthToDp(3),
    justifyContent: 'space-around',
    paddingVertical: widthToDp(2),
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: widthToDp(2),
  },
  title2: {
    fontSize: adjustedFontSize(12),
    fontWeight: '400',
    paddingLeft: widthToDp(2),
  },
});

const style2 = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(3),
  },
  title: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
  seprator: {
    width: widthToDp(0.3),
  },
});

const style3 = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {},
  container3: {
    marginVertical: widthToDp(1),
    marginHorizontal: widthToDp(1),
    borderRadius: 10,
    flexDirection: 'row',
    elevation: 2,
  },
  container4: {
    padding: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: widthToDp(3),
    // paddingBottom: widthToDp(2)
    paddingVertical: widthToDp(1),
  },
  image: {
    width: widthToDp(20),
    height: widthToDp(20),
    backgroundColor: '#00d9ff',
    borderRadius: widthToDp(35) / 2,
  },
  container5: {
    flex: 1,
    maxWidth: widthToDp(40),
    // backgroundColor: 'red',
    // paddingVertical: widthToDp(1),
  },
  title1: {
    fontSize: adjustedFontSize(11),
    fontWeight: 'bold',
  },
  title2: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
  container6: {
    flex: 1,
    padding: widthToDp(1),
  },
  container7: {
    paddingVertical: widthToDp(1),
    height: widthToDp(7),
  },
  container8: {
    height: widthToDp(7),
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(3),
    marginTop: widthToDp(1),
    borderRadius: 10,
  },
  title3: {
    fontSize: adjustedFontSize(10),
    paddingLeft: widthToDp(1),
    fontWeight: '500',
  },
  btn2: {
    borderWidth: widthToDp(0.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(3),
    marginTop: widthToDp(1),
    borderRadius: 10,
  },
  container9: {},
  container10: {
    paddingVertical: widthToDp(1),
  },
  title4: {
    fontSize: adjustedFontSize(10),
    paddingLeft: widthToDp(1),
    fontWeight: '500',
    color: '#fff',
  },
  container11: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export {style1, style2, style3};
