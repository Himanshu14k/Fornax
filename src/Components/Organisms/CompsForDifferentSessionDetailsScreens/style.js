import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const styles1 = StyleSheet.create({
  container: {
    marginHorizontal: widthToDp(1),
    marginTop: widthToDp(1),
    paddingVertical: widthToDp(2),
    borderRadius: 10,
  },
  container1: {
    flexDirection: 'row',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
  },
  image1: {
    height: widthToDp(16),
    width: widthToDp(16),
    borderRadius: widthToDp(16) / 2,
    resizeMode: 'cover',
  },
  container3: {
    flex: 1,
    paddingHorizontal: widthToDp(2),
  },
  container4: {
    justifyContent: 'center',

    paddingVertical: widthToDp(1),
  },
  title1: {
    fontSize: adjustedFontSize(11.5),
    fontWeight: '700',
  },
  container5: {
    justifyContent: 'center',
    paddingVertical: widthToDp(1),
  },
  title2: {
    fontWeight: '500',
    fontSize: adjustedFontSize(10.5),
  },
  container6: {
    flexDirection: 'row',
    paddingTop: widthToDp(2),
    paddingBottom: widthToDp(2),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn1: {
    flexDirection: 'row',
    borderWidth: widthToDp(0.7),
    paddingHorizontal: widthToDp(4),
    paddingVertical: widthToDp(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  title3: {
    paddingLeft: widthToDp(1.5),
    fontSize: adjustedFontSize(10),
    fontWeight: '500',
  },
});

const styles2 = StyleSheet.create({
  container1: {
    marginHorizontal: widthToDp(1),
    marginBottom: widthToDp(1),
    padding: widthToDp(3),
    borderRadius: 10,
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '700',
  },
  container2: {
    margin: widthToDp(2),
    padding: widthToDp(3),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  title2: {
    fontSize: adjustedFontSize(10.5),
    fontWeight: '500',
  },
  container3: {
    paddingHorizontal: widthToDp(4),
    paddingVertical: widthToDp(3),
  },
  btn1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title3: {
    color: '#00d9ff',
    paddingLeft: widthToDp(3),
  },
});

const styles3 = StyleSheet.create({
  container1: {
    margin: widthToDp(1),
    borderRadius: 10,
    paddingRight: widthToDp(2),
    paddingLeft: widthToDp(4),
    paddingTop: widthToDp(1),
    paddingBottom: widthToDp(3),
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: widthToDp(3),
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '700',
  },
  btn1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
  },
  title2: {
    fontSize: adjustedFontSize(12),
    fontWeight: '700',
  },
  container: {
    borderWidth: widthToDp(0.5),
    borderRadius: 10,
    padding: widthToDp(1),
  },
  container3: {
    flexDirection: 'row',
    paddingVertical: widthToDp(2),
  },
  container4: {
    width: widthToDp(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title3: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
  container5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title4: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
});

const styles4 = StyleSheet.create({
  container1: {
    flexGrow: 1,
    padding: widthToDp(1),
  },
  container2: {
    borderRadius: 10,
    paddingVertical: widthToDp(3),
    paddingLeft: widthToDp(5),
    paddingRight: widthToDp(2),
  },
  title1: {
    paddingBottom: widthToDp(4),
    fontSize: adjustedFontSize(12),
    fontWeight: '700',
    alignSelf: 'center',
  },
  container3: {
    flexDirection: 'row',
    paddingVertical: widthToDp(1.3),
  },
  title2: {
    width: widthToDp(45),
    fontWeight: '500',
  },
  title3: {
    flex: 1,
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  container4: {},
  container5: {
    marginTop: widthToDp(1),
    borderRadius: 10,
  },
  container6: {
    flexDirection: 'row',
    paddingHorizontal: widthToDp(2),
    paddingVertical: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container7: {
    flex: 0.5,
    paddingLeft: widthToDp(3),
    justifyContent: 'center',
  },
  container8: {
    flex: 0.3,
    justifyContent: 'center',
  },
  title4: {
    fontWeight: '500',
  },
  container9: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title5: {
    fontWeight: '500',
    color: '#00cc00',
  },
  container10: {
    flexDirection: 'row',
    borderTopWidth: widthToDp(0.6),
  },
  btn1: {
    flex: 1,
    paddingVertical: widthToDp(2.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  seprator: {
    width: widthToDp(0.8),
  },
});

const styles5 = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#005266aa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthToDp(1),
  },
  container2: {
    width: '100%',
    paddingVertical: widthToDp(5),
    borderRadius: 10,
  },
  container3: {
    marginVertical: widthToDp(1),
    paddingVertical: widthToDp(2),
    paddingHorizontal: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(14),
    fontWeight: '500',
  },
  container4: {
    paddingHorizontal: widthToDp(8),
  },
  title2: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
  container5: {
    paddingVertical: widthToDp(2),
  },
  container6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: widthToDp(4),
    paddingHorizontal: widthToDp(5),
  },
  btn1: {
    height: widthToDp(14),
    width: widthToDp(14),
    borderRadius: widthToDp(16) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: widthToDp(0.4),
    elevation: 1,
  },
  container7: {
    height: widthToDp(10),
    alignSelf: 'center',
    borderWidth: widthToDp(0.5),
    borderRadius: 5,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  inputStyle1: {
    fontSize: adjustedFontSize(10),
    height: widthToDp(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  container8: {
    flexDirection: 'row',
    paddingVertical: widthToDp(6),
  },
  container9: {
    flexDirection: 'row',
  },
  container10: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle2: {
    marginVertical: widthToDp(4),
  },
  container11: {
    alignSelf: 'center',
    paddingHorizontal: widthToDp(1),
  },
  container12: {
    flex: 1,
    alignItems: 'flex-end',
    paddingVertical: widthToDp(3),
  },
  container13: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title3: {
    fontSize: adjustedFontSize(13),
    fontWeight: '400',
    paddingRight: widthToDp(2),
  },
  container14: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: widthToDp(4),
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: widthToDp(2),
  },
  btn2: {
    paddingVertical: widthToDp(3),
    paddingHorizontal: widthToDp(6),
    borderWidth: widthToDp(0.5),
    borderRadius: 20,
  },
  container15: {
    flex: 1,
    paddingHorizontal: widthToDp(2),
  },
  title5: {
    paddingBottom: widthToDp(2),
  },
  title4: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(10),
  },
  container16: {
    marginLeft: widthToDp(3),
    height: widthToDp(10),
    width: widthToDp(35),
    borderWidth: widthToDp(0.5),
    borderRadius: 12,
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
  rightIconStyle: {
    width: widthToDp(5.5),
    height: widthToDp(5.5),
  },
  container18: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: widthToDp(2),
  },
  btn: {
    paddingHorizontal: widthToDp(5),
    paddingVertical: widthToDp(3),
    borderWidth: widthToDp(0.8),
    borderColor: 'blue',
    borderRadius: 20,
  },
  btnn: {
    backgroundColor: '#00d9ff',
    paddingHorizontal: widthToDp(6),
    paddingVertical: widthToDp(3.5),
    borderRadius: 20,
  },
});

const styles6 = StyleSheet.create({
  container: {
    margin: widthToDp(1),
    borderRadius: 10,
  },
  container1: {
    flexDirection: 'row',
    padding: widthToDp(3),
  },
  header: {
    // backgroundColor: '#00d9ff',
    paddingHorizontal: widthToDp(4),
    paddingVertical: widthToDp(2),
    marginHorizontal: widthToDp(2),
    borderRadius: 15,
    borderWidth: widthToDp(0.6),
  },
  title: {
    color: '#000',
    fontWeight: '500',
  },
  container2: {
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(1),
  },
  container3: {
    flexDirection: 'row',
    paddingVertical: widthToDp(1.5),
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
    paddingHorizontal: widthToDp(2),
  },
  container4: {
    width: widthToDp(35),
    justifyContent: 'center',
  },
  container5: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title3: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
    paddingHorizontal: widthToDp(2),
  },
  container6: {
    paddingVertical: widthToDp(1),
  },
  container7: {},
  container8: {
    paddingHorizontal: widthToDp(6),
    paddingVertical: widthToDp(2),
  },
  container9: {
    paddingVertical: widthToDp(1),
  },
  title4: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  container10: {
    marginHorizontal: widthToDp(10),
    paddingVertical: widthToDp(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  image: {
    width: widthToDp(50),
    height: widthToDp(60),
    resizeMode: 'cover',
  },
});

const styles7 = StyleSheet.create({
  container1: {
    marginHorizontal: widthToDp(1),
    paddingHorizontal: widthToDp(3),
    //marginBottom: widthToDp(1),
    paddingVertical: widthToDp(2),
    borderRadius: 10,
  },
  container2: {
    borderBottomWidth: widthToDp(0.4),
    paddingVertical: widthToDp(1),
    paddingHorizontal: widthToDp(2),
  },
  title1: {
    fontSize: adjustedFontSize(13),
    fontWeight: '500',
    paddingBottom: widthToDp(3),
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: widthToDp(1),
  },
  title2: {
    fontWeight: '500',
    fontSize: adjustedFontSize(10.5),
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: widthToDp(2),
  },
  title3: {
    fontWeight: '500',
    fontSize: adjustedFontSize(10.5),
  },
  title4: {
    fontWeight: '500',
    fontSize: adjustedFontSize(11),
  },
});

const styles8 = StyleSheet.create({
  container1: {
    margin: widthToDp(1),
    borderRadius: 10,
    paddingHorizontal: widthToDp(2),
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthToDp(3),
    borderBottomWidth: widthToDp(0.7),
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    flexDirection: 'row',
    paddingVertical: widthToDp(4),
    paddingHorizontal: widthToDp(2),
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: widthToDp(1.5),
    paddingHorizontal: widthToDp(2),
  },

  btn2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(3),
    borderRightWidth: widthToDp(0.2),
  },

  btn3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(3),
    borderLeftWidth: widthToDp(0.2),
  },
  title1: {
    fontSize: adjustedFontSize(11.5),
    fontWeight: '600',
    paddingLeft: widthToDp(2),
  },
});

export {styles1, styles2, styles3, styles4, styles5, styles6, styles7, styles8};
