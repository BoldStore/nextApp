import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  data: null,
  isStore: false,
  profile_pic: null,
  name: null,
  link_success: false,
};

const profileReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        data: action.data,
        isStore: action.data.isStore,
        profile_pic:
          action.data?.data?.profile_pic ?? action.data?.data?.imgUrl,
        name: action.data?.data?.full_name ?? action.data?.data?.name,
      };

    case ActionTypes.PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action?.errmess,
        data: null,
        isStore: false,
        profile_pic: null,
        name: null,
      };

    case ActionTypes.LINK_REQUEST:
      return {
        ...state,
        errmess: null,
      };

    case ActionTypes.LINK_SUCCESS:
      return {
        ...state,
        link_success: true,
      };

    case ActionTypes.LINK_FAILED:
      return {
        ...state,
        link_success: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
