import {
  CREATE_NEW_USER,
  FORGET_PASSWORD,
  LOGIN_USER,
  VERIFY_PASSWORD,
  RESET_PASSWORD,
  EDIT_USER_DATA,
  EDIT_USER_PASSWORD,
} from "../types";
const initial = {
  newUser: [],
  loginUser: [],
  forgetPassword: [],
  verifyPassword: [],
  resetPassword: [],
  editUserData:[],
  editUserPassword:[],
};
const AuthReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_NEW_USER: {
      return {
        ...state,

        newUser: action.payload,
        loading: false,
      };
    }
    case LOGIN_USER: {
      return {
        ...state,

        loginUser: action.payload,
        loading: false,
      };
    }

    case EDIT_USER_DATA: {
        return {
            ...state,
          editUserData: action.payload,
          loading: false,
        };
      }

      case EDIT_USER_PASSWORD: {
        return {
            ...state,

          editUserPassword: action.payload,
          loading: false,
        };
      }

    case FORGET_PASSWORD: {
      return {
        ...state,

        forgetPassword: action.payload,
        loading: false,
      };
    }

    case VERIFY_PASSWORD: {
      return {
        ...state,

        verifyPassword: action.payload,
        loading: false,
      };
    }

    case RESET_PASSWORD: {
      return {
        ...state,

        resetPassword: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default AuthReducer;
