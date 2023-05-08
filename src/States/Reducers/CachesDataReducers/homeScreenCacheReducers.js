import {
  HOMESCREENCACHES_THERAPIST,
  HOMESCREENCACHES_DOC,
} from '../../Actions/CachesDataActions/types';

const initialStateDOC = {
  docData: [],
};

const initialStateTherapist = {
  therapistData: [],
};

const hsCachesDocReducer = (state = initialStateDOC, action) => {
  switch (action.type) {
    case HOMESCREENCACHES_DOC:
      return {
        ...state,
        docData: action.docData,
      };
    default:
      return state;
  }
};

const hsCachesTheraistReducer = (state = initialStateTherapist, action) => {
  switch (action.type) {
    case HOMESCREENCACHES_THERAPIST:
      return {
        ...state,
        therapistData: action.therapistData,
      };
    default:
      return state;
  }
};

export {hsCachesDocReducer, hsCachesTheraistReducer};
