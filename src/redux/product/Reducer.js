import {
  CLEAR_ERROR,
  FIND_PRODUCT_BY_CATEGORY_FAIL,
  FIND_PRODUCT_BY_CATEGORY_REQUEST,
  FIND_PRODUCT_BY_CATEGORY_SUCCESS,
  FIND_PRODUCT_BY_ID_FAIL,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
 
 
} from "./ActionType";

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};
export const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCT_BY_CATEGORY_REQUEST:
    case FIND_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FIND_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case FIND_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };

    case FIND_PRODUCT_BY_CATEGORY_FAIL:
    case FIND_PRODUCT_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
      case CLEAR_ERROR:
        return {
          ...state,
          error : null,
          loading: false,
        }

 
    default:
      return state;
  }
};
