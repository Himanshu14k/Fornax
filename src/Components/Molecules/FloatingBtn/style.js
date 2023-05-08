const {StyleSheet} = require('react-native');
const {widthToDp} = require('../../../Utils/dimensionsInPixel');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: widthToDp(1),
    paddingVertical: widthToDp(4),
    borderRadius: 10,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthToDp(8),
    paddingVertical: widthToDp(2.5),
    borderRadius: 30,
  },
  title: {
    fontWeight: '500',
  },
});

export {styles};
