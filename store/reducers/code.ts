import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  code: null,
  createdBy: null,
  createdAt: null,
  isActive: null,
};

const codeReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_INVITE_CODE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.ADD_INVITE_CODE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        code: action.data.code.code,
        createdBy: action.data.code.createdBy,
        createdAt: action.data.code.createdAt,
        isActive: action.data.code.isActive,
      };

    case ActionTypes.ADD_INVITE_CODE_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.data.message,
      };
  }
};

export default codeReducer;
