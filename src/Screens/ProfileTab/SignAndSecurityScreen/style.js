import {Platform, StatusBar, StyleSheet} from 'react-native';
import {adjustedFontSize, heightToDp, widthToDp} from '../../../Utils/dimensionsInPixel';

const styles1 = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404040aa',
  },
  container2: {
    padding: widthToDp(4),
    borderRadius: 10,
  },
  container3: {
    paddingVertical: widthToDp(2),
  },
  title1: {
    fontSize: adjustedFontSize(13),
    fontWeight: '600',
  },
  container4: {
    paddingLeft: widthToDp(5),
    paddingVertical: widthToDp(2),
  },
  title2: {
    fontSize: adjustedFontSize(12),
    fontWeight: 'bold',
    paddingBottom: widthToDp(3),
  },
  title3: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
    paddingBottom: widthToDp(2),
  },
  title4: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
    paddingBottom: widthToDp(1),
  },
  btn1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: widthToDp(4),
    paddingVertical: widthToDp(2),
  },
  title5: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
    color: '#fff',
  },
  title6: {
    paddingTop: widthToDp(2),
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  inputContainer1: {
    borderBottomWidth: widthToDp(0.2),
    borderBottomColor: '#00d9ff',
    paddingTop: widthToDp(3),
  },
  inputContainer2: {
    flexDirection: 'row',
    borderBottomWidth: widthToDp(0.2),
    borderBottomColor: '#00d9ff',
    paddingTop: widthToDp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input1: {
    height: widthToDp(10),
  },
  input2: {
    flex: 1,
    height: widthToDp(10),
  },
  icon: {
    paddingRight: widthToDp(2),
  },
  btn2: {
    paddingTop: widthToDp(2),
    alignSelf: 'flex-end',
  },
  title7: {
    fontSize: adjustedFontSize(10),
    color: '#00d9ff',
    fontWeight: 'bold',
  },

  btn3: {
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? StatusBar.currentHeight + heightToDp(5)
        : StatusBar.currentHeight + heightToDp(1),
    right: widthToDp(5),
  },
});

const styles2 = StyleSheet.create({
  container1: {
    flex: 1,
    marginHorizontal: widthToDp(1),
  },
  container2: {
    marginVertical: widthToDp(1),
    borderRadius: 10,
    padding: widthToDp(3),
  },
  title1: {
    fontSize: adjustedFontSize(14),
    fontWeight: 'bold',
    paddingBottom: widthToDp(1),
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  container3: {
    flexGrow: 1,
    marginBottom: widthToDp(1),
    borderRadius: 10,
    padding: widthToDp(3),
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: widthToDp(4),
    borderBottomWidth: widthToDp(0.3),
  },
  container5: {
    flex: 0.9,
  },
  title3: {
    fontSize: adjustedFontSize(12),
    fontWeight: '600',
    paddingBottom: widthToDp(1),
  },
  title4: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  container6: {
    flex: 0.1,
  },
});

export {styles1, styles2};
