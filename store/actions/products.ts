import { toast } from "react-toastify";
import { Dispatch } from "redux";
import instance from "../../axios";
import { GET_PRODUCT, SAVE_PRODUCT } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const getProduct = (productId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.GET_PRODUCT_REQUEST });
    try {
      const response = await instance.get(
        GET_PRODUCT + `?productId=${productId}`
      );

      dispatch({
        type: ActionTypes.GET_PRODUCT_SUCCESS,
        product: response.data?.product,
        store: response.data?.store,
        products: response.data?.products,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.GET_PRODUCT_FAILED,
        errmess:
          (e as any).response?.data?.err?.message ??
          (e as any).response?.data ??
          e,
      });
    }
  };
};

export const saveProduct = (productId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.SAVE_PRODUCT_REQUEST });
    try {
      await instance.post(SAVE_PRODUCT, {
        productId,
      });

      dispatch({
        type: ActionTypes.SAVE_PRODUCT_SUCCESS,
      });

      toast("Product Saved!");
    } catch (e) {
      dispatch({
        type: ActionTypes.SAVE_PRODUCT_FAILED,
        errmess:
          (e as any).response?.data?.err?.message ??
          (e as any).response?.data ??
          e,
      });
      toast(
        `There was an error - ${
          (e as any).response?.data?.err?.message ?? "Could not save store data"
        }`
      );
    }
  };
};

export const getSavedProducts = (productId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.GET_SAVED_PRODUCTS_REQUEST });
    try {
      const response = await instance.get(SAVE_PRODUCT);

      dispatch({
        type: ActionTypes.GET_SAVED_PRODUCTS_SUCCESS,
        products: response.data?.products,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.GET_SAVED_PRODUCTS_FAILED,
        errmess:
          (e as any).response?.data?.err?.message ??
          (e as any).response?.data ??
          e,
      });
    }
  };
};

export const deleteSavedProduct = (productId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.DELETE_SAVED_PRODUCT_REQUEST });
    try {
      await instance.delete(SAVE_PRODUCT + `?productId=${productId}`);

      dispatch({
        type: ActionTypes.DELETE_SAVED_PRODUCT_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.DELETE_SAVED_PRODUCT_FAILED,
        errmess:
          (e as any).response?.data?.err?.message ??
          (e as any).response?.data ??
          e,
      });
    }
  };
};
