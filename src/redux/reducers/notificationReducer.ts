import { NotificationAction, NotificationState } from "../types";
import { SET_NOTIFICATION } from "../constants/index";

const initialState: NotificationState = {
  message: "",
  type: "",
};

export default (
  state = initialState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        message: action.payload.msg,
        type: action.payload.type,
      };
    default:
      return state;
  }
};
