import {DARK_THEME} from '../../Actions/DarkThemeActions/types';

const initialState = {
  status: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case DARK_THEME:
      return {
        ...state,
        status: !state.status,
      };

    default:
      return state;
  }
};

export default reducers;
