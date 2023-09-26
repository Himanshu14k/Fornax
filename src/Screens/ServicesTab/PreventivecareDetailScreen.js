import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {darkMode, lightMode} from '../../Constants/Colors';
import CustomHeader from '../../Navigators/CustomHeader';
import {useSelector} from 'react-redux';
import {adjustedFontSize, widthToDp} from '../../Constants/dimensionsInPixel';
import {Icon} from '@rneui/themed';

const PreventivecareDetailScreen = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: status
          ? darkMode.screenBackgroundColors.backgroundColor
          : lightMode.screenBackgroundColors.backgroundColor,
      }}>
      <CustomHeader navigation={props.navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PreventiveDetailComponent />
        <DoctorListComponent navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const dummyData = {
  headerTitle1: 'Atlas Cluster',
  banner: require('../../Assets/Images/GymBanner1.jpg'),
  contents: [
    {
      contentTitle: 'Advantages of MongoDB Atlas',
      paragraph:
        'MongoDB Atlas is a multi-cloud database service by the same people that build MongoDB. Atlas simplifies deploying and managing your databases while offering the versatility you need to build resilient and performant global applications on the cloud providers of your choice.',
      point1Title:
        'Consider the following things while designing the schema in MongoDB',
      point1: [
        'MongoDB is schema less. It is a document database in which one collection holds different documents.',
        'There may be difference between number of fields, content and size of the document from one to other.',
        'MongoDB provides the facility of deep query because it supports a powerful dynamic query on documents.',
      ],
      point2Title:
        'Consider the following things while designing the schema in MongoDB',
      point2: [
        {
          title: 'Global clusters for world-class applications',
          description:
            'Using MongoDB Atlas, we are free to choose the cloud partner and ecosystem that fit our business strategy.',
        },
        {
          title: 'Designed for developer productivity',
          description:
            'MongoDB Atlas moves faster with general tools to work with our data and a platform of services that makes it easy to build, secure, and extend applications that run on MongoDB.',
        },
        {
          title: 'Built for optimal performance',
          description:
            'It makes it easy to scale our databases in any direction. We can get more out of our existing resources with performance optimization tools and real-time visibility into database metrics.',
        },
        {
          title: 'Managed for operational efficiency',
          description:
            'It comes with built-in operational best practices, so we can focus on delivering business value and accelerating application development instead of managing databases.',
        },
      ],
    },
    {
      contentTitle: 'Types of MongoDB Atlas',
      paragraph:
        'MongoDB Atlas is a multi-cloud database service by the same people that build MongoDB. Atlas simplifies deploying and managing your databases while offering the versatility you need to build resilient and performant global applications on the cloud providers of your choice.',
      point1: [],
      point1Title: '',
      point2Title:
        'Consider the following things while designing the schema in MongoDB',
      point2: [
        {
          title: 'Global clusters for world-class applications',
          description:
            'Using MongoDB Atlas, we are free to choose the cloud partner and ecosystem that fit our business strategy.',
        },
        {
          title: 'Designed for developer productivity',
          description:
            'MongoDB Atlas moves faster with general tools to work with our data and a platform of services that makes it easy to build, secure, and extend applications that run on MongoDB.',
        },
        {
          title: 'Built for optimal performance',
          description:
            'It makes it easy to scale our databases in any direction. We can get more out of our existing resources with performance optimization tools and real-time visibility into database metrics.',
        },
        {
          title: 'Managed for operational efficiency',
          description:
            'It comes with built-in operational best practices, so we can focus on delivering business value and accelerating application development instead of managing databases.',
        },
      ],
    },
    {
      contentTitle: 'Uses of MongoDB Atlas',
      paragraph:
        'MongoDB Atlas is a multi-cloud database service by the same people that build MongoDB. Atlas simplifies deploying and managing your databases while offering the versatility you need to build resilient and performant global applications on the cloud providers of your choice.',
      point1: [
        'MongoDB is schema less. It is a document database in which one collection holds different documents.',
        'There may be difference between number of fields, content and size of the document from one to other.',
        'MongoDB provides the facility of deep query because it supports a powerful dynamic query on documents.',
      ],
      point1Title:
        'Consider the following things while designing the schema in MongoDB',
      point2Title: '',
      point2: [],
    },
  ],
};

const PreventiveDetailComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <>
      <View
        style={[
          preventiveDetailComponentStyles.container1,
          status
            ? darkMode.containerbackgroundColor
            : lightMode.containerbackgroundColor,
        ]}>
        <View style={preventiveDetailComponentStyles.container2}>
          <Text
            style={[
              preventiveDetailComponentStyles.title1,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            {dummyData?.headerTitle1}
          </Text>
        </View>
        <View style={preventiveDetailComponentStyles.container3}>
          <Image
            style={preventiveDetailComponentStyles.image1}
            source={dummyData.banner}
          />
        </View>
      </View>
      {dummyData.contents.map((item, id) => (
        <View
          key={id}
          style={[
            preventiveDetailComponentStyles.container4,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}>
          <View style={preventiveDetailComponentStyles.container5}>
            <Text
              style={[
                preventiveDetailComponentStyles.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {item?.contentTitle}
            </Text>
          </View>
          <View style={preventiveDetailComponentStyles.container6}>
            <Text
              style={[
                preventiveDetailComponentStyles.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {item?.paragraph}
            </Text>
          </View>
          {item.point1.length > 0 && (
            <View style={preventiveDetailComponentStyles.container7}>
              <Text
                style={[
                  preventiveDetailComponentStyles.title6,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {item?.point1Title}
              </Text>
              {item?.point1.map((item, id) => (
                <View
                  key={id}
                  style={preventiveDetailComponentStyles.container8}>
                  <Icon
                    name="dot-single"
                    type="entypo"
                    color={
                      status
                        ? darkMode.tintColors.tintColor
                        : lightMode.tintColors.tintColor
                    }
                    size={widthToDp(5)}
                  />
                  <Text
                    style={[
                      preventiveDetailComponentStyles.title3,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          )}
          {item.point2.length > 0 && (
            <View style={preventiveDetailComponentStyles.container9}>
              <Text
                style={[
                  preventiveDetailComponentStyles.title6,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {item?.point2Title}
              </Text>
              {item?.point2.map((item, id) => (
                <View
                  key={id}
                  style={preventiveDetailComponentStyles.container10}>
                  <Icon
                    name="dot-single"
                    type="entypo"
                    color={
                      status
                        ? darkMode.tintColors.tintColor
                        : lightMode.tintColors.tintColor
                    }
                    size={widthToDp(5)}
                  />
                  <View style={preventiveDetailComponentStyles.container11}>
                    <Text
                      style={[
                        preventiveDetailComponentStyles.title4,
                        status ? darkMode.textColor : lightMode.textColor,
                      ]}>
                      {item?.title} :
                    </Text>
                    <Text
                      style={[
                        preventiveDetailComponentStyles.title5,
                        status ? darkMode.textColor : lightMode.textColor,
                      ]}>
                      {item?.description}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </>
  );
};

const preventiveDetailComponentStyles = StyleSheet.create({
  container1: {
    marginHorizontal: widthToDp(1),
    marginTop: widthToDp(1),
    marginBottom: widthToDp(0.5),
    paddingVertical: widthToDp(2),
    borderRadius: 10,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(1),
  },
  title1: {
    fontSize: adjustedFontSize(13),
    fontWeight: '700',
  },
  container3: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(2),
  },
  image1: {
    height: widthToDp(50),
    backgroundColor: 'violet',
    width: '95%',
    borderRadius: 7,
  },
  container4: {
    marginHorizontal: widthToDp(1),
    marginVertical: widthToDp(1),
    paddingVertical: widthToDp(2),
    paddingHorizontal: widthToDp(2),
    borderRadius: 10,
  },
  container5: {
    paddingVertical: widthToDp(1),
  },
  title2: {
    fontSize: adjustedFontSize(12),
    fontWeight: '700',
  },
  container6: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: widthToDp(2),
  },
  title3: {
    fontSize: adjustedFontSize(11),
    fontWeight: '400',
  },
  container7: {
    paddingVertical: widthToDp(5),
    paddingRight: widthToDp(5),
  },
  container8: {
    paddingVertical: widthToDp(2),
    paddingLeft: widthToDp(3),
    flexDirection: 'row',
  },
  container9: {
    paddingVertical: widthToDp(5),
    paddingRight: widthToDp(5),
  },
  container10: {
    paddingVertical: widthToDp(2),
    paddingLeft: widthToDp(3),
    flexDirection: 'row',
  },
  container11: {},
  title4: {
    fontSize: adjustedFontSize(11.5),
    fontWeight: '600',
  },
  title5: {
    fontSize: adjustedFontSize(10.5),
    fontWeight: '400',
    paddingLeft: widthToDp(2),
  },
  title6: {
    fontSize: adjustedFontSize(11),
    fontWeight: '600',
  },
});

const dummyData1 = [
  {
    name: 'Himanshu Kumar Jha',
  },
  {
    name: 'Himanshu Kumar',
  },
  {
    name: 'Himanshu Kumar Jha',
  },
  {
    name: 'Himanshu Kumar Jha',
  },
  {
    name: 'Himanshu Kumar Jha',
  },
  {
    name: 'Himanshu Kumar Jha',
  },
  {
    name: 'Himanshu Kumar Jha',
  },
  {
    name: 'Himanshu Kumar Jha',
  },
];

const DoctorListComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <View
      style={[
        doctorListComponentStyles.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={doctorListComponentStyles.container2}>
        <Text
          style={[
            doctorListComponentStyles.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Consult Doctor with realted issues
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => props.navigation.navigate('doctorList')}>
          <Icon
            type="antdesign"
            name="right"
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
            size={widthToDp(4.5)}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={doctorListComponentStyles.container3}>
        {dummyData1.map((item, id) => (
          <TouchableOpacity
            key={id}
            activeOpacity={0.7}
            style={doctorListComponentStyles.container4}
            onPress={() => props.navigation.navigate('doctorProfile')}>
            <View style={doctorListComponentStyles.container5}>
              <Image
                style={doctorListComponentStyles.image1}
                source={require('../../Assets/Images/PhysianAndSurgeon.jpg')}
              />
            </View>
            <View
              style={[
                doctorListComponentStyles.container6,
                status
                  ? darkMode.contentbackgroundColor
                  : lightMode.contentbackgroundColor,
              ]}>
              <View style={doctorListComponentStyles.container7}>
                <Text
                  numberOfLines={1}
                  style={[
                    doctorListComponentStyles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item?.name}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  doctorListComponentStyles.btn1,
                  status
                    ? darkMode.containerbackgroundColor
                    : lightMode.containerbackgroundColor,
                ]}
                onPress={() =>
                  props.navigation.navigate('viewAllSlots', {
                    tabName: 'Teli Consultation',
                  })
                }>
                <Text
                  numberOfLines={1}
                  style={[
                    doctorListComponentStyles.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Consult
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                doctorListComponentStyles.container8,
                {
                  backgroundColor: status
                    ? darkMode.screenBackgroundColors.backgroundColor
                    : lightMode.screenBackgroundColors.backgroundColor,
                },
              ]}>
              <Image
                style={doctorListComponentStyles.image2}
                source={require('../../Assets/Images/Himanshu.jpeg')}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const doctorListComponentStyles = StyleSheet.create({
  container1: {
    paddingVertical: widthToDp(2),
    paddingHorizontal: widthToDp(2),
  },
  container2: {
    paddingVertical: widthToDp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title1: {
    fontSize: adjustedFontSize(12),
    fontWeight: '700',
  },
  container3: {},
  container4: {
    width: widthToDp(46),
    marginVertical: widthToDp(1),
    marginHorizontal: widthToDp(1),
    borderRadius: 10,
    elevation: 2,
  },
  container5: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: widthToDp(46),
    height: widthToDp(20),
    resizeMode: 'cover',
  },
  container6: {
    paddingBottom: widthToDp(3),
    paddingTop: widthToDp(12),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container7: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: widthToDp(2),
    paddingHorizontal: widthToDp(1),
  },
  title2: {
    fontSize: adjustedFontSize(11),
    fontWeight: '500',
  },
  btn1: {
    //backgroundColor: '#00d9ff',
    borderColor: '#00d9ff',
    borderWidth: widthToDp(0.7),
    alignSelf: 'center',
    paddingHorizontal: widthToDp(8),
    paddingVertical: widthToDp(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 20,
    shadowColor: '#eee',
  },
  container8: {
    position: 'absolute',
    alignSelf: 'center',
    top: widthToDp(10),
    padding: widthToDp(1),
    borderRadius: 100,
  },
  image2: {
    width: widthToDp(18),
    height: widthToDp(18),
    borderRadius: widthToDp(19) / 2,
    resizeMode: 'cover',
  },
});

export default PreventivecareDetailScreen;
