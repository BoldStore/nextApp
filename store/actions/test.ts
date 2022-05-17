import { Dispatch } from "redux";
import instance from "../../axios";
import { SEND_MAIL } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const sendMail = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionTypes.SEND_MAIL_REQUEST });
    try {
      // const response = await instance.get(
      //   SEND_MAIL
      //   // {
      //   //   headers: {
      //   //     Authorization: firebase().auth().currentUser.getIdToken(),
      //   //   },
      //   // }
      // );

      // if (response.status == 200) {
      //   dispatch({
      //     type: ActionTypes.SEND_MAIL_SUCCESS,
      //     data: response.data,
      //   });
      // } else {
      //   dispatch({
      //     type: ActionTypes.SEND_MAIL_FAILED,
      //     data: response.data,
      //   });
      // }
      console.log("WOHO WORKS");
      dispatch({
        type: ActionTypes.SEND_MAIL_SUCCESS,
        data: {
          message: "WOHO message",
          success: true,
        },
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.SEND_MAIL_FAILED,
        errmess: e,
      });
    }
  };
};
