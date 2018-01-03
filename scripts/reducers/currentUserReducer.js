import { CHANGE_CURRENT_USER_NAME } from '../constants';

const initialState = null;

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_USER_NAME: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default currentUserReducer;
