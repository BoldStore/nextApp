import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  stores_success: false,
  products_success: false,
  stores: [],
  products: [],
};

const addressReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.SEARCH_STORES_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.SEARCH_STORES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        stores: action.data.stores,
        stores_success: true,
      };

    case ActionTypes.SEARCH_STORES_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data?.errmess,
        stores_success: false,
      };

    case ActionTypes.SEARCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        products: action.data.products,
        products_success: true,
      };

    case ActionTypes.SEARCH_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data?.errmess,
        products_success: false,
      };
    default:
      return state;
  }
};

export default addressReducer;
