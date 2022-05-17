import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  name: "",
  insta_id: "",
};

const storeReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_STORE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.GET_STORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        name: action.data.name,
        insta_id: action.data.insta_id,
      };

    case ActionTypes.GET_STORE_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data.errmess,
      };

    case ActionTypes.CREATE_STORE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.CREATE_STORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        name: action.data.name,
        insta_id: action.data.insta_id,
      };

    case ActionTypes.CREATE_STORE_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data.errmess,
      };
  }
};

export default storeReducer;
