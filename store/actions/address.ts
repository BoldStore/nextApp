import { Dispatch } from "redux";
import instance from "../../axios";
import {
  ADD_ADDRESS,
  DELETE_ADDRESS,
  UPDATE_ADDRESS,
  USER_ADDRESSES,
} from "../../constants";
import * as ActionTypes from "../ActionTypes";
import { getProfile } from "./profile";

export const addAddress = (
  title: string,
  address: string,
  addressL1: string,
  addressL2: string,
  city: string,
  state: string,
  pincode: number,
  phone: string,
  notes: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.ADD_ADDRESS_REQUEST });
    try {
      const response = await instance.post(ADD_ADDRESS, {
        title,
        address,
        addressL1,
        addressL2,
        city,
        state,
        pincode,
        phone,
        notes,
      });

      if (response.status == 201) {
        dispatch({
          type: ActionTypes.ADD_ADDRESS_SUCCESS,
          data: response.data,
        });
      } else if (response.status == 200) {
        dispatch({
          type: ActionTypes.UPDATE_ADDRESS_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.ADD_ADDRESS_FAILED,
          error: response.data,
        });
      }
      getProfile();
    } catch (e) {
      dispatch({
        type: ActionTypes.ADD_ADDRESS_FAILED,
        errmess: (e as any).response.data?.err?.message,
      });
    }
  };
};

export const getUserAddresses = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.USER_ADDRESSES_REQUEST });
    try {
      const response = await instance.get(
        USER_ADDRESSES
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.USER_ADDRESSES_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.USER_ADDRESSES_FAILED,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.USER_ADDRESSES_FAILED,
        errmess: e,
      });
    }
  };
};

export const updateAddress = (
  addressId: string,
  title: string,
  addressString: string,
  addressL1: string,
  addressL2: string,
  city: string,
  state: string,
  pincode: number,
  phone: string,
  notes: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_ADDRESS_REQUEST });
    try {
      const response = await instance.patch(UPDATE_ADDRESS, {
        id: addressId,
        title,
        addressString,
        addressL1,
        addressL2,
        city,
        state,
        pincode,
        phone,
        notes,
      });
      dispatch({
        type: ActionTypes.UPDATE_ADDRESS_SUCCESS,
        data: response.data,
      });

      getProfile();
    } catch (e) {
      dispatch({
        type: ActionTypes.UPDATE_ADDRESS_FAILED,
        errmess: e,
      });
    }
  };
};

export const deleteAddress = (addressId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.DELETE_ADDRESS_REQUEST });
    try {
      const response = await instance.post(DELETE_ADDRESS, {
        id: addressId,
      });

      dispatch({
        type: ActionTypes.DELETE_ADDRESS_SUCCESS,
        data: response.data,
      });

      getProfile();
    } catch (e) {
      dispatch({
        type: ActionTypes.DELETE_ADDRESS_FAILED,
        errmess: e,
      });
    }
  };
};
