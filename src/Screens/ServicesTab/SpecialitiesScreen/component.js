import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {style1, style2} from './style';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import {navigate} from '../../../Navigations/navigationServices';

const ContentContainerComponents = ({data = {}, preRN = ''}) => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigate('doctorList', {
          sId: data._id,
          prevRouteName: preRN,
        })
      }
      style={style1.container1}>
      <View style={style1.imageContainer}>
        <Image style={style1.image} source={{uri: data?.image}} />
      </View>
      <Text
        style={[
          style1.title,
          status ? darkMode.textColor : lightMode.textColor,
        ]}>
        {data?.title}
      </Text>
    </TouchableOpacity>
  );
};

const SpecialitiesSectionComponent = ({
  data = [],
  headerTitle = 'Title',
  preRN = 'Doctors',
}) => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <View
      style={[
        style2.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <Text
        style={[
          style2.title,
          status ? darkMode.textColor : lightMode.textColor,
        ]}>
        {headerTitle}
      </Text>
      <View style={style2.container2}>
        {data.map((item, id) => (
          <View key={id}>
            <ContentContainerComponents data={item} preRN={preRN} />
          </View>
        ))}
      </View>
    </View>
  );
};

export {SpecialitiesSectionComponent};
