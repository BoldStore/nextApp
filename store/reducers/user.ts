import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  name: "",
  insta_id: "",
};

const userReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        name: action.data.name,
        insta_id: action.data.insta_id,
      };

    case ActionTypes.GET_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data.errmess,
      };

    case ActionTypes.CREATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        name: action.data.name,
        insta_id: action.data.insta_id,
      };

    case ActionTypes.CREATE_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data.errmess,
      };
  }
};

export default userReducer;
