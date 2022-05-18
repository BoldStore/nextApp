import { Dispatch } from "redux";
import instance from "../../axios";
import { CHECK_LOGIN, PING_SERVER } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const pingServer = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionTypes.PING_SERVER_REQUEST });
    try {
      const response = await instance.get(PING_SERVER);

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.PING_SERVER_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.PING_SERVER_FAILED,
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.PING_SERVER_FAILED,
        errmess: e,
      });
    }
  };
};

export const checkLogin = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionTypes.CHECK_LOGIN_REQUEST });
    try {
      const response = await instance.post(CHECK_LOGIN);

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.CHECK_LOGIN_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.CHECK_LOGIN_FAILED,
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.CHECK_LOGIN_FAILED,
        errmess: e,
      });
    }
  };
};
