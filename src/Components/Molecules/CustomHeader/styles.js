const {StyleSheet, StatusBar} = require('react-native');
const {
  adjustedFontSize,
  widthToDp,
  heightToDp,
} = require('../../../Utils/dimensionsInPixel');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00d9ff',
    height: StatusBar.currentHeight + heightToDp(6.5),
    // paddingBottom: heightToDp(4)
  },
  container1: {
    flex:1,
    flexDirection: 'row',
    // backgroundColor: '#00d9ff',
  },
  container2: {
    // height: '100%',
    width: widthToDp(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(16.5),
    fontWeight: 'bold',
    color: '#00414d',
    //fontFamily: 'sans-serif-light',
    //fontFamily: 'sans-serif-thin',
    //fontFamily: 'serif',
  },
  btn1: {
    // height: '100%',
    width: widthToDp(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: widthToDp(2),
  },
  title3: {
    fontSize: adjustedFontSize(15),
    fontWeight: 'bold',
    color: '#000000',
    //fontFamily: 'sans-serif-light',
  },
  container4: {
    // height: '100%',
    paddingVertical: heightToDp(1.5),
    width: widthToDp(11),
    justifyContent: 'center',
    // alignItems: 'center',
  },
  container5: {
    // height: '100%',
    paddingVertical: heightToDp(1.5),
    width: widthToDp(11),
    justifyContent: 'center',
    // alignItems: 'center',
  },
  badge1: {
    position: 'absolute',
    right: widthToDp(0.75),
    top: widthToDp(1.3),
    width: widthToDp(4),
    height: widthToDp(4),
    borderRadius: widthToDp(5) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge2: {
    position: 'absolute',
    right: widthToDp(1.5),
    top: widthToDp(1),
    width: widthToDp(4),
    height: widthToDp(4),
    borderRadius: widthToDp(5) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title2: {
    fontSize: adjustedFontSize(8),
    fontWeight: '500',
  },
  container6: {
    // height: '100%',
    // width: widthToDp(13),
    paddingHorizontal: widthToDp(2),
    justifyContent: 'center',
    // alignItems: 'center',
  },
  image1: {
    width: widthToDp(9),
    height: widthToDp(9),
    borderRadius: widthToDp(10) / 2,
    resizeMode: 'contain',
  },
  container7: {
    flex: 1,
    justifyContent: 'center',
  },
  container8: {
    paddingHorizontal: widthToDp(2),
    borderWidth: widthToDp(0.1),
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    alignItems: 'center',
  },
  input1: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
    height: widthToDp(9),
    paddingLeft: widthToDp(2),
  },
});

export {styles};
