import { Dispatch } from "redux";
import instance from "../../axios";
import { PING_SERVER } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const pingServer = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionTypes.SEND_MAIL_REQUEST });
    try {
      const response = await instance.get(
        PING_SERVER
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.SEND_MAIL_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.SEND_MAIL_FAILED,
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.SEND_MAIL_FAILED,
        errmess: e,
      });
    }
  };
};
