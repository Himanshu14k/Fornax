import {StyleSheet} from 'react-native';
import {
  adjustedFontSize,
  heightToDp,
  widthToDp,
} from '../../../Utils/dimensionsInPixel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: heightToDp(1),
    margin: widthToDp(1),
    borderRadius: 10,
  },

  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: widthToDp(2),
  },
  headerTitle: {
    fontSize: adjustedFontSize(14),
    fontWeight: '500',
  },
  contentContainer: {
    flexGrow: 1,
    // marginHorizontal: widthToDp(1),
    marginTop: widthToDp(1),
    paddingHorizontal: widthToDp(3),
  },

  submitAndResetbtncontainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginHorizontal: widthToDp(1),
    paddingTop: heightToDp(2),
    paddingBottom: widthToDp(6),
    borderRadius: 10,
  },
  resetBtn: {
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: heightToDp(4),
    paddingVertical: widthToDp(2),
    borderRadius: 20,
  },
  bookAppoiment: {
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: heightToDp(4),
    paddingVertical: widthToDp(2),
    borderRadius: 20,
  },
  btnTitle: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
    color: '#000',
  },

  container2: {
    paddingTop: widthToDp(5),
    paddingBottom: widthToDp(2),
  },
  container3: {
    height: heightToDp(6),
    marginTop: heightToDp(1.8),
    borderWidth: widthToDp(0.5),
    borderRadius: 15,
    paddingVertical: widthToDp(2),
    paddingHorizontal: widthToDp(3.5),
  },
  container4: {
    marginLeft: widthToDp(3),
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },

  title2: {
    fontWeight: '500',
    fontSize: adjustedFontSize(14),
  },
  title3: {
    // paddingLeft: widthToDp(2),
    // fontSize: adjustedFontSize(10),
    // fontWeight: '400',
    fontSize: adjustedFontSize(14),
    fontWeight: '400',
  },
  rightIconStyle: {
    width: widthToDp(5.5),
    height: widthToDp(5.5),
  },
  container5: {
    marginTop: heightToDp(1.8),
    paddingHorizontal: widthToDp(2),
    borderWidth: widthToDp(0.5),
    borderRadius: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: heightToDp(6),
  },
  container14: {
    height: heightToDp(15),
    paddingVertical: heightToDp(0.6),
  },
  input1: {
    fontSize: adjustedFontSize(14),
    paddingLeft: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container7: {
    flex: 1,
    paddingTop: widthToDp(5),
    paddingBottom: widthToDp(2),
  },
  container8: {
    flex: 1,
    paddingTop: widthToDp(5),
    paddingBottom: widthToDp(2),
  },
  container9: {
    paddingVertical: widthToDp(3),
  },
  container10: {},
  container11: {
    flexDirection: 'row',
    height: heightToDp(6),
    marginTop: heightToDp(2),
    borderWidth: widthToDp(0.5),
    borderRadius: 15,
    paddingVertical: widthToDp(2),
    paddingHorizontal: widthToDp(3.5),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container12: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    maxWidth: widthToDp(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00d9ff',
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(2),
    marginHorizontal: widthToDp(2),
    marginTop: widthToDp(2),
    borderRadius: 10,
  },
  title4: {
    // paddingLeft: widthToDp(2),
    // fontSize: adjustedFontSize(10),
    // fontWeight: '400',
    fontSize: adjustedFontSize(14),
    fontWeight: '400',
  },
  title5: {
    flex: 1,
    fontSize: adjustedFontSize(10),
    fontWeight: '600',
    color: '#404040',
  },
  input2: {
    fontSize: adjustedFontSize(14),
    paddingLeft: widthToDp(2),
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
    
    textAlignVertical: 'top',
  },
  container13: {
    flexDirection: 'row',
    marginTop: widthToDp(3),
    marginLeft: widthToDp(3),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
    height: widthToDp(10),
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
  },
  title6: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
});

export default styles;
