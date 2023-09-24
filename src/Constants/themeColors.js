import {StyleSheet} from 'react-native';

const darkModeColors = {
  screenBackgroundColor: '#005266',
  containerbackgroundColor: '#002933',
  containerbackgroundColor1: '#595959',
  contentbackgroundColor: '#00161a',
  transparentBackgroundColorPrimary: '#005266aa',
  transparentBackgroundColor1: '#005266aa',
  borderColorPrimary: '#005266',
  borderColor1: '#cff4fc',
  textColor: '#e6fbff',
};

const lightModeColors = {
  screenBackgroundColor: '#cff4fc',
  containerbackgroundColor: '#fff',
  containerbackgroundColor1: '#cccccc',
  contentbackgroundColor: '#fff',
  transparentBackgroundColor: '#cff4fcaa',
  transparentBackgroundColor1: '#00d9ffaa',
  borderColorPrimary: '#cff4fc',
  borderColor1: '#005266',
  textColor: '#00414d',
};

const commonColors = {
  transparentBackgroundColor1: '#00d9ff80',
};

const darkMode = StyleSheet.create({
  screenBackgroundColors: {
    backgroundColor: darkModeColors.screenBackgroundColor,
  },
  containerbackgroundColor: {
    backgroundColor: darkModeColors.containerbackgroundColor,
  },
  containerbackgroundColor1: {
    backgroundColor: darkModeColors.containerbackgroundColor1,
  },
  contentbackgroundColor: {
    backgroundColor: darkModeColors.contentbackgroundColor,
  },
  borderColorPrimary: {
    borderColor: darkModeColors.borderColorPrimary,
  },
  transparentBackgroundColorPrimary: {
    backgroundColor: darkModeColors.transparentBackgroundColorPrimary,
  },
  borderColor1: {
    borderColor: darkModeColors.borderColor1,
  },
  transparentBackgroundColor1: {
    backgroundColor: darkModeColors.transparentBackgroundColor1,
  },
  textColor: {
    color: darkModeColors.textColor,
  },
  tintColors: {
    tintColor: '#cff4fc',
  },
});

const lightMode = StyleSheet.create({
  screenBackgroundColors: {
    backgroundColor: lightModeColors.screenBackgroundColor,
  },
  containerbackgroundColor: {
    backgroundColor: lightModeColors.containerbackgroundColor,
  },
  containerbackgroundColor1: {
    backgroundColor: lightModeColors.containerbackgroundColor1,
  },
  contentbackgroundColor: {
    backgroundColor: lightModeColors.contentbackgroundColor,
  },
  borderColorPrimary: {
    borderColor: lightModeColors.borderColorPrimary,
  },
  transparentBackgroundColor: {
    backgroundColor: lightModeColors.transparentBackgroundColor,
  },
  borderColor1: {
    borderColor: lightModeColors.borderColor1,
  },
  transparentBackgroundColor1: {
    backgroundColor: lightModeColors.transparentBackgroundColor1,
  },
  textColor: {
    color: lightModeColors.textColor,
  },
  tintColors: {
    tintColor: '#005266',
  },
});

const commonColorsStyle = StyleSheet.create({
  transparentBackgroundColor1: {
    backgroundColor: commonColors.transparentBackgroundColor1,
  },
});

export {
  darkMode,
  lightMode,
  darkModeColors,
  lightModeColors,
  commonColorsStyle,
};
