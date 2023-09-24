import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {useSelector} from 'react-redux';
import {linearProgressBarStyles, styles} from './styles';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';

/**
 * Function that calculates rotation of the semicircle for firstProgressLayer
 * ( when percentage is less than equal to 50 ) or for the secondProgressLayer
 * when percentage is greater than 50.
 **/
const rotateByStyle = (percentage, base_degrees, clockwise) => {
  let rotateBy = base_degrees;
  if (clockwise) {
    rotateBy = base_degrees + percentage * 3.6;
  } else {
    //anti clockwise progress
    rotateBy = base_degrees - percentage * 3.6;
  }
  return {
    transform: [{rotateZ: `${rotateBy}deg`}],
  };
};

const renderThirdLayer = (
  percentage,
  commonStyles,
  ringColorStyle,
  ringBgColorStyle,
  clockwise,
  innerCircleWidth,
  progressBarCircleWidth,
  innerRingStyle,
  startDegrees,
) => {
  let rotation = 45 + startDegrees;
  let offsetLayerRotation = -135 + startDegrees;
  if (!clockwise) {
    rotation += 180;
    offsetLayerRotation += 180;
  }
  if (percentage > 50) {
    /**
     * Third layer circles default rotation is kept 45 degrees for clockwise rotation, so by default it occupies the right half semicircle.
     * Since first 50 percentage is already taken care  by second layer circle, hence we subtract it
     * before passing to the rotateByStyle function
     **/

    return (
      <View
        style={[
          styles.secondProgressLayer,
          rotateByStyle(percentage - 50, rotation, clockwise),
          commonStyles,
          ringColorStyle,
        ]}
      />
    );
  } else {
    return (
      <View
        style={[
          styles.offsetLayer,
          innerRingStyle,
          ringBgColorStyle,
          {transform: [{rotateZ: `${offsetLayerRotation}deg`}]},
        ]}
      />
    );
  }
};

const CircularProgressBar = ({
  circleSize,
  innerCircleWidth,
  innerCircleColor,
  percentage,
  progressBarCircleWidth,
  progressBarCircleColor,
  clockwise,
  backgroundColor,
  startDegrees,
  renderContentInside,
}) => {
  const commonStyles = {
    width: circleSize * 2,
    height: circleSize * 2,
    borderRadius: circleSize,
    borderTopWidth: progressBarCircleWidth,
    borderLeftWidth: progressBarCircleWidth,
    borderBottomWidth: progressBarCircleWidth,
    borderRightWidth: progressBarCircleWidth,
  };

  /**
   * Calculate circleSize for base layer and offset layer.
   * If progressBarCircleWidth == innerCircleWidth, innercircleSize is equal to circleSize
   **/
  const widthDiff = progressBarCircleWidth - innerCircleWidth;
  const innercircleSize =
    circleSize - progressBarCircleWidth + innerCircleWidth + widthDiff / 2;

  const innerRingStyle = {
    width: innercircleSize * 2,
    height: innercircleSize * 2,
    borderRadius: innercircleSize,
    borderTopWidth: innerCircleWidth,
    borderLeftWidth: innerCircleWidth,
    borderBottomWidth: innerCircleWidth,
    borderRightWidth: innerCircleWidth,
  };

  const ringColorStyle = {
    borderRightColor: progressBarCircleColor,
    borderTopColor: progressBarCircleColor,
  };

  const ringBgColorStyle = {
    borderRightColor: innerCircleColor,
    borderTopColor: innerCircleColor,
  };

  const thickOffsetRingStyle = {
    borderRightColor: backgroundColor,
    borderTopColor: backgroundColor,
  };

  let rotation = -135 + startDegrees;
  /**
   * If we want our ring progress to be displayed in anti-clockwise direction
   **/
  if (!clockwise) {
    rotation += 180;
  }
  let firstProgressLayerStyle;
  /* when ther ring's border widths are different and percentage is less than 50, then we need an offsetLayer
   * before the original offser layer to avoid ring color of the thick portion to be visible in the background.
   */
  let displayThickOffsetLayer = false;
  if (percentage > 50) {
    firstProgressLayerStyle = rotateByStyle(50, rotation, clockwise);
  } else {
    firstProgressLayerStyle = rotateByStyle(percentage, rotation, clockwise);
    if (progressBarCircleWidth > innerCircleWidth) {
      displayThickOffsetLayer = true;
    }
  }

  let offsetLayerRotation = -135 + startDegrees;
  if (!clockwise) {
    offsetLayerRotation += 180;
  }

  return (
    <View
      style={[
        styles.container,
        {width: circleSize * 2, height: circleSize * 2},
      ]}>
      <View
        style={[
          styles.baselayer,
          innerRingStyle,
          {borderColor: innerCircleColor, borderWidth: innerCircleWidth},
        ]}
      />
      <View
        style={[
          styles.firstProgressLayer,
          firstProgressLayerStyle,
          commonStyles,
          ringColorStyle,
          {
            borderTopWidth: progressBarCircleWidth,
            borderRightWidth: progressBarCircleWidth,
          },
        ]}
      />
      {displayThickOffsetLayer && (
        <View
          style={[
            styles.offsetLayer,
            commonStyles,
            thickOffsetRingStyle,
            {
              transform: [{rotateZ: `${offsetLayerRotation}deg`}],
              borderWidth: progressBarCircleWidth,
            },
          ]}
        />
      )}
      {renderThirdLayer(
        percentage,
        commonStyles,
        ringColorStyle,
        ringBgColorStyle,
        clockwise,
        innerCircleWidth,
        progressBarCircleWidth,
        innerRingStyle,
        startDegrees,
      )}
      {renderContentInside}
    </View>
  );
};

// default props values
CircularProgressBar.defaultProps = {
  percentage: 0,
  circleSize: widthToDp(10),
  innerCircleWidth: widthToDp(2),
  progressBarCircleWidth: 6,
  progressBarCircleColor: '#00cfd9',
  innerCircleColor: '#e5e5e5',
  clockwise: true,
  backgroundColor: '#fff',
  startDegrees: 0,
  renderContentInside: <View />,
};

const LinearProgressBar = props => {
  const status = useSelector(state => state.otherReducer.status);
  let percentage = ((props.value / props.total) * 100).toString();

  return (
    <View style={linearProgressBarStyles.container1}>
      <Text
        style={[
          linearProgressBarStyles.title1,
          status ? darkMode.textColor : lightMode.textColor,
        ]}>
        {props.star}
      </Text>
      <Icon
        type="ionicon"
        name="star"
        size={widthToDp(2.5)}
        color={
          status
            ? darkMode.tintColors.tintColor
            : lightMode.tintColors.tintColor
        }
      />
      <View
        style={[
          linearProgressBarStyles.container2,
          status
            ? darkMode.screenBackgroundColors
            : lightMode.screenBackgroundColors,
        ]}>
        <View
          style={[
            linearProgressBarStyles.progressBar,
            {width: percentage + '%'},
            {
              backgroundColor:
                props.star >= 4 && props.star <= 5
                  ? '#009900'
                  : props.star >= 3 && props.star < 4
                  ? '#e6e600'
                  : props.star >= 2 && props.star < 3
                  ? '#e67300'
                  : '#ff0000',
            },
          ]}
        />
      </View>
      <Text
        style={[
          linearProgressBarStyles.title2,
          status ? darkMode.textColor : lightMode.textColor,
        ]}>
        {props.value}
      </Text>
    </View>
  );
};

export {CircularProgressBar, LinearProgressBar};
