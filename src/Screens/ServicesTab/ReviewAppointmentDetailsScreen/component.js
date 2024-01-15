import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {styles1, styles2, styles3, styles4, styles5, styles6} from './style';
import {useSelector} from 'react-redux';
import {darkMode, lightMode} from '../../../Constants/themeColors';
import {widthToDp} from '../../../Utils/dimensionsInPixel';
import {ViewPicModal} from '../../../Components/Molecules/ViewPic/viewPicModal';

const PaymentMethodComponent = props => {
  const [mode, setMode] = useState(1);
  return (
    <View
      style={[
        styles1.container1,
        props.isDark
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <Text
        style={[
          styles1.title1,
          props.isDark ? darkMode.textColor : lightMode.textColor,
        ]}>
        Choose Payment Mode
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles1.container2}
        onPress={() => props.setMode(1)}>
        <View style={styles1.container3}>
          {props.mode === 1 ? (
            <Icon
              type="feather"
              name="check-circle"
              size={20}
              color="#00d9ff"
            />
          ) : (
            <Icon
              type="feather"
              name="circle"
              size={20}
              color={props.isDark ? '#fff' : '#000'}
            />
          )}
          <Text
            style={[
              styles1.title2,
              props.isDark ? darkMode.textColor : lightMode.textColor,
            ]}>
            Pay Online
          </Text>
        </View>
        <Text
          style={[
            styles1.title3,
            props.isDark ? darkMode.textColor : lightMode.textColor,
          ]}>
          ₹ 300{props?.data?.professional_Info?.vFees}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles1.container2}
        onPress={() => props.setMode(2)}>
        <View style={styles1.container3}>
          {props.mode === 2 ? (
            <Icon
              type="feather"
              name="check-circle"
              size={20}
              color="#00d9ff"
            />
          ) : (
            <Icon
              type="feather"
              name="circle"
              size={20}
              color={props.isDark ? '#fff' : '#000'}
            />
          )}
          <Text
            style={[
              styles1.title2,
              props.isDark ? darkMode.textColor : lightMode.textColor,
            ]}>
            Pay At Clinic
          </Text>
        </View>
        <Text
          style={[
            styles1.title3,
            props.isDark ? darkMode.textColor : lightMode.textColor,
          ]}>
          ₹ 400{props?.data?.professional_Info?.cFees}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const BillDetailsComponent = props => {
  return (
    <View
      style={[
        props.isDark
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
        styles2.container1,
      ]}>
      <View
        style={[
          styles2.container2,
          {borderBottomColor: props.isDark ? '#666' : '#595959'},
        ]}>
        <Text
          style={[
            styles2.title1,
            props.isDark ? darkMode.textColor : lightMode.textColor,
          ]}>
          Bill Details
        </Text>
        <View style={styles2.container3}>
          <Text
            style={[
              styles1.title3,
              props.isDark ? darkMode.textColor : lightMode.textColor,
            ]}>
            Consultation Fee
          </Text>
          <Text
            style={[
              styles1.title2,
              props.isDark ? darkMode.textColor : lightMode.textColor,
            ]}>
            ₹ 500{' '}
            {props.mode === 1
              ? props?.data?.professional_Info?.vFees
              : props?.data?.professional_Info?.cFees}
          </Text>
        </View>
        <View style={styles2.container3}>
          <Text
            style={[
              styles2.title3,
              props.isDark ? darkMode.textColor : lightMode.textColor,
            ]}>
            HealthCash
          </Text>
          <Text style={[styles1.title2, {color: '#00ff00'}]}>- ₹ 40</Text>
        </View>
      </View>
      <View style={styles2.container3}>
        <Text>Total Payable</Text>
        <Text>
          ₹ 460{' '}
          {/* {props.mode === 1
            ? props?.data?.professional_Info?.vFees - 40
            : props?.data?.professional_Info?.cFees - 40} */}
        </Text>
      </View>
    </View>
  );
};

const BookedAppointmentOverviewComponent_Doc = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalStatus}
      onRequestClose={() => props.onChangeModalStatus()}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <TouchableOpacity onPress={() => props.onChangeModalStatus()}>
          <Icon
            name="close"
            type="ionicon"
            size={widthToDp(8)}
            color="#00d9ff"
          />
        </TouchableOpacity>
        <Text>Booked Appointment</Text>
      </View>
    </Modal>
  );
};

