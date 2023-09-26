import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const style1 = StyleSheet.create({
  container1: {
    margin: widthToDp(1),
    borderRadius: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    paddingVertical: widthToDp(1),
    paddingHorizontal: widthToDp(3),
  },
  image: {
    width: widthToDp(15),
    height: widthToDp(15),
    borderRadius: widthToDp(15) / 2,
  },
  container2: {
    justifyContent: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(11),
    fontWeight: '600',
    paddingBottom: widthToDp(0.5),
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
    paddingTop: widthToDp(0.5),
  },
});

const style2 = StyleSheet.create({
  container1: {
    flex: 1,
    paddingTop: widthToDp(1),
  },
  container2: {
    borderRadius: 10,
  },
  container3: {},
  btn1: {
    margin: widthToDp(2),
    paddingHorizontal: widthToDp(5),
    paddingVertical: widthToDp(2),
    borderWidth: widthToDp(0.7),
    borderRadius: 20,
  },
  title1: {
    fontSize: adjustedFontSize(11),
    fontWeight: '600',
    color: '#000',
  },
  container4: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
});

const style3 = StyleSheet.create({
  container1: {},
  container2: {
    marginVertical: widthToDp(2),
    borderRadius: 10,
    paddingVertical: widthToDp(2),
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
    paddingBottom: widthToDp(2),
    paddingLeft: widthToDp(2),
  },
  container3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    marginVertical: widthToDp(2),
    marginHorizontal: widthToDp(1),
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(2),
    borderWidth: widthToDp(0.5),
    borderRadius: 10,
  },
  title2: {
    fontSize: adjustedFontSize(10),
  },
  title3: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
  container4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container5: {
    width: '100%',
    paddingVertical: widthToDp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 2,
  },
  title4: {
    paddingVertical: widthToDp(5),
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
});
export {style1, style2, style3};
