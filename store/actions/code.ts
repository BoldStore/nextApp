import { Dispatch } from "redux";
import instance from "../../axios";
import { ADD_INVITE_CODE } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const addInviteCode = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.ADD_INVITE_CODE_REQUEST });
    try {
      const response = await instance.get(
        ADD_INVITE_CODE
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 201) {
        dispatch({
          type: ActionTypes.ADD_INVITE_CODE_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.ADD_INVITE_CODE_FAILED,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.ADD_INVITE_CODE_FAILED,
        errmess: e,
      });
    }
  };
};
