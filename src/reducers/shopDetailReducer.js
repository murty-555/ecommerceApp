import { shopDetailActionTypes } from "../actions/actionTypes/shopDetailActionTypes";
const initialState={
    isLoading:false,
    product: {},
    error: null

}
const shopDetailsReducer=(state=initialState,action)=>{
    switch(action.type){
        case shopDetailActionTypes.SHOP_DETAILS_FETCH:
            return {...state, isLoading:true}
        case shopDetailActionTypes.SHOP_DETAILS_FETCH_SUCCESS:
            return {isLoading:false,error:null, product:action.payload}
        case shopDetailActionTypes.SHOP_DETAILS_FETCH_FAILURE:
            return {isLoading:false,error:action.payload,product:[]}
        default:
            return state
    }

}
export default shopDetailsReducer;