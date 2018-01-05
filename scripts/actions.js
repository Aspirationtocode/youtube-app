import {
  START_FETCH_CURRENT_USER_DATA,
  FINISH_FETCH_CURRENT_USER_DATA,
  ERROR_FETCH_CURRENT_USER_DATA
} from "./constants";
import db from "./db";

export const fetchCurrentUserData = (dispatch, currentUserName) => {
  return async () => {
    dispatch({ type: START_FETCH_CURRENT_USER_DATA });
    try {
      const response = await db.fetchUser(currentUserName);
      console.log(response);
      const currentUserData = response.data;
      dispatch({
        type: FINISH_FETCH_CURRENT_USER_DATA,
        payload: currentUserData
      });
    } catch (err) {
      dispatch({
        type: ERROR_FETCH_CURRENT_USER_DATA,
        payload: err
      });
    }
  };
};
