import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const styles = StyleSheet.create({
  container1: {
    flexGrow: 1,
    marginHorizontal: widthToDp(1),
    marginTop: widthToDp(1),
    borderRadius: 10,
    paddingBottom: widthToDp(5),
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cover: {
    width: '100%',
    height: widthToDp(25),
    resizeMode: 'stretch',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container3: {
    position: 'absolute',
    alignSelf: 'center',
    top: widthToDp(14),
    padding: widthToDp(1),
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    backgroundColor: 'violet',
    width: widthToDp(20),
    height: widthToDp(20),
    borderRadius: widthToDp(20) / 2,
  },
  container4: {
    paddingTop: widthToDp(7),
    paddingHorizontal: widthToDp(3),
  },
  title1: {
    fontSize: adjustedFontSize(11),
    fontWeight: '600',
  },
  container5: {
    marginTop: widthToDp(3),
    marginLeft: widthToDp(3),
    paddingHorizontal: widthToDp(2),
    borderWidth: widthToDp(0.5),
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input1: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
    height: widthToDp(9),
    paddingLeft: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container6: {
    marginLeft: widthToDp(3),
    marginTop: widthToDp(3),
    height: widthToDp(10),
    borderWidth: widthToDp(0.5),
    borderRadius: 7,
    padding: widthToDp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title2: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },

  rightIconStyle: {
    width: widthToDp(5.5),
    height: widthToDp(5.5),
  },
});

export {styles};
