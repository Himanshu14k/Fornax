import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const style1 = StyleSheet.create({
  container1: {
    width: widthToDp(40),
    margin: widthToDp(2),
    justifyContent: 'center',
    paddingVertical: widthToDp(2),
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: widthToDp(2),
  },
  image: {
    backgroundColor: 'cyan',
    width: widthToDp(16),
    height: widthToDp(16),
    borderRadius: widthToDp(20) / 2,
    resizeMode: 'cover',
  },
  title: {
    fontSize: adjustedFontSize(10.5),
    fontWeight: '400',
  },
});

const style2 = StyleSheet.create({
  container1: {
    flex: 1,
    marginHorizontal: widthToDp(1),
    paddingVertical: widthToDp(3),
    paddingHorizontal: widthToDp(1),
    borderRadius: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {style1, style2};
