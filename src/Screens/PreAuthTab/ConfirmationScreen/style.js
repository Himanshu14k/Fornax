import {StyleSheet} from 'react-native';
import {
  adjustedFontSize,
  heightToDp,
  widthToDp,
} from '../../../Utils/dimensionsInPixel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
  },
  carView: {
    height: heightToDp(52),
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
    width: widthToDp(72),
  },
  titleHeader: {
    fontSize: adjustedFontSize(11.5),
    fontWeight: '400',
    color: '#000',
  },
  titleContainer: {
    width: widthToDp(70),
    borderWidth: 1,
    borderColor: '#00d9ff',
    paddingVertical: widthToDp(2),
    paddingLeft: widthToDp(3),
    marginTop: widthToDp(2),
    marginBottom: widthToDp(5),
  },
  title: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
    color: '#737373',
  },
  inputContainer: {
    width: widthToDp(72),
    marginBottom: heightToDp(2),
  },
  input: {
    height: heightToDp(5),
    fontSize: adjustedFontSize(10),
  },
  submitButton: {
    width: widthToDp(70),
    paddingVertical: widthToDp(2.5),
    marginTop: widthToDp(1),
    backgroundColor: '#00d9ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtontitle: {
    fontSize: adjustedFontSize(13),
    fontWeight: '500',
    color: '#000',
  },
  touchableContainer: {
    width: widthToDp(70),
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: widthToDp(4),
  },
  touchable: {},
  touchableTitle: {
    fontSize: adjustedFontSize(11.5),
    fontWeight: '500',
    color: '#00d9ff',
  },
});

export {styles};
