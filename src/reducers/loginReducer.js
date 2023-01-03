import { actionTypes } from "../actions/actionTypes/loginActionTypes";
const initialState={
    isLoading:false,
    isLogedIn:false,
    errMsg:null,
    username:null

}
const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.IS_LOADING:
            return {...state, isLoading:true}
        case actionTypes.LOGIN_SUCCESSS:
            return {isLoading:false, isLogedIn:true,errMsg:null, username:action.payload}
        case actionTypes.LOGIN_FAILURE:
            return {isLoading:false,isLogedIn:false,errMsg:action.payload}
        default:
            return state
    }

}
export default loginReducer;