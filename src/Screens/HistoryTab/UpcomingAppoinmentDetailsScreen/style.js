const {StyleSheet} = require('react-native');
const {
  widthToDp,
  adjustedFontSize,
} = require('../../../Utils/dimensionsInPixel');

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006880aa',
    paddingHorizontal: widthToDp(1),
  },
  container2: {
    width: '100%',
    paddingVertical: widthToDp(10),
    paddingHorizontal: widthToDp(2),
    borderRadius: 10,
  },
  container3: {},
  container4: {
    borderWidth: widthToDp(0.7),
    marginLeft: widthToDp(5),
    marginTop: widthToDp(4),
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: widthToDp(15),
  },
  input: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
  },
  btn1: {
    paddingHorizontal: widthToDp(5),
    paddingVertical: widthToDp(1.8),
    borderWidth: widthToDp(0.6),
    marginRight: widthToDp(3),
    borderColor: '#00d9ff',
    backgroundColor: '#00d9ff29',
    borderRadius: 10,
  },
  btn2: {
    paddingHorizontal: widthToDp(8),
    paddingVertical: widthToDp(2.5),
    backgroundColor: '#00d9fff2',
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
