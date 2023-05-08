const {StyleSheet} = require('react-native');
const {
  heightToDp,
  widthToDp,
  adjustedFontSize,
} = require('../../../Utils/dimensionsInPixel');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
  },
  carView: {
    height: heightToDp(55),
    backgroundColor: '#cff4fc',
    marginHorizontal: widthToDp(2),
    elevation: 20,
    borderRadius: 30,
  },
  headingContainer: {
    paddingVertical: widthToDp(2.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingTitle: {
    fontSize: adjustedFontSize(14),
    fontWeight: '500',
    color: '#000',
  },
  contentContainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingVertical: widthToDp(4),
  },
  googleAndAppleIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIconContainer: {
    height: heightToDp(5),
    width: heightToDp(5),
    borderRadius: heightToDp(5) / 2,
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: widthToDp(1.2),
  },
  appleIconContainer: {
    height: heightToDp(5),
    width: heightToDp(5),
    borderRadius: heightToDp(5) / 2,
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: widthToDp(1),
  },
  inputAreaTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: widthToDp(1),
  },
  inputAreaContainer: {
    paddingVertical: widthToDp(2.2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: widthToDp(70),
    borderRadius: 20,
    marginBottom: heightToDp(1),
  },
  input: {
    height: heightToDp(6),
    fontSize: adjustedFontSize(10),
  },
  forgetPasswordTouchableContainer: {},
  forgetPassTitleContainer: {
    alignSelf: 'flex-end',
    marginRight: widthToDp(10),
    marginVertical: heightToDp(1),
  },
  loginTitleContainer: {
    backgroundColor: '#00d9ff',
    height: heightToDp(6),
    width: widthToDp(70),
    marginVertical: widthToDp(2),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: adjustedFontSize(13.5),
    fontWeight: '600',
    color: '#000',
  },
  registerationTitleContainer: {
    flexDirection: 'row',
    paddingTop: widthToDp(4),
  },
  registerTouchableArea: {
    marginLeft: widthToDp(1.2),
  },
  title: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
    color: '#000',
  },
  touchableTitle: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
    color: '#00d9ff',
  },
});

export {styles};
