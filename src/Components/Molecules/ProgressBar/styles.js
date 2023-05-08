const {StyleSheet} = require('react-native');
const {
  widthToDp,
  adjustedFontSize,
} = require('../../../Utils/dimensionsInPixel');

/**
 * offsetLayer has transform:[{rotateZ: '-135deg'}] since
 * the offsetLayer rotation is fixed by us.
 **/
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  baselayer: {
    position: 'absolute',
  },
  firstProgressLayer: {
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  secondProgressLayer: {
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  offsetLayer: {
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  display: {
    paddingRight: widthToDp(0.5),
  },
});

const linearProgressBarStyles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: widthToDp(1),
    paddingBottom: widthToDp(0.5),
  },
  title1: {
    flex: 0.05,
    fontSize: adjustedFontSize(10),
    fontWeight: '500',
  },
  container2: {
    flex: 0.65,
    borderRadius: 20,
    justifyContent: 'center',
    marginHorizontal: widthToDp(1),
  },
  progressBar: {
    height: widthToDp(2),
    borderRadius: 20,
  },
  title2: {
    flex: 0.25,
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
});

export {styles, linearProgressBarStyles};
