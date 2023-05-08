const {StyleSheet} = require('react-native');
const {
  widthToDp,
  heightToDp,
  adjustedFontSize,
} = require('../../../Utils/dimensionsInPixel');

const styles1 = StyleSheet.create({
  bgimage: {
    flex: 1,
    color: 'red',
  },
  container1: {
    flex: 1,
    backgroundColor: '#006880aa',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container2: {
    width: widthToDp(30),
    height: widthToDp(30),
    // backgroundColor: '#ffffffaa',
    borderRadius: widthToDp(40) / 2,
  },
  btn1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn2: {
    position: 'absolute',
    top: widthToDp(3),
    left: widthToDp(3),
  },
  btn3: {
    position: 'absolute',
    top: widthToDp(3),
    right: widthToDp(3),
  },
});

const styles3 = StyleSheet.create({
  container1: {
    height: heightToDp(75),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: widthToDp(6),
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    paddingTop: widthToDp(8),
    elevation: 2,
  },
  container2: {
    borderBottomWidth: widthToDp(0.2),
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn1: {
    padding: widthToDp(2),
    borderRadius: 50,
  },
  container4: {},
  container5: {
    position: 'absolute',
    top: -48,
    alignSelf: 'center',
    borderWidth: widthToDp(1.5),
    borderRadius: 100,
  },
  image: {
    width: widthToDp(24),
    height: widthToDp(24),
    borderRadius: widthToDp(24) / 2,
  },
  container6: {
    paddingVertical: widthToDp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: 'bold',
  },

  container7: {
    flex: 1,
  },
  container8: {
    paddingHorizontal: widthToDp(8),
  },
  btn2: {
    paddingVertical: widthToDp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
    borderBottomWidth: widthToDp(0.5),
  },

  title2: {
    fontSize: adjustedFontSize(12),
    fontWeight: '400',
  },
  btn3: {
    paddingVertical: widthToDp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: widthToDp(3),
    borderBottomWidth: widthToDp(0.5),
  },
  btn4: {
    paddingVertical: widthToDp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthToDp(3),
  },
});

const styles2 = StyleSheet.create({
  container1: {
    backgroundColor: '#00d9ff',
    height: heightToDp(32.5),
    paddingTop: widthToDp(5),
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  container2: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: widthToDp(2),
    paddingLeft: widthToDp(5),
  },
  title: {
    fontSize: adjustedFontSize(20),
    color: '#fff',
    fontWeight: 'bold',
  },
  btn: {
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(2.5),
    backgroundColor: '#cff4fc',
    borderRadius: 200,
  },
});

export {styles1, styles2, styles3};
