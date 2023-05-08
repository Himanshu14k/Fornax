const {StyleSheet} = require('react-native');
const {
  widthToDp,
  adjustedFontSize,
} = require('../../../Utils/dimensionsInPixel');

const associatedOrganizationSectionStyles = StyleSheet.create({
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

const serviceSectionStyles = StyleSheet.create({
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

const generalInfoStyles = StyleSheet.create({
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
    // borderRadius: 15,
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

const aboutSectionStyles = StyleSheet.create({
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

const contactDetailsSectionStyles = StyleSheet.create({
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

export {
  associatedOrganizationSectionStyles,
  serviceSectionStyles,
  generalInfoStyles,
  aboutSectionStyles,
  contactDetailsSectionStyles,
};
