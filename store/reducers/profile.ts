import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  data: null,
  isStore: false,
  profile_pic: null,
  name: null,
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
        profile_pic: action.data?.data?.profile_pic,
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
    default:
      return state;
  }
};

export default profileReducer;
