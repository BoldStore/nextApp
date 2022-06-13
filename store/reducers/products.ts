import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  saved_success: false,
  delete_success: false,
  errmess: null,
  product: null,
  store: null,
  products: [],
};

const productsReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        product: action.product,
        store: action.store,
        products: action.products,
      };

    case ActionTypes.GET_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data?.errmess,
        product: null,
        store: null,
      };

    case ActionTypes.SAVE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
        saved_success: false,
      };

    case ActionTypes.SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        saved_success: true,
      };

    case ActionTypes.SAVE_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data?.errmess,
        saved_success: false,
      };

    case ActionTypes.GET_SAVED_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.GET_SAVED_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        products: action.products,
      };

    case ActionTypes.GET_SAVED_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data?.errmess,
        products: [],
      };

    case ActionTypes.DELETE_SAVED_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
        delete_success: false,
      };

    case ActionTypes.DELETE_SAVED_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        delete_success: true,
      };

    case ActionTypes.DELETE_SAVED_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data?.errmess,
        delete_success: false,
      };

    default:
      return state;
  }
};

export default productsReducer;
