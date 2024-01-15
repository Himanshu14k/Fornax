const {StyleSheet} = require('react-native');
const {
  widthToDp,
  adjustedFontSize,
  heightToDp,
} = require('../../../Utils/dimensionsInPixel');

const styles1 = StyleSheet.create({
  container1: {
    marginHorizontal: widthToDp(1),
    padding: widthToDp(4),
    borderRadius: 10,
  },
  title1: {
    fontSize: adjustedFontSize(13),
    fontWeight: '500',
    paddingBottom: widthToDp(3),
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: widthToDp(2),
  },
  container3: {
    flexDirection: 'row',
  },
  title2: {
    fontWeight: '500',
  },
  title3: {fontWeight: '400'},
});

const styles2 = StyleSheet.create({
  container1: {
    margin: widthToDp(1),
    padding: widthToDp(4),
    borderRadius: 10,
  },
  container2: {
    borderBottomWidth: 0.2,
  },
  title1: {
    fontSize: adjustedFontSize(13),
    fontWeight: '500',
    paddingBottom: widthToDp(3),
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: widthToDp(1),
  },
  title2: {
    fontWeight: '500',
  },
  title3: {fontWeight: '400'},
});

const styles3 = StyleSheet.create({
  container: {
    margin: widthToDp(1),
    borderRadius: 10,
  },
  container1: {
    flexDirection: 'row',
    padding: widthToDp(3),
  },
  header: {
    // backgroundColor: '#00d9ff',
    paddingHorizontal: widthToDp(4),
    paddingVertical: widthToDp(2),
    marginHorizontal: widthToDp(2),
    borderRadius: 15,
    borderWidth: widthToDp(0.6),
  },
  title: {
    color: '#000',
    fontWeight: '500',
  },
  container2: {
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(1),
  },
  container3: {
    flexDirection: 'row',
    paddingVertical: widthToDp(1.5),
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
    paddingHorizontal: widthToDp(2),
  },
  container4: {
    width: widthToDp(35),
    justifyContent: 'center',
  },
  container5: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title3: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
    paddingHorizontal: widthToDp(2),
  },
  container6: {
    paddingVertical: widthToDp(1),
  },
  container7: {},
  container8: {
    paddingHorizontal: widthToDp(6),
    paddingVertical: widthToDp(2),
  },
  container9: {
    paddingVertical: widthToDp(1),
  },
  title4: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  container10: {
    marginHorizontal: widthToDp(10),
    paddingVertical: widthToDp(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  image: {
    width: widthToDp(50),
    height: widthToDp(60),
    resizeMode: 'cover',
  },
});

const styles4 = StyleSheet.create({
  profileSectionContainer: {
    marginHorizontal: widthToDp(1),
    marginVertical: heightToDp(0.6),
    flexDirection: 'row',
    borderRadius: 10,
  },
  profilePicContainer: {
    paddingHorizontal: widthToDp(2),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    height: heightToDp(10),
    width: heightToDp(10),
    borderRadius: heightToDp(10) / 2,
  },
  generalDetailsContainer: {
    flexDirection: 'column',
    padding: widthToDp(2),
  },
  nameContainer: {
    justifyContent: 'center',
    paddingVertical: widthToDp(1),
  },
  name: {
    fontSize: adjustedFontSize(13),
    fontWeight: '500',
  },
  specilizationContainer: {
    justifyContent: 'center',
    paddingVertical: widthToDp(1),
  },
  specilization: {
    fontWeight: '400',
  },
  yoeContainer: {
    justifyContent: 'center',
    paddingVertical: widthToDp(1),
  },
  yoe: {
    fontWeight: '400',
  },
});

const styles5 = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: heightToDp(1),
    margin: widthToDp(1),
    borderRadius: 10,
  },

  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: widthToDp(2),
  },
  headerTitle: {
    fontSize: adjustedFontSize(14),
    fontWeight: '500',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: widthToDp(1),
    marginTop: widthToDp(1),
    paddingHorizontal: widthToDp(3),
  },

  submitAndResetbtncontainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginHorizontal: widthToDp(1),
    paddingTop: heightToDp(2),
    paddingBottom: widthToDp(6),
    borderRadius: 10,
  },
  resetBtn: {
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: heightToDp(4),
    paddingVertical: widthToDp(2),
    borderRadius: 30,
  },
  bookAppoiment: {
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: heightToDp(4),
    paddingVertical: widthToDp(2),
    borderRadius: 30,
  },
  btnTitle: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
    color: '#000',
  },

  container2: {
    paddingTop: widthToDp(5),
    paddingBottom: widthToDp(2),
    paddingRight: widthToDp(6),
  },
  container3: {
    marginLeft: widthToDp(3),
    marginTop: widthToDp(3),
    height: widthToDp(10),
    borderWidth: widthToDp(0.5),
    borderRadius: 7,
    paddingRight: widthToDp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  container4: {
    marginLeft: widthToDp(3),
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },

  title2: {
    fontWeight: '500',
    fontSize: adjustedFontSize(11),
  },
  title3: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
  rightIconStyle: {
    width: widthToDp(5.5),
    height: widthToDp(5.5),
  },
  container5: {
    marginTop: widthToDp(3),
    marginLeft: widthToDp(3),
    paddingHorizontal: widthToDp(2),
    borderWidth: widthToDp(0.5),
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input1: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
    height: widthToDp(10),
    paddingLeft: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container7: {
    flex: 1,
    paddingTop: widthToDp(5),
    paddingBottom: widthToDp(2),
    paddingRight: widthToDp(6),
  },
  container8: {
    flex: 1,
    paddingTop: widthToDp(5),
    paddingBottom: widthToDp(2),
    paddingRight: widthToDp(6),
  },
  container9: {
    paddingVertical: widthToDp(3),
  },
  container10: {},
  container11: {
    flexDirection: 'row',
    marginTop: widthToDp(3),
    marginLeft: widthToDp(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: widthToDp(2),
    height: widthToDp(10),
    borderWidth: widthToDp(0.5),
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  container12: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    maxWidth: widthToDp(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00d9ff',
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(2),
    marginHorizontal: widthToDp(2),
    marginTop: widthToDp(2),
    borderRadius: 10,
  },
  title4: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
  title5: {
    flex: 1,
    fontSize: adjustedFontSize(10),
    fontWeight: '600',
    color: '#404040',
  },
  input2: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
    height: widthToDp(30),
    paddingLeft: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container13: {
    flexDirection: 'row',
    marginTop: widthToDp(3),
    marginLeft: widthToDp(3),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
    height: widthToDp(10),
    borderWidth: widthToDp(0.5),
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title6: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
});

const styles6 = StyleSheet.create({
  slotsSectionContainer: {
    borderRadius: 10,
    marginHorizontal: widthToDp(1),
  },
  clinicDetailsContainer: {},
  clinicInfoSectionContainer: {
    flexDirection: 'row',
    borderRadius: 10,
  },
  clinicInfoFirstRowContainer: {
    flex: 0.75,
  },
  clinicNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clinicName: {
    fontSize: adjustedFontSize(12),
    paddingVertical: widthToDp(1),
    fontWeight: '500',
  },
  clinicAdressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(1),
  },
  clinicAdress: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  clinicFeesContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(1),
  },
  clinicFees: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  clinicRatingAndVerificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: widthToDp(1),
  },
  clinicRatingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clinicRating: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  clinicVerificationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clinicImageContainer: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clinicImage: {
    height: heightToDp(10),
    width: heightToDp(10),
    borderRadius: 10,
  },
  viewClinicDetailsContainer: {
    paddingVertical: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewClinicDetails: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
  },
});

export {styles1, styles2, styles3, styles4, styles5, styles6};
