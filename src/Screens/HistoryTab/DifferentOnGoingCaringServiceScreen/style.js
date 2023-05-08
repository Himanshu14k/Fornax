const {StyleSheet} = require('react-native');
const {
  widthToDp,
  adjustedFontSize,
} = require('../../../Utils/dimensionsInPixel');

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#006880aa',
  },
  blankSpace: {
    flex: 1,
  },
  container2: {
    width: '100%',
    paddingVertical: widthToDp(10),
    paddingHorizontal: widthToDp(2),
    borderRadius: 10,
  },
  container3: {},
  container4: {
    padding: widthToDp(2),
    borderWidth: widthToDp(0.7),
    marginLeft: widthToDp(5),
    marginTop: widthToDp(4),
  },
  container5: {
    flexDirection: 'row',
    paddingTop: widthToDp(10),
    paddingHorizontal: widthToDp(5),
  },
  input: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
  },
  btn1: {
    flex: 1,
    paddingHorizontal: widthToDp(8),
    paddingVertical: widthToDp(2.5),
    backgroundColor: '#00d9fff2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btn2: {
    flex: 1,
    paddingHorizontal: widthToDp(8),
    paddingVertical: widthToDp(2.5),
    borderWidth: widthToDp(0.7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
    color: '#000',
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
    color: '#000',
  },
});

export {styles};
