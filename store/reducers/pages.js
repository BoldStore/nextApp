import * as ActionTypes from "../ActionTypes";

const initState = {
  home_loading: false,
  home: null,
  home_errmess: null,
  home_products: [],
  home_end: false,
  home_lastDoc: null,
  home_products_loading: false,

  store: null,
  store_loading: false,
  store_errmess: null,
  store_products: [],
  store_end: false,
  store_lastDoc: null,
  store_products_loading: false,
};

const pagesReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.NEW_HOME:
      return {
        ...state,
        home: null,
        home_products: [],
        home_end: false,
        home_lastDoc: null,
      };

    case ActionTypes.NEW_STORE:
      return {
        ...state,
        store: null,
        store_products: [],
        store_end: false,
        store_lastDoc: null,
      };

    case ActionTypes.NEW_STORE:
      return {
        ...state,
        store: null,
        store_products: [],
        store_end: false,
        store_lastDoc: null,
      };

    case ActionTypes.HOME_PAGE_REQUEST:
      return {
        ...state,
        home_loading: action.home_loading,
        home_errmess: null,
        home_products_loading: true,
      };

    case ActionTypes.HOME_PAGE_SUCCESS:
      let products = [];
      for (let i = 0; i < action?.data?.products?.length; i++) {
        let flag = true;
        for (let j = 0; j < state?.home_products.length; j++) {
          if (state?.home_products[j]?.id === action?.data?.products[i]?.id) {
            flag = false;
            break;
          }
        }
        if (flag) products.push(action?.data?.products[i]);
      }
      return {
        ...state,
        home_loading: false,
        home_products_loading: false,
        home_errmess: null,
        home: action.data,
        home_products: [...new Set([...state?.home_products, ...products])],
        home_end: action.data.end,
        home_lastDoc: action.data.lastDoc,
      };

    case ActionTypes.HOME_PAGE_FAILED:
      return {
        ...state,
        home_loading: false,
        home_errmess: (action?.data?.message || action?.errmess)?.toString(),
      };

    case ActionTypes.STORE_PAGE_REQUEST:
      return {
        ...state,
        store_loading: action.store_loading,
        store_products_loading: true,
        store_errmess: null,
      };

    case ActionTypes.STORE_PAGE_SUCCESS:
      let store_prods = [];
      for (let i = 0; i < action?.data?.products?.length; i++) {
        let flag = true;
        for (let j = 0; j < state?.store_products.length; j++) {
          if (state?.store_products[j]?.id === action?.data?.products[i]?.id) {
            flag = false;
            break;
          }
        }
        if (flag) store_prods.push(action?.data?.products[i]);
      }
      return {
        ...state,
        store_products_loading: false,
        store_loading: false,
        store_errmess: null,
        store: action.data,
        store_products: [
          ...new Set([...state?.store_products, ...store_prods]),
        ],
        store_end: action.data.end,
        store_lastDoc: action.data.lastDoc,
      };

    case ActionTypes.STORE_PAGE_FAILED:
      return {
        ...state,
        store_loading: false,
        store_products_loading: false,
        store_errmess: (action?.data?.message || action?.errmess)?.toString(),
      };
    default:
      return state;
  }
};

export default pagesReducer;
