import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import {
  aboutSectionStyles,
  contactDetailsSectionStyles,
  associatedOrganizationSectionStyles,
  serviceSectionStyles,
  generalInfoStyles,
} from './styles';
import {doctorState} from '../../../Constants/allStates';
import {darkMode, lightMode} from '../../../Utils/Colors';
import {TextWithAnimatedDots_Loading} from '../../Molecules/CustomLoadings/customLoading';

const dummyDataH = [
  {
    id: 1,
    name: 'Max Hospital, Mohali',
    image: doctorState.images.hospitals,
    jobTitle: 'Diagnostic medical sonographer',
  },
  {
    id: 2,
    name: 'Indraprastha Apollo Hospital, New Delhi',
    image: doctorState.images.hospitals,
    jobTitle: 'Cardiovascular technologist',
  },
  {
    id: 3,
    name: 'Fortis Hospital, Kolkata',
    image: doctorState.images.hospitals,
    jobTitle: 'MRI technologist',
  },
  {
    id: 4,
    name: 'Lilavati Hospital, Mumbai',
    image: doctorState.images.hospitals,
    jobTitle: 'Human resource specialist',
  },
  {
    id: 5,
    name: 'Tata Memorial Hospital, Mumbai',
    image: doctorState.images.hospitals,
    jobTitle: 'Assistant director of nursing',
  },
];

