 
import { CLEAR_ERROR, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FILER, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./Constant"
import {  createApiInstance} from "../../config/apiConfig"

export const createOrder = (reqData) => async (dispatch)=>{
    dispatch({type:CREATE_ORDER_REQUEST})
    try {
        const api = await createApiInstance();
        const {data}  = await api.post(
            `/api/orders/create`,reqData.address
        );

        if(data.id){
            reqData.navigate({search : `step=3&order_id=${data.id}`});
        }
        dispatch({
            type:CREATE_ORDER_SUCCESS,
                payload:data
        });
        
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAIL, payload: error.response.data.message });
        
    }
}

export const getOrderById = (orderId) =>async (dispatch)=>{
    
    dispatch({type:GET_ORDER_BY_ID_REQUEST})
    try {
        const api = await createApiInstance();
        const {data} = await api.get(`/api/orders/${orderId}`,)
       
        dispatch({type:GET_ORDER_BY_ID_SUCCESS,payload:data});
        
    } catch (error) {
        dispatch({ type: GET_ORDER_BY_ID_FILER, payload: error.response.data.message });
        
    }
}

export const clearError = ( ) =>async (dispatch)=>{
    dispatch({type:CLEAR_ERROR, payload : null});
    
}