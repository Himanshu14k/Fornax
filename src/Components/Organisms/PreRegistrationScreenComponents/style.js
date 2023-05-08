import {StyleSheet} from 'react-native';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';

const profileAndCoverPicSectionStyles = StyleSheet.create({
  container1: {
    paddingBottom: widthToDp(15),
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
    resizeMode: 'stretch',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container3: {
    position: 'absolute',
    alignSelf: 'center',
    top: widthToDp(14),
    padding: widthToDp(1),
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    backgroundColor: 'violet',
    width: widthToDp(20),
    height: widthToDp(20),
    borderRadius: widthToDp(20) / 2,
  },
  container4: {
    paddingTop: widthToDp(7),
    paddingHorizontal: widthToDp(3),
  },
  title1: {
    fontSize: adjustedFontSize(11),
    fontWeight: '600',
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
    height: widthToDp(9),
    paddingLeft: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container6: {
    marginLeft: widthToDp(3),
    marginTop: widthToDp(3),
    height: widthToDp(10),
    borderWidth: widthToDp(0.5),
    borderRadius: 7,
    padding: widthToDp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title2: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },

  rightIconStyle: {
    width: widthToDp(5.5),
    height: widthToDp(5.5),
  },
});

const progressStatusSectionStyles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(5),
    paddingHorizontal: widthToDp(1),
  },
  container2: {
    borderRadius: 5,
    paddingHorizontal: widthToDp(4.5),
    paddingVertical: widthToDp(1.5),
  },
  completedStep: {
    backgroundColor: '#00d9ff',
    borderColor: '#00d9ff',
    borderWidth: widthToDp(0.7),
  },
  notCompletedStep: {
    backgroundColor: '#cff4fcaa',
    borderColor: '#cff4fc',
    borderWidth: widthToDp(0.7),
  },
  title1: {
    fontSize: adjustedFontSize(11.5),
    fontWeight: '700',
    color: '#000000',
  },
  container3: {
    flex: 1,
    height: widthToDp(0.5),
    backgroundColor: '#cff4fc',
  },
});

const differentUserInputComponetStyles = StyleSheet.create({
  contentContainer1: {
    paddingVertical: widthToDp(3),
  },
  contentTitleContainer: {
    justifyContent: 'center',
    paddingBottom: widthToDp(3),
  },
  contentTitle: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
  },
  title2: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
  inputContainer: {
    paddingHorizontal: widthToDp(3),
  },
  input: {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTitle: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
    height: widthToDp(10),
    paddingLeft: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownMenuContainer: {
    paddingHorizontal: widthToDp(3),
  },
  dropdownMenu: {
    height: widthToDp(10),
    borderWidth: widthToDp(0.5),
    borderRadius: 7,
    padding: widthToDp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  rightIconStyle: {
    width: widthToDp(5.5),
    height: widthToDp(5.5),
  },
  radioBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  radioBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioBtnTitle: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
});

const multiSelectDropdownWithTitleStyles = StyleSheet.create({
  container1: {
    paddingVertical: widthToDp(3),
  },
  container2: {
    marginHorizontal: widthToDp(3),
    marginTop: widthToDp(3),
    height: widthToDp(10),
    borderWidth: widthToDp(0.5),
    borderRadius: 7,
    padding: widthToDp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title1: {
    fontWeight: '500',
  },
  container3: {
    marginHorizontal: widthToDp(2),
    //backgroundColor: 'red',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#99ccff',
    marginHorizontal: widthToDp(2),
    shadowColor: '#000',
    marginTop: widthToDp(2),
    padding: widthToDp(2),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title2: {
    marginRight: 5,
    fontSize: adjustedFontSize(10),
    color: '#000',
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
});

const customMultiSelectDropdownWithTitleComponentStyles = StyleSheet.create({
  container1: {
    paddingVertical: widthToDp(3),
  },
  title1: {
    fontWeight: '500',
  },
  container2: {},
  container3: {
    flexDirection: 'row',
    marginTop: widthToDp(3),
    marginHorizontal: widthToDp(3),
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
  container4: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: widthToDp(1),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btn1: {
    maxWidth: widthToDp(37),
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
  title2: {
    paddingLeft: widthToDp(2),
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
  },
  title3: {
    flex: 1,
    fontSize: adjustedFontSize(9),
    fontWeight: '600',
    color: '#404040',
  },
});

export {
  profileAndCoverPicSectionStyles,
  progressStatusSectionStyles,
  differentUserInputComponetStyles,
  multiSelectDropdownWithTitleStyles,
  customMultiSelectDropdownWithTitleComponentStyles,
};
