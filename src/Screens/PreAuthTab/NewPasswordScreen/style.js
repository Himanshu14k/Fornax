const {StyleSheet} = require('react-native');
const {
  widthToDp,
  adjustedFontSize,
  heightToDp,
} = require('../../../Utils/dimensionsInPixel');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
  },
  carView: {
    height: heightToDp(41),
    backgroundColor: '#cff4fc',
    marginHorizontal: widthToDp(2),
    elevation: 20,
    borderRadius: 30,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(2),
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
    alignItems: 'center',
    paddingVertical: widthToDp(5),
  },
  titleHeaderContainer: {
    width: widthToDp(70),
  },
  titleHeader: {
    fontSize: adjustedFontSize(12),
    fontWeight: '400',
    color: '#000',
  },

  inputContainer: {
    width: widthToDp(70),
    marginBottom: heightToDp(2),
  },
  input: {
    height: heightToDp(5),
    fontSize: adjustedFontSize(10),
  },
  submitButton: {
    width: widthToDp(70),
    marginTop: widthToDp(1),
    paddingVertical: widthToDp(3),
    borderRadius: 10,
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtontitle: {
    fontSize: adjustedFontSize(13),
    fontWeight: '500',
    color: '#000',
  },
  backToSign: {
    paddingTop: widthToDp(5),
  },
  backToSignTitle: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
    color: '#00d9ff',
  },
});
export {styles};