const AssociatedOrganizationSection = props => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <View
      style={[
        associatedOrganizationSectionStyles.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={associatedOrganizationSectionStyles.container2}>
        <Text
          style={[
            associatedOrganizationSectionStyles.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          {props.headerTitle}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={associatedOrganizationSectionStyles.container3}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {dummyDataH.map((item, id) => (
          <TouchableOpacity
            key={id}
            activeOpacity={0.7}
            style={associatedOrganizationSectionStyles.container4}
            onPress={() => props.navigation.navigate(props.routeName)}>
            <View style={associatedOrganizationSectionStyles.imageContainer}>
              <Image
                source={item.image}
                style={associatedOrganizationSectionStyles.image1}
              />
            </View>
            <View style={associatedOrganizationSectionStyles.container5}>
              <Text
                numberOfLines={1}
                style={associatedOrganizationSectionStyles.title2}>
                {item.name}
              </Text>
            </View>
            <View style={associatedOrganizationSectionStyles.container5}>
              <Text
                numberOfLines={1}
                style={associatedOrganizationSectionStyles.title2}>
                As {item.jobTitle}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const ServicesSection = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <View
      style={[
        serviceSectionStyles.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={serviceSectionStyles.container2}>
        <Text
          style={[
            generalInfoStyles.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Services offered by Dr. {props.name}
        </Text>
      </View>
      {props.loadingStatus.status === 2 ? (
        <View style={serviceSectionStyles.container3}>
          {props?.services?.map((item, id) => (
            <Text
              key={id}
              style={[
                serviceSectionStyles.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              ---> {'   '}
              {item?.title}
            </Text>
          ))}
        </View>
      ) : (
        <TextWithAnimatedDots_Loading
          text="Loading"
          loadingStatus={props.loadingStatus}
          setloadingStatus={props.setloadingStatus}
        />
      )}
    </View>
  );
};

const GeneralInfoSection = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <View
      style={[
        generalInfoStyles.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={generalInfoStyles.container2}>
        <Text
          style={[
            generalInfoStyles.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          General Details About Dr. {props.name}
        </Text>
      </View>
      {props.loadingStatus.status === 2 ? (
        <>
          <View style={generalInfoStyles.container3}>
            <Text
              style={[
                generalInfoStyles.title2,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              {props.about}
            </Text>
          </View>
          <View style={[generalInfoStyles.container4]}>
            <Text
              style={[
                generalInfoStyles.title3,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Speciality in {props.speciality}
            </Text>
          </View>
          <View
            style={[
              generalInfoStyles.container5,
              status
                ? darkMode.screenBackgroundColors
                : lightMode.screenBackgroundColors,
            ]}>
            <Text
              style={[
                generalInfoStyles.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              125 Tele-Consultation has been done.
            </Text>
          </View>
          <View
            style={[
              generalInfoStyles.container5,
              status
                ? darkMode.screenBackgroundColors
                : lightMode.screenBackgroundColors,
            ]}>
            <Text
              style={[
                generalInfoStyles.title4,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              125 InPerson-Consultation has been done.
            </Text>
          </View>
        </>
      ) : (
        <TextWithAnimatedDots_Loading
          text="Loading"
          loadingStatus={props.loadingStatus}
          setloadingStatus={props.setloadingStatus}
        />
      )}
    </View>
  );
};

const AboutSection = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [activeId, setActiveId] = useState('');

  const changeActive = id => {
    id === activeId ? setActiveId('') : setActiveId(id);
  };

  return (
    <View
      style={[
        aboutSectionStyles.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={aboutSectionStyles.container2}>
        <Text
          style={[
            aboutSectionStyles.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          About Dr. {props.name}
        </Text>
      </View>

      <View
        style={[
          aboutSectionStyles.container5,
          {
            borderColor: status
              ? darkMode.screenBackgroundColors.backgroundColor
              : lightMode.screenBackgroundColors.backgroundColor,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={aboutSectionStyles.container6}
          onPress={() => changeActive(1)}>
          <Text
            style={[
              aboutSectionStyles.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Areas of Specializations of Dr. {props.name}
          </Text>
          <Icon
            type="ionicon"
            name="chevron-down"
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
          />
        </TouchableOpacity>
        {activeId === 1 && (
          <View
            style={[
              aboutSectionStyles.container7,
              status
                ? darkMode.screenBackgroundColors
                : lightMode.screenBackgroundColors,
            ]}>
            {props.data?.aos?.map((content, id) => (
              <Text
                key={id}
                style={[
                  aboutSectionStyles.title4,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                ---> {'  '}
                {content?.title}
              </Text>
            ))}
          </View>
        )}
      </View>
      <View
        style={[
          aboutSectionStyles.container5,
          {
            borderColor: status
              ? darkMode.screenBackgroundColors.backgroundColor
              : lightMode.screenBackgroundColors.backgroundColor,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={aboutSectionStyles.container6}
          onPress={() => changeActive(2)}>
          <Text
            style={[
              aboutSectionStyles.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Educations of Dr. {props.name}
          </Text>
          <Icon
            type="ionicon"
            name="chevron-down"
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
          />
        </TouchableOpacity>
        {activeId === 2 && (
          <View
            style={[
              aboutSectionStyles.container7,
              status
                ? darkMode.screenBackgroundColors
                : lightMode.screenBackgroundColors,
            ]}>
            {props.data?.educations?.map((content, id) => (
              <Text
                key={id}
                style={[
                  aboutSectionStyles.title4,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                ---> {'  '}
                {content?.title}
              </Text>
            ))}
          </View>
        )}
      </View>
      <View
        style={[
          aboutSectionStyles.container5,
          {
            borderColor: status
              ? darkMode.screenBackgroundColors.backgroundColor
              : lightMode.screenBackgroundColors.backgroundColor,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={aboutSectionStyles.container6}
          onPress={() => changeActive(3)}>
          <Text
            style={[
              aboutSectionStyles.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Work Experiences of Dr. {props.name}
          </Text>
          <Icon
            type="ionicon"
            name="chevron-down"
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
          />
        </TouchableOpacity>
        {activeId === 3 && (
          <View
            style={[
              aboutSectionStyles.container7,
              status
                ? darkMode.screenBackgroundColors
                : lightMode.screenBackgroundColors,
            ]}>
            {props.data?.we?.map((content, id) => (
              <Text
                key={id}
                style={[
                  aboutSectionStyles.title4,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                ---> {'  '}
                {content?.title}
              </Text>
            ))}
          </View>
        )}
      </View>
      <View
        style={[
          aboutSectionStyles.container5,
          {
            borderColor: status
              ? darkMode.screenBackgroundColors.backgroundColor
              : lightMode.screenBackgroundColors.backgroundColor,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={aboutSectionStyles.container6}
          onPress={() => changeActive(4)}>
          <Text
            style={[
              aboutSectionStyles.title3,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Memberships of Dr. {props.name}
          </Text>
          <Icon
            type="ionicon"
            name="chevron-down"
            color={
              status
                ? darkMode.tintColors.tintColor
                : lightMode.tintColors.tintColor
            }
          />
        </TouchableOpacity>
        {activeId === 4 && (
          <View
            style={[
              aboutSectionStyles.container7,
              status
                ? darkMode.screenBackgroundColors
                : lightMode.screenBackgroundColors,
            ]}>
            {props.data?.memberships?.map((content, id) => (
              <Text
                key={id}
                style={[
                  aboutSectionStyles.title4,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                ---> {'  '}
                {content?.title}
              </Text>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const ContactDetailsSection = props => {
  const status = useSelector(state => state.otherReducer.status);
  return (
    <View
      style={[
        contactDetailsSectionStyles.container1,
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={contactDetailsSectionStyles.container2}>
        <Text
          style={[
            contactDetailsSectionStyles.title1,
            status ? darkMode.textColor : lightMode.textColor,
          ]}>
          Contacts Details
        </Text>
      </View>
      {props.loadingStatus.status === 2 ? (
        <>
          <View style={contactDetailsSectionStyles.container3}>
            <View style={contactDetailsSectionStyles.container4}>
              <Icon
                type="material"
                name="email"
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            </View>
            <View style={contactDetailsSectionStyles.container5}>
              <Text
                style={[
                  contactDetailsSectionStyles.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Email
              </Text>
              <Text
                style={[
                  contactDetailsSectionStyles.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {props.data?.email}
              </Text>
            </View>
          </View>
          <View style={contactDetailsSectionStyles.container3}>
            <View style={contactDetailsSectionStyles.container4}>
              <Icon
                type="material"
                name="phone"
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            </View>
            <View style={contactDetailsSectionStyles.container5}>
              <Text
                style={[
                  contactDetailsSectionStyles.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Phone
              </Text>
              <Text
                style={[
                  contactDetailsSectionStyles.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {props.data?.phone_number}
              </Text>
            </View>
          </View>
          <View style={contactDetailsSectionStyles.container3}>
            <View style={contactDetailsSectionStyles.container4}>
              <Icon
                type="material"
                name="link"
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            </View>
            <View style={contactDetailsSectionStyles.container5}>
              <Text
                style={[
                  contactDetailsSectionStyles.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Website
              </Text>
              <Text
                style={[
                  contactDetailsSectionStyles.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {props.data?.website}
              </Text>
            </View>
          </View>
          <View style={contactDetailsSectionStyles.container3}>
            <View style={contactDetailsSectionStyles.container4}>
              <Icon
                type="material-community"
                name="hospital-marker"
                color={
                  status
                    ? darkMode.tintColors.tintColor
                    : lightMode.tintColors.tintColor
                }
              />
            </View>
            <View style={contactDetailsSectionStyles.container5}>
              <Text
                style={[
                  contactDetailsSectionStyles.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Clinic/Hospital Address
              </Text>
              <Text
                style={[
                  contactDetailsSectionStyles.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {props.data?.address}
              </Text>
            </View>
          </View>
        </>
      ) : (
        <TextWithAnimatedDots_Loading
          text="Loading"
          loadingStatus={props.loadingStatus}
          setloadingStatus={props.setloadingStatus}
        />
      )}
    </View>
  );
};

export {
  AssociatedOrganizationSection,
  ServicesSection,
  GeneralInfoSection,
  AboutSection,
  ContactDetailsSection,
};
