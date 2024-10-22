import axios from "axios";
import { api, API_BASE_URL } from "../../config/apiConfig";
import {
  CLEAR_ERROR,
  FIND_PRODUCT_BY_CATEGORY_FAIL,
  FIND_PRODUCT_BY_CATEGORY_REQUEST,
  FIND_PRODUCT_BY_CATEGORY_SUCCESS,
  FIND_PRODUCT_BY_ID_FAIL,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  
} from "./ActionType";

 
export const findproducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_CATEGORY_REQUEST });
  const {
    colors,
    size,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
 
  try {
    // const {data} = await api.get(`/api/products?category=Dress&color=&size=&minPrice=1&maxPrice=1000000&minDiscount=0&sort=price_low&stock=&pageNumber=0&pageSize=5`)
    const {data} = await api.get(`/api/products?category=${category}&color=${colors}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
    // http://localhost:5454/api/products?category=Dress&color=&size=&minPrice=1&maxPrice=1000000&minDiscount=0&sort=price_low&stock=&pageNumber=0&pageSize=5
     
    dispatch({ type: FIND_PRODUCT_BY_CATEGORY_SUCCESS, payload: data });
     
  } catch (error) {
    
    console.log(error.response.data.message)
     
    dispatch({ type: FIND_PRODUCT_BY_CATEGORY_FAIL, payload:error.response.data ? error.response.data.message : error.message });
  }
};
 
export const findproductsByid = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const {
   productId
  } = reqData;
  console.log("productId " , productId)
  try {
    const {data} = await api.get(`/api/products/${productId}`)
    console.log(data)
     
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    console.log(error)
     
    dispatch({ type: FIND_PRODUCT_BY_ID_FAIL, payload: error.response.data.message });
  }
};
 
export const clearError = ( ) =>async (dispatch)=>{
  dispatch({type:CLEAR_ERROR, payload : null});
  
}