// import functions from "@react-native-firebase/functions";
import { HOME_PAGE, STORE_PAGE } from "../../constants";
import instance from "../../axios";
import { Dispatch } from "redux";
import * as ActionTypes from "../ActionTypes";

export const homePage = (cursor?: string) => {
  return async (dispatch: Dispatch) => {
    if (!cursor) {
      dispatch({ type: ActionTypes.HOME_PAGE_REQUEST, home_loading: true });
      dispatch({
        type: ActionTypes.NEW_HOME,
      });
    } else {
      dispatch({ type: ActionTypes.HOME_PAGE_REQUEST, home_loading: false });
    }

    try {
      const url = cursor ? HOME_PAGE + "?cursor=" + cursor + "&&" : HOME_PAGE;
      const response = await instance.get(url + "?numberPerPage=10");
      dispatch({
        type: ActionTypes.HOME_PAGE_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.HOME_PAGE_FAILED,
        errmess:
          (e as any)?.response?.data?.err?.message ??
          (e as any)?.response?.data ??
          e,
      });
    }
  };
};

export const storePage = (username: string, cursor?: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.STORE_PAGE_REQUEST });
    if (!cursor) {
      dispatch({
        type: ActionTypes.NEW_STORE,
      });
    }

    try {
      const url = cursor
        ? STORE_PAGE + `?username=${username}&&cursor=${cursor}`
        : STORE_PAGE + `?username=${username}`;

      const response = await instance.get(url);

      dispatch({
        type: ActionTypes.STORE_PAGE_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.STORE_PAGE_FAILED,
        errmess:
          (e as any).response?.data?.err?.message ??
          (e as any).response?.data ??
          e,
      });
    }
  };
};
