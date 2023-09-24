import ApiConstants from '../../Constants/apiConstants';

const initialState = {
  status: false,
  loader: false,
};

function otherReducer(state = initialState, action) {
  switch (action.type) {
    case ApiConstants.ON_CHANGE_THEME:
      return {
        ...state,
        status: !state?.status,
      };
    case ApiConstants.UPDATE_LODING_STATE:
      return {
        ...state,
        loader: action?.payload,
      };

    default:
      return state;
  }
}

export default otherReducer;
