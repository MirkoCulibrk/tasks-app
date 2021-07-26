import { NotificationAction } from "../types";
import { SET_NOTIFICATION } from "../constants/index";

export const setNotification = (
  msg: string,
  type: string = "success"
): NotificationAction => {
  return {
    type: SET_NOTIFICATION,
    payload: {
      msg,
      type,
    },
  };
};
