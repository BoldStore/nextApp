import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  message: null,
  success: null,
};

const testReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.SEND_MAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.SEND_MAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        success: action.data?.success,
        message: action.data?.message,
      };

    case ActionTypes.SEND_MAIL_FAILED:
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
