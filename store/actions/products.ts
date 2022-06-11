import { Dispatch } from "redux";
import instance from "../../axios";
import { GET_PRODUCT } from "../../constants";
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
