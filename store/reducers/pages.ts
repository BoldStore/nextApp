import * as ActionTypes from "../ActionTypes";

const initState = {
  home_loading: false,
  home: null,
  home_errmess: null,

  store: null,
  store_loading: false,
  store_errmess: null,
};

const pagesReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.HOME_PAGE_REQUEST:
      return {
        ...state,
        home_loading: true,
        home_errmess: null,
      };

    case ActionTypes.HOME_PAGE_SUCCESS:
      return {
        ...state,
        home_loading: false,
        home_errmess: null,
        home: action.data,
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
        store_loading: true,
        store_errmess: null,
      };

    case ActionTypes.STORE_PAGE_SUCCESS:
      return {
        ...state,
        store_loading: false,
        store_errmess: null,
        store: action.data,
      };

    case ActionTypes.STORE_PAGE_FAILED:
      return {
        ...state,
        store_loading: false,
        store_errmess: (action?.data?.message || action?.errmess)?.toString(),
      };
    default:
      return state;
  }
};

export default pagesReducer;
