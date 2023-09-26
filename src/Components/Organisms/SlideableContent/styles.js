import {StyleSheet} from 'react-native';
import {
  adjustedFontSize,
  widthToDp,
  windowWidth,
} from '../../../Utils/dimensionsInPixel';

const style1 = StyleSheet.create({
  container1: {
    backgroundColor: 'pink',
    marginHorizontal: widthToDp(1),
    paddingVertical: widthToDp(2),
    marginTop: widthToDp(0.5),
    marginBottom: widthToDp(1),
    borderRadius: 10,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp(2),
    paddingVertical: widthToDp(1),
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
  container3: {
    paddingVertical: widthToDp(2),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container4: {
    backgroundColor: '#000',
    width: widthToDp(45),
    padding: widthToDp(1),
    marginHorizontal: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  imageContainer: {
    paddingBottom: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    width: widthToDp(43),
    height: widthToDp(40),
    borderRadius: 10,
    //resizeMode: 'cover',
  },
  title2: {
    paddingVertical: widthToDp(1),
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
    color: '#fff',
  },
});

const style2 = StyleSheet.create({
  container1: {
    backgroundColor: 'pink',
    marginHorizontal: widthToDp(1),
    paddingVertical: widthToDp(2),
    marginTop: widthToDp(0.5),
    marginBottom: widthToDp(1),
    borderRadius: 10,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp(2),
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
  btn1: {
    padding: widthToDp(1),
  },
  container3: {
    paddingVertical: widthToDp(2),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container4: {
    backgroundColor: '#000',
    width: widthToDp(65),
    maxHeight: widthToDp(50),
    marginHorizontal: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    width: widthToDp(65),
    height: widthToDp(30),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'contain',
  },
  container5: {
    flex: 1,
    padding: widthToDp(1),
  },
  title2: {
    paddingVertical: widthToDp(1),
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
    color: '#fff',
  },
});

const style3 = StyleSheet.create({
  container1: {
    marginHorizontal: widthToDp(1),
    marginVertical: widthToDp(0.5),
    paddingVertical: widthToDp(2),
    borderRadius: 10,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp(2),
    paddingBottom: widthToDp(2),
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
  btn1: {
    padding: widthToDp(1),
  },
  container3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // alignItems: 'center',
  },
  container4: {
    width: widthToDp(32),
    maxHeight: widthToDp(25),
    paddingVertical: widthToDp(1),
    paddingHorizontal: widthToDp(2),
    marginHorizontal: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    paddingTop: widthToDp(1),
    paddingBottom: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    width: widthToDp(16),
    height: widthToDp(16),
    borderRadius: widthToDp(16) / 2,
    // backgroundColor: 'violet',
  },
  title2: {
    // flex: 1,
    fontSize: adjustedFontSize(10),
    fontWeight: '500',
  },
});

const style4 = StyleSheet.create({
  container1: {
    flex: 1,
    paddingHorizontal: widthToDp(1),
    paddingVertical: widthToDp(5),
    backgroundColor: '#005266aa',
  },
  container2: {
    flex: 1,
    paddingVertical: widthToDp(3),
    borderRadius: 10,
  },
  container3: {
    flexDirection: 'row',
    paddingBottom: widthToDp(3),
    paddingHorizontal: widthToDp(2),
    borderBottomWidth: widthToDp(0.6),
    alignItems: 'center',
  },
  btn1: {
    paddingRight: widthToDp(5),
  },
  title1: {
    fontSize: adjustedFontSize(13),
    fontWeight: '500',
  },
  container4: {
    flexGrow: 1,
    paddingBottom: widthToDp(3),
    paddingTop: widthToDp(2),
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container5: {
    width: windowWidth - 20,
    padding: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    width: '100%',
    height: widthToDp(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 20,
  },
  title2: {
    fontSize: adjustedFontSize(14),
    fontWeight: '400',
    color: '#fff',
  },
  container6: {
    position: 'absolute',
    right: widthToDp(5),
    top: widthToDp(5),
  },
});

const style5 = StyleSheet.create({
  container1: {
    flex: 1,
    paddingHorizontal: widthToDp(1),
    paddingVertical: widthToDp(1),
    backgroundColor: '#005266aa',
  },
  container2: {
    flex: 1,
    paddingVertical: widthToDp(3),
    borderRadius: 10,
  },

  container3: {
    flexDirection: 'row',
    paddingBottom: widthToDp(3),
    paddingHorizontal: widthToDp(2),
    borderBottomWidth: widthToDp(0.6),
    alignItems: 'center',
  },
  btn1: {
    paddingRight: widthToDp(5),
  },
  title1: {
    fontSize: adjustedFontSize(13),
    fontWeight: '500',
  },
  container4: {
    flexGrow: 1,
    paddingBottom: widthToDp(3),
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container5: {
    width: widthToDp(45),
    paddingVertical: widthToDp(1),
    paddingHorizontal: widthToDp(2),
    margin: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    paddingVertical: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    width: widthToDp(16),
    height: widthToDp(16),
    borderRadius: widthToDp(16) / 2,
    backgroundColor: 'violet',
  },
  title2: {
    fontSize: adjustedFontSize(10.5),
    fontWeight: '400',
  },
});

const SLIDE_WIDTH = 170; // Set the slide width to 100 pixels
const TOTAL_SLIDES = 7; // Total number of slides

const style6 = StyleSheet.create({
  container1: {
    paddingVertical: 20,
  },
  container2: {
    flexGrow: 1,
  },
  container3: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SLIDE_WIDTH,
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img1: {
    height: 200,
    width: SLIDE_WIDTH,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export {style2, style1, style3, style4, style5, style6};
