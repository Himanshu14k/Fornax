import React, {useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Modal,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import {style1, style2, style3, style4, style5, style6} from './styles';

const MoreContentModal2 = props => {
  const status = useSelector(state => state.otherReducer.status);

  const onBtnPress = title => {
    if (
      title === 'Gym Workout' ||
      title === 'Body Weight Workout' ||
      title === 'Injuries&Treatment' ||
      title === 'Workout Exercises'
    ) {
      props.goToNextScreen('bodyPartExercise');
    } else if (title === 'Yoga Exercises') {
      props.goToNextScreen('yogaExercise');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalStatus}
      onRequestClose={() => props.onChangeModalStatus()}>
      <View style={style4.container1}>
        <View
          style={[
            style4.container2,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}>
          <View
            style={[
              style4.container3,
              {
                borderBottomColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={style4.btn1}
              onPress={() => props.onChangeModalStatus()}>
              <Icon
                type="ionicon"
                name="close"
                size={widthToDp(6)}
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            </TouchableOpacity>
            <Text
              numberOfLines={1}
              style={[
                style4.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props.headerTitle === 'EBS'
                ? 'Body System Exercise'
                : props.headerTitle}
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={style4.container4}>
            {props.data.map((item, id) => (
              <TouchableOpacity
                key={id}
                activeOpacity={0.5}
                style={style4.container5}
                onPress={() => onBtnPress(props.headerTitle)}>
                <ImageBackground
                  source={require('../../../Assets/Images/GymBanner1.jpg')}
                  style={style4.image1}
                  imageStyle={style4.imageStyle}>
                  <Text numberOfLines={1} style={style4.title2}>
                    {item?.value}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const MoreContentModal1 = props => {
  const status = useSelector(state => state.otherReducer.status);

  function onContentClick() {
    props.navigation.navigate('preventivecareDetail');
    props.onChangeModalStatus();
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalStatus}
      onRequestClose={() => props.onChangeModalStatus()}>
      <View style={style5.container1}>
        <View
          style={[
            style5.container2,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}>
          <View
            style={[
              style5.container3,
              {
                borderBottomColor: status
                  ? darkMode.screenBackgroundColors.backgroundColor
                  : lightMode.screenBackgroundColors.backgroundColor,
              },
            ]}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={style5.btn1}
              onPress={() => props.onChangeModalStatus()}>
              <Icon
                type="ionicon"
                name="close"
                size={widthToDp(6)}
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            </TouchableOpacity>
            <Text
              numberOfLines={1}
              style={[
                style5.title1,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props.headerTitle === 'EBS'
                ? 'Body System Exercise'
                : props.headerTitle}
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={style5.container4}>
            {props.data.map((item, id) => (
              <TouchableOpacity
                key={id}
                activeOpacity={0.5}
                style={style5.container5}
                onPress={() => onContentClick()}>
                <View style={style5.imageContainer}>
                  <Image style={style5.image1} />
                </View>
                <Text
                  numberOfLines={1}
                  style={[
                    style5.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {item.value}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const SlideableContentComponent1 = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <View
      style={[
        style3.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={style3.container2}>
        <Text
          numberOfLines={1}
          style={[
            style3.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {props.headerTitle}
        </Text>
        {props.moreOptionBtn && (
          <TouchableOpacity
            style={style3.btn1}
            onPress={() => props.onMoreOptionBtnClick()}>
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
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style3.container3}>
        {props.data?.map((item, id) =>
          item?.image === undefined ? (
            <View key={id} style={style3.container4}>
              <View style={style3.imageContainer}>
                <Image
                  style={[
                    style3.image1,
                    status
                      ? darkMode.screenBackgroundColors
                      : lightMode.screenBackgroundColors,
                  ]}
                  source={{uri: item?.image}}
                />
              </View>
              <Text
                numberOfLines={1}
                style={[
                  style3.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {item?.title}
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              key={id}
              activeOpacity={0.5}
              style={style3.container4}
              onPress={() => props.onContentClick(item?._id)}>
              <View style={style3.imageContainer}>
                <Image style={style3.image1} source={{uri: item?.image}} />
              </View>
              <Text
                numberOfLines={1}
                style={[
                  style3.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {item?.title}
              </Text>
            </TouchableOpacity>
          ),
        )}
      </ScrollView>
    </View>
  );
};

const SlideableContentComponent2 = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <View
      style={[
        style1.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={style1.container2}>
        <Text
          numberOfLines={1}
          style={[
            style1.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {props.headerTitle}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={style1.container3}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {props?.data.map((item, id) => (
          <TouchableOpacity
            key={id}
            activeOpacity={0.7}
            style={style1.container4}
            onPress={() => props.onContentClick()}>
            <View style={style1.imageContainer}>
              <Image source={item?.img} style={style1.image1} />
            </View>
            <Text numberOfLines={1} style={style1.title2}>
              {item?.val}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const SlideableContentComponent3 = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <View
      style={[
        style2.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={style2.container2}>
        <Text
          numberOfLines={1}
          style={[
            style2.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {props.headerTitle}
        </Text>
        <TouchableOpacity style={style2.btn1}>
          <Icon
            type="antdesign"
            name="right"
            size={widthToDp(5)}
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={style2.container3}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {props?.data.map((item, id) => (
          <TouchableOpacity
            key={id}
            activeOpacity={0.7}
            style={style2.container4}
            onPress={() => props.onContentClick()}>
            <View style={style2.imageContainer}>
              <Image source={item?.image} style={style2.image1} />
            </View>
            <View style={style2.container5}>
              <Text numberOfLines={1} style={style2.title2}>
                {item?.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const SLIDE_WIDTH = 170; // Set the slide width to 100 pixels
const TOTAL_SLIDES = 7; // Total number of slides

const slides = Array.from(
  {length: TOTAL_SLIDES},
  (_, index) => `Slide ${index + 1}`,
);
const dots = Array.from(
  {length: TOTAL_SLIDES},
  (_, index) => `dot${index + 1}`,
);

const SlideableContentComponent4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newCurrentIndex = Math.round(contentOffsetX / SLIDE_WIDTH);
    setCurrentIndex(newCurrentIndex);
  };

  const renderSlides = () => {
    return slides.map((slide, index) => (
      <View key={index} style={[style6.container3, {width: SLIDE_WIDTH}]}>
        <Image
          source={require('../../../Assets/Images/InstantDC.jpg')}
          style={style6.img1}
        />
      </View>
    ));
  };

  const renderDots = () => {
    return dots.map((dot, index) => (
      <View
        key={index}
        style={[
          style6.dot,
          {backgroundColor: index === currentIndex ? '#007AFF' : '#C0C0C0'},
        ]}
      />
    ));
  };

  return (
    <View style={style6.container1}>
      <ScrollView
        contentContainerStyle={style6.container2}
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={20}>
        {renderSlides()}
      </ScrollView>
      <View style={{height: 20}} />
      <View style={style6.container4}>{renderDots()}</View>
    </View>
  );
};

export {
  SlideableContentComponent1,
  MoreContentModal2,
  MoreContentModal1,
  SlideableContentComponent2,
  SlideableContentComponent3,
  SlideableContentComponent4,
};
