import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  message: null,
  success: null,
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

    default:
      return state;
  }
};

export default testReducer;
