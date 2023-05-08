const {StyleSheet} = require('react-native');
const {
  widthToDp,
  adjustedFontSize,
} = require('../../../Utils/dimensionsInPixel');

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingHorizontal: widthToDp(1),
  },
  container2: {
    height: widthToDp(15),
  },
  container4: {
    flexGrow: 1,
    paddingVertical: widthToDp(1),
  },
  container5: {
    borderRadius: 10,
    flexDirection: 'row',
  },
  container6: {
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
  container7: {
    flex: 1,
    paddingHorizontal: widthToDp(2),
  },
  container8: {
    paddingTop: widthToDp(2),
    paddingBottom: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(11),
    fontWeight: '700',
  },
  container9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: widthToDp(1),
  },
  container10: {
    flexDirection: 'row',
    paddingVertical: widthToDp(1),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container11: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: widthToDp(1),
  },
  title2: {
    fontSize: adjustedFontSize(10.5),
    fontWeight: '500',
    paddingLeft: widthToDp(1),
  },
  seprator: {
    height: widthToDp(1),
  },
  container12: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container13: {
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
