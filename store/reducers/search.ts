import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  stores_success: false,
  products_loading: false,
  products_success: false,
  explore_loading: false,
  explore_success: false,
  stores: [],
  products: [],
  explore: [],
};

const addressReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.SEARCH_STORES_REQUEST:
      return {
        ...state,
        stores_loading: true,
        errmess: null,
      };

    case ActionTypes.SEARCH_STORES_SUCCESS:
      return {
        ...state,
        stores_loading: false,
        errmess: null,
        stores: action.data,
        stores_success: true,
      };

    case ActionTypes.SEARCH_STORES_FAILED:
      return {
        ...state,
        stores_loading: false,
        errmess: action.data?.errmess,
        stores_success: false,
      };

    case ActionTypes.SEARCH_PRODUCTS_REQUEST:
      return {
        ...state,
        products_loading: true,
        errmess: null,
      };

    case ActionTypes.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products_loading: false,
        errmess: null,
        products: action.data,
        products_success: true,
      };

    case ActionTypes.SEARCH_PRODUCTS_FAILED:
      return {
        ...state,
        products_loading: false,
        errmess: action.data?.errmess,
        products_success: false,
      };

    case ActionTypes.EXPLORE_PAGE_REQUEST:
      return {
        ...state,
        explore_loading: true,
        errmess: null,
      };

    case ActionTypes.EXPLORE_PAGE_SUCCESS:
      return {
        ...state,
        explore_loading: false,
        errmess: null,
        explore: action.data,
        explore_success: true,
      };

    case ActionTypes.EXPLORE_PAGE_FAILED:
      return {
        ...state,
        explore_loading: false,
        errmess: action.data?.errmess,
        explore_success: false,
      };
    default:
      return state;
  }
};

export default addressReducer;
