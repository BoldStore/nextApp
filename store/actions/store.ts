// import functions from "@react-native-firebase/functions";
import { CREATE_STORE, UPDATE_STORE } from "../../constants";
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

      if (response.status == 201) {
        dispatch({
          type: ActionTypes.CREATE_STORE_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.CREATE_STORE_FAILED,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.CREATE_STORE_FAILED,
        errmess: e,
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
