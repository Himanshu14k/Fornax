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
  cardView: {
    height: heightToDp(63),
    backgroundColor: '#cff4fc',
    marginHorizontal: widthToDp(2),
    elevation: 20,
    borderRadius: 30,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(2.5),
  },
  headingTitle: {
    fontSize: adjustedFontSize(15),
    fontWeight: '600',
    color: '#00414d',
  },
  contentContainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  nameInputAreaContainer: {
    flexDirection: 'row',
  },
  inputAreaContainer: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInputContainer: {
    width: widthToDp(43),
    borderRadius: 20,
    marginBottom: heightToDp(2),
    marginLeft: heightToDp(1),
  },
  inputContainer: {
    width: widthToDp(70),
    borderRadius: 20,
    marginBottom: heightToDp(2),
  },
  input: {
    height: heightToDp(6),
    fontSize: adjustedFontSize(10),
  },
  passwordInputAreaContainer: {
    flexDirection: 'row',
  },
  passwordInputContainer: {
    width: widthToDp(43),
    borderRadius: 20,
    marginBottom: heightToDp(2),
    marginLeft: heightToDp(1),
  },
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
    fontSize: adjustedFontSize(13),
    fontWeight: '600',
    color: '#000',
  },
  registerationTitleContainer: {
    flexDirection: 'row',
    paddingTop: widthToDp(2),
  },
  registerTouchableArea: {
    paddingLeft: widthToDp(2),
  },
  title: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
    color: '#000',
  },
  touchableTitle: {
    fontSize: adjustedFontSize(10.5),
    fontWeight: '600',
    color: '#00d9ff',
  },
  container2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(1.5),
  },
  btn1: {
    padding: widthToDp(1),
  },
  btn2: {
    paddingHorizontal: widthToDp(0.5),
  },
  title1: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
    color: '#00d9ff',
  },
});

export {styles};
