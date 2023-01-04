import { actionTypes } from "../actions/actionTypes/shopDetailActionTypes";
const initialState={
    isLoading:false,
    product: {},
    error: null

}
const shopDetailsReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SHOP_DETAILS_FETCH:
            return {...state, isLoading:true}
        case actionTypes.SHOP_DETAILS_FETCH_SUCCESS:
            return {isLoading:false,error:null, product:action.payload}
        case actionTypes.SHOP_DETAILS_FETCH_FAILURE:
            return {isLoading:false,error:action.payload,product:[]}
        default:
            return state
    }

}
export default shopDetailsReducer;