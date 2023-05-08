const {StyleSheet} = require('react-native');
const {
  widthToDp,
  heightToDp,
  adjustedFontSize,
} = require('../../../Utils/dimensionsInPixel');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006880aa',
    paddingHorizontal: heightToDp(3),
    paddingBottom: heightToDp(8),
    paddingTop: heightToDp(2),
  },

  closeScreenIconContainer: {
    alignSelf: 'flex-end',
  },

  contentContainer: {
    flex: 1,
    marginTop: heightToDp(4),
    borderRadius: 10,
  },

  headerContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightToDp(1),
  },
  headerTitle: {
    fontSize: adjustedFontSize(13),
    fontWeight: '500',
  },
  searchBarContainerStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerStyle: {
    borderRadius: 30,
    width: widthToDp(70),
    height: heightToDp(4),
  },
  input: {
    fontSize: adjustedFontSize(11),
  },

  itemsListContainer: {
    marginVertical: widthToDp(1),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: widthToDp(2),
    marginVertical: widthToDp(1),
    marginHorizontal: heightToDp(5),
  },
  submitbtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightToDp(1),
    marginBottom: heightToDp(2),
  },
  submitbtn: {
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightToDp(1),
    paddingHorizontal: heightToDp(16),
    borderRadius: 20,
  },
  title: {
    fontSize: adjustedFontSize(12),
    fontWeight: '500',
    color: '#000',
  },
  container1: {},
  container2: {
    flexDirection: 'row',
    paddingHorizontal: widthToDp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 1,
    borderWidth: widthToDp(0.6),
    borderRadius: 7,
  },
  input2: {
    paddingHorizontal: widthToDp(2),
    height: widthToDp(10),
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
    paddingLeft: widthToDp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container4: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: widthToDp(2),
  },
  btn1: {
    paddingHorizontal: widthToDp(5),
    paddingVertical: widthToDp(2),
    borderRadius: 5,
    borderWidth: widthToDp(0.5),
    borderColor: '#00d9ff',
  },
  title1: {
    fontSize: adjustedFontSize(11),
    fontWeight: '600',
    color: '#000',
  },
  container5: {
    marginHorizontal: widthToDp(5),
    marginVertical: widthToDp(1),
    paddingHorizontal: widthToDp(4),
    borderRadius: 10,
  },
  container6: {
    backgroundColor: '#00d9ff',
    paddingHorizontal: widthToDp(3),
    paddingVertical: widthToDp(2),
    marginHorizontal: widthToDp(1),
    marginBottom: widthToDp(1),
    borderRadius: 10,
  },
  title2: {
    fontSize: adjustedFontSize(10),
    fontWeight: '400',
    color: '#000',
  },
  container7: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: widthToDp(5),
    borderTopWidth: widthToDp(0.5),
    paddingVertical: heightToDp(1),
  },
});

export {styles};
