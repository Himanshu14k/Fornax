import ApiConstants from '../../Constants/apiConstants';

const initialState = {
  doctorList: {},
  therapistList: [],
};

function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case ApiConstants.API_GET_DOC_LIST_SUCCESS:
      return {
        ...state,
        doctorList: action.payload,
      };
    case ApiConstants.API_GET_DOC_LIST_ERROR:
      return {
        ...state,
        doctorList: {},
      };
    case ApiConstants.API_THERAPIST_LIST_SUCCESS:
      return {
        ...state,
        therapistList: action.payload,
      };
    case ApiConstants.API_THERAPIST_LIST_ERROR:
      return {
        ...state,
        therapistList: [],
      };

    default:
      return state;
  }
}

export default servicesReducer;
