import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {
  MoreContentModal1,
  SlideableContentComponent1,
} from '../../../Components/Organisms/SlideableContent';
import {doctorState} from '../../../Constants/allStates';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import {style1, style2} from './styles';
import {navigate} from '../../../Navigations/navigationServices';

const BoxComponenet = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={style2.container1}
      onPress={() =>
        navigate(props.routeName, {
          id: props?.id,
          title: props?.title,
        })
      }>
      <View style={style2.imageContainer}>
        <Image style={style2.image1} source={props.image} />
      </View>
      <Text style={style2.title1}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const HealthcareServicesComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <View
      style={[
        style1.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <Text
        style={[
          style1.title1,
          status ? darkMode.textColor : lightMode.textColor,
        ]}>
        {props.doctorState.headers.serviceHeader}
      </Text>
      <View style={style1.container2}>
        {/* <BoxComponenet
          title="Instant Doctor"
          image={doctorState.images.instantDoc}
          routeName="instantDoctor"
          navigation={props.navigation}
        /> */}
        <BoxComponenet
          title="Physian/Surgeon"
          image={doctorState.images.physiansAndSurgeon}
          routeName="specialities"
          navigation={props.navigation}
        />
        <BoxComponenet
          title="Find Therapist"
          image={doctorState.images.therapist}
          routeName="specialities"
          navigation={props.navigation}
        />
        <BoxComponenet
          title="Nursing Care"
          image={doctorState.images.patientCare}
          routeName="differentCareProvider"
          navigation={props.navigation}
          id="dc593839ba914817a88fad40aee7d01d"
        />
        <BoxComponenet
          title="Patient Care"
          image={doctorState.images.patientCare}
          routeName="differentCareProvider"
          navigation={props.navigation}
          id="eaa1faa2d95c4872887bb0807df9e6a4"
        />
        <BoxComponenet
          title="Baby Care"
          image={doctorState.images.patientCare}
          routeName="differentCareProvider"
          navigation={props.navigation}
          id="fbe7ad0629194e4283ceadd500764be3"
        />
        <BoxComponenet
          title="Old Age Care"
          image={doctorState.images.patientCare}
          routeName="differentCareProvider"
          navigation={props.navigation}
          id="8e1b821028fe4aa0ad045767881ae101"
        />
        {/* <BoxComponenet
          title="GDA"
          image={doctorState.images.patientCare}
          routeName="differentCareProvider"
          navigation={props.navigation}
        />
        <BoxComponenet
          title="Diagnostic Center"
          image={doctorState.images.diagonsticCenter}
          routeName="diagnosis"
          navigation={props.navigation}
        />
        <BoxComponenet
          title="Hospital/Clinic"
          image={doctorState.images.hospitals}
          routeName="specialities"
          navigation={props.navigation}
        /> */}
      </View>
    </View>
  );
};

const dummyData = [
  {
    id: 1,
    value: 'Arthritis',
  },
  {
    id: 2,
    value: 'Asthma',
  },
  {
    id: 3,
    value: 'Flu',
  },
  {
    id: 4,
    value: 'Birth Defects',
  },
  {
    id: 5,
    value: 'Diabetes',
  },
  {
    id: 7,
    value: 'Covid-19',
  },
  {
    id: 8,
    value: 'Heart Disease',
  },
  {
    id: 9,
    value: 'HIV',
  },
  {
    id: 10,
    value: 'Kidney Disease',
  },
  {
    id: 11,
    value: 'Mental Health',
  },
  {
    id: 12,
    value: 'Overweight and Underweight',
  },
  {
    id: 13,
    value: 'Stroke',
  },
  {
    id: 14,
    value: 'Brain Injuries',
  },
  {
    id: 15,
    value: 'Zika Virus',
  },
  {
    id: 16,
    value: 'Parasites',
  },
  {
    id: 17,
    value: 'Different Infection',
  },
];

const PriventiveCareComponent = props => {
  const [moreContentModalStatus, setmoreContentModalStatus] = useState(false);

  const onMoreOptionBtnClick = () => {
    setmoreContentModalStatus(!moreContentModalStatus);
  };

  const onContentClick = item => {
    props.navigation.navigate('preventivecareDetail', {bodyPart: item});
  };

  return (
    <>
      <SlideableContentComponent1
        headerTitle="Preventive Care"
        navigation={props.navigation}
        onContentClick={onContentClick}
        moreOptionBtn
        onMoreOptionBtnClick={onMoreOptionBtnClick}
        data={dummyData}
      />
      <MoreContentModal1
        modalStatus={moreContentModalStatus}
        onChangeModalStatus={onMoreOptionBtnClick}
        data={dummyData}
        headerTitle="Preventive Care"
        navigation={props.navigation}
      />
    </>
  );
};

export {HealthcareServicesComponent, PriventiveCareComponent};
