import { loginActionTypes } from "../actions/actionTypes/loginActionTypes";
const initialState={
    isLoading:false,
    isLogedIn:false,
    errMsg:null,
    username:null

}
const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case loginActionTypes.IS_LOADING:
            return {...state, isLoading:true}
        case loginActionTypes.LOGIN_SUCCESSS:
            return {isLoading:false, isLogedIn:true,errMsg:null, username:action.payload}
        case loginActionTypes.LOGIN_FAILURE:
            return {isLoading:false,isLogedIn:false,errMsg:action.payload}
        case loginActionTypes.LOGOUT:
            return {isLoading:false,isLogedIn:false,errMsg:null,username:null}
        default:
            return state
    }

}
export default loginReducer;