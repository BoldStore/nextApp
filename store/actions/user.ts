import { Dispatch } from "redux";
import instance from "../../axios";
import {
  ADD_INSTA_USERNAME,
  CREATE_USER,
  DELETE_USER,
  GET_PERSONAL_DETAILS,
  UPDATE_USER,
} from "../../constants";
import * as ActionTypes from "../ActionTypes";
import { getProfile } from "./profile";

export const createUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.CREATE_USER_REQUEST });
    try {
      const response = await instance.post(CREATE_USER);
      dispatch({
        type: ActionTypes.CREATE_USER_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.CREATE_USER_FAILED,
        errmess: (e as any).response?.data?.err?.message ?? e,
      });
    }
  };
};

export const addInstaUsername = (insta_username: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.ADD_INSTA_USERNAME_REQUEST });
    try {
      const response = await instance.post(ADD_INSTA_USERNAME, {
        insta_username,
      });

      dispatch({
        type: ActionTypes.ADD_INSTA_USERNAME_SUCCESS,
        data: response.data,
      });

      getProfile();
    } catch (e) {
      dispatch({
        type: ActionTypes.ADD_INSTA_USERNAME_FAILED,
        errmess: (e as any)?.response?.data?.err?.message ?? e,
      });
    }
  };
};

export const getPersonalDetails = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.GET_PERSONAL_DETAILS_REQUEST });
    try {
      const response = await instance.get(GET_PERSONAL_DETAILS);

      dispatch({
        type: ActionTypes.GET_PERSONAL_DETAILS_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.GET_PERSONAL_DETAILS_FAILED,
        errmess: e,
      });
    }
  };
};

export const updateUser = (
  name: string,
  phone: string,
  insta_username?: string,
  birthday?: Date,
  sizePreference?: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_USER_REQUEST });
    try {
      const response = await instance.patch(UPDATE_USER, {
        name,
        birthday,
        sizePreference,
        phone,
        insta_username,
      });

      dispatch({
        type: ActionTypes.UPDATE_USER_SUCCESS,
        data: response.data,
      });

      getProfile();
    } catch (e) {
      dispatch({
        type: ActionTypes.UPDATE_USER_FAILED,
        errmess:
          (e as any).response?.data?.err?.message ??
          (e as any)?.response?.data ??
          e,
      });
    }
  };
};

export const deleteUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.DELETE_USER_REQUEST });
    try {
      const response = await instance.get(DELETE_USER);

      dispatch({
        type: ActionTypes.DELETE_USER_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.DELETE_USER_FAILED,
        errmess: e,
      });
    }
  };
};
