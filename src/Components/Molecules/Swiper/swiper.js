import React from 'react';
import Swiper from 'react-native-swiper';
import {View, Image} from 'react-native';
import {styles} from './style';

const SwiperComponent = ({State}) => {
  return (
    <View>
      <Swiper autoplay containerStyle={styles.sliderContainer}>
        <View style={styles.slide}>
          <Image source={State.banners.banner1} style={styles.sliderImage} />
        </View>
        <View style={styles.slide}>
          <Image source={State.banners.banner2} style={styles.sliderImage} />
        </View>
        <View style={styles.slide}>
          <Image source={State.banners.banner3} style={styles.sliderImage} />
        </View>
        <View style={styles.slide}>
          <Image source={State.banners.banner4} style={styles.sliderImage} />
        </View>
        <View style={styles.slide}>
          <Image source={State.banners.banner5} style={styles.sliderImage} />
        </View>
      </Swiper>
    </View>
  );
};
export default SwiperComponent;
