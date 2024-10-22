import { api } from "../../config/apiConfig";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./Constant"

export const createOrderPayment = (orderId) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST });
    
    try {
        // Make sure this api.post points to the correct API endpoint
        const { data } = await api.post(`/api/payments/${orderId}`, {}); 

        // Redirect to the payment link if it's provided
        if (data.payment_link_url) {
            console.log(data)
            window.location.href = data.payment_link_url;
        }
        
    } catch (error) {
        // Handle errors properly
        console.error(error.response?.data?.message || error.message);

        // Dispatch failure action with error message
        dispatch({ 
            type: CREATE_PAYMENT_FAILURE, 
            payload: error.response?.data?.message ? error.response.data.message : error.message 
        });
    }
};


export const updateOrderpayment =(reqData)=>async(dispatch)=>{

    dispatch({type:UPDATE_PAYMENT_REQUEST});
    try {
        const {data} = await api.get(`/api/payment?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

       console.log(data)
       dispatch({type:UPDATE_PAYMENT_SUCCESS ,payload:""})
        
    } catch (error) {
        console.error(error.response?.data?.message || error.message);
     
    dispatch({ type: UPDATE_PAYMENT_FAILURE, payload:error.response?.data ? error.response.data.message : error.message });
        
    }
}