import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const styles1 = StyleSheet.create({
  container1: {
    marginHorizontal: widthToDp(1),
    marginVertical: widthToDp(0.5),
    padding: widthToDp(2),
    borderRadius: 10,
  },
  title1: {
    fontSize: adjustedFontSize(13),
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

const styles2 = StyleSheet.create({
  container1: {
    backgroundColor: '#000',
    width: widthToDp(45),
    margin: widthToDp(0.5),
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
    height: widthToDp(50),
    width: widthToDp(43),
    borderRadius: 10,
  },
  title1: {
    fontSize: adjustedFontSize(11.5),
    fontWeight: '500',
    color: '#fff',
    paddingVertical: widthToDp(1),
  },
});

export {styles1, styles2};
