import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import {adjustedFontSize, widthToDp} from '../../../Utils/dimensionsInPixel';
import {ratingComponentStyles, reviewComponentStyles} from './styles';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {
  CircularProgressBar,
  LinearProgressBar,
} from '../../Molecules/ProgressBar/ProgressBar';

const RatingComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  let rating1 = 4;
  let rating2 = 3;
  let rating3 = 1;
  let rating4 = 5;
  let rating5 = 2;

  const renderContentInside = value => {
    return (
      <View style={ratingComponentStyles.container10}>
        <Text
          style={[
            ratingComponentStyles.title6,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {value}
        </Text>
        <Icon
          type="ionicon"
          name="star"
          size={widthToDp(3)}
          color={
            status
              ? darkMode.tintColors.tintColor
              : lightMode.tintColors.tintColor
          }
        />
      </View>
    );
  };

  return (
    <View
      style={[
        ratingComponentStyles.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={ratingComponentStyles.container2}>
        <Text
          style={[
            ratingComponentStyles.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Rate and Review
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={ratingComponentStyles.btn1}
          onPress={() => props.navigation.navigate('inputFeedback')}>
          <Text style={ratingComponentStyles.title2}>Rate your appoinment</Text>
        </TouchableOpacity>
      </View>
      <View style={ratingComponentStyles.container3}>
        <View style={ratingComponentStyles.container4}>
          <View style={ratingComponentStyles.container5}>
            <Text
              style={[
                ratingComponentStyles.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              4.7
            </Text>
            <Icon
              type="ionicon"
              name="star"
              size={widthToDp(5)}
              color={
                status
                  ? darkMode.tintColors.tintColor
                  : lightMode.tintColors.tintColor
              }
            />
          </View>
          <View style={ratingComponentStyles.container6}>
            <Text
              style={[
                ratingComponentStyles.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              1,40,664 Ratings & 9,660 Reviews
            </Text>
          </View>
        </View>
        <View style={ratingComponentStyles.container7}>
          <LinearProgressBar {...props} star={5} value={props.total - 120468} />
          <LinearProgressBar {...props} star={4} value={props.total - 100460} />
          <LinearProgressBar {...props} star={3} value={props.total - 137101} />
          <LinearProgressBar {...props} star={2} value={props.total - 168946} />
          <LinearProgressBar {...props} star={1} value={props.total - 173025} />
        </View>
      </View>
      <View style={ratingComponentStyles.container8}>
        <View style={ratingComponentStyles.container9}>
          <CircularProgressBar
            circleSize={widthToDp(7)}
            innerCircleWidth={widthToDp(1)}
            innerCircleColor={
              status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor
            }
            renderContentInside={renderContentInside(rating1)}
            percentage={(rating1 / 5) * 100}
            progressBarCircleWidth={widthToDp(1.2)}
            progressBarCircleColor={
              rating1 === 4 || rating1 === 5
                ? '#009900'
                : rating1 === 3
                ? '#e6e600'
                : rating2 === 2
                ? '#e67300'
                : '#ff0000'
            }
            clockwise={true}
            backgroundColor={
              status
                ? darkMode.containerbackgroundColor.backgroundColor
                : lightMode.contentbackgroundColor.backgroundColor
            }
            startDegrees={0}
          />
          <Text
            numberOfLines={1}
            style={[
              ratingComponentStyles.title5,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Cause 1
          </Text>
        </View>
        <View style={ratingComponentStyles.container9}>
          <CircularProgressBar
            circleSize={widthToDp(7)}
            innerCircleWidth={widthToDp(1)}
            innerCircleColor={
              status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor
            }
            percentage={(rating2 / 5) * 100}
            progressBarCircleWidth={widthToDp(1.2)}
            progressBarCircleColor={
              rating2 === 4 || rating2 === 5
                ? '#009900'
                : rating2 === 3
                ? '#e6e600'
                : rating2 === 2
                ? '#e67300'
                : '#ff0000'
            }
            renderContentInside={renderContentInside(rating2)}
            clockwise={true}
            backgroundColor={
              status
                ? darkMode.containerbackgroundColor.backgroundColor
                : lightMode.contentbackgroundColor.backgroundColor
            }
            startDegrees={0}
          />
          <Text
            numberOfLines={1}
            style={[
              ratingComponentStyles.title5,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Cause 1
          </Text>
        </View>
        <View style={ratingComponentStyles.container9}>
          <CircularProgressBar
            circleSize={widthToDp(7)}
            innerCircleWidth={widthToDp(1)}
            innerCircleColor={
              status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor
            }
            renderContentInside={renderContentInside(rating3)}
            percentage={(rating3 / 5) * 100}
            progressBarCircleWidth={widthToDp(1.2)}
            progressBarCircleColor={
              rating3 === 4 || rating3 === 5
                ? '#009900'
                : rating3 === 3
                ? '#e6e600'
                : rating3 === 2
                ? '#e67300'
                : '#ff0000'
            }
            clockwise={true}
            backgroundColor={
              status
                ? darkMode.containerbackgroundColor.backgroundColor
                : lightMode.contentbackgroundColor.backgroundColor
            }
            startDegrees={0}
          />
          <Text
            numberOfLines={1}
            style={[
              ratingComponentStyles.title5,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Cause 1
          </Text>
        </View>
        <View style={ratingComponentStyles.container9}>
          <CircularProgressBar
            renderContentInside={renderContentInside(rating4)}
            circleSize={widthToDp(7)}
            innerCircleWidth={widthToDp(1)}
            innerCircleColor={
              status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor
            }
            value={rating4}
            iconSize={widthToDp(3)}
            percentage={(rating4 / 5) * 100}
            progressBarCircleWidth={widthToDp(1.2)}
            progressBarCircleColor={
              rating4 === 4 || rating4 === 5
                ? '#009900'
                : rating4 === 3
                ? '#e6e600'
                : rating4 === 2
                ? '#e67300'
                : '#ff0000'
            }
            fontSize={adjustedFontSize(10)}
            fontColor={
              status ? darkMode.textColor.color : lightMode.textColor.color
            }
            fontWeight="500"
            clockwise={true}
            backgroundColor={
              status
                ? darkMode.containerbackgroundColor.backgroundColor
                : lightMode.contentbackgroundColor.backgroundColor
            }
            startDegrees={0}
          />
          <Text
            numberOfLines={1}
            style={[
              ratingComponentStyles.title5,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Cause 1
          </Text>
        </View>
        <View style={ratingComponentStyles.container9}>
          <CircularProgressBar
            renderContentInside={renderContentInside(rating5)}
            circleSize={widthToDp(7)}
            innerCircleWidth={widthToDp(1)}
            innerCircleColor={
              status
                ? darkMode.screenBackgroundColors.backgroundColor
                : lightMode.screenBackgroundColors.backgroundColor
            }
            percentage={(rating5 / 5) * 100}
            progressBarCircleWidth={widthToDp(1.2)}
            progressBarCircleColor={
              rating5 === 4 || rating5 === 5
                ? '#009900'
                : rating5 === 3
                ? '#e6e600'
                : rating5 === 2
                ? '#e67300'
                : '#ff0000'
            }
            clockwise={true}
            backgroundColor={
              status
                ? darkMode.containerbackgroundColor.backgroundColor
                : lightMode.contentbackgroundColor.backgroundColor
            }
            startDegrees={0}
          />
          <Text
            numberOfLines={1}
            style={[
              ratingComponentStyles.title5,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Cause 1
          </Text>
        </View>
      </View>
    </View>
  );
};
const reviewData = [
  {
    id: 1,
    name: 'Rishikesh Dhootp',
    rating: 2,
    comment:
      'They may work in schools, hospitals, nursing homes and other locations to provide therapy patients care and assistance.',
  },
  {
    id: 2,
    name: 'Himanshu Kumar Jha',
    rating: 4,
    comment:
      'They may assist in learning to adjust to a permanent disability or provide therapy to overcome an injury that affects daily life.',
  },
  {
    id: 3,
    name: 'Rishikesh Dhoot',
    rating: 2,
    comment:
      'The duties they perform include diagnosing physical problems, teaching patients exercises and providing hands-on therapy that assists with pain management.',
  },
  {
    id: 4,
    name: 'Rishikesh Dhoot',
    rating: 1,
    comment:
      'A physical therapist provides treatment to injured or ill individuals of all ages that need support and therapy to complete the daily tasks of life.',
  },
  {
    id: 5,
    name: 'Rishikesh Dhoot',
    rating: 3,
    comment:
      'A physician assistant works under the supervision of a licensed physician to provide medical care for patients. They may treat patients, diagnose them, prescribe medication and conduct other clinical duties as necessary.',
  },
  {
    id: 6,
    name: 'Rishikesh Dhoot',
    rating: 2,
    comment:
      'The medical care and duties they perform may vary depending on state regulations where they practice.',
  },
  {
    id: 7,
    name: 'Rishikesh Dhoot',
    rating: 5,
    comment:
      'They usually perform duties such as diagnosing patients, ordering laboratory tests, prescribing medications and managing health conditions.',
  },
  {
    id: 8,
    name: 'Rishikesh Dhoot',
    rating: 4,
    comment:
      'A nurse practitioner provides care similar to a physician. They provide primary or specialty healthcare under the supervision of a physician.',
  },
  {
    id: 9,
    name: 'Rishikesh Dhoot',
    rating: 1,
    comment:
      'Clinical job roles are characterized by the direct treatment or hands-on medical care of patients. The roles mentioned in this list are job titles that are required to have advanced formal schooling to perform their daily clinical duties. Here is a list of some clinical medical job types.',
  },
  {
    id: 10,
    name: 'Aman Mishra',
    rating: 5,
    comment:
      'There are many tasks in the healthcare field that need to be performed outside of the clinical care of patients. Many of these roles provide support to clinical roles in various ways. Here are some of the roles you may consider in medical administration.',
  },
];
const RatingAndReviewComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  var total = 175000;
  return (
    <View
      style={[
        reviewComponentStyles.container1,
        status
          ? darkMode.screenBackgroundColors
          : lightMode.screenBackgroundColors,
      ]}>
      <FlatList
        contentContainerStyle={[
          reviewComponentStyles.container2,
          status
            ? darkMode.screenBackgroundColors
            : lightMode.screenBackgroundColors,
        ]}
        data={[reviewData]}
        renderItem={({item, id}) => (
          <View key={id}>
            <RatingComponent navigation={props.navigation} total={total} />
            {item.map((item, id) => (
              <View
                key={id}
                style={[
                  reviewComponentStyles.container3,
                  status
                    ? darkMode.containerbackgroundColor
                    : lightMode.containerbackgroundColor,
                ]}>
                <View style={reviewComponentStyles.container4}>
                  <View
                    style={[
                      reviewComponentStyles.container5,
                      item.rating >= 3
                        ? {backgroundColor: '#00cc00'}
                        : item.rating < 3 && item.rating >= 2
                        ? {backgroundColor: '#e67300'}
                        : {backgroundColor: '#e60000'},
                    ]}>
                    <Text style={[reviewComponentStyles.title1]}>
                      {item.rating}
                    </Text>
                    <Icon
                      type="ionicon"
                      name="star"
                      size={widthToDp(3)}
                      color={'#fff'}
                    />
                  </View>
                  <Text
                    style={[
                      reviewComponentStyles.title2,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {item.name}
                  </Text>
                </View>
                <View style={reviewComponentStyles.container6}>
                  <Text
                    style={[
                      reviewComponentStyles.title3,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    {item.comment}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export {RatingAndReviewComponent};
