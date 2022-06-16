import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  message: null,
  success: null,
  id: null,
};

const testReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.PING_SERVER_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.PING_SERVER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        success: action.data?.success,
        message: action.data?.message,
      };

    case ActionTypes.PING_SERVER_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data?.message,
        success: false,
      };

    case ActionTypes.CHECK_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.CHECK_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        success: action.data?.success,
        message: action.data?.message,
        id: action.data?.id,
      };

    case ActionTypes.CHECK_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data?.message,
        success: false,
      };

    default:
      return state;
  }
};

export default testReducer;
