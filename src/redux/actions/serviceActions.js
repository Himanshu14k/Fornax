import ApiConstants from '../../Constants/apiConstants';

export const getDocsListAction = payload => {
  return {
    type: ApiConstants.API_GET_DOC_LIST_LOAD,
    payload,
  };
};

export const getPhysicianListAction = payload => {
  return {
    type: ApiConstants.API_PHYSICIAN_LIST_LOAD,
    payload,
  };
};

export const getSurgeonListAction = payload => {
  return {
    type: ApiConstants.API_SURGEON_LIST_LOAD,
    payload,
  };
};

export const getTherapistListAction = payload => {
  return {
    type: ApiConstants.API_THERAPIST_LIST_LOAD,
    payload,
  };
};

export const getDocsDetailsAction = payload => {
  return {
    type: ApiConstants.API_DOCTOR_DETAILS_LOAD,
    payload,
  };
};

export const getTherapistDetailsAction = payload => {
  return {
    type: ApiConstants.API_THERAPIST_DETAILS_LOAD,
    payload,
  };
};

export const getDocTodaySlotsAction = payload => {
  return {
    type: ApiConstants.API_DOCTOR_TODAY_SLOT_LOAD,
    payload,
  };
};

export const getTherapistTodaySlotsAction = payload => {
  return {
    type: ApiConstants.API_THERAPIST_TODAY_SLOT_LOAD,
    payload,
  };
};

export const getDocAllOnlineSlotAction = payload => {
  return {
    type: ApiConstants.API_DOCTOR_ALL_ONLINE_SLOT_LOAD,
    payload,
  };
};

export const getDocAllOfflineSlotAction = payload => {
  return {
    type: ApiConstants.API_DOCTOR_ALL_OFFLINE_SLOT_LOAD,
    payload,
  };
};

export const getTherapistAllOnlineAppointSlotsAction = payload => {
  return {
    type: ApiConstants.API_THERAPIST_ALL_ONLINE_SLOT_LOAD,
    payload,
  };
};

export const getTherapistAllOfflineAppointSlotsAction = payload => {
  return {
    type: ApiConstants.API_THERAPIST_ALL_OFFLINE_SLOT_LOAD,
    payload,
  };
};