const dummyData = [
  {
    id: 1,
    title: 'Patient Details',
  },
  {
    id: 2,
    title: 'Appointment Details',
  },
  {
    id: 3,
    title: 'Prescription',
  },
  {
    id: 4,
    title: 'Session Details',
  },
];

const ReviewAppoinmentComponent = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [selectedItem, setSelectedItem] = useState(1);
  const [viewPicModalStatus, setviewPicModalStatus] = useState(false);
  const [modalImage, setmodalImage] = useState(null);

  const onPicClick = img => {
    setmodalImage(img);
    setviewPicModalStatus(!viewPicModalStatus);
  };

  return (
    <View
      style={[
        styles3.container,
        props.isDark
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <ScrollView
        horizontal
        style={styles3.container1}
        showsHorizontalScrollIndicator={false}>
        {dummyData.map(item =>
          item.title === 'Prescription' || item.title === 'Session Details' ? (
            props.extraMenu && (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item.id}
                style={[
                  styles3.header,
                  status
                    ? darkMode.borderColorPrimary
                    : lightMode.borderColorPrimary,
                  selectedItem === item.id && {backgroundColor: '#00d9fff2'},
                ]}
                onPress={() => setSelectedItem(item.id)}>
                <Text
                  style={[
                    styles3.title,
                    selectedItem !== item.id && status
                      ? darkMode.textColor
                      : lightMode.textColor,
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item.id}
              style={[
                styles3.header,
                status
                  ? darkMode.borderColorPrimary
                  : lightMode.borderColorPrimary,
                selectedItem === item.id && {backgroundColor: '#00d9fff2'},
              ]}
              onPress={() => setSelectedItem(item.id)}>
              <Text
                style={[
                  styles3.title,
                  selectedItem !== item.id && status
                    ? darkMode.textColor
                    : lightMode.textColor,
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ),
        )}
      </ScrollView>
      {selectedItem === 1 ? (
        <View style={styles3.container2}>
          <View style={styles3.container3}>
            <View style={styles3.container4}>
              <Text
                numberOfLines={1}
                style={[
                  styles3.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Name :
              </Text>
            </View>
            <View style={styles3.container5}>
              <Text
                style={[
                  styles3.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {'props?.data?.patientInfo?.name'}
              </Text>
            </View>
          </View>
          <View style={styles3.container3}>
            <View style={styles3.container4}>
              <Text
                numberOfLines={1}
                style={[
                  styles3.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Gender :
              </Text>
            </View>
            <View style={styles3.container5}>
              <Text
                style={[
                  styles3.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {'props?.data?.patientInfo?.gender'}
              </Text>
            </View>
          </View>
          <View style={styles3.container3}>
            <View style={styles3.container4}>
              <Text
                numberOfLines={1}
                style={[
                  styles3.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Age :
              </Text>
            </View>
            <View style={styles3.container5}>
              <Text
                style={[
                  styles3.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {'props?.data?.patientInfo?.age'}
              </Text>
            </View>
          </View>
          <View style={styles3.container3}>
            <View style={styles3.container4}>
              <Text
                numberOfLines={1}
                style={[
                  styles3.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Phone Number :
              </Text>
            </View>
            <View style={styles3.container5}>
              <Text
                style={[
                  styles3.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {'props?.data?.patientInfo?.phoneNumber'}
              </Text>
            </View>
          </View>
          <View style={styles3.container6}>
            <View style={styles3.container7}>
              <Text
                numberOfLines={1}
                style={[
                  styles3.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient Current Issues
              </Text>
            </View>
            <View style={styles3.container8}>
              {[1, 1, 1, 1, 1, 1]?.map((item, id) => (
                <View key={id} style={styles3.container9}>
                  <Text
                    style={[
                      styles3.title4,
                      status ? darkMode.textColor : lightMode.textColor,
                    ]}>
                    --> {'item?.title'}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles3.container3}>
            <View style={styles3.container4}>
              <Text
                numberOfLines={1}
                style={[
                  styles3.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Patient issue description :
              </Text>
            </View>
            <View style={styles3.container5}>
              <Text
                style={[
                  styles3.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {'props?.data?.currentIssue?.issuesDescription'}
              </Text>
            </View>
          </View>
        </View>
      ) : selectedItem === 2 ? (
        <View style={styles3.container2}>
          <View style={styles3.container3}>
            <View style={styles3.container4}>
              <Text
                numberOfLines={1}
                style={[
                  styles3.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Appoinment Date :
              </Text>
            </View>
            <View style={styles3.container5}>
              <Text
                style={[
                  styles3.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {"props?.data?.appointmentInfo?.date"}
              </Text>
            </View>
          </View>
          <View style={styles3.container3}>
            <View style={styles3.container4}>
              <Text
                numberOfLines={1}
                style={[
                  styles3.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Appoinment Time :
              </Text>
            </View>
            <View style={styles3.container5}>
              <Text
                style={[
                  styles3.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {"props?.data?.appointmentInfo?.time"}
              </Text>
            </View>
          </View>
          <View style={styles3.container3}>
            <View style={styles3.container4}>
              <Text
                numberOfLines={1}
                style={[
                  styles3.title2,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                Appoinment Time :
              </Text>
            </View>
            <View style={styles3.container5}>
              <Text
                style={[
                  styles3.title3,
                  status ? darkMode.textColor : lightMode.textColor,
                ]}>
                {"props?.data?.appointmentInfo?.mode"}
              </Text>
            </View>
          </View>
        </View>
      ) : selectedItem === 3 ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onPicClick(props.data?.prescription)}
          style={styles3.container10}>
          <Image
            style={styles3.image}
            source={{uri: props.data?.prescription}}
          />
        </TouchableOpacity>
      ) : (
        selectedItem === 4 && (
          <View style={styles3.container2}>
            <View style={styles3.container3}>
              <View style={styles3.container4}>
                <Text
                  numberOfLines={1}
                  style={[
                    styles3.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Total Session :
                </Text>
              </View>
              <View style={styles3.container5}>
                <Text
                  style={[
                    styles3.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {props?.data?.sessionInfo?.total_session} Session
                </Text>
              </View>
            </View>
            <View style={styles3.container3}>
              <View style={styles3.container4}>
                <Text
                  numberOfLines={1}
                  style={[
                    styles3.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Session Duration :
                </Text>
              </View>
              <View style={styles3.container5}>
                <Text
                  style={[
                    styles3.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {props?.data?.sessionInfo?.duration} Minutes
                </Text>
              </View>
            </View>
            <View style={styles3.container3}>
              <View style={styles3.container4}>
                <Text
                  numberOfLines={1}
                  style={[
                    styles3.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Session Timing :
                </Text>
              </View>
              <View style={styles3.container5}>
                <Text
                  style={[
                    styles3.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  {props?.data?.sessionInfo?.timing}
                </Text>
              </View>
            </View>
            <View style={styles3.container3}>
              <View style={styles3.container4}>
                <Text
                  numberOfLines={1}
                  style={[
                    styles3.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Session fees :
                </Text>
              </View>
              <View style={styles3.container5}>
                <Text
                  style={[
                    styles3.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Rs. {props?.data?.sessionInfo?.fees}
                </Text>
              </View>
            </View>
            <View style={styles3.container3}>
              <View style={styles3.container4}>
                <Text
                  numberOfLines={1}
                  style={[
                    styles3.title2,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Total Amount :
                </Text>
              </View>
              <View style={styles3.container5}>
                <Text
                  style={[
                    styles3.title3,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Rs. {props?.data?.sessionInfo?.total_fees}
                </Text>
              </View>
            </View>
          </View>
        )
      )}
      <ViewPicModal
        image={modalImage}
        modalStatus={viewPicModalStatus}
        setModalStatus={setviewPicModalStatus}
      />
    </View>
  );
};

const ProfileComponent = ({isDark, data = {}}) => {
  return (
    <View
      style={[
        styles4.profileSectionContainer,
        isDark
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={styles4.profilePicContainer}>
        <Image
          // source={{uri: data?.general_Info?.profilePic}}
          source={require('../../../Assets/Images/Himanshu.jpeg')}
          style={styles4.profilePic}
        />
      </View>
      <View style={styles4.generalDetailsContainer}>
        <View style={styles4.nameContainer}>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={[
              styles4.name,
              isDark ? darkMode.textColor : lightMode.textColor,
            ]}>
            {'data?.general_Info?.name'}
          </Text>
        </View>
        <View style={styles4.specilizationContainer}>
          <Text
            adjustsFontSizeToFit
            style={[
              styles4.specilization,
              isDark ? darkMode.textColor : lightMode.textColor,
            ]}>
            {'data?.professional_Info?.specialities'}
          </Text>
        </View>
        <View style={styles4.yoeContainer}>
          <Text
            adjustsFontSizeToFit
            style={[
              styles4.yoe,
              isDark ? darkMode.textColor : lightMode.textColor,
            ]}>
            {data?.professional_Info?.yoe} years experience Overall.
          </Text>
        </View>
      </View>
    </View>
  );
};

const SubmissionButtonSection = props => {
  return (
    <View
      style={[
        styles5.submitAndResetbtncontainer,
        props.isDark
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles5.resetBtn}>
        <Text style={styles5.btnTitle}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles5.bookAppoiment}
        onPress={() => props.onClickEvent()}>
        <Text style={styles5.btnTitle}>Pay And Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const ClinicDetailsSection = () => {
  const status = useSelector(state => state.otherReducer.status);

  return (
    <View
      style={[
        styles6.clinicInfoSectionContainer,
        {marginHorizontal: widthToDp(1)},
        status
          ? darkMode.containerbackgroundColor
          : lightMode.containerbackgroundColor,
      ]}>
      <View style={styles6.clinicInfoFirstRowContainer}>
        <View style={styles6.clinicNameContainer}>
          <Text
            adjustsFontSizeToFit
            style={[
              styles6.clinicName,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Astral Skin World
          </Text>
        </View>
        <View style={styles6.clinicAdressContainer}>
          <Text
            adjustsFontSizeToFit
            style={[
              styles6.clinicAdress,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            Kharar, punjab (140301) fghrh rrtydg tregrgre
          </Text>
        </View>
        <View style={styles6.clinicFeesContainer}>
          <Text
            adjustsFontSizeToFit
            style={[
              styles6.clinicFees,
              status ? darkMode.textColor : lightMode.textColor,
            ]}>
            600 In-clinic Fees
          </Text>
        </View>
        <View style={styles6.clinicRatingAndVerificationContainer}>
          <View style={styles6.clinicRatingContainer}>
            <Text
              adjustsFontSizeToFit
              style={[
                styles6.clinicRating,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Rating
            </Text>
          </View>
          <View style={styles6.clinicVerificationContainer}>
            <Text
              adjustsFontSizeToFit
              style={[
                styles6.clinicRating,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Verified
            </Text>
          </View>
        </View>
      </View>
      <View style={styles6.clinicImageContainer}>
        <Image
          style={styles6.clinicImage}
          source={require('../../../Assets/Images/MedicalBanner1.jpg')}
        />
      </View>
    </View>
  );
};

export {
  BillDetailsComponent,
  PaymentMethodComponent,
  BookedAppointmentOverviewComponent_Doc,
  ReviewAppoinmentComponent,
  ProfileComponent,
  SubmissionButtonSection,
  ClinicDetailsSection,
};
