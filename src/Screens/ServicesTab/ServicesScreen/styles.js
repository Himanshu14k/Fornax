import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const style1 = StyleSheet.create({
  container1: {
    marginHorizontal: widthToDp(1),
    marginVertical: widthToDp(0.5),
    padding: widthToDp(2),
    borderRadius: 10,
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
  container2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(2),
  },
});

const style2 = StyleSheet.create({
  container1: {
    backgroundColor: '#000',
    width: widthToDp(29),
    margin: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(1),
    borderRadius: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: widthToDp(1),
  },
  image1: {
    height: widthToDp(25),
    width: widthToDp(27),
    borderRadius: 10,
  },
  title1: {
    fontSize: adjustedFontSize(10),
    fontWeight: '500',
    color: '#fff',
    paddingVertical: widthToDp(1),
  },
});

export {style1, style2};
