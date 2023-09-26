import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

//clinicOrHospitalsDetailsSectionStyles
const style1 = StyleSheet.create({
  container1: {
    paddingVertical: widthToDp(3),
    paddingHorizontal: widthToDp(1),
    borderRadius: 10,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: widthToDp(2),
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: 'bold',
  },
  container3: {
    paddingVertical: widthToDp(2),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container4: {
    backgroundColor: '#000',
    width: widthToDp(63),
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
    width: widthToDp(60),
    height: widthToDp(30),
    resizeMode: 'cover',
    borderRadius: 10,
  },
  container5: {
    paddingVertical: widthToDp(1),
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
    color: '#fff',
  },
});

//serviceSectionComponentStyles
const style2 = StyleSheet.create({
  container1: {
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(3),
    borderRadius: 10,
  },
  container2: {},
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: 'bold',
  },
  container3: {
    paddingHorizontal: widthToDp(1),
    paddingVertical: widthToDp(2),
  },
  title2: {
    fontSize: adjustedFontSize(11.4),
    paddingTop: widthToDp(1.2),
    fontWeight: '400',
  },
});

//generalInfoComponentStyles
const style3 = StyleSheet.create({
  container1: {
    marginVertical: widthToDp(1),
    paddingHorizontal: widthToDp(1),
    paddingVertical: widthToDp(3),
    borderRadius: 10,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: 'bold',
  },
  container3: {
    paddingHorizontal: widthToDp(1),
    paddingVertical: widthToDp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title2: {
    fontSize: adjustedFontSize(11.4),
    fontWeight: '400',
  },
  container4: {
    borderRadius: 10,
    marginHorizontal: widthToDp(2),
    paddingHorizontal: widthToDp(2),
    paddingBottom: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container5: {
    borderRadius: 10,
    marginHorizontal: widthToDp(2),
    marginVertical: widthToDp(1),
    padding: widthToDp(2),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title3: {
    fontSize: adjustedFontSize(11.5),
    fontWeight: '700',
  },
  title4: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
  },
});

//aboutSectionComponentStyles
const style4 = StyleSheet.create({
  container1: {
    marginVertical: widthToDp(1),
    paddingHorizontal: widthToDp(1),
    paddingVertical: widthToDp(3),
    borderRadius: 10,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: widthToDp(3),
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: 'bold',
  },
  container3: {
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(1),
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  container4: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(2.5),
  },
  container5: {
    borderTopWidth: widthToDp(0.3),
    paddingVertical: widthToDp(1),
  },
  container6: {
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title3: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
  },
  container7: {
    marginLeft: widthToDp(6),
    marginRight: widthToDp(5),
    paddingHorizontal: widthToDp(2),
    paddingVertical: widthToDp(1),
    borderRadius: 10,
  },
  title4: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
    paddingVertical: widthToDp(2),
  },
});

//contactDetailsSectionComponentStyles
const style5 = StyleSheet.create({
  container1: {
    marginVertical: widthToDp(1),
    paddingHorizontal: widthToDp(1),
    paddingVertical: widthToDp(3),
    borderRadius: 10,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: widthToDp(1),
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: 'bold',
  },
  container3: {
    flexDirection: 'row',
    paddingVertical: widthToDp(3),
  },
  container4: {
    paddingHorizontal: widthToDp(6),
    paddingVertical: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container5: {},
  title2: {
    fontWeight: '500',
  },
  title3: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(11),
  },
});

//slotsComponentStyles
const style6 = StyleSheet.create({
  container1: {
    flex: 1,
    paddingVertical: widthToDp(1),
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: widthToDp(1),
    borderRadius: 10,
    paddingVertical: widthToDp(2),
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '700',
  },
});

//scrollableCardsComponentStyles
const style7 = StyleSheet.create({
  container1: {},
  container2: {
    marginVertical: widthToDp(2),
    borderRadius: 10,
    paddingVertical: widthToDp(2),
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
    paddingBottom: widthToDp(2),
    paddingLeft: widthToDp(2),
  },
  container3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    marginVertical: widthToDp(2),
    marginHorizontal: widthToDp(1),
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(2),
    borderWidth: widthToDp(0.5),
    borderRadius: 10,
  },
  title2: {
    fontSize: adjustedFontSize(10),
  },
  title3: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
  container4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container5: {
    width: '100%',
    paddingVertical: widthToDp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 2,
  },
  title4: {
    paddingVertical: widthToDp(5),
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
});

//profileSectionComponentStyles
const style8 = StyleSheet.create({
  container1: {
    margin: widthToDp(1),
    borderRadius: 10,
    paddingBottom: widthToDp(2),
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cover: {
    width: '100%',
    height: widthToDp(25),
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'cyan',
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
    paddingTop: widthToDp(1),
    paddingBottom: widthToDp(2),
  },
  container4: {
    marginRight: widthToDp(2),
    maxWidth: widthToDp(62),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
    paddingVertical: widthToDp(1),
    borderRadius: 5,
    elevation: 5,
  },
  title1: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
  },
  container5: {
    padding: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5,
  },
  image3: {
    backgroundColor: 'cyan',
    width: widthToDp(6),
    height: widthToDp(6),
    borderRadius: widthToDp(20) / 2,
    resizeMode: 'cover',
  },
  container6: {
    position: 'absolute',
    top: widthToDp(15),
    left: widthToDp(1.5),
    padding: widthToDp(1),
    borderRadius: widthToDp(13),
    elevation: 5,
  },
  container7: {
    position: 'absolute',
    top: widthToDp(17),
    left: widthToDp(1.5),
    padding: widthToDp(1),
    borderRadius: 5,
  },
  image1: {
    backgroundColor: 'cyan',
    width: widthToDp(18),
    height: widthToDp(18),
    resizeMode: 'cover',
    borderRadius: widthToDp(20) / 2,
  },
  image2: {
    backgroundColor: 'cyan',
    width: widthToDp(16),
    height: widthToDp(16),
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export {style1, style2, style3, style4, style5, style6, style7, style8};
