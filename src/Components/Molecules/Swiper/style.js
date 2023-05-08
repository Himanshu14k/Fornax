const {StyleSheet} = require('react-native');
const {widthToDp} = require('../../../Utils/dimensionsInPixel');

const styles = StyleSheet.create({
  sliderContainer: {
    marginVertical: widthToDp(2),
    marginHorizontal: widthToDp(1),
    height: widthToDp(40),
    borderRadius: 10,
  },
  slide: {
    borderRadius: 10,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export {styles};
