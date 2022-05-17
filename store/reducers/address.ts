import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  addresses: null,
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
        errmess: action.data.message,
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
        addresses: [...state.addresses!, action.data.address],
      };

    case ActionTypes.ADD_ADDRESS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data.message,
      };

    case ActionTypes.UPDATE_ADDRESS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        addresses: action.data.addresses,
      };

    case ActionTypes.UPDATE_ADDRESS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data.message,
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
        errmess: action.data.message,
      };
  }
};

export default addressReducer;
