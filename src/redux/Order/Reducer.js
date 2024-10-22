import { CLEAR_ERROR, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FILER, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./Constant";


const initialState = {
    orders:[],
    order:null,
    error:null,
    loading:false,
}

export const orderReducer = (state = initialState,action)=>{
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
                return {
                    ...state,
                    loading:true,
                };
        case CREATE_ORDER_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    success:true,
                    order:action.payload
                };
        case CREATE_ORDER_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:action.payload
                };
        case GET_ORDER_BY_ID_REQUEST:
                return {
                    ...state,
                    loading:true,
                };
    
        case GET_ORDER_BY_ID_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    order:action.payload,
                };
    
        case GET_ORDER_BY_ID_FILER :
            return {
                ...state,
                loading :false,
                error:action.payload
            }
                
            // case GET_ORDER_HISTORY_REQUEST:
            //     return{
            //         ...state,
            //         loading:true,
            //         orders: [],
            //     }
            // case GET_ORDER_HISTORY_SUCCESS:
            //     return{
            //         ...state,
            //         loading:false,
            //         orders:action.payload,
            //     }
            // case GET_ORDER_HISTORY_FAILURE:
            //     return{
            //         ...state,
            //         loading:false,
            //         orders: [],
            //         error:action.payload
            //     }
            case CLEAR_ERROR:
                return {
                  ...state,
                  error : null,
                  loading: false,
                }
        default:
            return  {
                  state}
            ;
    }
}