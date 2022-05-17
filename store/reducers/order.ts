import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  orders: null,
  verified: null,
  deliveryData: null,
};

const orderReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.CREATE_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        orders: [...state.orders!, action.data.order],
      };

    case ActionTypes.CREATE_ORDER_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data.message,
      };

    case ActionTypes.VERIFY_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.VERIFY_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        verified: true,
      };

    case ActionTypes.VERIFY_ORDER_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data.message,
      };

    case ActionTypes.PAST_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.PAST_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        orders: action.data.orders,
      };

    case ActionTypes.PAST_ORDERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data.message,
      };

    case ActionTypes.CHECK_DELIVERY_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.CHECK_DELIVERY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        deliveryData: action.data.data,
      };

    case ActionTypes.CHECK_DELIVERY_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data.message,
      };
  }
};

export default orderReducer;
