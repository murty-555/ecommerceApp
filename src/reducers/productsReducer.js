import { actionTypes } from "../actions/actionTypes/productsActionTypes";
const initialState={
    isLoading:false,
    productsList: [],
    error: null

}
const productsReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS:
            return {...state, isLoading:true}
        case actionTypes.FETCH_SUCCESS:
            return {isLoading:false,error:null, productsList:action.payload}
        case actionTypes.FETCH_FAILURE:
            return {isLoading:false,error:action.payload,productsList:[]}
        default:
            return state
    }

}
export default productsReducer;