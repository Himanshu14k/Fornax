import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import CustomHeader from '../../Navigators/CustomHeader';

const NursesProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader navigation={navigation} />
      <View style={styles.container}>
        <Text>Doctor Detail Screen</Text>
        <Button
          title="Touch"
          onPress={() => {
            navigation.navigate('specialities');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NursesProfileScreen;
