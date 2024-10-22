
import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig"
import { CLEAR_ERROR, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, LOG_OUT, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";


const token = localStorage.getItem("jwt");
export const register = (userData) =>async (dispatch)=>{
    dispatch({type:REGISTER_REQUEST});
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`,userData);
        const user  = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt",user.jwt);
        }
        dispatch({type:REGISTER_SUCCESS , payload:user.jwt});
        
    } catch (error) {
        console.log(error)
        dispatch({type:REGISTER_FAIL , payload:error.response.data.message});
        
    }
}
export const login = (userData) =>async (dispatch)=>{
    dispatch({type:LOGIN_REQUEST});
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`,userData);
        const user  = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt",user.jwt);
        }
        dispatch({type:LOGIN_SUCCESS , payload:user.jwt});
        
    } catch (error) {
        
        dispatch({type:LOGIN_FAIL ,   payload: error.response?.data?.message ? error.response.data.message : error.message });
        
    }
}
export const loaduser = (jwt ) =>async (dispatch)=>{
    dispatch({type:GET_USER_REQUEST});
    try {
        const response = await axios.get(`${API_BASE_URL}/user/profile`,{
            headers:{
                "Authorization":`Bearer ${jwt}`
            }
        });
        const user  = response.data;
         
        dispatch({type:GET_USER_SUCCESS , payload:user});
        
    } catch (error) {
        dispatch({type:GET_USER_FAIL ,  payload: error.response?.data?.message ? error.response.data.message : error.message });
        
    }
}
export const logout = ( ) =>async (dispatch)=>{
    dispatch({type:LOG_OUT, payload : null});
    localStorage.clear();
    
}
export const clearError = ( ) =>async (dispatch)=>{
    dispatch({type:CLEAR_ERROR, payload : null});
    
}