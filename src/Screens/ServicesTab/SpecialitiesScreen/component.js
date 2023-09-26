import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {CustomLoading2} from '../../../Components/Molecules/CustomLoadings/customLoading';
import {style1, style2} from './style';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import {specialitiesData} from '../../../Constants/screenData';

const ContentContainerComponents = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        props.navigation.navigate('doctorList', {
          sId: props.data._id,
          prevRouteName: props?.preRN,
        })
      }
      style={style1.container1}>
      <View style={style1.imageContainer}>
        <Image style={style1.image} source={{uri: props.data?.image}} />
      </View>
      <Text
        style={[
          style1.title,
          status ? darkMode.textColor : lightMode.textColor,
        ]}>
        {props.data?.title}
      </Text>
    </TouchableOpacity>
  );
};

const SpecialitiesSectionComponent = props => {
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
        {props.headerTitle}
      </Text>
      <View style={style2.container2}>
        {specialitiesData.map((item, id) => (
          <View key={id}>
            <ContentContainerComponents
              data={item}
              navigation={props.navigation}
              preRN={props.preRN}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export {SpecialitiesSectionComponent};
