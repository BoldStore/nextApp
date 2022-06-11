import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
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

    default:
      return state;
  }
};

export default productsReducer;
