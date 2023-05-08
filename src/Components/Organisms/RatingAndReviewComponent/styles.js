import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const ratingComponentStyles = StyleSheet.create({
  container1: {
    borderRadius: 10,
    marginVertical: widthToDp(1),
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp(4),
    paddingVertical: widthToDp(2),
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
  btn1: {
    padding: widthToDp(2),
    backgroundColor: '#00d9ff',
    borderRadius: 5,
  },
  title2: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
    color: '#000',
  },
  container3: {
    flexDirection: 'row',
    paddingVertical: widthToDp(2),
  },
  container4: {
    width: widthToDp(40),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title3: {
    fontSize: adjustedFontSize(16),
    fontWeight: '600',
    paddingRight: widthToDp(2),
  },
  container6: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
  },
  title4: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
  container7: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container8: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: widthToDp(1),
    paddingBottom: widthToDp(3),
  },
  container9: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthToDp(19),
  },
  title5: {
    paddingTop: widthToDp(1),
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
  container10: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title6: {
    paddingRight: widthToDp(0.5),
    fontSize: adjustedFontSize(10),
    fontWeight: '500',
  },
});
const reviewComponentStyles = StyleSheet.create({
  container1: {},
  container2: {},
  container3: {
    marginVertical: widthToDp(0.5),
    padding: widthToDp(2),
    borderRadius: 10,
  },
  container4: {
    flexDirection: 'row',
    paddingVertical: widthToDp(1),
  },
  container5: {
    flexDirection: 'row',
    paddingVertical: widthToDp(0.5),
    paddingHorizontal: widthToDp(2),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(10),
    fontWeight: '600',
    color: '#fff',
    paddingRight: widthToDp(0.5),
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
    paddingLeft: widthToDp(2),
  },
  container6: {
    paddingVertical: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title3: {
    fontSize: adjustedFontSize(11.5),
    fontWeight: '400',
  },
});
export {ratingComponentStyles, reviewComponentStyles};
