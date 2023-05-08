import {HOMESCREENCACHES_THERAPIST, HOMESCREENCACHES_DOC} from './types';

const setDocCacheData = data => {
  return {
    type: HOMESCREENCACHES_DOC,
    docData: data,
  };
};

const setTherapistCacheData = data => {
  return {
    type: HOMESCREENCACHES_THERAPIST,
    therapistData: data,
  };
};

export {setDocCacheData, setTherapistCacheData};
