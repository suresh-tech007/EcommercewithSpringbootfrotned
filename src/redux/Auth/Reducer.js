import {
  CLEAR_ERROR,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOG_OUT,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
};
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        jwt: action.payload,
        isLoading: false,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case GET_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
      case CLEAR_ERROR:
        return {
          ...state,
          error : null,
          isLoading: false,
        }

      case LOG_OUT:
        return {...initialState}
    default:
      return state;
  }
};
