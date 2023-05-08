import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const styles1 = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#404040aa',
    justifyContent: 'flex-end',
  },
  container2: {},
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
    paddingVertical: widthToDp(1),
    borderWidth: widthToDp(0.1),
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    padding: widthToDp(1),
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: 'bold',
  },
  title2: {
    color: '#00d9ff',
    fontWeight: '600',
  },
  container5: {
    maxHeight: widthToDp(80),
  },
  container6: {
    flexGrow: 1,
  },
  container7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(2),
  },
  title3: {
    fontWeight: '500',
  },
  title4: {
    fontWeight: '500',
    color: '#fff',
  },
  btn3: {
    marginTop: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(2),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

const styles2 = StyleSheet.create({
  container1: {
    flex: 1,
    margin: widthToDp(1),
    borderRadius: 10,
  },
  container2: {
    flexDirection: 'row',
    padding: widthToDp(2),
  },
  btn1: {
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: widthToDp(1.5),
    paddingHorizontal: widthToDp(3),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: widthToDp(0.5),
  },
  btn2: {
    marginLeft: widthToDp(2),
    borderWidth: widthToDp(0.5),
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: widthToDp(1.5),
    paddingHorizontal: widthToDp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontWeight: '600',
    paddingRight: widthToDp(1),
  },
  container3: {
    flex: 1,
  },
  container4: {},
  container5: {
    paddingVertical: widthToDp(1),
  },
  container6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp(5),
    paddingVertical: widthToDp(1),
    alignItems: 'center',
  },
  container7: {},
  title2: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
  title3: {
    fontWeight: '400',
  },
  title4: {
    fontWeight: '500',
  },
  title5: {
    fontSize: adjustedFontSize(10),
  },
  container9: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title6: {
    paddingRight: widthToDp(2),
    fontSize: adjustedFontSize(10),
    fontWeight: '600',
  },
  image1: {
    backgroundColor: 'red',
    width: widthToDp(7),
    height: widthToDp(7),
  },
  seprator: {
    height: widthToDp(0.5),
  },
});

const styles3 = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#404040aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    width: '96%',
    margin: widthToDp(1),
    borderRadius: 10,
    paddingVertical: widthToDp(2),
    paddingHorizontal: widthToDp(4),
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '600',
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: widthToDp(5),
  },
  container4: {
    flexDirection: 'row',
  },
  image1: {
    width: widthToDp(10),
    height: widthToDp(10),
    borderRadius: widthToDp(10) / 2,
    backgroundColor: '#00d9ff',
  },
  container5: {
    paddingLeft: widthToDp(4),
    justifyContent: 'center',
  },
  image2: {
    width: widthToDp(10),
    height: widthToDp(10),
    backgroundColor: '#00d9ff',
    borderRadius: 5,
  },
  title3: {
    fontWeight: '500',
  },
  btn1: {
    position: 'absolute',
    top: widthToDp(5),
    right: widthToDp(5),
  },
});

export {styles1, styles2, styles3};
