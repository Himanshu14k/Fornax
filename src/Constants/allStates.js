const homeState = {
  banners: {
    banner1: require('../Banner/banner1.jpeg'),
    banner2: require('../Banner/banner2.jpeg'),
    banner3: require('../Banner/banner3.jpeg'),
    banner4: require('../Banner/banner4.jpeg'),
    banner5: require('../Banner/GymBanner3.jpg'),
  },
  headers: {
    workoutHeader: 'Workout Zone',
    healthcareHeader: 'Healthcare Services',
  },

  titles: {
    workoutTitles: {
      workoutTitle1: 'Exercise',
    },
    healthcareTitles: {
      healthcareTitle1: 'Live Comsultation',
      healthcareTitle2: 'Physical Booking',
      healthcareTitle3: 'Patient Care',
      healthcareTitle4: 'Hospitals',
    },
  },

  avatars: {avatar1: require('../Assets/Avatar/abs.png')},
  images: {
    image1: require('../Assets/Icons/right-arrow.png'),
    image2: require('../Assets/Images/MedicalBanner1.jpg'),
    image3: require('../Assets/Images/MedicalBanner2.jpg'),
    image4: require('../Assets/Images/GymBanner1.jpg'),
    image5: require('../Assets/Images/GymBanner2.jpg'),
    image6: require('../Assets/Images/GymBanner3.jpg'),
  },
};

const doctorState = {
  banners: {
    banner1: require('../Banner/MedicalBanner1.jpg'),
    banner2: require('../Banner/MedicalBanner2.jpg'),
    banner3: require('../Banner/GymBanner1.jpg'),
    banner4: require('../Banner/GymBanner2.jpg'),
    banner5: require('../Banner/GymBanner3.jpg'),
  },
  avatars: {avatar1: require('../Assets/Avatar/abs.png')},
  images: {
    image1: require('../Assets/Icons/right-arrow.png'),
    image2: require('../Assets/Images/MedicalBanner1.jpg'),
    image3: require('../Assets/Images/MedicalBanner2.jpg'),
    image4: require('../Assets/Images/GymBanner1.jpg'),
    image5: require('../Assets/Images/GymBanner2.jpg'),
    image6: require('../Assets/Images/GymBanner3.jpg'),
    instantDoc: require('../Assets/Images/InstantDC.jpg'),
    physiansAndSurgeon: require('../Assets/Images/PhysianAndSurgeon.jpg'),
    therapist: require('../Assets/Images/therapist.jpeg'),
    doc: require('../Assets/Images/doc.jpeg'),
    nurses: require('../Assets/Images/nurses.jpeg'),
    oldAge: require('../Assets/Images/oldAgeCare.jpeg'),
    babyCare: require('../Assets/Images/babyCare.jpeg'),
    pregancyCare: require('../Assets/Images/pregancyCare.png'),
    patientCare: require('../Assets/Images/PatientCare.jpg'),
    diagonsticCenter: require('../Assets/Images/DiagnosticCenter.jpg'),
    hospitals: require('../Assets/Images/Hospitals.jpeg')
  },
  headers: {
    serviceHeader: 'Healthcare Services',
  },
  titles: {
    serviceTitle1: 'Instant Doctor Booking',
    serviceTitle2: 'Physians/Surgeons',
    serviceTitle3: 'Find Therapist',
    serviceTitle4: 'Find Patient Care',
    serviceTitle5: 'Diagnostic Center',
    serviceTitle6: 'Hospitals/Clinics',
  },
};

const specialitiesState = {
  banners: {
    banner1: require('../Banner/MedicalBanner1.jpg'),
    banner2: require('../Banner/MedicalBanner2.jpg'),
    banner3: require('../Banner/GymBanner1.jpg'),
    banner4: require('../Banner/GymBanner2.jpg'),
    banner5: require('../Banner/GymBanner3.jpg'),
  },
  titles: {
    headerTitle: 'Specialities (Physions & Surgeon)',
    specialitiesTitle1: 'Heart Specialist (Cardiologists)',
  },
  avatars: {avatar1: require('../Assets/Avatar/abs.png')},
};
const therapyState = {
  banners: {
    banner1: require('../Banner/MedicalBanner1.jpg'),
    banner2: require('../Banner/MedicalBanner2.jpg'),
    banner3: require('../Banner/GymBanner1.jpg'),
    banner4: require('../Banner/GymBanner2.jpg'),
    banner5: require('../Banner/GymBanner3.jpg'),
  },
  titles: {
    headerTitle: 'Specialities (Physions & Surgeon)',
    specialitiesTitle1: 'Heart Specialist (Cardiologists)',
  },
  avatars: {avatar1: require('../Assets/Avatar/abs.png')},
};

export {homeState, doctorState, specialitiesState, therapyState};
