import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: widthToDp(10),
    alignSelf: 'center',
    maxHeight: widthToDp(80),
    width: widthToDp(80),
    paddingVertical: widthToDp(2),
    borderRadius: 10,
    elevation: 5,
  },
  container2: {
    paddingHorizontal: widthToDp(5),
  },
  container3: {
    padding: widthToDp(3),
    borderBottomWidth: widthToDp(0.2),
  },
  title1: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  inputContainer1: {
    flexDirection: 'row',
    paddingHorizontal: widthToDp(2),
    marginBottom: widthToDp(2),
    marginHorizontal: widthToDp(2),
    borderWidth: widthToDp(0.1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  input1: {
    flex: 1,
    paddingHorizontal: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
    height: widthToDp(9),
  },
  btn1: {
    backgroundColor: '#e5e5e5',
    borderRadius: 30,
  },
});

export {styles};
