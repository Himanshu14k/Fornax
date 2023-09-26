import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import CustomHeader from '../../Navigators/CustomHeader';
import Swiper from 'react-native-swiper';
import {Avatar} from 'react-native-paper';
import {IMAGE} from '../../Images/Image';

const DiagnosisScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sliderContainer}>
          <Swiper autoplay height={160}>
            <View style={styles.slide}>
              <Image
                source={IMAGE.WORKOUT_BANNER1}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={IMAGE.WORKOUT_BANNER2}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={IMAGE.WORKOUT_BANNER3}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={IMAGE.MEDICAL_BANNER2}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={IMAGE.MEDICAL_BANNER2}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.heading}>
            <Text style={styles.headtingText}>Diagnosis</Text>
          </View>
          <View style={styles.boxAvatarColumn}>
            <View style={styles.boxAvatarRow}>
              <TouchableOpacity style={styles.boxTouchableContent}>
                <View style={styles.boxAvatar}>
                  <Avatar.Image
                    source={{
                      uri: 'https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-abs.png',
                    }}
                    size={55}
                  />
                  <View style={styles.boxAvatarText}>
                    <Text>Heart Specialist (Cardiologists)</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxTouchableContent}>
                <View style={styles.boxAvatar}>
                  <Avatar.Image
                    source={{
                      uri: 'https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-abs.png',
                    }}
                    size={55}
                  />
                  <View>
                    <Text>Heart Specialist (Cardiologists)</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.boxAvatarRow}>
              <TouchableOpacity style={styles.boxTouchableContent}>
                <View style={styles.boxAvatar}>
                  <Avatar.Image
                    source={{
                      uri: 'https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-abs.png',
                    }}
                    size={55}
                  />
                  <View style={styles.boxAvatarText}>
                    <Text>Heart Specialist (Cardiologists)</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boxTouchableContent}>
                <View style={styles.boxAvatar}>
                  <Avatar.Image
                    source={{
                      uri: 'https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-abs.png',
                    }}
                    size={55}
                  />
                  <View style={styles.boxAvatarText}>
                    <Text>Heart Specialist (Cardiologists)</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 160,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 28,
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 15,
    shadowColor: '#eee',
  },

  boxContainer: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    shadowColor: '#eee',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },

  heading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  headtingText: {
    flex: 1,
    color: 'black',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    fontWeight: 'bold',
  },

  headingImage: {
    width: 18,
    height: 18,
    tintColor: 'black',
  },

  boxHeader: {
    padding: 8,
  },

  boxHeaderText: {
    marginLeft: 110,
    marginRight: 100,
    marginTop: -25,
    fontSize: 16,
    fontWeight: '900',
  },

  boxAvatarColumn: {
    flex: 1,
    flexDirection: 'column',
  },

  boxAvatarRow: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },

  boxTouchableContent: {
    flex: 0.5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  boxAvatar: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxAvatarText: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DiagnosisScreen;
