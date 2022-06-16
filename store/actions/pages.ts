// import functions from "@react-native-firebase/functions";
import { HOME_PAGE, STORE_PAGE } from "../../constants";
import instance from "../../axios";
import { Dispatch } from "redux";
import * as ActionTypes from "../ActionTypes";

export const homePage = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.HOME_PAGE_REQUEST });
    try {
      const response = await instance.get(HOME_PAGE);

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.HOME_PAGE_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.HOME_PAGE_FAILED,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.HOME_PAGE_FAILED,
        errmess: (e as any).response.data,
      });
    }
  };
};

export const storePage = (username: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.STORE_PAGE_REQUEST });
    try {
      const response = await instance.get(STORE_PAGE + `?username=${username}`);

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
