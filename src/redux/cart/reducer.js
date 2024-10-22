import {
  ADD_ITEM_TO_CART_FAIL,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  CLEAR_ERROR,
  GET_CART_FAIL,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAIL,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAIL,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./Constant";

const initialState = {
  cart: null,
  loading: false,
  error: null,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.cartItems],
        loading: false,
      };

    case ADD_ITEM_TO_CART_FAIL:
      return { ...state, loading: false, error: action.payload };

    case GET_CART_REQUEST:
      return { ...state, loading: true };

    case GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload.cartItems,
        cart: action.payload,
      };

    case GET_CART_FAIL:
      return { ...state, loading: false, error: action.payload };

    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
      case UPDATE_CART_ITEM_SUCCESS :
        return {
          ...state,
          loading: false,
          message:action.payload.message
        }

    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        loading: false,
      };

    case REMOVE_CART_ITEM_FAIL:
    case UPDATE_CART_ITEM_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
        loading: false,
      };

    default:
      return state;
  }
};
