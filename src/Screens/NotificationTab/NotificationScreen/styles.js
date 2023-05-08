const {StyleSheet} = require('react-native');
const {
  widthToDp,
  adjustedFontSize,
} = require('../../../Utils/dimensionsInPixel');

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {
    flexGrow: 1,
    padding: widthToDp(1),
  },
  container3: {
    borderRadius: 10,
    padding: widthToDp(2),
    flexDirection: 'row',
  },
  container4: {
    paddingHorizontal: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: widthToDp(12),
    height: widthToDp(12),
    borderRadius: widthToDp(12) / 2,
    backgroundColor: '#00d9ff',
  },
  container5: {
    flex: 1,
    paddingHorizontal: widthToDp(2),
    justifyContent: 'center',
    // alignItems: 'center',
  },
  title1: {
    paddingVertical: widthToDp(0.5),
  },
  title2: {
    paddingVertical: widthToDp(0.5),
  },
  container6: {
    justifyContent: 'center',
  },
  btn1: {
    paddingVertical: widthToDp(2),
  },
  seprator: {
    height: widthToDp(1),
  },
  container7: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container8: {
    width: '100%',
    paddingVertical: widthToDp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title3: {
    fontSize: adjustedFontSize(14),
    fontWeight: '500',
  },
});

export {styles};
