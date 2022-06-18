import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  success: false,
  errmess: null,
  name: "",
  insta_id: "",
  store: null,
  inviteCode: "",
  update_success: false,
};

const storeReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.INVITE_CODE_STATE:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        inviteCode: action.code,
      };

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
        success: false,
      };

    case ActionTypes.CREATE_STORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        name: action.data.name,
        insta_id: action.data.insta_id,
        success: true,
      };

    case ActionTypes.CREATE_STORE_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: (action.errmess || action.data.message)?.toString(),
        success: false,
      };

    case ActionTypes.SAVE_STORE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
        success: false,
      };

    case ActionTypes.SAVE_STORE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        success: true,
        store: action.data.store,
      };

    case ActionTypes.SAVE_STORE_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: (action.errmess || action.data.message)?.toString(),
        success: false,
      };

    case ActionTypes.UPDATE_STORE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
        update_success: false,
      };

    case ActionTypes.UPDATE_STORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        update_success: true,
      };

    case ActionTypes.UPDATE_STORE_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: (action.errmess || action.data.message)?.toString(),
        update_success: false,
      };
    default:
      return state;
  }
};

export default storeReducer;
