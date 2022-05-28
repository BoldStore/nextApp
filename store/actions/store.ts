// import functions from "@react-native-firebase/functions";
import {
  ADD_POTENTIAL_STORE,
  CREATE_STORE,
  SAVE_STORE_DATA,
  UPDATE_STORE,
} from "../../constants";
import instance from "../../axios";
import { Dispatch } from "redux";
import * as ActionTypes from "../ActionTypes";

// We really gotta test it
export const createStore = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.CREATE_STORE_REQUEST });
    try {
      // const instance = functions().httpsCallable(CREATE_STORE);

      // const response = await instance({
      //   email: firebase().auth().currentUser.email,
      // });
      const response = await instance.post(
        CREATE_STORE,
        {}
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      console.log(response.status);
      console.log(response.data);

      if (response.status == 201) {
        dispatch({
          type: ActionTypes.CREATE_STORE_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.CREATE_STORE_FAILED,
          errmess: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.CREATE_STORE_FAILED,
        data: (e as any)?.response?.data.err ?? "Something went wrong",
      });
    }
  };
};

export const updateStore = (upi_id: string, phone_number: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_STORE_REQUEST });
    try {
      const response = await instance.post(
        UPDATE_STORE,
        {
          upi_id: upi_id,
          phone_number: phone_number,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.UPDATE_STORE_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.UPDATE_STORE_FAILED,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.UPDATE_STORE_FAILED,
        errmess: e,
      });
    }
  };
};

export const updateStoreProducts = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_STORE_PRODUCTS_REQUEST });
    try {
      const response = await instance.get(
        UPDATE_STORE
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.UPDATE_STORE_PRODUCTS_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.UPDATE_STORE_PRODUCTS_FAILED,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.UPDATE_STORE_PRODUCTS_FAILED,
        errmess: e,
      });
    }
  };
};

export const addPotentialStore = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.ADD_POTENTIAL_STORE_REQUEST });
    try {
      const response = await instance.get(ADD_POTENTIAL_STORE);

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.ADD_POTENTIAL_STORE_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.ADD_POTENTIAL_STORE_FAILED,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.ADD_POTENTIAL_STORE_FAILED,
        errmess: e,
      });
    }
  };
};

export const saveStoreData = (insta_code: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.SAVE_STORE_DATA_REQUEST });
    try {
      const response = await instance.post(SAVE_STORE_DATA, {
        insta_code,
      });

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.SAVE_STORE_DATA_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.SAVE_STORE_DATA_FAILED,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.SAVE_STORE_DATA_FAILED,
        errmess: e,
      });
    }
  };
};
