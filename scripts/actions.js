import {
  START_FETCH_CURRENT_USER_DATA,
  FINISH_FETCH_CURRENT_USER_DATA
} from "./constants";
import db from "./db";

export function fetchCurrentUserData(dispatch, currentUserName) {
  return () => {
    dispatch({ type: START_FETCH_CURRENT_USER_DATA });
    db.fetchUser(currentUserName).then(response => {
      const currentUserData = response.data;
      dispatch({
        type: FINISH_FETCH_CURRENT_USER_DATA,
        payload: currentUserData
      });
    });
  };
}
