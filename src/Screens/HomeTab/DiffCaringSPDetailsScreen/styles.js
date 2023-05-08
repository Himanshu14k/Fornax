const {StyleSheet} = require('react-native');
const {
  widthToDp,
  adjustedFontSize,
} = require('../../../Utils/dimensionsInPixel');

const styles1 = StyleSheet.create({
  container1: {
    marginVertical: widthToDp(1),
    borderRadius: 10,
    paddingVertical: widthToDp(3),
    paddingHorizontal: widthToDp(3),
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: adjustedFontSize(12),
    // paddingBottom: widthToDp(4),
    // paddingTop: widthToDp(2),
    fontWeight: '700',
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(2),
    borderBottomWidth: widthToDp(0.2),
  },
  title1: {
    width: widthToDp(30),
    alignSelf: 'center',
    fontSize: adjustedFontSize(10),
    fontWeight: '500',
  },
  title2: {
    flex: 1,
    fontSize: adjustedFontSize(10),
  },
});

const styles2 = StyleSheet.create({
  container1: {
    borderRadius: 10,
    paddingBottom: widthToDp(1),
    paddingHorizontal: widthToDp(3),
  },
  headerTitle: {
    fontSize: adjustedFontSize(12),
    paddingBottom: widthToDp(4),
    paddingTop: widthToDp(2),
    fontWeight: '700',
  },
  container2: {
    paddingVertical: widthToDp(2),
    borderBottomWidth: widthToDp(0.2),
  },
  title1: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
});

const styles3 = StyleSheet.create({
  container1: {
    flexGrow: 1,
  },
  container2: {
    marginVertical: widthToDp(1),
    paddingVertical: widthToDp(3),
    borderRadius: 10,
  },
  container3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: widthToDp(5),
    paddingBottom: widthToDp(2),
  },
  container5: {
    flex: 1,
    paddingHorizontal: widthToDp(2),
  },
  title2: {
    paddingBottom: widthToDp(3),
  },
  title3: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(10),
  },

  rightIconStyle: {
    width: widthToDp(5.5),
    height: widthToDp(5.5),
  },
  container6: {
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
  container7: {
    marginLeft: widthToDp(3),
    paddingHorizontal: widthToDp(2),
    height: widthToDp(10),
    width: widthToDp(35),
    borderWidth: widthToDp(0.5),
    borderRadius: 12,
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
  inputStyles: {
    fontSize: adjustedFontSize(10),
    height: widthToDp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container8: {
    marginBottom: widthToDp(1),
    padding: widthToDp(3),
    borderRadius: 10,
  },
  container9: {
    borderBottomWidth: 0.2,
    paddingBottom: widthToDp(3),
  },
  container10: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: widthToDp(3),
    paddingHorizontal: widthToDp(2),
  },
  title4: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
  container11: {
    marginLeft: widthToDp(3),
    height: widthToDp(10),
    width: widthToDp(35),
    borderWidth: widthToDp(0.5),
    borderRadius: 12,
    padding: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title5: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
    paddingHorizontal: widthToDp(3),
  },
  container12: {
    paddingTop: widthToDp(5),
    paddingHorizontal: widthToDp(3),
    paddingBottom: widthToDp(2),
  },
  container13: {
    marginHorizontal: widthToDp(5),
    paddingHorizontal: widthToDp(2),
    height: widthToDp(10),
    borderWidth: widthToDp(0.5),
    borderRadius: 12,
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
  inputStyles2: {
    fontSize: adjustedFontSize(10),
    height: widthToDp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container14: {},
  container15: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(5),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: widthToDp(2),
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
  container16: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: widthToDp(1),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btn1: {
    maxWidth: widthToDp(37),
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
  title6: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
  title7: {
    flex: 1,
    fontSize: adjustedFontSize(9),
    fontWeight: '600',
    color: '#404040',
  },
});

export {styles1, styles2, styles3};
