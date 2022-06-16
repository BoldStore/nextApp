import { Dispatch } from "redux";
import instance from "../../axios";
import { PROFILE } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const getProfile = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.PROFILE_REQUEST });
    try {
      const response = await instance.get(PROFILE);

      dispatch({
        type: ActionTypes.PROFILE_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.PROFILE_FAILED,
        errmess: (e as any)?.response?.data ?? (e as any).toString(),
      });
    }
  };
};
