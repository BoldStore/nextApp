import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  addresses: null,
  success: false,
};

const addressReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.USER_ADDRESSES_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.USER_ADDRESSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        addresses: action.data.addresses,
      };

    case ActionTypes.USER_ADDRESSES_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data?.errmess,
      };

    case ActionTypes.ADD_ADDRESS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        addresses: [action.data.address],
        success: true,
      };

    case ActionTypes.ADD_ADDRESS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
        success: false,
      };

    case ActionTypes.UPDATE_ADDRESS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
        success: false,
      };

    case ActionTypes.UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        success: true,
        addresses: [action.data?.address],
      };

    case ActionTypes.UPDATE_ADDRESS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action?.errmess,
        success: false,
      };

    case ActionTypes.DELETE_ADDRESS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        addresses: action.data.addresses,
      };

    case ActionTypes.DELETE_ADDRESS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data?.errmess,
      };
    default:
      return state;
  }
};

export default addressReducer;
