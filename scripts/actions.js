import { CHANGE_CURRENT_USER_NAME } from './constants';

export const changeCurrentUserName = currentUserName => ({
  type: CHANGE_CURRENT_USER_NAME,
  payload: currentUserName,
});

