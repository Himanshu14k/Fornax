const {StyleSheet} = require('react-native');
const {
  widthToDp,
  adjustedFontSize,
} = require('../../../Utils/dimensionsInPixel');

const styles1 = StyleSheet.create({
  container1: {
    margin: widthToDp(1),
    borderRadius: 10,
    paddingBottom: widthToDp(2),
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
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'cyan',
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
    paddingTop: widthToDp(1),
    paddingBottom: widthToDp(2),
  },
  container4: {
    marginRight: widthToDp(2),
    maxWidth: widthToDp(62),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
    paddingVertical: widthToDp(1),
    borderRadius: 5,
    elevation: 5,
  },
  title1: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
  },
  container5: {
    padding: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5,
  },
  image3: {
    backgroundColor: 'cyan',
    width: widthToDp(6),
    height: widthToDp(6),
    borderRadius: widthToDp(20) / 2,
    resizeMode: 'cover',
  },
  container6: {
    position: 'absolute',
    top: widthToDp(15),
    left: widthToDp(1.5),
    padding: widthToDp(1),
    borderRadius: widthToDp(13),
    elevation: 5,
  },
  container7: {
    position: 'absolute',
    top: widthToDp(17),
    left: widthToDp(1.5),
    padding: widthToDp(1),
    borderRadius: 5,
  },
  image1: {
    backgroundColor: 'cyan',
    width: widthToDp(18),
    height: widthToDp(18),
    resizeMode: 'cover',
    borderRadius: widthToDp(20) / 2,
  },
  image2: {
    backgroundColor: 'cyan',
    width: widthToDp(16),
    height: widthToDp(16),
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

const styles2 = StyleSheet.create({
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

export {styles1, styles2};
