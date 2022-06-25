import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  orders: null,
  order: null,
  verified: null,
  deliveryData: null,
  success: false,

  past_orders_end: false,
  past_orders_cursor: null,

  product: null,
  address: null,
};

const orderReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_STATE:
      return {
        ...state,
        product: action.productId,
      };

    case ActionTypes.ADD_ADDRESS_TO_STATE:
      return {
        ...state,
        address: action.address,
      };

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
        order: action?.data?.order,
        success: true,
      };

    case ActionTypes.CREATE_ORDER_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action?.data?.errmess ?? action?.errmess,
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
        errmess: action?.data?.errmess ?? action?.errmess,
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
        past_orders_end: action.data?.end,
        past_orders_cursor: action.data?.cursor ?? action.data?.lastDoc,
      };

    case ActionTypes.PAST_ORDERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action?.data?.message,
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
        deliveryData: action?.data?.data,
      };

    case ActionTypes.CHECK_DELIVERY_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action?.data?.message,
      };
    default:
      return state;
  }
};

export default orderReducer;
