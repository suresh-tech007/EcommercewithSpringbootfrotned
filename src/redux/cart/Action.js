import {  createApiInstance } from "../../config/apiConfig";
import { ADD_ITEM_TO_CART_FAIL, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_ERROR, GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAIL, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAIL, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./Constant"

export const getCartRequest = ( ) => async(dispatch)=>{
    dispatch({type:GET_CART_REQUEST})

    try {
        const api = await createApiInstance();
        // const {data} =await api.put(`/api/cart_items/${reqData.cartItemId}`);
        const {data} =await api.get(`/api/cart/`);
        dispatch({type:GET_CART_SUCCESS , payload:data})
        
        
    } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
        dispatch({type:GET_CART_FAIL,payload :  error.response.data.message})
        
    }
}
export const addItemToCart = (reqData)  => async(dispatch)=>{
    dispatch({type:ADD_ITEM_TO_CART_REQUEST})

    try {
        const api = await createApiInstance();
        const {data} =await api.put("api/cart/addItem",reqData);
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS , payload:data})
        
        console.log("add item to cart ");
    } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
        dispatch({type:ADD_ITEM_TO_CART_FAIL,  payload: error.response?.data?.message ? error.response.data.message : error.message })
        
    }
}
export const removeCartItem = (cartItemId) => async(dispatch)=>{
    dispatch({type:REMOVE_CART_ITEM_REQUEST})

    try {
        const api = await createApiInstance();
        const {data} =await api.delete(`/api/cart/${cartItemId}`);
        dispatch({type:REMOVE_CART_ITEM_SUCCESS , payload:data})
        
    } catch (error) {
        dispatch({type:REMOVE_CART_ITEM_FAIL,  payload: error.response?.data?.message ? error.response.data.message : error.message })
        
    }
}
export const updateCartItem = (reqData) => async(dispatch)=>{
    dispatch({type:UPDATE_CART_ITEM_REQUEST})

     
    const id = reqData.CartItemId;
    try {
        const api = await createApiInstance();
        const {data} =await api.put(`/api/cart/${id}`,reqData);
        dispatch({type:UPDATE_CART_ITEM_SUCCESS , payload:data})
        
    } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
        dispatch({type:UPDATE_CART_ITEM_FAIL,  payload: error.response?.data?.message ? error.response.data.message : error.message })
        
    }
}
export const clearError = ( ) =>async (dispatch)=>{
    dispatch({type:CLEAR_ERROR, payload : null});
    
}