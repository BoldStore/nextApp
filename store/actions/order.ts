import { toast } from "react-toastify";
import { Dispatch } from "redux";
import instance from "../../axios";
import {
  CHECK_DELIVERY,
  CREATE_ORDER,
  PAST_ORDERS,
  VERIFY_ORDER,
} from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const createOrder = (product_id: string, address_id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.CLEAR_ORDER_FROM_STATE,
    });
    dispatch({ type: ActionTypes.CREATE_ORDER_REQUEST });
    try {
      const response = await instance.post(CREATE_ORDER, {
        product_id,
        address_id,
      });

      dispatch({
        type: ActionTypes.CREATE_ORDER_SUCCESS,
        data: response.data,
      });

      dispatch({
        type: ActionTypes.ADD_ADDRESS_TO_STATE,
        address: null,
      });

      dispatch({
        type: ActionTypes.ADD_PRODUCT_TO_STATE,
        productId: null,
      });
    } catch (e) {
      toast((e as any)?.response?.data?.err?.message ?? "Something went wrong");
      dispatch({
        type: ActionTypes.CREATE_ORDER_FAILED,
        errmess:
          (e as any)?.response?.data?.err?.message ??
          (e as any)?.response?.data ??
          (e as any).toString(),
      });
    }
  };
};

export const verifyOrder = (
  razorpay_payment_id: string,
  razorpay_order_id: string,
  razorpay_signature: string
) => {
  console.log(razorpay_payment_id, razorpay_order_id, razorpay_signature);
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.VERIFY_ORDER_REQUEST });
    try {
      const response = await instance.post(
        VERIFY_ORDER,
        {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.VERIFY_ORDER_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.VERIFY_ORDER_FAILED,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.VERIFY_ORDER_FAILED,
        errmess:
          (e as any).response?.data?.err?.message ?? (e as any).toString(),
      });
    }
  };
};

export const pastOrders = (cursor?: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.PAST_ORDERS_REQUEST });
    try {
      const url = cursor ? PAST_ORDERS + "?cursor=" + cursor : PAST_ORDERS;
      const response = await instance.get(url);

      dispatch({
        type: ActionTypes.PAST_ORDERS_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.PAST_ORDERS_FAILED,
        errmess:
          (e as any)?.response?.data?.err?.message ??
          (e as any)?.response?.data ??
          e,
      });
    }
  };
};

export const checkForDelivery = (postCode: string, productId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.CHECK_DELIVERY_REQUEST });
    try {
      const response = await instance.post(
        CHECK_DELIVERY,
        {
          postCode,
          productId,
        }
        // {
        //   headers: {
        //     Authorization: firebase().auth().currentUser.getIdToken(),
        //   },
        // }
      );

      if (response.status == 200) {
        dispatch({
          type: ActionTypes.CHECK_DELIVERY_SUCCESS,
          data: response.data,
        });
      } else {
        dispatch({
          type: ActionTypes.CHECK_DELIVERY_FAILED,
          error: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.CHECK_DELIVERY_FAILED,
        errmess: e,
      });
    }
  };
};
