const {StyleSheet} = require('react-native');
const {
  adjustedFontSize,
  widthToDp,
} = require('../../../Utils/dimensionsInPixel');

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#00d9ff00',
    justifyContent: 'flex-end',
  },
  container2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: widthToDp(3),
  },
  container3: {
    width: widthToDp(30),
  },
  btn1: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: widthToDp(2),
  },
  container4: {
    width: widthToDp(12),
    height: widthToDp(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00d9ff',
    borderRadius: widthToDp(12) / 2,
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  container5: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: widthToDp(3),
    elevation: 20,
  },
  title1: {
    paddingLeft: widthToDp(3),
    fontSize: adjustedFontSize(13),
    fontWeight: '600',
  },
});

export {styles};
