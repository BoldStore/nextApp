import { Dispatch } from "redux";
import instance from "../../axios";
import { SEND_MAIL } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const sendMail = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionTypes.SEND_MAIL_REQUEST });
    try {
      const response = await instance.get(
        SEND_MAIL
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      console.log("Status>>", response.status);
      console.log("Data>>", response.data);

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
      console.log("WOHO WORKS");
    } catch (e) {
      dispatch({
        type: ActionTypes.SEND_MAIL_FAILED,
        errmess: e,
      });
    }
  };
};
