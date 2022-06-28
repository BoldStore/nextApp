import axios from "axios";
import { Dispatch } from "redux";
import instance from "../../axios";
import { API_URL, LINK, PROFILE } from "../../constants";
import * as ActionTypes from "../ActionTypes";
import { getCookie } from "cookies-next";

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

export const linkUser = (uid: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.LINK_REQUEST });
    try {
      const response = await axios.get(API_URL + LINK + "?userId=" + uid, {
        headers: {
          Authorization: "Bearer " + getCookie("anonymousToken"),
        },
      });

      dispatch({
        type: ActionTypes.LINK_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.LINK_FAILED,
        errmess: (e as any)?.response?.data ?? (e as any).toString(),
      });
    }
  };
};
