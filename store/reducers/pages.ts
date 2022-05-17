import * as ActionTypes from "../ActionTypes";

const initState = {
  home_loading: false,
  home: null,
  home_errmess: null,
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
        home_errmess: action.data.message,
      };
  }
};

export default pagesReducer;
