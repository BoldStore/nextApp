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

export const createUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.CREATE_USER_REQUEST });
    try {
      const response = await instance.post(
        CREATE_USER,
        {}
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 201) {
        dispatch({
          type: ActionTypes.CREATE_USER_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.CREATE_USER_FAILED,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.CREATE_USER_FAILED,
        errmess: e,
      });
    }
  };
};

export const addInstaUsername = (insta_username: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.ADD_INSTA_USERNAME_REQUEST });
    try {
      const response = await instance.post(
        ADD_INSTA_USERNAME,
        {
          insta_username,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.ADD_INSTA_USERNAME_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.ADD_INSTA_USERNAME_FAILED,
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.ADD_INSTA_USERNAME_FAILED,
        errmess: e,
      });
    }
  };
};

export const getPersonalDetails = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.GET_PERSONAL_DETAILS_REQUEST });
    try {
      const response = await instance.get(
        GET_PERSONAL_DETAILS
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.GET_PERSONAL_DETAILS_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.GET_PERSONAL_DETAILS_FAILED,
          data: response.data,
        });
      }
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
  birthday: Date,
  sizePreference: string,
  phone: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_USER_REQUEST });
    try {
      const response = await instance.patch(
        UPDATE_USER,
        {
          name,
          birthday,
          sizePreference,
          phone,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.UPDATE_USER_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.UPDATE_USER_FAILED,
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.UPDATE_USER_FAILED,
        errmess: e,
      });
    }
  };
};

export const deleteUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.DELETE_USER_REQUEST });
    try {
      const response = await instance.get(
        DELETE_USER
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.DELETE_USER_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.DELETE_USER_FAILED,
          data: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.DELETE_USER_FAILED,
        errmess: e,
      });
    }
  };
};
